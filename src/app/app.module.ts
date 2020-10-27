import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkTimeComponent } from './work-time/work-time.component';
import { LanguageSelectorComponentComponent } from './language-selector-component/language-selector-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkTimeComponent,
    LanguageSelectorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
