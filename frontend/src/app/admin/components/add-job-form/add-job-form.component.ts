import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-job-form',
  templateUrl: './add-job-form.component.html',
  styleUrls: ['./add-job-form.component.css']
})
export class AddJobFormComponent implements OnInit {
  jobForm: FormGroup;
  companyList: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private adminService: AdminService, private toastr: ToastrService) {
    this.jobForm = this.formBuilder.group({
      jobDesignation: ['', Validators.required],
      header: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      salaryAndBenefits: ['', Validators.required],
      companyInfo: ['', Validators.required],
      applicationInstruction: ['', Validators.required],
      jobType: ['', Validators.required],
      experienceLevel: ['', Validators.required],
      educationRequirement: ['', Validators.required],
      skillsRequirement: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.adminService.getAllCompany().subscribe((comapanies: any) => {
      this.companyList = comapanies;
    }, (err) => {
      console.log(err);
    })
  }

  onSubmit() {
    if (this.jobForm.valid) {
      this.adminService.addJob(this.jobForm.value).subscribe((val) => {
        this.toastr.success('Job Added SuccessFully');
        this.router.navigate(['admin/applicant-list'])
      }, (err) => {
        this.toastr.error('Error');
        console.log(err);

      })
    } else {
      for (const controlName in this.jobForm.controls) {
        const control = this.jobForm.controls[controlName];
        if (control.errors) {
          console.log(`Invalid input in ${controlName}: ${JSON.stringify(control.errors)}`);
        }
      }

      this.toastr.error('Please check inputs', '')
    }
  }
}
