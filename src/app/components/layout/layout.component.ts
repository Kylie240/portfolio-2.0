import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent, 
    AboutComponent, 
    ProjectsComponent, 
    NavbarComponent, 
    ExperienceComponent, 
    ContactComponent, 
    FooterComponent
  ],
  template: `
    <app-navbar />
    <app-header />
    <app-about />
    <app-experience />
    <app-projects />
    <app-contact />
    <app-footer />
  `,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
