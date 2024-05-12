import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'projekt-munka';
  page = 'main';

  changePage(selectedPage:string){
    this.router.navigate([selectedPage]);
  }

  constructor(private router: Router) {

  }
}