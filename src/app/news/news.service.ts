import { Injectable } from '@angular/core';
import { NewsModule } from './news.module';
import { data } from '../mock-data';

@Injectable({
  providedIn: NewsModule
})
export class NewsService {

  public newsContainer = [];

  constructor() {
    this.newsContainer = data.albums;
  }

}