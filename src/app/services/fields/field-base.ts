export class FieldBase<T>{
    value: T;
    key: string;
    label: string;    
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    hintLabel: string;
    keyboardLayout: string;
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        hintLabel?: string,
        keyboardLayout? : string
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.hintLabel = options.hintLabel || '';
      this.keyboardLayout = options.keyboardLayout || '';
    }
  }