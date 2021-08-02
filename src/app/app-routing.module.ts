import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      import('./component/comlex-comps/list/list.module').then(
        (m) => m.ListModule
      ),
  },
  {
    path: 'guides',
    loadChildren: () =>
      import('./component/guides/guides.module').then(
        (m) => m.GuidesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
