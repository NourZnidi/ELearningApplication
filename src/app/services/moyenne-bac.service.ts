import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoyenneBacService {
  apiUrl = "";

  constructor(private http:HttpClient) { }


  getAllInformation():Observable<any>{
      return this.http.get<any>(`${this.apiUrl}/all`)
  }
}
