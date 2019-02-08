import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sub-data',
  templateUrl: './sub-data.component.html',
  styleUrls: ['./sub-data.component.css']
})
export class SubDataComponent implements OnInit {
  rowData=[];
  Highcharts = Highcharts;
  Highcharts1 = Highcharts;
  regionNames=[];
  relationshipManagers=[];
  chartData=[];

  regionChartData=[];
  regionDatapoint={};

  managerChartData=[];
  managerDatapoint={};


  chartOptions = {};

  chartOptions1 = {};

  constructor(public service: DataServiceService) { 
  
  }

  ngOnInit() {
    this.rowData = this.service.childData;
    this.service.title = 'Detail View';
    this.createRelatioshipManagerVhartOptions();
    this.createRegionChartOptions();
    this.rowData=this.rowData.filter(data=>data.accuracy.includes(this.service.clickedData));
    this.prepareRegionChartData();
    this.prepareManagerChartData();
  }

  columnDefs = [
		{headerName: 'Relationship Manager', field: 'rMngr'},
    {headerName: 'Region Name', field: 'rName' },
    {headerName: 'Projected Amount', field: 'proAmt',suppressFilter: true },
    {headerName: 'Accuracy', field: 'accuracy',suppressFilter: true },
  ];

  goToHome(){
    this.service.title = 'Demo App Home';
    this.service.showChildDataFlag=false;
  }

  cellClicked(event){}

  createRegionChartOptions(){
    this.chartOptions1 = {
      title: {
        text: 'Region comparison'
      },
      xAxis: {
        type:'category',
        lineColor: '#7c7cd0',
        lineWidth: 1.2,
      },
      yAxis: {
        min: 1000,
        max: 10000,
        tickInterval: 1500,
        lineColor: '#7c7cd0',
        lineWidth: 1.2,
        title: {
          text: 'Projected Amount'
  
      }
      },
  
      series: [{
        name: 'Region',
        data:  this.regionChartData,
        
      }]
    };
  }

  createRelatioshipManagerVhartOptions(){
    this.chartOptions={
      title: {
        text: 'RelationShip Manager comparison'
      },
      xAxis: {
        type:'category',
        lineColor: '#7c7cd0',
        lineWidth: 1.2,
      },
      yAxis: {
        min: 1000,
        max: 10000,
        tickInterval: 1500,
        lineColor: '#7c7cd0',
        lineWidth: 1.2,
          title: {
              text: 'Projected Amount'
          }
        }, 
        series: [{
          name: 'RelationShip Manager',
          data:  this.managerChartData,
          color: 'greenyellow'
        }]
    };
  }

  init() {
    
  }

  prepareRegionChartData(){
    this.service.allRegionNames.forEach(rName => {
      this.regionDatapoint[rName]=0.0;
    });

    this.rowData.forEach(data=>{
      this.regionDatapoint[data.rName] += data.proAmt;
    });

    this.service.allRegionNames.forEach(ele => {
      this.regionChartData.push([ele,this.regionDatapoint[ele]]);
    });
  }

  prepareManagerChartData(){
    this.service.allRelationshipManagers.forEach(rName => {
      this.managerDatapoint[rName]=0.0;
    });

    this.rowData.forEach(data=>{
      this.managerDatapoint[data.rMngr] += data.proAmt;
    });

    this.service.allRelationshipManagers.forEach(ele => {
      this.managerChartData.push([ele,this.managerDatapoint[ele]]);
    });
  }
}
