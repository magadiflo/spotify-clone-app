import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { SharedModule } from '@shared/shared.module';

import { TracksComponent } from './pages/tracks/tracks.component';


@NgModule({
  declarations: [
    TracksComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule,
  ]
})
export class TracksModule { }
