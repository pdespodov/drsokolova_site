import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QualificationsComponent } from './about/qualifications/qualifications.component';
import { CertificatesComponent } from './about/certificates/certificates.component';
import { MembershipsComponent } from './about/memberships/memberships.component';

const routes: Routes = [
  { 
    path: 'about', 
    component: AboutComponent,
    children: [
      {path: 'qualifications', component: QualificationsComponent},
      {path: 'certificates', component: CertificatesComponent},
      {path: 'memberships', component: MembershipsComponent}
    ]
   }
  //{ path: '**', component: WorkTimeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
