import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DrinksComponent } from './drinks/drinks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'drinks',
    component: DrinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
