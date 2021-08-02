import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';



import { GuidesComponent } from './guides.component';

const routes: Routes = [
  { path: '', component: GuidesComponent },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [GuidesComponent],
})
export class GuidesModule { }
