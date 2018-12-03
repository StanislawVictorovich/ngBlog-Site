import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true } },
    NewsService
  ]
})
export class NewsListComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getData();
  }

}
