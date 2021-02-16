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
      if (index > 0) c.setAttribute('stroke-dashoffset', `${(this.r * 2 * Math.PI).toFixed(2)}`)
    })


  }
  @Input() r: number = 70;
  level: number = 0;

  setProgressBar(a: number) {

    let bar = document.querySelector("#bar")
    // bar.setAttribute('stroke-dashoffset', `${this.r * 2 * Math.PI * (11 - a) / 11}`);
    bar.setAttribute('style', `stroke-dashoffset: ${this.r * 2 * Math.PI * (11 - a) / 11}px`)
  }

  onChangeLevel(bool) {
    bool ? this.level < 11 ? this.level++ : null : this.level > 0 ? this.level-- : null

    return this.setProgressBar(this.level)
  }

}
