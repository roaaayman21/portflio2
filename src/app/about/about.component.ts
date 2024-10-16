import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about: any = {
    name: '',
    description: '',
    photo: '',
    email: '',
    portfolioUrl: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAboutData();
  }

  getAboutData(): void {
    this.http.get('https://portflio-backend-uiv7.onrender.com/api/about').subscribe(
      (data: any) => {
        this.about = data;
      },
      (error) => {
        console.error('Error fetching About data:', error);
      }
    );
  }
}
