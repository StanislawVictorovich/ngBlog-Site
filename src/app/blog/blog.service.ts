import { Injectable } from '@angular/core';
import { BlogModule } from './blog.module'
import { Albums, Users, Posts, Comments } from '../data';
import { GetDataService } from '../get-data.service';
import { URL_IMAGE, URL_AVATAR } from '../constants';

@Injectable({
  providedIn: BlogModule
})
export class BlogService {

  public albums: Albums[];
  public users: Users[];
  public posts: Posts;
  public comments: Comments[];

  constructor(private getDataService: GetDataService) { 
  }

  public getData(indexOfPost:number):void {
    this.getDataService.getHttpData(`albums`, elements => this.albums = elements);    
    this.getDataService.getHttpData(`users`, elements => this.users = elements);    
    this.getDataService.getHttpData(`posts/${indexOfPost+1}`, elements => this.posts = elements);  
    this.getDataService.getHttpData(`posts/${indexOfPost+1}/comments`, elements => this.comments = elements);
  }
  
  public getPostByIndex(index:number):string {
    return this.albums[index].title;
  }

  public getUserNameByIndex(index:number):string {
    return this.users[index].name;
  }

  public getBlogsBodyText():string {
    return this.posts.body;
  }

  public getPostImageByIndex(index:number):string {
    return `${URL_IMAGE}${index}`;
  }

  public getUsersEmailByIndex(index:number):string {
    return this.users[index].email;
  }

  public getUsersCatchPhraseByIndex(index:number):string {
    return this.users[index].company.catchPhrase;
  }

  public getUsersAvatarByIndex(index:number): string {
    return `${URL_AVATAR}${index}`;
  }
}