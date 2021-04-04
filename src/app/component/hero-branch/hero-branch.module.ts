import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBranchComponent } from './hero-branch.component';
import { MatIconModule } from '@angular/material/icon';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';
import { RelicDialog } from '../comlex-comps/relic-dialog/relic-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    TranslateModule,
    MatDialogModule
  ],
  exports: [HeroRelic, HeroBranchComponent. RelicDialog],
  declarations: [HeroBranchComponent, HeroRelic, RelicDialog]
})
export class HeroBranchModule { }