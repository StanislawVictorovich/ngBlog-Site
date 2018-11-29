import { Component, OnInit, Input, Output, TemplateRef } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-readmore-content',
  templateUrl: './blogs-readmore.content.component.html',
  styleUrls: ['./blogs-readmore.content.component.css'],
  providers: [ BlogService ]
})
export class BlogsReadmoreContentComponent implements OnInit {

  @Input() i:number;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    
  }

}