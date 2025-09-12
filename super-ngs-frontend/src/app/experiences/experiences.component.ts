import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  experiences = [
    {
      id: 0,
      company: "Experience One",
      position: "Test One",
      points: [
        "Point One",
        "Point Two",
        "Point Three"
      ],
      start_date: "08/2024",
      end_date: "08/2025"
    },
    {
      id: 1,
      company: "Experience Two",
      position: "Test Two",
      points: [
        "Point One",
        "Point Two",
        "Point Three"
      ],
      start_date: "07/2020",
      end_date: "10/2021",
      image: "rit.jpg"
    },
    {
      id: 2,
      company: "Experience Three",
      position: "Test Three",
      points: [
        "Point One",
        "Point Two",
        "Point Three"
      ],
      start_date: "08/2026",
      end_date: "present",
      image: "rit.jpg",
      link: "//rit.edu"
    }
  ]
}
