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
    isStartedSouls: false,
  };

  form = new FormGroup({
    portalLevel: new FormControl('', [Validators.min(1), Validators.max(125),]),
    goalSouls: new FormControl('', [Validators.min(100), Validators.max(1250000000), Validators.pattern(/\d{1,}/),]),
    startedSouls: new FormControl('', [Validators.min(0), Validators.max(1250000000), Validators.pattern(/\d{1,}/),]),
    hunters: new FormControl('', []),
    banner: new FormControl('', []),
    multiply: new FormControl('', [])
  });

  ngOnInit(): void {
    this.form.setValue({
      portalLevel: 80,
      goalSouls: 70000,
      startedSouls: 0,
      hunters: 1,
      banner: 1,
      multiply: 1
    });

    this.form.valueChanges.subscribe((r) => this.showResult())

    this.showResult()
  }

  showResult() {
    let requiredApples: number;
    let finalData: any = this.form.getRawValue();

    if (this.form.valid) {
      requiredApples =
        Math.ceil(
          (finalData.goalSouls -
            (finalData.startedSouls && this.default.isStartedSouls ? finalData.startedSouls : 0)) /
          (data.souls[`${finalData.portalLevel}`] *
            (finalData.banner ? finalData.banner : 1) *
            (finalData.hunters ? finalData.hunters : 1)
            + data.souls[`${finalData.portalLevel}`] * (finalData.multiply - 1))
        ) * data.apples[`${finalData.portalLevel}`];

      if (finalData.startedSouls > finalData.goalSouls) {
        this.res = ["Уже хватает😀"];
        return
      }
      if (!finalData.portalLevel) {
        return
      }

      this.res = [`Яблок на ${finalData.portalLevel < 81 ? "Тёмные души" : "Очень тёмные души"}`,
      this.formatToSepString(requiredApples),
        "потребуется",
      Math.trunc(requiredApples / data.apples[`${finalData.portalLevel}`]),
        "заходов"]
    } else {
      this.res = ['¯\\_(ツ)_/¯'];
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

