import { Injectable } from '@angular/core';
import { NewsModule } from './news.module'

@Injectable({
  providedIn: NewsModule
})
export class NewsService {

  public newsContainer = [];

  constructor() { }

  public async getNewsCards() {
    try {
      const feed: Promise<Response> = await fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(news => this.newsContainer = news.slice(0, 8));
    }
    catch(e) {
      console.log(e);
    }
  }
}