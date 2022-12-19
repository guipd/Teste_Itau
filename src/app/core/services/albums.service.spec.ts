import { AlbumsService } from './albums.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

const IAlbumResponse = {
  items: [],
  name: 'album'
};

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlbumsService
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AlbumsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created `AlbumsService`', () => {
    expect(service).toBeTruthy();
  });

  it('The method must exist `getAlbums`', () => {
    expect(service.getAlbums).toBeInstanceOf(Function);
  });

  it('should get albums', () => {
    service.getAlbums().subscribe((response: any) => {
      expect(response.name).toEqual('album');
    });
    const request = httpMock.expectOne('https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums');
    expect(request.request.method).toEqual('GET');
    request.flush(IAlbumResponse);
    httpMock.verify();
  });

});
