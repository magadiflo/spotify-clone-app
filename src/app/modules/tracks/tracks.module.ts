import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './pages/tracks/tracks.component';


@NgModule({
  declarations: [
    TracksComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
  ]
})
export class TracksModule { }
