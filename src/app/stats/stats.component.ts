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
    aPhysArmor: 0,
    aMageArmor: 0,
    aCrit: 0,
    aDodge: 0,
    /////
    dPhysArmor: 0,
    dMageArmor: 0,
    dCrit: 0,
    dDodge: 0,
  }

  // options: string[] = ['One', 'Two', 'Three'];
  // levels: string[] = Object.keys(data.hidden_dodge)

  constructor() { }




  form = new FormGroup({
    aLevel: new FormControl('', [Validators.min(1), Validators.max(100),]),
    dLevel: new FormControl('', [Validators.min(1), Validators.max(100),]),
    dMageArmor: new FormControl('', [Validators.min(0),]),
    dPhysArmor: new FormControl('', [Validators.min(0),]),
    dCrit: new FormControl('', [Validators.min(0),]),
    dDodge: new FormControl('', [Validators.min(0),]),
  });



  ngOnInit(): void {
    this.data = data;
    console.log(this.data)
    // console.log(Object.keys(data.hidden_dodge))
    this.form.setValue({
      aLevel: 100,
      dLevel: 100,
      dPhysArmor: 0,
      dMageArmor: 0,
      dCrit: 0,
      dDodge: 0
    })
  }

  showResult() {
    let data = this.form.getRawValue()
    let res: object[] =[];
    // console.log(this.form.getRawValue())
    // if (data.dPhysArmor)
    // res.push({})
    for (let controlValue in data) {
      if (data[controlValue]) res.push({ controlValue : data[controlValue] })
    }
    console.log(res)
  }

}
