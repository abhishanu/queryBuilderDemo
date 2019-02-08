import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  columnDefs = [
		{headerName: 'Projected Amount', field: 'proAmt',suppressFilter: true },
    {headerName: 'Accuracy', field: 'accuracy' }
  ];

 
  constructor(public service: DataServiceService) {
   }

  ngOnInit() {
  }

  cellClicked(event){
    if(event.colDef.headerName === 'Accuracy'){
      this.service.clickedData=event.value;
      console.log('Row clicked:' + event.value);
      this.service.showChildDataFlag=true;
    }
  }

}
