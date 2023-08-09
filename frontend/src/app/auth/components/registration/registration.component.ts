import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{
  signupForm: FormGroup;

  constructor(private router: Router, 
    private authService: AuthService, 
    private fb: FormBuilder,
    private toastr: ToastrService) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: [''],
      header: [''],
      bio: [''],
      gender: [''],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.matchPasswords('password', 'confirmPassword') });
  }

  matchPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];
      if (password.value !== confirmPassword.value) {
        return confirmPassword.setErrors({ matchPasswords: true });
      }
    }
  }

  private signUp(user: {}) {
    this.authService.signUp(user).subscribe(
      (token: any) => {
        this.toastr.success('Logged in successfully');
        localStorage.setItem("token", token.token);
        this.router.navigate(['user']);
      }, (err) => {
        this.toastr.error('Error', 'Something went wrong');
        console.log(err)})
  }

  onSubmit(): void {
    // console.log(this.signupForm.value);
    if (this.signupForm.valid) {
      this.signupForm.value.confirmPassword = undefined;
      this.signUp(this.signupForm.value);
    }else{
      this.toastr.error('Error', 'Something went wrong');
    }
  }
}
