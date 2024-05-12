import { Component, ElementRef } from '@angular/core';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import { OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from "rxjs";
import { TruncatePipe } from "./truncate.pipe";

@Component({
    selector: 'app-sample-music',
    standalone: true,
    templateUrl: './sample-music.component.html',
    styleUrl: './sample-music.component.css',
    imports: [MatGridListModule, TruncatePipe]
})
export class SampleMusicComponent implements OnInit{
  cols:number = 2;
  readonly breakpoint$ = this.breakpointObserver
    .observe(['(max-width: 900px)','(min-width: 900px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }
  private breakpointChanged() {
    if(this.breakpointObserver.isMatched('(max-width: 900px)')) {
      this.cols=1;
    } else if (this.breakpointObserver.isMatched('(min-width: 900px)')) {
      this.cols=2;
    }
  }
}

