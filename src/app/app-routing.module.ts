import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  // { path: 'article', component: ListComponent },
  {
    path: 'calculators',
    loadChildren: () =>
      import('./component/calculators/calculators.module').then(
        (m) => m.CalculatorsModule
      ),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./component/list/list.module').then(
        (m) => m.ListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
