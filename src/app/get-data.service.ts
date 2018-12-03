import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  
  private readonly url = 'https://jsonplaceholder.typicode.com/';
  
  constructor(private http: HttpClient) {  }

  public async getHttpData(urlParam:string, fillData:Function) {
    await this.http.get(`${this.url}${urlParam}`).subscribe(data => {
      fillData(data);
    });
  }
}