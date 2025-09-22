import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Experiences } from '../classes/experiences';
import { ExperiencesService } from '../services/experiences.service';
import { DatePipe } from '@angular/common';
import { NotificationService } from '../services/notification.service';

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

  constructor(private experiencesService: ExperiencesService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.experiencesService.getExperiences().subscribe({
      next: (res) => {
        this.experiences = res.reverse();
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error("Error Loading Experiences", "There was an error while loading experiences. Please try again later.");
      }
    });
  }
}
