import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


import { FieldBase } from '../../services/fields/field-base';
import { FieldErrorMessageService } from '../../services/field-error-message.service'


@Component({
  selector: 'df-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css'],
  providers: [FieldErrorMessageService],
})
export class DynamicFieldComponent {

  constructor(private ems: FieldErrorMessageService) { }

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }
  get errorMessage() { 
    if (this.form.controls[this.field.key].errors)
      return this.ems.errorMessage(this.form.controls[this.field.key].errors, this.field.label);   
    else return "";
  }
}
