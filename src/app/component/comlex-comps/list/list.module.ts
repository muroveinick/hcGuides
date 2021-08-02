import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';



import { ListComponent } from './list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':id', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations: [ListComponent],
})
export class ListModule { }
