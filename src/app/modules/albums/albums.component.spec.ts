import { RouterTestingModule } from '@angular/router/testing';
import { AlbumsModule } from './albums.module';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlbumsService } from './../../core/services/albums.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponent } from './albums.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, AlbumsModule, RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ AlbumsComponent ],
      providers: [ AlbumsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit', () => {
    const getAlbumsPaginator = jest.spyOn(component, 'getAlbumsPaginator');
    component.ngOnInit();
    expect(getAlbumsPaginator).toHaveBeenCalled();
  });
});
