import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AlbumsComponent } from './albums.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CardAlbumComponent } from './card-album/card-album.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchAlbumComponent } from './search-album/search-album.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: 'buscar',
    component: SearchAlbumComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  declarations: [
    AlbumsComponent,
    CardAlbumComponent,
    SearchAlbumComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlbumsModule {}
