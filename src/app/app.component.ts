import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContent } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  @ViewChild(MatDrawer) drawer;


  nav = [
    { route: '/calc', name: 'Калькулятор Портала' },
    { route: '/stats', name: 'Калькулятор статов' },
    { route: '/test', name: 'lists' },
  ];
  title = 'testapp';


  toggle() {
    this.drawer.toggle();
    document.querySelector('.mat-drawer-content')
      // .setAttribute("class", (this.drawer.opened) ? `mat-drawer-content col-11` : `mat-drawer-content col-12`)
      .setAttribute("style", (this.drawer.opened) ? `width: calc(100% - 220px)` : `width: calc(100%)`)
  }
}
