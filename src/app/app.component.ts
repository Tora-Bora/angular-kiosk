import { Component } from '@angular/core';

import { FieldService } from "./services/field.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FieldService]
})
export class AppComponent {
  title = 'app';

  fields: any[];

  constructor(service: FieldService) {
    this.fields = service.getFields();
  }
}
