import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EventRoadmapComponent } from './event-roadmap.component';

const routes: Routes = [
  { path: '', component: EventRoadmapComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [EventRoadmapComponent],
})
export class EventRoadmapModule { }
