import { Component, OnInit } from '@angular/core';
import { ApiService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe(
      (data: any[]) => {
        this.projects = data.map(project => ({
          photo: project.photo,
          name: project.name,
          title: project.title,
          description: project.description,
          link: project.link
        }));
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  openGitHub(link: string): void {
    window.open(link, '_blank');
  }
}
