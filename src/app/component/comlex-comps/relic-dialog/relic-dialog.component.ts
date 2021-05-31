
import { Component, Inject } from '@angular/core';
import { relicView } from "../../../data/_var_hero"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { relics } from '../../calculators/hero/_data';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'relic-dialog',
  templateUrl: './relic-dialog.component.html',
  styleUrls: ['./relic-dialog.component.scss']
})
export class RelicDialog {

  constructor(
    public dialogRef: MatDialogRef<RelicDialog>,
    @Inject(MAT_DIALOG_DATA) public RelicData: relicView,
    public translate: TranslateService
  ) { }

  title = this.translate.instant('description.' + this.RelicData.description)


  ngOnInit() {
    this.translate.instant('description.' + this.RelicData.description).match(/{}/g).forEach((element, index) => {
      this.title.replace(element, this.RelicData.variables[index][this.RelicData.curr_level])
    });
    console.log(this.title)
  }

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