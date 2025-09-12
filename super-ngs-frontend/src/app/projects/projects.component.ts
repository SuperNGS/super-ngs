import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Projects } from '../classes/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Projects[] = [
    {
      id: 0,
      name: "Project One",
      description: "The first project",
      type: "personal",
      link: "//github.com",
      image: "github.png"
    },
    {
      id: 1,
      name: "Project Two",
      description: "The second project",
      type: "work",
      link: "//linkedin.com",
      image: "linkedin.png"
    },
    {
      id: 2,
      name: "Project Three",
      description: "The third project",
      type: "client"
    }
  ]
}
