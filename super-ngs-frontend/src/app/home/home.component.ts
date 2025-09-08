import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';

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

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.publicService.getHeadshot().subscribe({
      next: (res) => {
        console.log(res);
        this.headshotURL = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
    this.publicService.getBio().subscribe({
      next: (res) => {
        console.log(res);
        this.bio = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
