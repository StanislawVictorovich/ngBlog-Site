import { Injectable } from '@angular/core';
import { BlogModule } from './blog.module'
import { Albums, Users, Posts, Comments } from '../data';
import { GetDataService } from '../get-data.service';

@Injectable({
  providedIn: BlogModule
})
export class BlogService {

  public albums: Albums[];
  public users: Users[];
  public posts: Posts[];
  public comments: Comments[];

  constructor(private getDataService: GetDataService) { 
  }

  public getData(indexOfPost:number):void {
    this.getDataService.getHttpData(`albums`, elements => this.albums = elements);    
    this.getDataService.getHttpData(`users`, elements => this.users = elements);    
    this.getDataService.getHttpData(`posts/${indexOfPost}`, elements => this.posts = elements);    
    this.getDataService.getHttpData(`posts/${indexOfPost}/comments`, elements => this.comments = elements); console.log(this.posts);   
  }
  
}