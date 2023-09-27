import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectiveDocsComponent } from './directive-docs.component';

const routes = [
  {
    path: '',
    component: DirectiveDocsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DirectiveDocsModule { }
