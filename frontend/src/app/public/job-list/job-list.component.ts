import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from 'src/app/_models/job';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job | undefined;
  jobDetails: any | undefined;

  constructor(private router: Router, private jobService: JobService, private userService: UserService) {
    this.jobService.getAllJobs().subscribe((job: any) => {
      this.jobDetails = job;
    })
  }

  ngOnInit() {
  }

  handleClickApply(job: any) {
    this.userService.setJobId(job.id);
    this.router.navigate([`/user/${job.id}/apply-for-job`]);
  }
  handleClickDetail(job: any) {
    this.jobService.setJobData(job);
    this.router.navigate([`home/job/${job.id}`]);
  }
}
