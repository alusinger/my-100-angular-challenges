import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCutOutComponent } from './banner-cut-out.component';



@NgModule({
  declarations: [BannerCutOutComponent],
  imports: [
    CommonModule
  ],
  exports: [BannerCutOutComponent]
})
export class BannerCutOutModule { }
