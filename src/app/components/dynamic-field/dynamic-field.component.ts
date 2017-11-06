import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { FieldBase } from '../../services/fields/field-base';


@Component({
  selector: 'df-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {

  constructor() { }


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
