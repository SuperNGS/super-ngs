import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencesComponent } from './experiences/experiences.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'experiences',
        component: ExperiencesComponent
    },
    {
        path: "skills",
        component: SkillsComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "contact",
        component: ContactComponent
    }
];
