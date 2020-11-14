import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkTimeComponent } from './work-time/work-time.component';
import { LanguageSelectorComponentComponent } from './language-selector-component/language-selector-component.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { QualificationsComponent } from './about/qualifications/qualifications.component';
import { CertificatesComponent } from './about/certificates/certificates.component';
import { MembershipsComponent } from './about/memberships/memberships.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkTimeComponent,
    LanguageSelectorComponentComponent,
    ContactsComponent,
    AboutComponent,
    QualificationsComponent,
    CertificatesComponent,
    MembershipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
