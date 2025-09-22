import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SkillsService } from '../services/skills.service';
import { Skills } from '../classes/skills';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  softSkills: Skills[] = [];
  technicalSkills: Skills[] = [];

  constructor(private skillsService: SkillsService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe({
      next: (res) => {
        // Convert skills object to two arrays, soft and technical, and save
        this.softSkills = Object.values(res.soft);
        this.technicalSkills = Object.values(res.technical);
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error("Error Loading Skills", "There was an error while loading skills. Please try again later.");
      }
    })
  }
}
