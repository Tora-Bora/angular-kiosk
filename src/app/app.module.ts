import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, MatTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';
import { TabFormComponent } from './components/tab-form/tab-form.component';
import { KeyboardDirective } from './directives/keyboard.directive';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    NavFooterComponent,
    DynamicFieldComponent,
    StepperFormComponent,
    TabFormComponent,
    KeyboardDirective 
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
