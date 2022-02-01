import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksComponent } from './pages/tracks/tracks.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TracksComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
