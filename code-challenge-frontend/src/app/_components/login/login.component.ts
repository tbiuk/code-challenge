import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', []],
      password: ['', []],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.controls['email'].value;
      const password = this.form.controls['password'].value;

      alert('email: ' + email + ' ' + '\npassword: ' + password);
    }
  }
}
