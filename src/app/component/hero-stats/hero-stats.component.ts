import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as interfaces from "./_var"
import { relics } from "./_data"

@Component({
  selector: 'hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.scss']
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  //selected relic + its level
  level: number = null;
  elem = null;

  getData() {
    return relics;
  }

  setProgressBar() {
    let bar = this.elem.elRef.nativeElement.querySelector(".bar")
    // console.log(">>>>>   " + bar)
    bar.setAttribute('style', `stroke-dashoffset: ${bar.getAttribute('r') * 2 * Math.PI * (this.elem.type.levels - this.level) / this.elem.type.levels}px`)
  }


  onChangeLevel(elem, change: boolean) {
    // console.log(elem)
    // console.log(change)
    if (elem) {
      this.elem = elem
      this.level = elem.curr_level;
    }

    if (this.elem) {
      if (change === true && this.level < this.elem.type.levels) {
        this.level++
        relics[+this.elem.id].curr_level++
      } else if (change === false && this.level > 0) {
        this.level--
        relics[+this.elem.id].curr_level--
      }

      this.setProgressBar()
    }

  }

}

@Component({
  selector: 'hero-relic',
  template: `
            <div attr.width="{{type.r*3}}px" attr.height="{{type.r*3}}px" >

              <mat-icon [ngStyle] = "{'left.px': this.type.r * 3 / 4, 'top.px': this.type.r * 3 / 4}">
                <img src="../../assets/img/{{this.logo}}" attr.width="{{type.r*3/2}}px">
              </mat-icon>

              <svg attr.width="{{type.r*3}}px" attr.height="{{type.r*3}}px" viewPort="0 0 50 50" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle attr.cx="{{type.r*3/2}}px" attr.cy="{{type.r*3/2}}px" fill="transparent" attr.r="{{type.r}}" 
                        attr.stroke-dasharray = "{{(type.r * 2 * 3.14).toFixed(2)}}"></circle>

                <circle class="bar" attr.cx="{{type.r*3/2}}px" attr.cy="{{type.r*3/2}}px" 
                        attr.r="{{type.r}}"attr.stroke-dasharray = "{{(type.r * 2 * 3.14).toFixed(2)}}" 
                        attr.stroke-dashoffset="{{(type.r * 2 * 3.14 * (type.levels - curr_level) / type.levels).toFixed(2)}}" fill="transparent">
                </circle>
              </svg>

             
            </div>
`,
  styleUrls: ['./hero-stats.component.scss']
})
export class HeroRelic implements OnInit {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add('relic')
  }

  @Input() id: string;
  @Input() curr_level: number = 0;
  @Input() logo: string;
  @Input() type: interfaces.A | interfaces.P | interfaces.T10 | interfaces.T14;

  @Output() selected = new EventEmitter<any>();

  ngOnInit() {
  }

  @HostListener('click', ['$event']) onMouseClick(e: MouseEvent) {
    this.detectClickedRelic(e);
  }


  detectClickedRelic(event: MouseEvent) {
    // console.log(this.elRef.nativeElement)

    document.querySelectorAll('hero-relic').forEach(el => {
      el.classList.remove('selected')
    })
    this.selected.emit(this)

    this.elRef.nativeElement.classList.add('selected')

  }
}
