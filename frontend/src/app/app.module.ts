import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public/public.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';
import { AppliedJobListComponent } from './user/component/applied-job-list/applied-job-list.component';
import { AddJobFormComponent } from './admin/components/add-job-form/add-job-form.component';
import { ApplicantsListComponent } from './admin/components/applicants-list/applicants-list.component';
import { AddCompanyComponent } from './admin/components/add-company/add-company.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { JobListComponent } from './public/job-list/job-list.component';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { JobDetailComponent } from './public/job-detail/job-detail.component';
import { ApplyForJobFormComponent } from './user/component/apply-for-job-form/apply-for-job-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/guards/auth.guard';
import { TokenInterceptorService } from './auth/token-interceptor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ApplicantJobDetailComponent } from './admin/components/applicant-job-detail/applicant-job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    DashboardComponent,
    AppliedJobListComponent,
    AddJobFormComponent,
    ApplicantsListComponent,
    AddCompanyComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    JobListComponent,
    LandingPageComponent,
    JobDetailComponent,
    ApplyForJobFormComponent,
    ApplicantJobDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
