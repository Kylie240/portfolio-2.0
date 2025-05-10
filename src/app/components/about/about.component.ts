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
  tools = [
    {
      name: 'VS Code',
      icon: '/src/app/assets/icons/html-icon.svg'
    },
    {
      name: 'SSMS',
      icon: 'src/app/assets/icons/css-icon.svg'
    },
    {
      name: 'Redgate',
      icon: 'src/app/assets/icons/css-icon.svg'
    },
    {
      name: 'Jira',
      icon: 'src/app/assets/icons/scss-icon.svg'
    },
    {
      name: 'Confluence',
      icon: 'src/app/assets/icons/javascript-icon.svg'
    },
    {
      name: 'Github',
      icon: 'src/app/assets/icons/javascript-react.svg'
    },
    {
      name: 'PrimeNG',
      icon: 'src/app/assets/icons/javascript-angular.svg'
    },
    {
      name: 'Prime Flex',
      icon: 'src/app/assets/icons/javascript-angular.svg'
    },
    {
      name: 'Tailwind',
      icon: 'src/app/assets/icons/javascript-angular.svg'
    },
    {
      name: 'Figma',
      icon: 'src/app/assets/icons/javascript-angular.svg'
    },
  ]
  techStack = [
    {
      name: 'HTML',
      icon: '/src/app/assets/icons/html-icon.svg'
    },
    {
      name: 'CSS',
      icon: 'src/app/assets/icons/css-icon.svg'
    },
    {
      name: 'SCSS',
      icon: 'src/app/assets/icons/scss-icon.svg'
    },
    {
      name: 'Javascript',
      icon: 'src/app/assets/icons/javascript-icon.svg'
    },
    {
      name: 'React',
      icon: 'src/app/assets/icons/javascript-react.svg'
    },
    {
      name: 'Angular',
      icon: 'src/app/assets/icons/javascript-angular.svg'
    },
    {
      name: 'Typescript',
      icon: 'src/app/assets/icons/javascript-typescript.svg'
    },
    {
      name: 'C#',
      icon: 'src/app/assets/icons/c#.png'
    },
    {
      name: 'SQL',
      icon: 'src/app/assets/icons/javascript-typescript.svg'
    },
    {
      name: '.NET',
      icon: 'src/app/assets/icons/.net.png'
    },
  ]
  image = 'src/app/assets/icons/typescript-icon.svg'
  color: string[] = [
    '#ff6b6b',
    'f06595',
    '#bdff21',
    '#d475dd',
    '#6b6bff',
    '#65f0f0'
  ]

  handleScroll() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }
}
