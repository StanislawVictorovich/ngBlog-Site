import { Injectable } from '@angular/core';
import { BlogModule } from './blog.module'

@Injectable({
  providedIn: BlogModule
})
export class BlogService {

  public cards = [];
  public users = [];

  constructor() { }

  public async getBlogCards() {
    try {
      let feed: Promise<Response> = await fetch('https://jsonplaceholder.typicode.com/albums')
                    .then(response => response.json())
                    .then(news => this.cards = news.slice(0, 8));
      feed = await fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(news => this.users = news.slice(0, 8));
    }
    catch(e) {
      console.log(e);
    }
  }
}