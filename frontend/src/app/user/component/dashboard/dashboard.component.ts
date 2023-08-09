import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/_models/job';
import { JobService } from 'src/app/public/services/job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // jobs: Job | undefined;
  jobDetails: any | undefined;
  location: any;

  constructor(private router: Router, private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getAllJobs().subscribe((job) => {
      this.jobDetails = job;
    })
    this.jobService.location().subscribe((val) => {
      this.location = val
    })
  }

  searchJobs(keyword: string) {
    this.jobService.searchJob(keyword).subscribe((val) => {
      this.jobDetails = val;
    }, (err) => {
      console.log(err);
    })
  }

  handleClickApply(job: any) {
    this.jobService.setJobData(job);
    this.router.navigate(['/user/apply-for-job']);
  }
  handleClickDetail(job: any) {
    this.router.navigate([`home/job/${job.id}`]);
  }
}
