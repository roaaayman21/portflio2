import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(
      (data: any[]) => {
        this.skills = data.map(skill => ({
          icon: `https://portflio-backend-uiv7.onrender.com/uploads/${skill.photo}`,
          name: skill.name,
        }));
      },
      (error) => {
        console.error('Error fetching skills:', error);
      }
    );
  }
}
