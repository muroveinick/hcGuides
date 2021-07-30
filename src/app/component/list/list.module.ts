import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ListComponent } from './list.component';

const MAT_UI_MODULES = [
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatButtonModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
  FormsModule,
];

const routes: Routes = [
  { path: '', component: ListComponent },
  {
    path: '',
    children: [
    ],
  },
];

@Pipe({ name: "safe" })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MAT_UI_MODULES,
    TranslateModule,
    CommonModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  declarations: [ListComponent],
})
export class ListModule { }
