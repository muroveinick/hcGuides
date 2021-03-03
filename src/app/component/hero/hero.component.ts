import { Component, OnInit, Output } from '@angular/core';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';
import { T14, T10, A, P } from "../../data/_var_power"
import { relics } from "./_data"

@Component({
  selector: 'hero-comp',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedELem = null;


  onChangeLevel(value: boolean | number) {
    if (this.selectedELem) {

      if (value === true && this.selectedELem.curr_level < this.selectedELem.type.levels) {
        this.selectedELem.curr_level++;
        relics[this.selectedELem.logo.match(/warrior/) ? 0 : this.selectedELem.logo.match(/archer/) ? 1 : 2].data[this.selectedELem.id].curr_level++;

      } else if (value === false && this.selectedELem.curr_level > 0) {
        this.selectedELem.curr_level--;
        relics[this.selectedELem.logo.match(/warrior/) ? 0 : this.selectedELem.logo.match(/archer/) ? 1 : 2].data[this.selectedELem.id].curr_level--;
      }

      if (typeof value === "number") {
        value < 0 ? value = 0 : value > this.selectedELem.type.levels ? value = this.selectedELem.type.levels : null
        this.selectedELem.curr_level = value;
        relics[this.selectedELem.logo.match(/warrior/) ? 0 : this.selectedELem.logo.match(/archer/) ? 1 : 2].data[this.selectedELem.id].curr_level = +value
      }

    }
    console.log(this.selectedELem)
  }


  setSelected(relic: HeroRelic) {
    if (relic) {
      this.selectedELem = relic
      this.selectedELem.curr_level = relic.curr_level
    }
  }


  showHeroPower() {
    //TODO переделать вызов
    // console.log(relics[0].data)
    let res = 0, pass_res = 0;

    relics.forEach(branch => branch.data.forEach(i => {
      let curr = i.type.r === 40 ? A : i.type.r === 35 ? P : i.type.r === 30 && i.type.levels === 10 ? T10 : T14;
      if (curr === T10 || curr === T14) {
        pass_res += curr[i.curr_level].power;
      }
      res += curr[i.curr_level].power;
      // console.log(res)
    }))
    return [res, pass_res]
  }


  getData() {
    return relics;
  }

  getRelicsToView() {
    return relics.reduce((sum, curr) => sum.concat(curr.data), []).filter(i => i.type.r > 30).sort((a, b) => a.type.r < b.type.r ? 1 : -1);
    // console.log(a)
    // return relics[0].data.filter(i => i.type.r > 30).sort((a, b) => a.type.r < b.type.r ? 1 : -1);
  }
}
