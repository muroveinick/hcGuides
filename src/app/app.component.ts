import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer;

  sidevarOpened: boolean = false;

  nav = [
    { route: '/calc', name: 'Калькулятор Портала', icon: "calculate" },
    { route: '/stats', name: 'Калькулятор статов', icon: "equalizer" },
    { route: '/test', name: 'lists', icon: "list", },
  ];


  toggle() {
    this.sidevarOpened = !this.sidevarOpened;
    document.querySelector('.navitem').querySelector('mat-icon').innerHTML = this.sidevarOpened ? 'keyboard_arrow_left' : 'keyboard_arrow_right'
    document.querySelector('.mat-drawer').classList.toggle('sidebar-close')
    // document.querySelector('.mat-drawer-content')
    //   // .setAttribute("class", (this.drawer.opened) ? `mat-drawer-content col-11` : `mat-drawer-content col-12`)
    //   .setAttribute("style", (this.drawer.opened) ? `width: calc(100% - 220px)` : `width: calc(100%)`)
  }
}
