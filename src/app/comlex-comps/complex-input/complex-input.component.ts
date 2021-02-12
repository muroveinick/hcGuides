import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './complex-input.component.html',
})
export class CalcComponent implements OnInit {


  constructor() { }

  @Input() type: "text" | "number" = "text";
  @Input() formControlName: string;
  @Input() autocomplete;

  ngOnInit(): void {
    this.autocomplete = this.autocomplete ? "on" : "off"
  }
}
