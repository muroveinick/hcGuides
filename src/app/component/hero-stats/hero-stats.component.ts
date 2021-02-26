import { Component, OnInit } from '@angular/core';
import { relics } from "./_data"

@Component({
  selector: 'hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() {
  }

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


  onChangeLevel(elem, change: boolean) {
    // console.log(elem)
    // console.log(change)
    if (elem) {
      this.elem = elem
      this.level = elem.curr_level;
    }

    if (this.elem) {
      if (change === true && this.level < this.elem.type.levels) {
        this.level++
        relics[+this.elem.id].curr_level++
      } else if (change === false && this.level > 0) {
        this.level--
        relics[+this.elem.id].curr_level--
      }

      this.setProgressBar()
    }

  }

}

