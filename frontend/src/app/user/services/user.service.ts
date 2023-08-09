import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:1111/job';
  JobId: string | undefined;

  constructor(private http: HttpClient) { }

  getJobId(){
    return this.JobId;
  }

  setJobId(id:string){
    this.JobId = id;
    return;
  }

  applyForJob(job:any,id:string): Observable<any>{
    return this.http.post(`${this.url}/${id}/apply`,job);
  }

}
