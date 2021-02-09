import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { data } from './data';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit {
  constructor() {}
  data: any;
  default = "qq"

  ngOnInit(): void {
    
    this.data = data;

    console.log(this.data.hunters || 'asda');

  }
  emailFormControl = new FormControl('', [
    Validators.min(1),
    Validators.max(125),
    Validators.pattern(/\d{1,3}/)
  ]);

  checkkValid(level: any) {
    console.log(`${!!level} +" wqw"+ ${typeof +level === 'number'} +" "+  ${(level <= 125) }+"   "+  ${(level > 0)}`)
    return !!level && typeof +level === 'number' && (level <= 125) && (level > 0);
  }
}
