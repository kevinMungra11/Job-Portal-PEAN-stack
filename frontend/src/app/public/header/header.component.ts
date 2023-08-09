import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  isSignedIn() {
    return this.authService.isSignedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToUser() {
    this.router.navigate(['/user']);
  }

  navigateToSignin() {
    this.router.navigate(['auth/login'])
  }

  navigateToSignup() {
    this.router.navigate(['auth/signup'])
  }

  navigateToSignout() {
    this.authService.signOut().subscribe((val) => {
      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
    })
  }

  navigateToAddJob() {
    this.router.navigate(['/admin/add-job']);
  }

  navigateToAddCompany() {
    this.router.navigate(['/admin/add-company']);
  }

  navigateToApplicantList() {
    this.router.navigate(['/admin/applicant-list'])
  }

  navigateToJobList() {
    this.router.navigate(['/user/applied-job-list'])
  }

}
