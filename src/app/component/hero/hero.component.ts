import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';
import { T14, T10, A, P, Star } from "../../data/_var_power"
import { relics } from "./_data"

@Component({
  selector: 'hero-comp',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {

    ///set selected relics as arena build -- mask, hamster, hat, flag & banner
    [14, 6, 21, 1, 3].forEach(i => this.setEquipedRelics(i))
  }


  equipedRelics = {
    active: null,
    passive: new Array<number>()
  }
  selectedELem: HeroRelic = null;
  readonly FULL_HERO_COINS: number = 48929100;



  onChangeLevel(value: number) {
    if (this.selectedELem) {
      value < 0 ? value = 0 : value > this.selectedELem.type.levels ? value = this.selectedELem.type.levels : null
      this.selectedELem.curr_level = value;
      relics[this.selectedELem.logo.match(/warrior/) ? 0 : this.selectedELem.logo.match(/archer/) ? 1 : 2].data[this.selectedELem.id].curr_level = value
    }
    // console.log(this.selectedELem)
  }


  setSelected(relic: HeroRelic) {
    if (relic) {
      this.selectedELem = relic
      this.selectedELem.curr_level = relic.curr_level
    }
  }


  showHeroPower() {
    //TODO переделать вызов
    let power = 0,
      hero_data = {
        0: 0,
        1: 0,
        2: 0,
        all: 0,
        power: 0
      }

    relics.forEach((branch, index) => {
      let branch_cost = 0;
      branch.data.forEach(i => {

        let curr = i.type.r === 40 ? A : i.type.r === 35 ? P : i.type.r === 30 && i.type.levels === 10 ? T10 : i.type.levels === 14 ? T14 : Star;
        if (curr === T10 || curr === T14) {
          power += curr[i.curr_level].power;
        }
        if (curr === Star) {
          hero_data.all += curr(i.curr_level).total_coins;
          branch_cost += curr(i.curr_level).total_coins;
          power += curr(i.curr_level).power;
        } else {
          hero_data.all += curr[i.curr_level].total_coins
          branch_cost += curr[i.curr_level].total_coins
        }



        hero_data[index] = branch_cost;
        hero_data.power = this.calculateEqupedPOwer() + power;
      })
    });
    return hero_data;
  }


  getData() {
    return relics;
  }

  getRelicsToView() {
    /**выбор из всех веток А и P реликов для вывода на вью */
    return relics.reduce((sum, curr) => sum.concat(curr.data), []).filter(i => (i.type.r === 35 || i.type.r === 40));
  }

  setEquipedRelics(relicIndex: number) {

    let div_elem: Element = document.querySelector(`.view__item[id='${relicIndex}']`)

    if (div_elem.classList.contains('active')) {
      if (this.equipedRelics.active === null) {
        div_elem.classList.add('selected')
        this.equipedRelics.active = relicIndex
      } else if (this.equipedRelics.active === relicIndex) {
        div_elem.classList.remove('selected')
        this.equipedRelics.active = null
      }
    }

    if (div_elem.classList.contains('passive')) {
      if (this.equipedRelics.passive.includes(relicIndex)) {
        div_elem.classList.remove('selected')
        this.equipedRelics.passive.splice(this.equipedRelics.passive.indexOf(relicIndex), 1);
        // console.log(this.equipedRelics.passive);
        return
      }


      if (this.equipedRelics.passive.length < 4) {
        div_elem.classList.add('selected')
        this.equipedRelics.passive.push(relicIndex)
      }
      // console.log(this.equipedRelics.passive)

    }
    console.log(this.equipedRelics)
  }

  calculateEqupedPOwer() {
    let v_arr = this.getRelicsToView();
    /*отвратительно, здесь из массива реликов на вью формируется массив выбранных реликов, а затем из reduce считается суммарная мощь */
    return v_arr
      .filter((el, index) => this.equipedRelics.passive.includes(index))
      .concat(this.equipedRelics.active !== null ? v_arr[(this.equipedRelics.active)] : [])
      .reduce((sum, cur) => sum + (+cur.type.r === 35 ? P[cur.curr_level].power : A[cur.curr_level].power), 0)
  }



  formatToSepString(number: number) {
    return number
      .toString()
      .split('')
      .reverse()
      .join('')
      .match(/\d{1,3}/g)
      .reverse()
      .map((i) => i.split('').reverse().join(''))
      .join('.');
  }
}
