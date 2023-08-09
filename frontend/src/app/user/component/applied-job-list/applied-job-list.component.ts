import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/public/services/job.service';

@Component({
  selector: 'app-applied-job-list',
  templateUrl: './applied-job-list.component.html',
  styleUrls: ['./applied-job-list.component.css']
})
export class AppliedJobListComponent implements OnInit {
  jobList: any;

  constructor(private router: Router, private jobService: JobService) {
    this.jobService.getJobDetailsOfUser().subscribe((val) => {
      this.jobList = val.Job_Infos;
      console.log(val);
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit(): void {

  }

  onClick(job: any) {
    this.router.navigate([`home/job/${job.id}`])
  }
}
