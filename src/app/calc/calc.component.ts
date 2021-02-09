import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { data } from './data';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
  constructor() {}
  data: any;
  default = {
    level: 80,
    startedSouls: 100,
    startedDarkerSouls: 100,
    goalSouls: 70000,
    banner: 0,
    hunters: 0,
    multiply: 1,
    isStartedSouls: false,
  };

  ngOnInit(): void {
    this.data = data;

    console.log(this.data.hunters || 'asda');
  }

  form = new FormGroup({
    portalLevel: new FormControl('', [
      Validators.min(1),
      Validators.max(125),
      Validators.pattern(/^\d{1,3}$/),
    ]),
    goalSouls: new FormControl('', [
      Validators.min(100),
      Validators.max(1250000000),
      Validators.pattern(/\d{1,}/),
    ]),
    startedSoul: new FormControl('', [
      Validators.min(100),
      Validators.max(1250000000),
      Validators.pattern(/\d{1,}/),
    ]),
    startedDarkerSouls: new FormControl('', [
      Validators.min(100),
      Validators.max(1250000000),
      Validators.pattern(/\d{1,}/),
    ]),
  });

  checkkValid(level: any) {
    // console.log(
    //   `${!!level} +" wqw"+ ${typeof +level === 'number'} +" "+  ${
    //     level <= 125
    //   }+"   "+  ${level > 0}`
    // );
    return !!level && typeof +level === 'number' && level <= 125 && level > 0;
  }

  showResult() {
    console.log(this.form.getRawValue(), this.form.valid);
    let requiredApples: number;

    if (this.form.valid) {
      requiredApples =
        (this.default.goalSouls /
          (this.data.souls[`${this.default.level}`] *
          this.default.multiply *
          this.default.banner
            ? this.default.banner + 1
            : 1)) *
        this.data.apples[`${this.default.level}`];
    }

    return this.form.valid && this.default.level
      ? this.default.level < 81
        ? `Яблок на нижний портал ${Math.trunc(
            requiredApples
          )}, потребуется ${Math.trunc(
            requiredApples / this.data.apples[`${this.default.level}`]
          )} заходов`
        : `Яблок на верхний портал ${Math.trunc(
            requiredApples
          )}, потребуется ${Math.trunc(
            requiredApples / this.data.apples[`${this.default.level}`]
          )} заходов`
      : '¯\\_(ツ)_/¯';
  }
}
