import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NewsService } from './news.service';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    CarouselModule.forRoot()
  ],
  declarations: [NewsListComponent],
  providers: [ NewsService ]
})
export class NewsModule { }


