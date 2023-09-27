import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDocsComponent } from './documentation/component-docs/component-docs.component';
import { ComponentDocsModule } from './documentation/component-docs/component-docs.module';
import { PipeDocsComponent } from './documentation/pipe-docs/pipe-docs.component';
import { ServiceDocsComponent } from './documentation/service-docs/service-docs.component';
import { OtherDocsComponent } from './documentation/other-docs/other-docs.component';

const routes: Routes = [
  {
    data: { title: 'Components'},
    path: '',
    component: ComponentDocsComponent,
    loadChildren: () => import('./documentation/component-docs/component-docs.module').then(m => m.ComponentDocsModule)
  },
  { 
    path: 'directives', 
    loadChildren: () => import('./documentation/directive-docs/directive-docs.module').then(m => m.DirectiveDocsModule)
  },
  { 
    path: 'pipes', component: PipeDocsComponent,
    loadChildren: () => import('./documentation/pipe-docs/pipe-docs.module').then(m => m.PipeDocsModule) 
  },
  { path: 'services', component: ServiceDocsComponent},
  { path: 'others', component: OtherDocsComponent},

];

@NgModule({
  imports: [
    ComponentDocsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
