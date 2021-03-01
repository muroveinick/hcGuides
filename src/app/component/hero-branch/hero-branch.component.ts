import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { relics } from "./_data"
import { T14, T10, A, P } from "../../data/_var_power"
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';

@Component({
  selector: 'hero-branch',
  templateUrl: './hero-branch.component.html',
  styleUrls: ['./hero-branch.component.scss']
})
export class HeroBranchComponent implements OnInit {

  constructor() {
  }


  @Output() selectedElem = new EventEmitter<HeroRelic>();
  @Output() selectedLevel = new EventEmitter<number>();



  ngOnInit(): void {
  }

  //selected relic + its level
  level: number = null;
  elem = null;

  getData() {
    return relics;
  }

  setProgressBar() {
    let bar = this.elem.elRef.nativeElement.querySelector(".bar")
    // console.log(">>>>>   " + bar)
    bar.setAttribute('style', `stroke-dashoffset: ${bar.getAttribute('r') * 2 * Math.PI * (this.elem.type.levels - this.level) / this.elem.type.levels}px`)
  }


  onChangeLevel(change: boolean | number) {
    console.log(typeof change)

    if (this.elem) {

      if (change === true && this.level < this.elem.type.levels) {
        this.level++
        relics[+this.elem.id].curr_level++
      } else if (change === false && this.level > 0) {
        this.level--
        relics[+this.elem.id].curr_level--
      }

      if (typeof change === "number") {
        change < 0 ? change = 0 : change > relics[+this.elem.id].type.levels ? change = relics[+this.elem.id].type.levels : null
        this.level = change;
        relics[+this.elem.id].curr_level = change
      }
      this.selectedLevel.emit(this.level)

      this.setProgressBar()
    }

  }

  showHeroPower() {
    //TODO переделать вызов
    let res = 0, pass_res = 0;

    relics.forEach(i => {
      let curr = i.type.r === 40 ? A : i.type.r === 35 ? P : i.type.r === 30 && i.type.levels === 10 ? T10 : T14;
      if (curr === T10 || curr === T14) {
        pass_res += curr[i.curr_level].power;
      }
      res += curr[i.curr_level].power;
      // console.log(res)
    })
    return [res, pass_res]
  }

  setSelectedElem(elem: HeroRelic) {
    if (elem) {
      this.elem = elem
      this.level = elem.curr_level;
      this.selectedElem.emit(elem)
    }
  }

}

