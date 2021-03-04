import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeroRelic } from '../comlex-comps/hero-relic/hero-relic.component';
import { T14, T10, A, P } from "../../data/_var_power"
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


  equipedRelics = {
    active: null,
    passive: new Array<number>()
  }
  selectedELem: HeroRelic = null;


  onChangeLevel(value: number) {
    if (this.selectedELem) {

      value < 0 ? value = 0 : value > this.selectedELem.type.levels ? value = this.selectedELem.type.levels : null
      this.selectedELem.curr_level = value;
      relics[this.selectedELem.logo.match(/warrior/) ? 0 : this.selectedELem.logo.match(/archer/) ? 1 : 2].data[this.selectedELem.id].curr_level = value

    }
    console.log(this.selectedELem)
  }


  setSelected(relic: HeroRelic) {
    if (relic) {
      this.selectedELem = relic
      this.selectedELem.curr_level = relic.curr_level
    }
  }


  showHeroPower() {
    //TODO переделать вызов
    // console.log(relics[0].data)
    let pass_res = 0;

    relics.forEach(branch =>
      branch.data.forEach(i => {
        let curr = i.type.r === 40 ? A : i.type.r === 35 ? P : i.type.r === 30 && i.type.levels === 10 ? T10 : T14;
        if (curr === T10 || curr === T14) {
          pass_res += curr[i.curr_level].power;
        }
      }))

    // return [this.calculateEqupedPOwer() + pass_res, pass_res].map(i => this.formatToSepString(i))
    return this.formatToSepString((this.calculateEqupedPOwer() + pass_res));
  }


  getData() {
    return relics;
  }

  getRelicsToView() {
    /**выбор из всех веток А и P реликов для вывода на вью */
    return relics.reduce((sum, curr) => sum.concat(curr.data), []).filter(i => i.type.r > 30).sort((a, b) => a.type.r < b.type.r ? 1 : -1);
  }

  setEquipedRelics(a: any) {
    let div_elem: HTMLDivElement
    if (a.composedPath()[0] instanceof HTMLImageElement) {
      div_elem = a.path[0].parentNode
    } else {
      div_elem = a.path[0]
    }

    if (div_elem.classList.contains('active')) {
      if (this.equipedRelics.active === null) {
        div_elem.classList.add('selected')
        this.equipedRelics.active = +div_elem.id
      } else if (this.equipedRelics.active === +div_elem.id) {
        div_elem.classList.remove('selected')
        this.equipedRelics.active = null
      }
    }

    if (div_elem.classList.contains('passive')) {
      if (this.equipedRelics.passive.includes(+div_elem.id)) {
        div_elem.classList.remove('selected')
        this.equipedRelics.passive.splice(this.equipedRelics.passive.indexOf(+div_elem.id), 1);
        // console.log(this.equipedRelics.passive);
        return
      }


      if (this.equipedRelics.passive.length < 4) {
        div_elem.classList.add('selected')
        this.equipedRelics.passive.push(+div_elem.id)
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
