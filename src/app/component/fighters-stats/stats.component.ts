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
      key: 'Снижение физического урона противника',
      input: 0,
      value: 0
    },
    MageArmor: {
      key: 'Снижение магического урона противника',
      input: 0,
      value: 0
    },
    Crit: {
      key: 'Шанс критического(двойного*) урона по противнику',
      input: 0,
      value: 0
    },
    Dodge: {
      key: 'Шанс противника увернуться',
      input: 0,
      value: 0
    }

  }

  constructor() { }




  form = new FormGroup({
    aLevel: new FormControl('', [Validators.min(1), Validators.max(100),]),

    dLevel: new FormControl('', [Validators.min(1), Validators.max(100),]),
    PhysArmor: new FormControl('', [Validators.min(0),]),
    MageArmor: new FormControl('', [Validators.min(0),]),
    Crit: new FormControl('', [Validators.min(0),]),
    Dodge: new FormControl('', [Validators.min(0),]),
  });



  ngOnInit(): void {
    this.data = data;
    // console.log(this.data)
    // console.log(Object.keys(data.hidden_dodge))
    this.form.setValue({
      aLevel: 100,
      dLevel: 100,
      PhysArmor: 0,
      MageArmor: 0,
      Crit: 0,
      Dodge: 0
    })
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
    return Object.keys(this.output).splice(2)
  }

  getValue(key: string) {
    // console.log("111 " + this.output[`${key}`].value)

    return this.output[`${key}`].value ? (this.output[`${key}`].key + " " + [this.output[`${key}`].value > 0 ? this.output[`${key}`].value : 0] + "%") : ""
  }

}
