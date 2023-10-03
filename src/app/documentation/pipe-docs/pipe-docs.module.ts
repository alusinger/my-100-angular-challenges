import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocsComponent } from './pipe-docs.component';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CardModule } from 'src/app/components/card/card.module';
import { CreditCardFormatterPipe } from './credit-card-formatter/credit-card-formatter.pipe';

const routes = [
  {
    path: '',
    component: PipeDocsComponent
  }
];


@NgModule({
  declarations: [
    PipeDocsComponent,
    TruncatePipe,
    CreditCardFormatterPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule
  ]
})
export class PipeDocsModule { }
