import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private router: Router, private authService: AuthService) { }
  handleClick() {
    this.router.navigate(['auth/login']);
  }
  isSignedIn() {
    return this.authService.isSignedIn();
  }
}
