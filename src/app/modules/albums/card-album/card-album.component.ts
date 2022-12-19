import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {

  @Input() name: string;
  @Input() image;
  @Input() artists: [];

  constructor() { }

  ngOnInit(): void {
  }

}
