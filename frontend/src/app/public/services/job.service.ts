import { Injectable } from '@angular/core';
import { Job } from '../../_models/job';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobDetails: Job | undefined;
  private url = 'http://localhost:1111/job';

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job> {
    return this.http.get<Job>(`${this.url}/all`);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.url}/${id}`)
  }

  setJobData(job: Job) {
    this.jobDetails = job;
    return;
  }

  getJobData() {
    return this.jobDetails === undefined ? {} : this.jobDetails;
  }

  getJobDetailsOfUser(): Observable<any> {
    return this.http.get<any>(`http://localhost:1111/user/job`);
  }

  searchJob(search: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("search", search);
    return this.http.get<any>(`http://localhost:1111/job/search`, { params: queryParams })
  }

  location(): Observable<any> {
    return this.http.get<any>(`http://location:1111/job/location/all`);
  }
}
