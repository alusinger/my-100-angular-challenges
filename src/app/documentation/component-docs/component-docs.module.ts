import { NgModule } from "@angular/core";
import { CardModule } from "src/app/components/card/card.module";
import { ProgressBarModule } from "src/app/documentation/component-docs/components/progress-bar/progress-bar.module";
import { StarRatingsModule } from "src/app/documentation/component-docs/components/star-ratings/star-ratings.module";
import { ComponentDocsComponent } from "./component-docs.component";
import { AccordionModule } from "src/app/documentation/component-docs/components/accordion/accordion.module";
import { RouterModule } from "@angular/router";


const routes = [
    {
        path: '',
        component: ComponentDocsComponent
    }
];

@NgModule({
    imports: [ AccordionModule, CardModule, StarRatingsModule, ProgressBarModule, RouterModule.forChild(routes),],
    declarations: [ComponentDocsComponent],
    exports: [ComponentDocsComponent]
})
export class ComponentDocsModule { }