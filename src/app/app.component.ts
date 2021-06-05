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
  constructor(router: Router, public translate: TranslateService) {
    router.events.subscribe(val => {
      val instanceof NavigationEnd && (this.router = val.url)
    })

    translate.addLangs(['ru', 'en']);
    /ru/.test(navigator.language) ? translate.use('ru') : translate.use('en');
  }

  sidevarOpened: boolean = false;
  router: string
  nav = [
    { route: '/calculators', name: 'Calculators', icon: "calculate" },
  ];

  languages = ['ru', 'en']
}