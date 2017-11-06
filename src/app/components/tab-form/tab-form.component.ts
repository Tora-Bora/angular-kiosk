import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyboardOptions, NavigateOptions } from "virtual-keyboard";

import { FieldBase } from '../../services/fields/field-base'
import { DynamicFormService } from '../../services/dynamic-form.service';

import * as $ from "jquery"; 
import "virtual-keyboard";

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
  selector: 'tab-form',
  templateUrl: './tab-form.component.html',
  styleUrls: ['./tab-form.component.css'],
  providers: [DynamicFormService] 
})
export class TabFormComponent implements OnInit, AfterViewInit {
  
    @Input() fields : FieldBase<any>[] = [];
    form: FormGroup;
    payLoad = '';
  
    constructor(private qcs: DynamicFormService) { }
  
    ngOnInit() {
      this.form = this.qcs.toFormGroup(this.fields);    
    }
  
    ngAfterViewInit() {
      $('input').keyboard(kbOptions);
    }  
  
  }
  
