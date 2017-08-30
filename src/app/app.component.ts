import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Form Validation';
  formGroup: FormGroup;
  firstName;
  lastName;
  constructor(){
    this.formGroup = new FormBuilder().group({
      'firstName':[null, Validators.required],
      lastName: [null, Validators.required]
    })
  }
}
