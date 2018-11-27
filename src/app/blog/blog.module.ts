import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogsListComponent],
  providers: [BlogService]
})
export class BlogModule { }


