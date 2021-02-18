import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './component/calc/calc.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './component/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { StatsComponent } from './component/stats/stats.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HeroTalentComponent } from './component/comlex-comps/hero-talent/hero-talent.component';
import { TestModule } from './component/test/test.module';


const appRoutes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: '', redirectTo: '/calc', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
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
  declarations: [AppComponent, CalcComponent, StatsComponent, HeroTalentComponent],
  imports: [
    TestModule,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
