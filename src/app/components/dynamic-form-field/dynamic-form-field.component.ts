import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyboardOptions, NavigateOptions } from "virtual-keyboard";
import { AfterViewInit } from '@angular/core';

import * as $ from "jquery"; 
import "virtual-keyboard";

import { FieldBase } from '../../models/fields/field-base';

const kbOptions: KeyboardOptions = {  
  type: "input",
  layout : 'qwerty',
  alwaysOpen : true,  
  lockInput: true,  
  appendLocally: false,
  updateOnChange: true,
  usePreview: false    
};

@Component({
  selector: 'df-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form-field.component.css']
})
export class DynamicFormFieldComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $('#keyboard').keyboard(kbOptions);
  }

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
  get errorMessage() { 
    let errors = this.form.controls[this.field.key].errors;
    if (errors['email']) return 'Invalid email';
    else if(errors['required']) return this.field.label + " is required";

    return "";
  }
}
