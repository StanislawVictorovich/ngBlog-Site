import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_DATA } from './constants';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  
  constructor(private http: HttpClient) {  }

  public async getHttpData(urlParam:string, fillData:Function) {
    await this.http.get(`${URL_DATA}${urlParam}`).subscribe(data => {
      fillData(data);
    });
  }
}