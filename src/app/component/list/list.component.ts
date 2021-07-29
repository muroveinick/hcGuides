import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  url = 'google.com'

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    let headers = new Headers();
    headers.append('x-forwarded-host', 'foo');

    this.http.get(this.url).pipe(take(1)).subscribe(response => {
      // this.fetchedHtml = response.json();
      console.log(response);
    })
  }

}
