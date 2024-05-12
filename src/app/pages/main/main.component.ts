import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from "rxjs";
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, FormsModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  readonly breakpoint$ = this.breakpointObserver
  .observe(['(max-width: 900px)','(min-width: 900px)'])
  .pipe(
    tap(value => console.log(value)),
    distinctUntilChanged()
  );
textPlace:string = "desktop";

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched('(max-width: 900px)')) {
      this.textPlace="mobile"
    } else if (this.breakpointObserver.isMatched('(min-width: 900px)')) {
      this.textPlace="desktop"
    }
  }

  fontStyleControl = new FormControl('');
  fontStyle!: string;
  currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.fontStyle == "italic" ? 'italic' : 'bold',
      'font-weight': this.fontStyle == "bold" ? 'bold' : 'normal',
      'text-decoration': this.fontStyle == "underline" ? 'underline' : 'none',
    };
  }
}
