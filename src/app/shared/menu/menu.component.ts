import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ElementRef } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from "rxjs";
import { CommonModule } from '@angular/common';
import { DatabaseService } from '../../database.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, CommonModule, RouterLink,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  hid!:boolean;
  menu:boolean = false
  menuPlace:string = "invincible";
  readonly breakpoint$ = this.breakpointObserver
  .observe(['(max-width: 900px)','(min-width: 900px)'])
  .pipe(
    tap(value => console.log(value)),
    distinctUntilChanged()
  );

  constructor(private breakpointObserver: BreakpointObserver, ) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  menuMove(){
    if (!this.menu) {
      this.menuPlace="visible"
      this.menu=(!this.menu)
    } else{
      this.menuPlace="invincible"
      this.menu=(!this.menu)
    }
  }

  @Output() selectedPage: EventEmitter<string> = new EventEmitter;

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched('(max-width: 900px)')) {
      this.hid=false
    } else if (this.breakpointObserver.isMatched('(min-width: 900px)')) {
      this.hid=true
    }
  }
}
