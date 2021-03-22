import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  param = { value: 'world' };
  constructor(router: Router, translate: TranslateService) {
    router.events.subscribe((val) => val instanceof NavigationEnd ? this.setActiveNav(val.url) : null)
    translate.setDefaultLang('en');
    translate.use('ru');
  }

  sidevarOpened: boolean = true;

  nav = [
    { route: '/portal', name: 'Portal', icon: "calculate" },
    { route: '/stats', name: 'Stats', icon: "equalizer" },
    { route: '/hero', name: "Hero", icon: "person", },
  ];

  setActiveNav(url: string) {
    let active: number;
    this.nav.forEach((el, index) => el.route === url ? active = index : "");
    document.querySelectorAll('.navitem').forEach((el, index) => {
      el.classList.remove('active');
      if (index === active + 1) el.classList.add('active');
    })
  }


  toggle() {
    this.sidevarOpened = !this.sidevarOpened;
    document.querySelector('.navitem').querySelector('mat-icon').innerHTML = this.sidevarOpened ? 'keyboard_arrow_left' : 'keyboard_arrow_right'
    document.querySelector('.mat-drawer').classList.toggle('sidebar-close')
    // document.querySelector('.mat-drawer-content')
    //   // .setAttribute("class", (this.drawer.opened) ? `mat-drawer-content col-11` : `mat-drawer-content col-12`)
    //   .setAttribute("style", (this.drawer.opened) ? `width: calc(100% - 220px)` : `width: calc(100%)`)
  }
}
