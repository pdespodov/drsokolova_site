import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkTimeComponent } from './work-time/work-time.component';

const routes: Routes = [
  //{ path: '', component: WorkTimeComponent },
  //{ path: '**', component: WorkTimeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
