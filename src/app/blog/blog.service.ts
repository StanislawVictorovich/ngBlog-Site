import { Injectable } from '@angular/core';
import { BlogModule } from './blog.module'

@Injectable({
  providedIn: BlogModule
})
export class BlogService {

  public blogsContainer = [];

  constructor() { }

  public async getNewsCards() {
    try {
      let newsFeed: Promise<Response> = await fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(news => this.blogsContainer = news.slice(0, 8));
    }
    catch(e) {
      console.log(e);
    }
  }
}