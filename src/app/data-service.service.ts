import { Injectable } from '@angular/core';
import {Http, Jsonp} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public clickedData:String;
  public mainPageData:any;
  public childData:any;
  public showChildDataFlag: Boolean = false;
  public title = 'Demo App Home';

  public allRegionNames=[];
  public allRelationshipManagers=[];
  constructor(public http: Http) { }

  readFileData(){ 
    this.http.get('assets/files/abc.txt', "{ responseType: 'text' as 'json',headers: {'Access-Control-Allow-Origin': '*'}}").subscribe(data => {
      const dataItem = data;

      this.childData = dataItem.json().childData;
      this.mainPageData = dataItem.json().mainPageData;
      this.getDistinctRegionName();
      this.getDistinctManagerNames();
    })
  }

  getDistinctRegionName(){
    this.childData.forEach(data=>this.allRegionNames.push(data.rName));
    this.allRegionNames=this.allRegionNames.filter((x, i, a) => x && a.indexOf(x) === i);
  }

  getDistinctManagerNames(){
    this.childData.forEach(data=>this.allRelationshipManagers.push(data.rMngr));
    this.allRelationshipManagers=this.allRelationshipManagers.filter((x, i, a) => x && a.indexOf(x) === i);
  }
}
