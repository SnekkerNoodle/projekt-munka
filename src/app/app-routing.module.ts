import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "./pages/blog/blog.component";
import { MainComponent } from "./pages/main/main.component";
import { SampleMusicComponent } from "./pages/sample-music/sample-music.component";
import { RegisterComponent } from "./pages/register/register.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: 'blog', component: BlogComponent},
    {path: 'main', component: MainComponent},
    {path: 'sample-music', component: SampleMusicComponent},
    {path: 'register', component: RegisterComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
