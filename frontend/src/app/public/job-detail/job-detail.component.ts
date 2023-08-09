import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from 'src/app/_models/job';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: any;
  private id!: string;

  constructor(private router: Router, private jobService: JobService, private route: ActivatedRoute,
    private userService: UserService) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.jobService.getJobById(this.id).subscribe((job) => {
        console.log(job);
        this.job = job;
      }, (err) => {
        console.log(err);
      })
    });
  }

  ngOnInit(): void {
  }


  handleClick() {
    this.userService.setJobId(this.id);
    this.router.navigate([`/user/${this.id}/apply-for-job`]);
  }
}
