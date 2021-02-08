import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';





const appRoutes: Routes = [
  { path: 'calc', component: CalcComponent },
  { path: '', redirectTo: '/calc', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [AppComponent, CalcComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
