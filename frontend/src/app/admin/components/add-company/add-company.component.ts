import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {
  companyForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,private adminService: AdminService, private toastr: ToastrService) {
    this.companyForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      aboutCompany: [''],
      CEO: ['', Validators.required],
      numberOfEmployee: ['', Validators.required],
      companyAddress: ['', Validators.required],
      revenue: ['', Validators.required],
      headquarter: ['', Validators.required],
      officialWebsite: ['', Validators.required],
      email: ['', Validators.email],
      dateOfFoundation: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.companyForm.valid){
      this.adminService.addCompany(this.companyForm.value).subscribe((value)=>{
        this.toastr.success('Company added successfullly','');
        this.router.navigate(['admin/applicant-list']);
      },(Err)=>console.log(Err)
      )
    }else{
      console.log(this.companyForm.value);
      for (const controlName in this.companyForm.controls) {
        const control = this.companyForm.controls[controlName];
        if (control.errors) {
          console.log(`Invalid input in ${controlName}: ${JSON.stringify(control.errors)}`);
        }
      }
      
      this.toastr.error('Invalid input','');
    }
  }
}
