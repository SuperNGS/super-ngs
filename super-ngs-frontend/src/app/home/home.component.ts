import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  headshotURL: string = "";
  bio: string = ``;

  constructor(private publicService: PublicService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.publicService.getHeadshot().subscribe({
      next: (res) => {
        this.headshotURL = res;
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error("Error Loading Headshot", "There was an error while loading the headshot image. Please try again later.");
      },
    });
    this.publicService.getBio().subscribe({
      next: (res) => {
        this.bio = res;
      },
      error: (err) => {
        console.error(err);
        this.notificationService.error("Error Loading Bio", "There was an error while loading the bio. Please try again later.");
      }
    });
  }
}
