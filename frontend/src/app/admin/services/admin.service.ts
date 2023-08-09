import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private companyDetails: any;
  private url = 'http://localhost:1111/company';
  private id = '';

  constructor(private http: HttpClient) { }

  getAllCompany(): Observable<any> {
    return this.http.get(`${this.url}/all`);
  }

  getCompanyById(id: string): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }

  getJobDetailsOfOneUser(id: string) {
    return this.http.get(`http://localhost:1111/user/job/${id}`)
  }

  addCompany(company: any) {
    return this.http.post(`${this.url}/add`, company);
  }

  getAllApplicants(): Observable<any> {
    return this.http.get(`http://localhost:1111/user/all/jobs`);
  }

  addJob(job: any): Observable<any> {
    return this.http.post(`http://localhost:1111/job/add`, job);
  }
}
