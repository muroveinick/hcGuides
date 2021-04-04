
import { Component, OnInit, Input, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';
import { relicView } from "../../../data/_var_hero"
import { MatDialog, } from '@angular/material/dialog';
import { RelicDialog } from '../relic-dialog/relic-dialog.component';

@Component({
  selector: 'hero-relic',
  templateUrl: './hero-relic.component.html',
  styleUrls: ['./hero-relic.component.scss'],
})
export class HeroRelic implements OnInit {
  constructor(private elRef: ElementRef, public dialog: MatDialog) {
    elRef.nativeElement.classList.add('relic')
  }

  @Input() RelicData: relicView;
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
    this.selected.emit(this);
    this.elRef.nativeElement.classList.add('selected');
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(RelicDialog, {
      width: '800px',
      data: this.RelicData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selected.emit(result);
    });
  }
}
