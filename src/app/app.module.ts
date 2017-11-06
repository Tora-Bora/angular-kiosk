import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule, MatTabsModule, MatButtonModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';
import { KeyboardDirective } from './directives/keyboard.directive';


@NgModule({
  declarations: [
    AppComponent,    
    NavFooterComponent,
    DynamicFieldComponent,
    StepperFormComponent,    
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
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
