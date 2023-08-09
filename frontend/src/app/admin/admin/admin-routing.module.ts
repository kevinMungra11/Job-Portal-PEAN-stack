import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from '../components/add-company/add-company.component';
import { AddJobFormComponent } from '../components/add-job-form/add-job-form.component';
import { ApplicantsListComponent } from '../components/applicants-list/applicants-list.component';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { ApplicantJobDetailComponent } from '../components/applicant-job-detail/applicant-job-detail.component';

const routes: Routes = [{
  path: 'add-company', component: AddCompanyComponent, canActivate: [AuthGuard]
},
{
  path: 'add-job', component: AddJobFormComponent, canActivate: [AuthGuard]
},
{
  path: 'applicant-list', component: ApplicantsListComponent, canActivate: [AuthGuard]
},
{
  path: 'applicant-job-list/:id', component: ApplicantJobDetailComponent, canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
