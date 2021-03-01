import { Component, Input, OnInit } from '@angular/core';
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

  // @Input() isSelected: boolean;
  selected = null;
  level = null;


  onChangeLevel(value: boolean | number) {
    console.log('asss')
  }
  setSelected(b) {
    console.log(b)
    if (b instanceof HeroRelic) {
      this.selected = b
      this.level = b.curr_level
    }
  }
}
