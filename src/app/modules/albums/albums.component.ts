import { Item } from './../../core/models/item.interface';
import { IAlbumResponse } from './../../core/models/album.interface';
import { AlbumsService } from './../../core/services/albums.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, AfterViewInit {

  itemsTotal: Item[] = [];
  items: Item[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  totalItems = 0;
  pagination = {
    _page: 1,
    _limit: 10
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private paginatorIntl: MatPaginatorIntl, private albumsService: AlbumsService) {
    this.paginatorIntl.itemsPerPageLabel = 'Exibir';
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent): void {
    this.pagination._page = event.pageIndex + 1;
    this.pagination._limit = event.pageSize;
    this.getAlbumsPaginator();
  }

  ngOnInit(): void {
    this.getAlbumsPaginator();
  }

  getAlbumsPaginator(): void {
    this.albumsService.getAlbumsPaginator(this.pagination)
      .subscribe((response: IAlbumResponse) => {
        this.items = response.items;
        this.dataSource.data = this.items;
        this.totalItems = response.total;
        setTimeout(() => {
          this.paginator.length = this.totalItems;
          this.paginator.pageIndex = this.pagination._page - 1;
          this.paginator.pageSize = this.pagination._limit;
        });
      });
  }

}
