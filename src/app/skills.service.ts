// src/app/skills.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = 'https://portflio-backend-uiv7.onrender.com/api/skills';

  constructor(private http: HttpClient) { }

  getSkills(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
