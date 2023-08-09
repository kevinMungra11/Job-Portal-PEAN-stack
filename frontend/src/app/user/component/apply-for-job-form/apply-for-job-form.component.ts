import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-for-job-form',
  templateUrl: './apply-for-job-form.component.html',
  styleUrls: ['./apply-for-job-form.component.css']
})
export class ApplyForJobFormComponent{
  applyForm: FormGroup;
  formData = new FormData();

  constructor(private router: Router ,private fb: FormBuilder,private userService : UserService, private toastr: ToastrService,private http:HttpClient) {
    this.applyForm = this.fb.group({
      workExperience: ['', Validators.required],
      skills: ['', Validators.required],
      resume: ['', Validators.required],
      coverLetter: ['', Validators.required],
      experienceLetter: ['', Validators.required]
    });
  }

  onFileSelected(inputName: string, event: any) {
    const file: File = event.target.files[0];
    this.formData.append(inputName, file, file.name);
  }

  onSubmit(): void {
    if(this.applyForm.valid){
      console.log(this.applyForm.value);

      this.formData.append('workExperience', this.applyForm.get('workExperience')?.value);
      this.formData.append('skills', this.applyForm.get('skills')?.value);
      
      let id = this.userService.getJobId();
      
      this.toastr.info('Uploading file...', 'Please wait', {
        positionClass: 'toast-top-center',
        progressBar: true,
        closeButton: true,
      });
      this.userService.applyForJob(this.formData,id!==undefined?id:'').subscribe((res)=>{
        this.toastr.success('Applied Successfully','');
        // console.log(res);
        this.router.navigate(['user']);

      },(err)=>{
        console.log(err);        
        this.toastr.success('Error','Something went wrong');
      });

    }else{
      this.toastr.success('Error','Something went wrong');

    }
  }
}
