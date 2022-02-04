import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * NOTA: recordar que el @modules es un alias de un path 
 * que se configuró en el archivo tsconfig.json
 */
const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.module').then(m => m.FavoritesModule),
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => m.HistoryModule),
  },
  {
    path: '**',
    redirectTo: 'tracks',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
