import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { data } from './data';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})


export class CalcComponent implements OnInit {
  constructor() { }
  res: any = [];

  default = {
    isStartedSouls: true,
  };

  form = new FormGroup({
    portalLevel: new FormControl(80, [Validators.min(1), Validators.max(125),]),
    goalSouls: new FormControl(70000, [Validators.min(100), Validators.max(1250000000), Validators.pattern(/^\d+$/),]),
    startedSouls: new FormControl(0, [Validators.min(0), Validators.max(1250000000), Validators.pattern(/^\d+$/),]),
    hunters: new FormControl(1, []),
    banner: new FormControl(1, []),
    multiply: new FormControl(1, [])
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe((r) => this.showResult())
    this.showResult();
  }

  showResult() {
    let requiredApples: number;
    let finalData: any = this.form.getRawValue();
    // console.log(finalData)

    if (this.form.valid && !!finalData.goalSouls) {
      requiredApples =
        Math.ceil(
          (finalData.goalSouls -
            (finalData.startedSouls && this.default.isStartedSouls ? finalData.startedSouls : 0)) /
          (data.souls[`${finalData.portalLevel}`] *
            (finalData.banner ? finalData.banner : 1) *
            (finalData.hunters ? finalData.hunters : 1)
            + data.souls[`${finalData.portalLevel}`] * (finalData.multiply - 1))
        ) * data.apples[`${finalData.portalLevel}`];

      if (finalData.startedSouls >= finalData.goalSouls) {
        this.res = ["Result5"];//i18n
        return
      }
      if (!finalData.portalLevel) {
        return
      }

      this.res = [
        `${finalData.portalLevel < 81 ? "Result1" : "Result2"}`,//i18n
        this.formatToSepString(requiredApples),
        Math.trunc(requiredApples / data.apples[`${finalData.portalLevel}`]),
      ]
    } else {
      this.res = ['Result6'];//i18n
    }
  }

  formatToSepString(number: number) {
    return number
      .toString()
      .split('')
      .reverse()
      .join('')
      .match(/\d{1,3}/g)
      .reverse()
      .map((i) => i.split('').reverse().join(''))
      .join('.');
  }

  getData() {
    return data;
  }
}

