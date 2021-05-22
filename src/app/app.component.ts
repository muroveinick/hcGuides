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
    translate.addLangs(['ru', 'en']);
    /ru/.test(navigator.language) ? translate.use('ru') : translate.use('en');
  }

  sidevarOpened: boolean = false;

  nav = [
    { route: '/calculators', name: 'Calculators', icon: "calculate" },
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
  }
}
