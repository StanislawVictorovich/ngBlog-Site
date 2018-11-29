import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { data } from '../../mock-data';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
  providers: [ BlogService ]
})
export class BlogsListComponent implements OnInit {
  public i:number;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    
  }

}
