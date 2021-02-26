
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import {A, P, T10, T14} from "../../../data/_var_hero"


@Component({
  selector: 'hero-relic',
  templateUrl: './hero-relic.component.html',
  styleUrls: ['./hero-relic.component.scss']
})
export class HeroRelic implements OnInit {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add('relic')
  }

  @Input() id: string;
  @Input() curr_level: number = 0;
  @Input() logo: string;
  @Input() type: A | P | T10 | T14;

  @Output() selected = new EventEmitter<any>();

  ngOnInit() {
  }

  @HostListener('click', ['$event']) onMouseClick(e: MouseEvent) {
    this.detectClickedRelic(e);
  }


  detectClickedRelic(event: MouseEvent) {
    document.querySelectorAll('hero-relic').forEach(el => {
      el.classList.remove('selected')
    })
    this.selected.emit(this)

    this.elRef.nativeElement.classList.add('selected')
  }

}
