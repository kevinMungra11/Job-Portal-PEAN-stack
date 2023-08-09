import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.css']
})
export class ApplicantsListComponent implements OnInit {
  applicants: any;

  constructor(private router: Router, private adminService: AdminService, private toastr: ToastrService) {
    this.adminService.getAllApplicants().subscribe((val) => {
      // console.log(val);
      this.applicants = val.rows;
      // this.toastr.success('Success','Something Went Wrong');
    }, (err) => {
      this.toastr.error('Error', 'Something Went Wrong');
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  onSubmit(user: any) {
    this.router.navigate([`/admin/applicant-job-list/${user.id}`]);
  }
}
