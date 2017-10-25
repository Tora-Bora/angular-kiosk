import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../../models/fields/field-base'

@Component({
  selector: 'de-field',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  @Input() field : FieldBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.field.key].valid; }

  constructor() { }

  ngOnInit() {
  }

}
