import { Injectable } from '@angular/core';
import { BlogModule } from './blog.module'
import { data } from '../mock-data';

@Injectable({
  providedIn: BlogModule
})
export class BlogService {

  public albums = [];
  public users = [];
  public posts = [];
  public comments = [];

  constructor() { 
    this.albums = data.albums;
    this.users = data.users;
    this.posts = data.posts;
    this.comments = data.comments;
  }
}