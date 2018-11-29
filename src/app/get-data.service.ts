import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  
  private url = 'https://jsonplaceholder.typicode.com/';
  
  constructor(private http: HttpClient) {
    this.getHttpData(`${this.url}albums`, elements => data.albums = elements, 8);
    this.getHttpData(`${this.url}users`, elements => data.users = elements, 18);
    this.getHttpData(`${this.url}posts`, elements => data.posts = elements, 18);
    this.getHttpData(`${this.url}comments`, elements => data.comments = elements, 80); //-1 = ALL
  }

  public async getData(urlParam:string, fillData:Function) {
    await this.http.get(`${this.url}${urlParam}`).subscribe(elements => {
      console.log(elements);
    });
  }
  /**
   * @description async function, returns promise and taskes url with JSON string,
   * callback function, that do smth with recieved elements and truncate number (length of array of objects)
   */
  private async getHttpData(url:string, fillData:Function, trunc:number) {
    await fetch(url)  
            .then(  
              function(response) {  
                if (response.status !== 200) {  
                  console.log(`Looks like there was a problem. Status Code: ${response.status}. Notice, that The Blog Site wouldn't properly works.`);  
                  return;  
                }
                response.json().then(function(elements) {  
                  fillData(elements.slice(0,trunc)); 
                });
              }  
            )  
            .catch(function(err) {  
              console.log(`Fetch Error: ${err}`);  
            });
  }
}