import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { ApplyForJobFormComponent } from '../component/apply-for-job-form/apply-for-job-form.component';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { AppliedJobListComponent } from '../component/applied-job-list/applied-job-list.component';

const routes: Routes = [{
  path: '', component: DashboardComponent, canActivate: [AuthGuard]
}, {
  path: ':id/apply-for-job', component: ApplyForJobFormComponent, canActivate: [AuthGuard]
}, {
  path: 'applied-job-list', component: AppliedJobListComponent, canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
