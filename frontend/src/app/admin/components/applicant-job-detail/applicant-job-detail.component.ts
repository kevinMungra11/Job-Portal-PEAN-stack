import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-applicant-job-detail',
  templateUrl: './applicant-job-detail.component.html',
  styleUrls: ['./applicant-job-detail.component.css']
})
export class ApplicantJobDetailComponent {
  applicantDetails: any;
  id: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private adminService: AdminService, private toastr: ToastrService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.reload(this.id);
    });
  }

  reload(id: string) {
    this.adminService.getJobDetailsOfOneUser(id).subscribe((val) => {
      console.log(val);

      this.applicantDetails = val;
    }, (err) => {
      console.log(err);
    })

  }

  openResume(id: string) {
    const url = `http://localhost:1111/user/resume/${id}`;
    window.open(url, '_blank');
  }

  openCoverLetter(id: string) {
    const url = `http://localhost:1111/user/resume/${id}`;
    window.open(url, '_blank');
  }

  openExpLetter(id: string) {
    const url = `http://localhost:1111/user/resume/${id}`;
    window.open(url, '_blank');
  }

  accept(job: any) {
    this.http.put(`http://localhost:1111/job/update-status/`, { userId: job.user_id, jobId: job.job_id, status: "Accepted" })
      .subscribe((val) => {
        this.reload(this.id)
        console.log(val);
      }, (err) => {
        console.log(err);
      })
  }

  reject(job: any) {
    this.http.put(`http://localhost:1111/job/update-status/`, { userId: job.user_id, jobId: job.job_id, status: "Accepted" })
      .subscribe((val) => {
        this.reload(this.id)
        console.log(val);
      }, (err) => {
        console.log(err);
      })
  }
}
