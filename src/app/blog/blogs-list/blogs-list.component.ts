import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { URL_IMAGE_POST, URL_AVATAR } from '../../constants';
import { Album, User } from '../../data';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  private albums: Album[];
  private users: User[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getAlbums().subscribe(albums => this.albums = albums);
    this.blogService.getUsers().subscribe(users => this.users = users);
  }

  private getPostImageByIndex(index:number):string {
    return `${URL_IMAGE_POST}${index}`;
  }

  private getUsersAvatarByIndex(index:number): string {
    return `${URL_AVATAR}${index}`;
  }
}
