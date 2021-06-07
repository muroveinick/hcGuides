import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss']
})
export class CalculatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calcs_data = [{
    name: 'Hero', desc: 'Hero_desc', route: 'hero', img: 'hero.png'
  }, {
    name: 'Portal', desc: 'Portal_desc', route: 'portal', img: 'portal.png'
  }, {
    name: 'Stat', desc: 'Stat_desc', route: 'fighter', img: 'fighter.png'
  }]


}
