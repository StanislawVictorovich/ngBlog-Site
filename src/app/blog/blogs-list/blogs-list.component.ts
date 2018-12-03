import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
  providers: [ BlogService ]
})
export class BlogsListComponent implements OnInit {
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getData();
  }

}
