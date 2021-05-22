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
    name: 'Калькулятор героя', disr: 'Рассчитайте мощь героя, затраты эфира и монеток', route: ' calculators/hero', img: 'hero.png'
  }, {
    name: 'Калькулятор портала', disr: 'Затраты яблок для фарма душ', route: 'calculators/portal', img: 'portal.png'
  }, {
    name: 'Калькулятор статов', disr: 'Крит, уворот, броня в процентом виде', route: 'calculators/fighter', img: 'fighter.png'
  }]


}
