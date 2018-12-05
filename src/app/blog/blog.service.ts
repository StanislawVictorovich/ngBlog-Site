import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogModule } from './blog.module';
import { Album, User, Post, Comment } from '../data';
import { URL_DATA } from '../constants';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) {  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${URL_DATA}albums`);
  }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${URL_DATA}users`);
  }

  public getPostByIndex(index:number): Observable<Post> {
    return this.http.get<Post>(`${URL_DATA}posts/${index}`);
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${URL_DATA}posts`);
  }

  public getPostCommentsByIndex(index: number): Observable<Comment> {
    return this.http.get<Comment>(`${URL_DATA}posts/${index}/comments`);
  }

}