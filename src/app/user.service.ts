import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { HttpHeaders } from '@angular/common/http';
import { BasicReport } from './BasicReport';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin" : "",
    "Allow": "GET",
    "Content-type": "Application/json"
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiBaseUrl}`,httpOptions);
  }


  postUser( name:string,  role :string)
  {
    return this.http.post(`${this.apiBaseUrl}/`,{name,role},httpOptions).subscribe(data =>  {
      console.log(data);
    });

  }

  public addEmployee(basicReport: BasicReport): Observable<BasicReport> {
    return this.http.post<BasicReport>(`${this.apiBaseUrl}/financereport/add`,basicReport);
  }
  public getReport(): Observable<BasicReport[]> {
    return this.http.get<BasicReport[]>(`${this.apiBaseUrl}/financereport/all`);
  }

  public getReportByCmId( cmId: String): Observable<BasicReport[]> {
    return this.http.get<BasicReport[]>(`${this.apiBaseUrl}/financereport/find/${cmId}`);
  }

  /// LOGIN

  public getLogin( userName: String): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/login/find/${userName}`);
  }
}