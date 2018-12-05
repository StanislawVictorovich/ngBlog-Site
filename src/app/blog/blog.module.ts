import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsReadmoreComponent } from './blogs-readmore/blogs-readmore.component';
import { BlogsUserCardComponent } from './blogs-user-card/blogs-user-card.component';
import { BlogsPreviewCardComponent } from './blogs-preview-card/blogs-preview-card.component';
import { BlogsReadmoreContentComponent } from './blogs-readmore-content/blogs-readmore.content.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlogService } from './blog.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BlogsCommentComponent } from './blogs-comment/blogs-comment.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { CategoriesWidgetComponent } from './categories-widget/categories-widget.component';
import { SideWidgetComponent } from './side-widget/side-widget.component';

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
    BlogsUserCardComponent,
    BlogsPreviewCardComponent,
    BlogsReadmoreContentComponent,
    SideBarComponent,
    BlogsCommentComponent,
    SearchWidgetComponent,
    CategoriesWidgetComponent,
    SideWidgetComponent
  ],
  providers: [ BlogService ]
})
export class BlogModule { }


