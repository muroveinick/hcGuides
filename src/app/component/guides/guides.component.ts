import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface GuideView {
  title: string;
  link: string;
  background: string
}

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  guides_url = 'https://vk.com/@hc_guides'

  ngOnInit(): void {
    this.http.get(this.guides_url, { responseType: 'text' }).subscribe((response) => {
      this.getArticledList(response);
    });
  }

  guid_list: Array<GuideView> = [];

  getArticledList(text: string) {
    // console.log(text)


    const titles = text.match(/(?<=<div.+author_page_article_title.+>).+?(?=<)/g);
    const links = text.match(/(?<=<a href=")\/@.+?(?=">)/g);
    const backgrounds = text.match(/(?<=<div.+author_page_article_image.+style=").+?(?=">)/g);
    // console.log(titles, links, backgrounds);

    titles.forEach((elem, index) => this.guid_list.push({ ['title']: elem, ['link']: links[index], ['background']: backgrounds[index] }))

  }

}
