// src/app/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://portflio-backend-uiv7.onrender.com/api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
