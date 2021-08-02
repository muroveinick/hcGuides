import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {


  constructor(private http: HttpClient, private sanitizer: DomSanitizer, public activatedRoute: ActivatedRoute,) { }

  url = this.activatedRoute.snapshot.params['id'] //| 'https://vk.com/@hc_guides-iventy-bolshoe-ispytanie';
  inner;

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    if ((e.target as HTMLElement).classList.contains("article_photo_carousel__left") || (e.target as HTMLElement).classList.contains("article_photo_carousel__right")) {

      const direction = (e.target as HTMLElement).classList.contains("article_photo_carousel__right") ? 1 : -1
      const control_container_width = (e.target as HTMLElement).parentElement.getBoundingClientRect().width;
      const parent_photo_carousel = (e.target as HTMLElement).closest(".article_photo_carousel") as HTMLElement;
      const curr_translate = +(parent_photo_carousel.querySelector(".article_photo_carousel_inner") as HTMLElement).style.transform.match(/\d+/)?.[0] | 0;

      (parent_photo_carousel.querySelector(".article_photo_carousel_inner") as HTMLElement).setAttribute('style', `transform: translateX(-${curr_translate + direction * control_container_width}px);`);

      //органичение на кнопки влево и вправо
      if (curr_translate + direction * control_container_width === (parent_photo_carousel.querySelectorAll('.article_carousel_img_wrap').length - 1) * control_container_width) {
        parent_photo_carousel.querySelector('.article_photo_carousel__right').classList.add('blocked')
      } else if (curr_translate + direction * control_container_width === 0) {
        parent_photo_carousel.querySelector('.article_photo_carousel__left').classList.add('blocked')
      } else {
        parent_photo_carousel.querySelector('.article_photo_carousel__left').classList.remove('blocked');
        parent_photo_carousel.querySelector('.article_photo_carousel__right').classList.remove('blocked');
      }
    }

  }

  ngOnInit() {
    this.http.get('https://vk.com/' + this.url, { responseType: 'text' }).subscribe((response) => {
      this.cleanDOM(response);
    });
  }

  cleanDOM(dirty_html: string) {
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

    dirty_html = dirty_html.replace("article_photo_carousel__left", "article_photo_carousel__left blocked");


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
    text = text.replace(/<div class="article_photo_carousel".+>[\s\S]+?<\/div><\/div>/g, (matched_div) => {

      //парс JSON даты с размерами картинок
      let data_sizes = JSON.parse(matched_div.match(/(?<=data-sizes=").+?(?=")/)[0].replace(/&quot;/g, '"'));

      let best_resolution = new Array<any>(data_sizes.lenght);
      data_sizes.forEach((item, index) => best_resolution[index] = item.w ? item.w : item.z ? item.z : item.y ? item.y : item.x);

      matched_div.match(/<div class="article_carousel_img_wrap">[\s\S]+?<\/div>/g).forEach((img, index) => {
        let new_img = img.replace(/(?<=src=").+?(?=")/, best_resolution[index][0]);
        matched_div = matched_div.replace(img, new_img);
      })
      return matched_div
    });

    return text;
  }
}
