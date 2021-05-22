import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';
import { HeroRelic } from '../hero-relic/hero-relic.component';
import { relicView } from 'src/app/data/_var_hero';

@Component({
  selector: 'hero-branch',
  templateUrl: './hero-branch.component.html',
  styleUrls: ['./hero-branch.component.scss']
})
export class HeroBranchComponent implements OnInit {
  static RelicDialog: any[] | Type<any>;

  constructor() { }


  @Output() selectedElem = new EventEmitter<HeroRelic>();
  @Input() relics: relicView[];

  ngOnInit(): void {
  }

  //selected relic + its level
  level: number = null;
  elem = null;



  relics_tree = [
    { cont_type: "cont1", ids: [0, 1, 2] },
    { cont_type: "cont2", ids: [3, 4] },
    { cont_type: "cont3", ids: [5, 6, 7] },
    { cont_type: "cont4", ids: [8, 9, 10, 11] },
    { cont_type: "cont3", ids: [12, 13, 14] },
    { cont_type: "cont4", ids: [15, 16, 17, 18] },
    { cont_type: "cont5", ids: [19, 20, 21, 22] },
    { cont_type: "cont5", ids: [23, 24, 25, 26] },
    { cont_type: "", ids: [27] },
  ]


  setSelectedElem(elem: HeroRelic) {
    if (elem) {
      this.elem = elem
      this.level = elem.RelicData.curr_level;
      this.selectedElem.emit(elem)
    }
  }

}

