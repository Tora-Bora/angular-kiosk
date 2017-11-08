import { Directive, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';
import { KeyboardOptions, NavigateOptions } from "virtual-keyboard";

import * as $ from "jquery"; 
import "virtual-keyboard";

@Directive({
  selector: '[keyboard]'
})
export class KeyboardDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  @Input('keyboardLayout') layout: string;  


  ngAfterViewInit() {    
    $(this.el.nativeElement).keyboard({  
      type: "input",
      layout : this.layout,
      usePreview: false,
      autoAccept: true  
    });  

           
    $(this.el.nativeElement).on('keyboardChange', function(e, key, el){                
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });    
  }

  @HostListener('change') 
  onChange() {
    console.log('change');
    
  }  
}

