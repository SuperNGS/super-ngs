import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  headshotURL: string = "";

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.getHeadshot().subscribe({
      next: (res) => {
        console.log(res);
        this.headshotURL = res;
      },
      error(err) {
        console.error(err);
      },
    });
  }
}
