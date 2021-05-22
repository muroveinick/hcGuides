
import { Component, Inject } from '@angular/core';
import { relicView } from "../../../data/_var_hero"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { relics } from '../../calculators/hero/_data';

@Component({
  selector: 'relic-dialog',
  templateUrl: './relic-dialog.component.html',
  styleUrls: ['./relic-dialog.component.scss']
})
export class RelicDialog {

  constructor(
    public dialogRef: MatDialogRef<RelicDialog>,
    @Inject(MAT_DIALOG_DATA) public RelicData: relicView,
  ) { }

  title = this.RelicData.description

  onNoClick(): void {
    this.dialogRef.close();
  }


  onChangeLevel(value: number) {
    if (typeof value === "number") {
      value < 0 ? value = 0 : value > this.RelicData.type.levels ? value = this.RelicData.type.levels : null
      this.RelicData.curr_level = value;
      relics[this.RelicData.logo.match(/warrior/) ? 0 : this.RelicData.logo.match(/mage/) ? 1 : 2].data[this.RelicData.id].curr_level = value
    }
  }

}