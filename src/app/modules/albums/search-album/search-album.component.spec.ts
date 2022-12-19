import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumsModule } from './../albums.module';
import { AlbumsService } from './../../../core/services/albums.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAlbumComponent } from './search-album.component';

describe('SearchAlbumComponent', () => {
  let component: SearchAlbumComponent;
  let fixture: ComponentFixture<SearchAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, AlbumsModule, RouterTestingModule, BrowserAnimationsModule ],
      declarations: [ SearchAlbumComponent ],
      providers: [ AlbumsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
