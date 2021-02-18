import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';


interface relicView {
  id: number,
  r: number,
  logo: string,
  level: number,
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
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
      logo: "def.png",
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


  @Input() r: number = 40;
  level: number = 0;
  elem

  setProgressBar(relicLevel: number) {
    let bar = this.elem.elRef.nativeElement.querySelector(".bar")
    console.log(">>>>>   " + bar)
    bar.setAttribute('style', `stroke-dashoffset: ${bar.getAttribute('r') * 2 * Math.PI * (11 - this.level) / 11}px`)
  }


  onChangeLevel(elem, change: boolean) {
    console.log(elem)
    console.log(change)
    if (elem) {
      this.elem = elem
      this.level = elem.level;
    }


    if (change === true && this.level < 11) {
      this.level++
      this.relics[+this.elem.id].level++
    } else if (change === false && this.level > 0) {
      this.level--
      this.relics[+this.elem.id].level--
    }
    return this.setProgressBar(this.level)
  }

}

@Component({
  selector: 'hero-relic',
  template: `
            <div>
              <svg attr.width="{{r*3}}px" attr.height="{{r*3}}px" viewPort="0 0 50 50" version="1.1"
                xmlns="http://www.w3.org/2000/svg">
                <circle attr.cx="{{r*3/2}}px" attr.cy="{{r*3/2}}px" fill="transparent" attr.r="{{r}}" 
                        attr.stroke-dasharray = "{{(this.r * 2 * 3.14).toFixed(2)}}"></circle>

                <circle class="bar" attr.cx="{{r*3/2}}px" attr.cy="{{r*3/2}}px" 
                        attr.r="{{r}}"attr.stroke-dasharray = "{{(this.r * 2 * 3.14).toFixed(2)}}" 
                        attr.stroke-dashoffset="{{(this.r * 2 * 3.14 * (11 - level) / 11).toFixed(2)}}" fill="transparent">
                </circle>
              </svg>

              <mat-icon class="hero-icon" [ngStyle] = "{'right.px': this.r * 9 / 4}">
                <img src="../../assets/img/{{this.logo}}" attr.width="{{r*3/2}}px">
              </mat-icon>
            </div>
`,
  styleUrls: ['./test.component.scss']
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
