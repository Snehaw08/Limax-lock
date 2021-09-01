import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WebsiteModule { }
