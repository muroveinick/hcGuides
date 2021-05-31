import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { CalcComponent } from './portal/calc.component';
import { StatsComponent } from './fighters-stats/stats.component';
import { CalculatorsComponent } from './calculators.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';
import { HeroModule } from './hero/hero.module';

const MAT_UI_MODULES = [
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
  FormsModule,
];

const routes: Routes = [
  { path: '', component: CalculatorsComponent },
  {
    path: '',
    children: [
      { path: 'fighter', component: StatsComponent },
      { path: 'portal', component: CalcComponent },
      { path: 'hero', component: HeroComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MAT_UI_MODULES,
    TranslateModule,
    CommonModule,
    HeroModule,
  ],
  exports: [RouterModule, CalcComponent, StatsComponent, HeroModule],
  declarations: [CalculatorsComponent, CalcComponent, StatsComponent],
})
export class CalculatorsModule {}
