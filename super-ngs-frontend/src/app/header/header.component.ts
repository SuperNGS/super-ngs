import { Component, OnInit } from '@angular/core';
import { PublicService } from '../services/public.service';
import { Headline } from '../classes/headline';

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

  headline?: Headline;

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.publicService.getHeadline().subscribe({
      next: async (res) => {
        this.headline = await res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
