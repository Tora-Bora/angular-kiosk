import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NavFooterComponent } from '../nav-footer/nav-footer.component'
import { FieldBase } from '../../services/fields/field-base'
import { DynamicFormService } from '../../services/dynamic-form.service';


@Component({
  selector: 'stepper-form',
  templateUrl: './stepper-form.component.html',
  styleUrls: ['./stepper-form.component.css'],
  providers: [DynamicFormService],
  encapsulation: ViewEncapsulation.None
})
export class StepperFormComponent implements OnInit, AfterViewInit {
  @Input() fields : FieldBase<any>[] = [];

  form: FormGroup;
  payLoad = '';
  
  constructor(private qcs: DynamicFormService) { }

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
    return true;
  }

  get backwardEnabled() {
    return true;
  }

}



