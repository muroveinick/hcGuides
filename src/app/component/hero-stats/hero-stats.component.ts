import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';


interface relicView {
  id: number,
  r: number,
  logo: string,
  level: number,
}

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

  relics: relicView[] = [
    {
      id: 0,
      r: 50,
      logo: "hero/warrior/crit.png",
      level: 5,
    }, {
      id: 1,
      r: 45,
      logo: "logo.png",
      level: 5,
    }, {
      id: 2,
      r: 40,
      logo: "off.png",
      level: 5,
    },

  ]


  //selected relic + its level
  level: number = null;
  elem = null;

  setProgressBar() {
    let bar = this.elem.elRef.nativeElement.querySelector(".bar")
    // console.log(">>>>>   " + bar)
    bar.setAttribute('style', `stroke-dashoffset: ${bar.getAttribute('r') * 2 * Math.PI * (11 - this.level) / 11}px`)
  }


  onChangeLevel(elem, change: boolean) {
    // console.log(elem)
    // console.log(change)
    if (elem) {
      this.elem = elem
      this.level = elem.level;
    }

    if (this.elem) {
      if (change === true && this.level < 11) {
        this.level++
        this.relics[+this.elem.id].level++
      } else if (change === false && this.level > 0) {
        this.level--
        this.relics[+this.elem.id].level--
      }

      this.setProgressBar()
    }

  }

}

@Component({
  selector: 'hero-relic',
  template: `
            <div attr.width="{{r*3}}px" attr.height="{{r*3}}px" >

              <mat-icon [ngStyle] = "{'left.px': this.r * 3 / 4, 'top.px': this.r * 3 / 4}">
                <img src="../../assets/img/{{this.logo}}" attr.width="{{r*3/2}}px">
              </mat-icon>

              <svg attr.width="{{r*3}}px" attr.height="{{r*3}}px" viewPort="0 0 50 50" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle attr.cx="{{r*3/2}}px" attr.cy="{{r*3/2}}px" fill="transparent" attr.r="{{r}}" 
                        attr.stroke-dasharray = "{{(this.r * 2 * 3.14).toFixed(2)}}"></circle>

                <circle class="bar" attr.cx="{{r*3/2}}px" attr.cy="{{r*3/2}}px" 
                        attr.r="{{r}}"attr.stroke-dasharray = "{{(this.r * 2 * 3.14).toFixed(2)}}" 
                        attr.stroke-dashoffset="{{(this.r * 2 * 3.14 * (11 - level) / 11).toFixed(2)}}" fill="transparent">
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

  @Input() r: number = 40;
  @Input() id: string;
  @Input() level: number = 0;
  @Input() logo: string;

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
