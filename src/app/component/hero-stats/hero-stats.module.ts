import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRelic, TestComponent } from './hero-stats.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [TestComponent, HeroRelic]
})
export class TestModule { }