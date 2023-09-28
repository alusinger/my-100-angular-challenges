import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';
import { DirectiveDocsComponent } from './documentation/directive-docs/directive-docs.component';
import { OtherDocsComponent } from './documentation/other-docs/other-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TopOfPageComponent,
    DirectiveDocsComponent,
    OtherDocsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
