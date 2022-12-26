import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/_services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loginErrorVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpService,
    private router: Router
  ) {
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

  autofillForm() {
    this.form.controls['email'].setValue('optimus.prime@autobots.com');
    this.form.controls['password'].setValue('validPassword1234!');
  }

  async onSubmit() {
    if (this.form.valid) {
      const email = this.form.controls['email'].value.toLowerCase();
      const password = this.form.controls['password'].value;

      const isLoginSuccess = await this.httpService.sendLoginRequest({
        email,
        password,
      });

      if (isLoginSuccess) {
        this.router.navigate(['/encoder']);
      } else {
        this.loginErrorVisible = true;
      }
    }
  }
}
