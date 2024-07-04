import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

baseAPI = environment.apiUrl
  constructor(private http : HttpClient) { }
      add(user:any): Observable<any>{
        return this.http.post<any>(this.baseAPI,user)
        
      }
}
