import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocsComponent } from './documentation/component-docs/component-docs.component';
import { ComponentDocsModule } from './documentation/component-docs/component-docs.module';

const routes: Routes = [
  {
    data: { title: 'Components'},
    path: '',
    component: ComponentDocsComponent,
    loadChildren: () => import('./documentation/component-docs/component-docs.module').then(m => m.ComponentDocsModule)
  },

];

@NgModule({
  imports: [
    ComponentDocsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
