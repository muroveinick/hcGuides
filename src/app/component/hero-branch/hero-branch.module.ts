import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBranchComponent } from './hero-branch.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
  ],
  exports: [HeroRelic, HeroBranchComponent],
  declarations: [HeroBranchComponent, HeroRelic]
})
export class HeroBranchModule { }