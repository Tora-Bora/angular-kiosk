import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './components/dynamic-form-field/dynamic-form-field.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';
import { TabFormComponent } from './components/tab-form/tab-form.component';

import { NgxVirtualKeyboardModule } from '../ngx_virtual_keyboard'


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    FooterComponent,
    DynamicFormFieldComponent,
    StepperFormComponent,
    TabFormComponent 
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,
    NgxVirtualKeyboardModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
