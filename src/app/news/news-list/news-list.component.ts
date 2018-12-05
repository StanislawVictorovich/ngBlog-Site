import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NewsService } from '../news.service';
import { Album } from '../../data';
import { URL_IMAGE_NEWS } from '../../constants';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true } }
  ]
})
export class NewsListComponent implements OnInit {

  private albums: Album[];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAlbums().subscribe(albums => this.albums = albums.slice(0,8));
  }

  private getNewsImageByIndex(index:number):string {
    return `${URL_IMAGE_NEWS}${index}.jpg`;
  }
}
