import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll('circle').forEach((c, index) => {
      c.setAttribute('r', `${this.r}`);
      c.setAttribute('stroke-dasharray', `${(this.r * 2 * Math.PI).toFixed(2)}`)
      if (index % 2 != 0) c.setAttribute('stroke-dashoffset', `${(this.r * 2 * Math.PI).toFixed(2)}`)
    })

    document.querySelectorAll('mat-icon.hero-icon').forEach(el => el.setAttribute("style", `right:${this.r * 9 / 4}px;`))
  }
  @Input() r: number = 40;
  level: number = 0;

  setProgressBar(relicLevel: number) {
    let bar = document.querySelector(".bar")
    bar.setAttribute('style', `stroke-dashoffset: ${this.r * 2 * Math.PI * (11 - relicLevel) / 11}px`)
  }


  onChangeLevel(bool: boolean) {
    bool ? this.level < 11 ? this.level++ : null : this.level > 0 ? this.level-- : null
    return this.setProgressBar(this.level)
  }


  onChange(a) {
    let k = a.path.indexOf('div.aaa')
    console.log(a.path.indexOf('div.aaa'));
    console.log(a.path["div.aaa"].attributes.name.nodeValue);
  }

}
