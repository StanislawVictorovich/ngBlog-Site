import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    CarouselModule.forRoot()
  ],
  declarations: [NewsListComponent],
})
export class NewsModule { }


