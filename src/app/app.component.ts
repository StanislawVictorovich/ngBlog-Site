import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'My Blog Site';
  uncheckableRadioModel = 'Home';

  constructor(){}

  ngOnInit() {
  }

  public test() { // TESTING FUNCTION - DELETE AFTER DEBUG
    
  }
}
