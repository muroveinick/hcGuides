
import { Component, Inject } from '@angular/core';
import { relicView } from "../../../data/_var_hero"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  title: string = "";


  ngOnInit() {
    this.changeDesc()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  onChangeLevel(value: number) {
    console.log(this.RelicData)
    if (typeof value === "number") {
      value < 0 ? value = 0 : value > this.RelicData.type.levels ? value = this.RelicData.type.levels : null
      this.RelicData.curr_level = value;
    }
    this.changeDesc();
  }

  changeDesc() {
    console.log(this.RelicData)

    let new_title = this.translate.instant('description.' + this.RelicData.description);
    let reg = new_title.match(/{}/g);
    reg.forEach((element: string, index: number) => {
      let var_from_template = (this.RelicData.variables ? this.RelicData.variables[index][this.RelicData.curr_level - 1] : '{}') ?? 0;
      new_title = new_title.replace(element, `<b>${var_from_template}</b>`)
    });
    this.title = new_title;
  }
}
