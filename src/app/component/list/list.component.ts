import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  url = 'https://vk.com/@hc_guides-gaid-po-osvezhevaniu-kabana';
  inner;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }


  ngOnInit() {
    this.http.get(this.url, { responseType: 'text' }).pipe(take(1)).subscribe(response => {
      // let reg = new RegExp(/(?<=<div class="article_layer).+?(?=</div>)/);
      let json1 = response.match(/(?<=<div class="article_layer).+?(?=<\/div>)/g);

      this.inner = this.sanitizer.bypassSecurityTrustHtml(json1 as any);
      // this.inner = (json);
      console.log(json1);
    })
  }

}
