import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyboardOptions, NavigateOptions } from "virtual-keyboard";

import { FieldBase } from '../../models/fields/field-base'
import { DynamicFormService } from '../../services/dynamic-form.service';

import * as $ from "jquery"; 
import "virtual-keyboard";

@Component({
  selector: 'stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
  providers: [DynamicFormService] 
})
export class StepperFormComponent implements OnInit, AfterViewInit {

  @Input() fields : FieldBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  status = '';

  constructor(private qcs: DynamicFormService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);    
  }


  ngAfterViewInit() {
    $('input').keyboard(kbOptions);
  }  

  doSomething(event) {
    
    let sel = '#'+this.fields[event.selectedIndex].key;
    setTimeout(function() {
      $(sel).focus();
    },500);    
    this.status = sel;
  }

}

const kbOptions: KeyboardOptions = {  
  type: "input",
  layout : 'qwerty',
  usePreview: false,
  autoAccept: true,
  alwaysOpen : true
};


