import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { URL_AVATAR } from '../../constants';

@Component({
  selector: 'app-blogs-comment',
  templateUrl: './blogs-comment.component.html',
  styleUrls: ['./blogs-comment.component.css']
})
export class BlogsCommentComponent implements OnInit {

  @Input() indexOfBlogPost: number;  

  private blogPostComments: Comment[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPostCommentsByIndex(this.indexOfBlogPost).subscribe(comments => this.blogPostComments = comments);
  }

  private getUserAvatarByIndex(index:number):string {
    return `${URL_AVATAR}${index}`;
  }

}