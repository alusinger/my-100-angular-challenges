import { NgModule } from "@angular/core";
import { AccordionComponent } from "./accordion.component";
import { CommonModule } from "@angular/common";




@NgModule({
    imports: [ CommonModule ],
    declarations: [AccordionComponent],
    exports: [AccordionComponent]
})
export class AccordionModule { }