import { Component, Input, OnInit, Output } from '@angular/core';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';

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
  @Output() level = null;


  onChangeLevel(value: boolean | number) {


    if (this.selectedELem) {

      if (value === true && this.level < this.selectedELem.type.levels) {
        this.level++
        this.selectedELem.curr_level++
      } else if (value === false && this.level > 0) {
        this.level--
        this.selectedELem.curr_level--
      }

      if (typeof value === "number") {
        value < 0 ? value = 0 : value > this.selectedELem.type.levels ? value = this.selectedELem.type.levels : null
        this.level = value;
        this.selectedELem.curr_level = value
      }

    }

    // console.log(this.level)

  }
  setSelected(relic: HeroRelic) {
    if (relic) {
      this.selectedELem = relic
      this.level = relic.curr_level
    }
  }
}
