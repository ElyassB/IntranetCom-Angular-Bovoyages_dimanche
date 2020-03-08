import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';

const routes: Routes = [
  {path: 'pageaccueil', component: PageaccueilComponent},
  {path: 'authentification-form', component: AuthentificationFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
