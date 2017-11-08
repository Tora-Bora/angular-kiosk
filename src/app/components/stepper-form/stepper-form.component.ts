import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NavFooterComponent } from '../nav-footer/nav-footer.component'
import { FieldBase } from '../../services/fields/field-base'
import { DynamicFieldService } from '../../services/dynamic-field.service'

import {MatStepper} from '@angular/material';


@Component({
  selector: 'stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
  providers: [DynamicFieldService],
  encapsulation: ViewEncapsulation.None
})
export class StepperFormComponent implements OnInit, AfterViewInit {
  @Input() fields : FieldBase<any>[] = [];
  @ViewChild('stepper') stepper: MatStepper;

  form: FormGroup;
  payLoad = '';
  
  constructor(private qcs: DynamicFieldService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.fields);    
  }

  ngAfterViewInit() {
    this.onSelectionChange({selectedIndex: 0});
  }  

  onSelectionChange(event) {    
    let sel = '#'+this.fields[event.selectedIndex].key;    
    setTimeout(function() {
      $(sel).focus();
    },500);        
  }

  get forwardEnabled() {
    if (this.stepper.selectedIndex + 1 >= this.fields.length) {
      return this.form.valid;
    }
    return true;     
  }

  get backwardEnabled() {
    return this.stepper.selectedIndex != 0;
  }

  forward() {
    this.stepper.next();
    
  }

  backward() {
    this.stepper.previous();
  }

}



