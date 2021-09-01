import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  DeviceRoutingModule } from './device-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { GaugeModule } from 'angular-gauge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    // chartjsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class DeviceModule {}
