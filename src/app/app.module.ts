import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeroBranchModule } from './component/hero-branch/hero-branch.module';
import { HeroComponent } from './component/hero/hero.component';
import { HeroModule } from './component/hero/hero.module';

import { CalcComponent } from './component/calc/calc.component';
import { StatsComponent } from './component/fighters-stats/stats.component';


const appRoutes: Routes = [
  { path: 'portal', component: CalcComponent },
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'stats', component: StatsComponent },
];
const MAT_UI_MODULES = [
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [AppComponent, CalcComponent, StatsComponent],
  imports: [
    HeroBranchModule,
    HeroModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    MAT_UI_MODULES,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
