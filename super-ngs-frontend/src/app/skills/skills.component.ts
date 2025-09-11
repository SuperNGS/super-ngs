import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      id: 0,
      name: "Skill One",
      description: "This is a description"
    },
    {
      id: 1,
      name: "Skill Two",
      description: "This is another description"
    },
    {
      id: 2,
      name: "Skill Three",
      description: "This is yet another description"
    }
  ]
}
