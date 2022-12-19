import { TokenService } from './token.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

const IAccessTokenReponse = {
  access_token: '12345'
};

describe('TokenService', () => {
  let service: TokenService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenService
      ],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TokenService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created `TokenService`', () => {
    expect(service).toBeTruthy();
  });

  it('The method must exist `getToken`', () => {
    expect(service.getToken).toBeInstanceOf(Function);
  });

  it('should get token', () => {
    service.getToken().subscribe((response: any) => {
      expect(response.access_token).toEqual('12345');
    });
    const request = httpMock.expectOne('https://accounts.spotify.com/api/token');
    expect(request.request.method).toEqual('POST');
    request.flush(IAccessTokenReponse);
    httpMock.verify();
  });

});
