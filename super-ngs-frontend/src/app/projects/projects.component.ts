import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Projects } from '../classes/projects';
import { ProjectsService } from '../services/projects.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: (res) => {
        this.projects = Object.values(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
