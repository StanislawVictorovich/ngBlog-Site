import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-readmore-content',
  templateUrl: './blogs-readmore.content.component.html',
  styleUrls: ['./blogs-readmore.content.component.css'],
})
export class BlogsReadmoreContentComponent implements OnInit {

  @Input() indexOfBlogPost:number;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getData(this.indexOfBlogPost);
  }

  private test(){
    console.log(this.blogService.posts);
  }
}