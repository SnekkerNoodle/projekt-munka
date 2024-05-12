import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { SampleMusicComponent } from './pages/sample-music/sample-music.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogComponent,MainComponent,RegisterComponent,SampleMusicComponent,
    MenuComponent,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'projekt-munka';
  page = 'main';

  changePage(selectedPage:string){
    this.page = selectedPage
  }
}