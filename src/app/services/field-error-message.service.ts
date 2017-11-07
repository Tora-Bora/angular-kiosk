import { Injectable } from '@angular/core';
import { ValidationErrors } from "@angular/forms"

@Injectable()
export class FieldErrorMessageService {

  constructor() { }


  errorMessage(errors: ValidationErrors, labelText: string) {

    if(errors['required']) return labelText + " is required";
    else if (errors['email']) return 'Invalid email';    
    //TODO: обработать остальные ошибки

    return "";
  }

}
