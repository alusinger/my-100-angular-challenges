import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "src/app/components/card/card.module";
import { RouterModule } from '@angular/router';
import { DirectiveDocsComponent } from './directive-docs.component';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { BannerCutOutModule } from "src/app/components/banner-cut-out/banner-cut-out.module";

const routes = [
  {
    path: '',
    component: DirectiveDocsComponent
  }
];

@NgModule({
  declarations: [
    DirectiveDocsComponent,
    DebounceClickDirective
  ],
  imports: [
    BannerCutOutModule, 
    CardModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [DirectiveDocsComponent]
})
export class DirectiveDocsModule { }