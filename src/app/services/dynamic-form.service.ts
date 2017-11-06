import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, EmailValidator } from '@angular/forms';

import { FieldBase } from './fields/field-base'

@Injectable()
export class DynamicFormService {

  constructor() { }

  toFormGroup(fields: FieldBase<any>[] ) {
    let group: any = {};

    fields.forEach(field => {      
      let validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }

      if (field.type == "email") {
        validators.push(Validators.email);
      }
       
      validators.push()
      group[field.key] = new FormControl(field.value || '', validators)                         
      
    });
    return new FormGroup(group);
  }

}
