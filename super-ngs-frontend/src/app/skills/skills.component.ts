import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SkillsService } from '../services/skills.service';
import { Skills } from '../classes/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (res) => {
        // Convert skills object to an array and save
        this.skills = Object.values(res);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
