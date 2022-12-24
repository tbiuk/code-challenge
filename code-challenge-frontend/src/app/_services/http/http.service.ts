import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import {
  EncoderRequestResponse,
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

  async sendEncoderRequest(str: string) {
    try {
      const headers = new HttpHeaders().set(
        'Authorization',
        this.authService.authToken
      );

      const params = new HttpParams().set('str', str);

      const { result } = await lastValueFrom(
        this.http.get<EncoderRequestResponse>(this.API_URL + '/encoder', {
          headers,
          params,
        })
      );
      return { result, isError: false };
    } catch (error: any) {
      return { result: error.error.message, isError: true };
    }
  }
}
