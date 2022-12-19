import { IAccessTokenReponse } from './../models/token.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private httpClient: HttpClient){}

  getToken(): Observable<IAccessTokenReponse> {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic MmJkODFkMzc3ZThmNGRhNWJiMjA0YzBiYmQ2NDY3ZGQ6NmFlNDg4NjE3ZTFmNGUyNDlkZWE3MDUwOThjY2I1YmI='
    };
    const body = 'grant_type=client_credentials';
    return this.httpClient.post<IAccessTokenReponse>('https://accounts.spotify.com/api/token', body, {headers});
  }

}
