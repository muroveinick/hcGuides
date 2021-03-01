import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';


import { HeroBranchModule } from "../hero-branch/hero-branch.module"

import { HeroComponent } from "./hero.component"


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    HeroBranchModule
  ],
  exports: [],
  declarations: [HeroComponent]
})
export class HeroModule { }