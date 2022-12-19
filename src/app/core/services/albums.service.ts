import { TokenService } from './token.service';
import { IAlbumResponse } from './../models/album.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  getAlbumsPaginator(paramsPagination): Observable<IAlbumResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    const params = new HttpParams()
    .set('album_type', 'SINGLE')
    .set('limit', paramsPagination._limit)
    .set('offset', paramsPagination._page);

    return this.httpClient.get<IAlbumResponse>('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums', { headers, params });
  }

  getAlbums(): Observable<IAlbumResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    });

    return this.httpClient.get<IAlbumResponse>('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums', { headers });
  }

}
