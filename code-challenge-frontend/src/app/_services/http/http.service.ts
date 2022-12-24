import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {
  LoginData,
  LoginRequestResponse,
} from 'src/app/_interfaces/interfaces';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  private API_URL = 'http://localhost:3000';

  async sendLoginRequest(data: LoginData) {
    try {
      const { token } = await lastValueFrom(
        this.http.post<LoginRequestResponse>(this.API_URL + '/login', data)
      );
      this.authService.authToken = token;
      return true;
    } catch (error: any) {
      alert(error.error);
      return false;
    }
  }
}
