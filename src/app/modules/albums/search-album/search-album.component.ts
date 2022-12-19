import { IAlbumResponse } from './../../../core/models/album.interface';
import { AlbumsService } from './../../../core/services/albums.service';
import { Item } from './../../../core/models/item.interface';
import {MatTableDataSource} from '@angular/material/table';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-album',
  templateUrl: './search-album.component.html',
  styleUrls: ['./search-album.component.scss']
})
export class SearchAlbumComponent implements OnInit {

  itemsTotal: Item[] = [];
  items: Item[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  totalItems = 0;
  pagination = {
    _page: 1,
    _limit: 5
  };

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.items = this.itemsTotal.filter(i => (i.name).toLowerCase().includes(filterValue.toLowerCase()));
    this.dataSource.data = this.items;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAlbums(): void {
    this.albumsService.getAlbums()
      .subscribe((response: IAlbumResponse) => {
        this.itemsTotal = response.items;
      });
  }

}
