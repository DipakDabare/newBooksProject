import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MybooksComponent } from './mybooks/mybooks.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"welcome",
    component:WelcomePageComponent
  },
  {
    path:"mybooks",
    component:MybooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
