import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsReadmoreComponent } from './blogs-readmore/blogs-readmore.component';
import { BlogsReadmoreContentComponent } from './blogs-readmore-content/blogs-readmore.content.component';
import { BlogService } from './blog.service';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    BlogsListComponent, 
    BlogsReadmoreComponent,
    BlogsReadmoreContentComponent
  ],
  providers: [BlogService]
})
export class BlogModule { }


