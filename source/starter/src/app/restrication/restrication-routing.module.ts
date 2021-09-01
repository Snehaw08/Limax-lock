import { RestricationComponent } from './restrication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestricationModule } from './restrication.module';

const routes: Routes = [
  {
    path: 'advanced-restrictions',
    component: RestricationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestricationRoutingModule { }
