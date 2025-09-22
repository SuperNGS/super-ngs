import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Projects } from '../classes/projects';
import { ProjectsService } from '../services/projects.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: (res) => {
        this.projects = Object.values(res.reverse());
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error("Error Loading Projects", "There was an error while loading projects. Please try again later.");
      }
    });
  }
}
