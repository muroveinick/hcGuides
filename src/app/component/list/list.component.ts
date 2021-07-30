import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  // url = 'https://vk.com/@hc_guides-gaid-po-osvezhevaniu-kabana';
  // url = "https://google.com";
  url = 'assets/1.html';
  inner;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get(this.url, { responseType: 'text' }).subscribe((response) => {
      this.initCleanDom(response);
    });
  }

  initCleanDom(dirty_html: string) {
    const div_classes_to_be_removed = [
      'article_layer__content_foot',
      'article_layer_misc',
      'progress',
    ];


    //убрать из дома вообще всё лишнее
    const regex_removed = new RegExp(
      '(<noscript.+>)|(<meta.+>)|(<link.+>)|(<script.+>[sS]+?</script>)|(<iframe.+>)|(style=".+?")' +
      div_classes_to_be_removed
        .map((elem) => `|(<div class="${elem}.+>[\\s\\S]+</div>)`)
        .join(''),
      'g'
    );
    //большой целевой див с нужным контентом
    const regex_filtered = /<div class="article article_view.+>[\s\S]*<\/div>/;

    dirty_html = dirty_html.match(regex_filtered)[0];
    dirty_html = dirty_html.replace(regex_removed, '');

    dirty_html = this.setImgSizeFromWrrapper(dirty_html);

    this.inner = this.sanitizer.bypassSecurityTrustHtml(dirty_html as any);
  }


  setImgSizeFromWrrapper(text: string): string {

    //обычные картинки
    text = text.replace(/<div class="article_object_sizer_wrap".+>[\s\S]+?<\/div>/g, (matched_div) => {

      //парс JSON даты с размерами картинок
      let data_sizes = JSON.parse(matched_div.match(/(?<=data-sizes=").+?(?=")/)[0].replace(/&quot;/g, '"'));

      let best_resolution = data_sizes[0].w ? data_sizes[0].w : data_sizes[0].z ? data_sizes[0].z : data_sizes[0].y ? data_sizes[0].y : data_sizes[0].x

      matched_div = matched_div.replace(/(?<=src=").+?(?=")/, best_resolution[0]);

      return matched_div
    });

    //карусели
    text = text.replace(/<div class="article_photo_carousel".+>[\s\S]+?<\/div>/g, (matched_div) => {

      //парс JSON даты с размерами картинок
      let data_sizes = JSON.parse(matched_div.match(/(?<=data-sizes=").+?(?=")/)[0].replace(/&quot;/g, '"'));

      let best_resolution = data_sizes[0].w ? data_sizes[0].w : data_sizes[0].z ? data_sizes[0].z : data_sizes[0].y ? data_sizes[0].y : data_sizes[0].x

      matched_div = matched_div.replace(/(?<=src=").+?(?=")/, best_resolution[0]);

      return matched_div
    });

    return text;
  }
}
