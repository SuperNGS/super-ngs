import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  private name: string = "";
  private title: string = "";
  private linkedin: string = "";
  private github: string = "";

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.publicService.getHeadline().subscribe({
      next: async (res) => {
        this.name = await res.name;
        this.title = await res.title;
        this.linkedin = await res.linkedin;
        this.github = await res.github;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
