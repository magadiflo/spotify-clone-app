import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FavoritesComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
