import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';
import { BlogService } from '../blog.service';
import { URL_IMAGE_POST, URL_AVATAR } from '../../constants';
import { User, Album } from '../../data';

@Component({
  selector: 'app-blogs-readmore-content',
  templateUrl: './blogs-readmore.content.component.html',
  styleUrls: ['./blogs-readmore.content.component.css'],
})
export class BlogsReadmoreContentComponent implements OnInit {

  @Input() user: User;
  @Input() album: Album;
  @Input() indexOfBlogPost: number;

  private blogPostText: string;
  private users: User[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPostByIndex(this.indexOfBlogPost).subscribe(post => this.blogPostText = post.body);
    this.blogService.getUsers().subscribe(users => this.users = users);
  }

  private getPostImage():string {
    return `${URL_IMAGE_POST}${this.indexOfBlogPost}`;
  }

  private getUserAvatarByIndex(index:number):string {
    return `${URL_AVATAR}${index}`;
  }

} 