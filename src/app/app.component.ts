import { Component, OnInit } from '@angular/core';
import { data } from './mock-data';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'My Blog Site';
  uncheckableRadioModel = 'Middle';

  constructor(private getDataService: GetDataService){}

  public async test() { // SOME TESTING FUNCTION --- D_E_L_E_T_E_
    console.dir(data);
    this.getDataService.getData('albums'); 
  }

  ngOnInit() {
  }
}
