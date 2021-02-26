import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './component/calc/calc.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './component/hero-stats/hero-stats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { StatsComponent } from './component/fighters-stats/stats.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeroModule } from './component/hero-stats/hero-stats.module';
import { HeroRelic } from './component/comlex-comps/hero-relic/hero-relic.component';


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
];

@NgModule({
  declarations: [AppComponent, CalcComponent, StatsComponent],
  imports: [
    HeroModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MAT_UI_MODULES,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
