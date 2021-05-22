import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { HeroComponent } from "./hero.component"
import { HeroRelic } from '../../comlex-comps/hero-relic/hero-relic.component';
import { HeroBranchComponent } from '../../comlex-comps/hero-branch/hero-branch.component';
import { RelicDialog } from '../../comlex-comps/relic-dialog/relic-dialog.component';




const appRoutes: Routes = [{ path: 'hero', component: HeroComponent },]

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    MatDialogModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [HeroBranchComponent, HeroRelic, RelicDialog],
  declarations: [HeroComponent, HeroBranchComponent, HeroRelic, RelicDialog]
})
export class HeroModule { }