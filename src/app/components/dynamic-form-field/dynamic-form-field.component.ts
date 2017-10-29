import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyboardOptions, NavigateOptions } from "virtual-keyboard";
import { AfterViewInit } from '@angular/core';

import * as $ from "jquery"; 
import "virtual-keyboard";

import { FieldBase } from '../../models/fields/field-base';

const kbOptions: KeyboardOptions = {
  display: {
      bksp: "\u2190",
      accept: `Next`,
      cancel: `Back`,
      normal: "ABC",
      meta1: "#+-",
      space: "Space",
      alt: `Alt`,
      s: `ABC`,
  },
  acceptValid: true,
  type: "input",
  layout       : 'num', 
  lockInput: true,
  alwaysOpen: true,
  appendLocally: true,
  color: "light",
  class: "sxcycx",
  updateOnChange: true,
  usePreview: false,
  tabNavigation: false,
  canceled: () => { console.log("cancelled"); }
};

@Component({
  selector: 'df-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('input').keyboard(kbOptions);
  }

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
}
