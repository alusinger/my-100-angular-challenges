import { NgModule } from "@angular/core";
import { StarRatingsComponent } from "./star-ratings.component";
import { CommonModule } from "@angular/common";




@NgModule({
    imports: [CommonModule],
    declarations: [StarRatingsComponent],
    exports: [StarRatingsComponent]
})
export class StarRatingsModule { }