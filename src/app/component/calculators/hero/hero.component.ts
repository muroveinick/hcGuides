import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroRelic } from '../../comlex-comps/hero-relic/hero-relic.component';
import { T14, T10, A, P, Star } from "../../../data/_var_power"
import { relics, setLevels, available_hero_settings } from "./_data"
import { relicView } from 'src/app/data/_var_hero';



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
    this.equipedRelics.passive = [6, 13, 1, 32];
    this.caclulateTalentPower();
    this.calculateEqupedPOwer();
  }


  equipedRelics = {
    active: null,
    passive: new Array<number>()
  }


  selectedELem: HeroRelic = null;
  readonly FULL_HERO_COINS: number = 213860100 //15860100 + 6*11М + 6*22М;
  readonly available_hero_settings = available_hero_settings;
  relic_view = [];

  //relics with 0 power
  banners: number[] = [3, 17, 31, 40]

  hero_data = {
    0: 0,
    1: 0,
    2: 0,
    all: 0,
    power_talant: 0,
    power_equiped: 0
  }


  recalculateHeroLevels(setting_value: string) {
    setLevels(setting_value);
    this.caclulateTalentPower();
    this.calculateEqupedPOwer();

  }

  setSelected(relic: HeroRelic) {
    if (relic) {
      this.selectedELem = relic;
      this.selectedELem.RelicData.curr_level = relic.RelicData.curr_level;
      this.caclulateTalentPower();
      this.calculateEqupedPOwer();
    }
  }


  caclulateTalentPower() {

    this.hero_data.power_talant = 0;
    this.hero_data.all= 0;

    relics.forEach((branch, index) => {
      let branch_cost = 0;
      branch.data.forEach(i => {

        let curr = i.type.r === 40 ? A : i.type.r === 35 ? P : i.type.r === 30 && i.type.levels === 10 ? T10 : i.type.levels === 14 ? T14 : Star;
        if (curr === T10 || curr === T14) {
          this.hero_data.power_talant += curr[i.curr_level].power;
        }
        if (curr === Star) {
          this.hero_data.all += curr(i.curr_level).total_coins;
          branch_cost += curr(i.curr_level).total_coins;
          this.hero_data.power_talant += curr(i.curr_level).power;
        } else {
          this.hero_data.all += curr[i.curr_level].total_coins
          branch_cost += curr[i.curr_level].total_coins
        }
        this.hero_data[index] = branch_cost;
      })
    });
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
      if (this.equipedRelics.active === index) {
        this.equipedRelics.active = null;
        // return;
      } else {
        this.equipedRelics.active = index
      }


    }

    if (relicIndex.type.r === 35) {
      if (this.equipedRelics.passive.includes(index)) {
        this.equipedRelics.passive.splice(this.equipedRelics.passive.indexOf(index), 1);
        // return;
      } else {
        if (this.equipedRelics.passive.length < 4) {
          this.equipedRelics.passive.push(index)
        }
      }
    }

    this.calculateEqupedPOwer();
  }

  calculateEqupedPOwer() {
    this.hero_data.power_equiped = 0;

    this.equipedRelics.passive.forEach((el) => this.hero_data.power_equiped += !this.banners.includes(el) ? P[this.relic_view[el].curr_level].power : 0)
    if (this.equipedRelics.active) {
      this.hero_data.power_equiped += A[this.relic_view[this.equipedRelics.active].curr_level].power
    }
  }



  formatToSepString(number: number) {
    if (!isNaN(number))
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
