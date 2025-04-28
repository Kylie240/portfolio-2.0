import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-about',
  imports: [CardModule, ChipModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  languages: string[] = [
    'HTML', 'CSS', 'Javascript',
    'React', 'Angular', 
  ]
  tools: string[] = [
    'VS Code', 'SQL Server Management Studio', 'Jira',
    'Github', 'Tailwind', 
  ]
  developing: string[] = [
    'C#', 'SQL', '.NET'
  ]

  windowsScroll() {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }
}
