import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from './data';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  data: { [name: string]: object };


  output = {
    aLevel: 100,
    dLevel: 100,
    PhysArmor: {
      key: 'PhisAbsorb',
      input: 0,
      value: 0
    },
    MageArmor: {
      key: 'MageAbsorb',
      input: 0,
      value: 0
    },
    Crit: {
      key: 'CritChance',
      input: 0,
      value: 0
    },
    Dodge: {
      key: 'DodgeChance',
      input: 0,
      value: 0
    }

  }

  constructor() { }

  form = new FormGroup({
    aLevel: new FormControl(100, [Validators.min(1), Validators.max(100),]),
    dLevel: new FormControl(100, [Validators.min(1), Validators.max(100),]),
    PhysArmor: new FormControl('', [Validators.min(0),]),
    MageArmor: new FormControl('', [Validators.min(0),]),
    Crit: new FormControl('', [Validators.min(0),]),
    Dodge: new FormControl('', [Validators.min(0),]),
  });



  ngOnInit(): void {
    this.data = data;
  }

  showResult(keyString: string) {
    if (this.form.valid)
      for (let [key, value] of Object.entries(this.form.getRawValue())) {
        // console.log(value)
        if (value !== null) {
          typeof this.output[`${key}`] === "object"
            ? this.output[`${key}`]['input'] = value
            : this.output[`${key}`] = value


          if (key === "PhysArmor" || key === "MageArmor") {
            this.output[`${key}`]['value'] = this.calculateArmor(key)
          }
          if (key === "Dodge") {
            this.output[`${key}`]['value'] = this.cacalculateDodge("Dodge")
          }
          if (key === "Crit") {
            this.output[`${key}`]['value'] = this.calculateCrit("Crit")
          }
        }
      }
    // console.log(this.output)
    return this.getValue(keyString)


  }

  calculateArmor(stat: string) {
    return +((1 - this.data[`${stat}`][this.output.aLevel] / (this.data[`${stat}`][this.output.dLevel] + this.output[`${stat}`].input)) * 100).toFixed(2)
  }

  calculateCrit(stat: string) {
    return +((1 - this.data[`${stat}`][this.output.dLevel] / (this.data[`${stat}`][this.output.aLevel] + this.output[`${stat}`].input)) * 100).toFixed(2)
  }

  cacalculateDodge(stat: string = "Dodge") {

    let crirPart = 1 - this.data["Crit"][this.output.aLevel] / (this.data["Crit"][this.output.dLevel] + this.output["Dodge"].input);
    return +((1 - this.data["Dodge"][this.output.aLevel] / (this.data["Dodge"][this.output.dLevel] + this.output["Dodge"].input * crirPart)) * 100).toFixed(2)
  }



  getArrayFromOby() {
    //return ["PhysArmor", "MageArmor", "Crit", "Dodge"], terrifying
    return Object.keys(this.output).splice(2)
  }

  getValue(key: string) {
    // console.log(this.output)
    return this.output[`${key}`].value
      ? (this.output[`${key}`].value > 0
        ? this.output[`${key}`].value
        : 0)
      : ""
  }

}
