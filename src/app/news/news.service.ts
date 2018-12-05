import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewsModule } from './news.module';
import { Album } from '../data';
import { URL_DATA } from '../constants';

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {  }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${URL_DATA}albums`);
  }
}