import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent {

  constructor() { }

  @Output() forward: EventEmitter<any> = new EventEmitter();
  @Output() backward: EventEmitter<any> = new EventEmitter();

  @Input() forwardEnabled = true; 
  @Input() backwardEnabled = true;

     
  onForward(event) {
    this.forward.emit(event);
  }

  onBackward(event) {
    this.backward.emit(event);
  }

}
