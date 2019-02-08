import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { SubDataComponent } from './sub-data/sub-data.component';
import { DataServiceService } from './data-service.service';

import { AngularHighchartsChartModule } from 'angular-highcharts-chart';

import {CommonModule, APP_BASE_HREF,LocationStrategy,HashLocationStrategy} from '@angular/common';

import { HttpModule } from '@angular/http';
import { MainPageComponent } from './main-page/main-page.component';
import { QueryBuilderModule } from "angular2-query-builder";
import { QuerBiluderComponent } from './quer-biluder/quer-biluder.component';

@NgModule({
  declarations: [
    AppComponent,
    SubDataComponent,
    MainPageComponent,
    QuerBiluderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgGridModule.withComponents([]),
    AngularHighchartsChartModule,
    QueryBuilderModule,
  ],
  providers: [
    {provide:APP_BASE_HREF,useValue:'/'},
    {provide:LocationStrategy,useClass:HashLocationStrategy},
    DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
