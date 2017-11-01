import { Injectable } from '@angular/core';
import { FieldBase } from '../models/fields/field-base'
import { FieldDropdown } from '../models/fields/field-dropdown'
import { FieldTextbox } from '../models/fields/field-textbox'


@Injectable()
export class FieldService { 

  getFields() {
    let fields: FieldBase<any>[] = [

      new FieldTextbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 1,
        required: true
      }),

      new FieldTextbox({
        key: 'phoneNumber',
        label: 'Номер телефона',
        type: 'tel',
        order: 2
      })
      
      ,

      new FieldDropdown({
        key: 'document',
        label: 'Тип документа',
        options: [
          {key: '1',  value: 'Загранпаспор'},
          {key: '2',  value: 'Паспорт'},
          {key: '3',   value: 'Свидетельство о рождении'}
        ],
        order: 3
      })

    ];

    return fields;
  }

}
