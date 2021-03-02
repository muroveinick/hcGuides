import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';
import { relicView } from 'src/app/data/_var_hero';

@Component({
  selector: 'hero-branch',
  templateUrl: './hero-branch.component.html',
  styleUrls: ['./hero-branch.component.scss']
})
export class HeroBranchComponent implements OnInit {

  constructor() {
  }


  @Output() selectedElem = new EventEmitter<HeroRelic>();
  @Input() relics: relicView[];

  ngOnInit(): void {
  }

  //selected relic + its level
  level: number = null;
  elem = null;


  setSelectedElem(elem: HeroRelic) {
    if (elem) {
      this.elem = elem
      this.level = elem.curr_level;
      this.selectedElem.emit(elem)
    }
  }

}

