import { FieldBase } from './field-base';

export class FieldTextbox extends FieldBase<string> {
  controlType = 'textbox';  

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}