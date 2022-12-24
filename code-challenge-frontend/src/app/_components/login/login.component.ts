import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/\d/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.controls['email'].value.toLowerCase();
      const password = this.form.controls['password'].value;

      alert('email: ' + email + ' ' + '\npassword: ' + password);
    }
  }
}
