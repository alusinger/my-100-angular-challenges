import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceDocsComponent } from './service-docs.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ServiceDocsComponent
  }
];

@NgModule({
  declarations: [
    ServiceDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ServiceDocsModule { }
