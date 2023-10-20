import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XPostComponent } from './x-post.component';



@NgModule({
  declarations: [XPostComponent],
  imports: [
    CommonModule
  ],
  exports: [XPostComponent]
})
export class XPostModule { }
