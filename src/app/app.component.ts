import { IAccessTokenReponse } from './core/models/token.interface';
import { TokenService } from './core/services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'desafio-itau';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.getToken();
  }

  getToken(): void {
    this.tokenService.getToken()
      .subscribe((response: IAccessTokenReponse) => {
        localStorage.setItem('access_token', response.access_token);
      });
  }

}
