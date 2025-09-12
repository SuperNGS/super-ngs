import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Experiences } from '../classes/experiences';
import { ExperiencesService } from '../services/experiences.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatCardModule, DatePipe],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
  providers: [DatePipe]
})
export class ExperiencesComponent implements OnInit {
  experiences: Experiences[] = [];

  constructor(private experiencesService: ExperiencesService) {}

  ngOnInit(): void {
    this.experiencesService.getExperiences().subscribe({
      next: (res) => {
        this.experiences = res.reverse();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
