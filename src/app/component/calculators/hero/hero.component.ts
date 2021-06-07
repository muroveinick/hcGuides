import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroRelic } from '../../comlex-comps/hero-relic/hero-relic.component';
import { T14, T10, A, P, Star } from "../../../data/_var_power"
import { relics, setLevels } from "./_data"
import { relicView } from 'src/app/data/_var_hero';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'hero-comp',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getRelicsToView();
  }
  ngAfterViewInit() {

    ///set selected relics as arena build -- mask, hamster, hat, flag & banner
    this.equipedRelics.active = 14;
    this.equipedRelics.passive = [6, 21, 1, 3]
  }


  equipedRelics = {
    active: null,
    passive: new Array<number>()
  }
  available_hero_settings = [
    { name: 'zzz\'s hero', value: 'mock' },
    { name: 'min', value: 'min' },
    { name: 'tr9', value: 'tr9' },
    { name: 'tr10', value: 'tr10' },
    { name: 'max', value: 'max' },
  ];

  selectedELem: HeroRelic = null;
  readonly FULL_HERO_COINS: number = 48929100;
  relic_view = []


  recalculateHeroLevels(setting_value: string) {
    setLevels(setting_value)

  }

  // onChangeLevel(value: number) {
  //   if (this.selectedELem) {
  //     value < 0 ? value = 0 : value > this.selectedELem.RelicData.type.levels ? value = this.selectedELem.RelicData.type.levels : null
  //     this.selectedELem.RelicData.curr_level = value;
  //     relics[this.selectedELem.RelicData.logo.match(/warrior/) ? 0 : this.selectedELem.RelicData.logo.match(/mage/) ? 1 : 2].data[this.selectedELem.RelicData.id].curr_level = value
  //   }
  //   // console.log(this.selectedELem)
  // }


  setSelected(relic: HeroRelic) {
    if (relic) {
      this.selectedELem = relic
      this.selectedELem.RelicData.curr_level = relic.RelicData.curr_level
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
    // console.log(hero_data)
    return hero_data;
  }


  getData() {
    return relics;
  }

  getRelicsToView() {
    /**выбор из всех веток А и P реликов для вывода на вью */
    this.relic_view = relics.reduce((sum, curr) => sum.concat(curr.data), []).filter(i => (i.type.r === 35 || i.type.r === 40));
  }

  setEquipedRelics(relicIndex: relicView, index: number) {

    if (relicIndex.type.r === 40) {
      console.log(this.equipedRelics.active, index)
      if (this.equipedRelics.active === index) {
        this.equipedRelics.active = null;
        return;
      }
      this.equipedRelics.active = index

    }

    if (relicIndex.type.r === 35) {
      if (this.equipedRelics.passive.includes(index)) {
        this.equipedRelics.passive.splice(this.equipedRelics.passive.indexOf(index), 1);
        return;
      }


      if (this.equipedRelics.passive.length < 4) {
        this.equipedRelics.passive.push(index)
      }
    }
  }

  calculateEqupedPOwer() {
    console.log(this.relic_view)
    /*отвратительно, здесь из массива реликов на вью формируется массив выбранных реликов, а затем из reduce считается суммарная мощь */
    return this.relic_view
      .filter((el, index) => this.equipedRelics.passive.includes(index))
      .concat(this.equipedRelics.active !== null ? this.relic_view[(this.equipedRelics.active)] : [])
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
