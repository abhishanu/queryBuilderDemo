import { Component } from '@angular/core';

import { DataServiceService } from './data-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  switchView:Boolean=true;
  constructor(public service: DataServiceService) { 
    this.service.readFileData();
    
  }

  
}
