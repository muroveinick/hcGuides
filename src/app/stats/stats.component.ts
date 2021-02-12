import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from './data';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  data: object;
  default: {
    aLevel: 100,
    aPhysArmor: 0,
    aMageArmor: 0,
    aCrit: 0,
    aDodge: 0,
    dLevel: 100,
    dPhysArmor: 0,
    dMageArmor: 0,
    dCrit: 0,
    dDodge: 0,
  }

  options: string[] = ['One', 'Two', 'Three'];
  levels: string[] = Object.keys(data.hidden_dodge)

  constructor() { }

  ngOnInit(): void {
    this.data = data;
    console.log(this.data)
    // console.log(Object.keys(data.hidden_dodge))
  }


  form = new FormGroup({
    aLevel: new FormControl('', []),
    goalSouls: new FormControl('', [
      Validators.min(100),
      Validators.max(1250000000),
      Validators.pattern(/\d{1,}/),
    ]),
    startedSouls: new FormControl('', [
      Validators.min(100),
      Validators.max(1250000000),
      Validators.pattern(/\d{1,}/),
    ]),
  });





}
