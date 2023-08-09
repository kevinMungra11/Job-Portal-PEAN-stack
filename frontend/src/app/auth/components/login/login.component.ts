import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  private signin(user: {}) {
    this.authService.signIn(user).subscribe(
      (token: any) => {
        this.toastr.success('Welcome', 'Succesfully Loggedin');
        localStorage.setItem("token", token.token);
        if (this.authService.isAdmin()) {
          this.router.navigate(['admin/applicant-list']);
          return;
        } else {
          this.router.navigate(['user'])
        }
      }, (err) => {
        this.toastr.error('Error', 'Something went wrong');
        console.log(err)
      })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.signin(this.loginForm.value);
    }
  }

}
