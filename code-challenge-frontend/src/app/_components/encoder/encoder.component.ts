import { Component } from '@angular/core';
import { HttpService } from 'src/app/_services/http/http.service';

@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.scss'],
})
export class EncoderComponent {
  input: string = '';
  result: string = '';
  isError: boolean = false;

  constructor(private httpService: HttpService) {}

  async getResult(input: string) {
    const { result, isError } = await this.httpService.sendEncoderRequest(
      input
    );
    this.isError = isError;
    this.result = result;
  }
}
