import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('./component/calculators/hero/hero.module')
      .then(m => m.HeroModule)
  },
  // { path: 'article', component: ListComponent },
  {
    path: 'calculators',
    loadChildren: () => import('./component/calculators/calculators.module')
      .then(m => m.CalculatorsModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
