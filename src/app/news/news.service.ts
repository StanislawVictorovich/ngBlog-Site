import { Injectable } from '@angular/core';
import { NewsModule } from './news.module';
import { GetDataService } from '../get-data.service';
import { Albums } from '../data';

@Injectable({
  providedIn: NewsModule
})
export class NewsService {

  private newsContainer: Albums[];

  constructor(private getDataService: GetDataService) {}

  public getData() {
    this.getDataService.getHttpData(`albums`, elements => this.newsContainer = elements.slice(0,8));
  }
}