import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from '../../services/fields/field-base'
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [DynamicFormService] 
})
export class DynamicFormComponent implements OnInit {

  @Input() fields : FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicFormService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
