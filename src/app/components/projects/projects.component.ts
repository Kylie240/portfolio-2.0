import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'app-projects',
  imports: [CardModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  isSmallScreen: boolean = false;
  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe('max-width: 1400px').subscribe(state => {
      if (!state.matches) {
        this.isSmallScreen = false;
      }
    });
  }
  projects = [
    {
      title: 'Ready Shoot',
      image: 'https://kylieoliver.com/ready-shoot.png',
      stack: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React', 'Express', 'Node JS', 'Mongo DB'],
      description: 'A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.',
      credentials: 'For quick login use email: "test@gmail.com" & password: "test"',
      code: 'https://github.com/Kylie240/ready-shoot',
      link: 'https://ready-shoot.netlify.app/',
    },
    {
      title: 'Starting Line',
      image: 'https://kylieoliver.com/starting-line.png',
      stack: ['HTML', 'CSS', 'Tailwind', 'Javascript'],
      description: 'A modern and responsive E-commerce site for men`s footwear. This project includes product filtering, state management, and reusable components.',
      code: 'https://github.com/Kylie240/ecommerce-store',
      link: 'https://starting-line.netlify.app/',
    },
    {
      title: 'Word Search',
      image: 'https://kylieoliver.com/word-search.png',
      stack: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React'],
      description: 'A beautifully built dictionary site, created with API calls via Axios. This dictionary gives users the ability to adjust displayed results with several different filtering options.',
      code: 'https://github.com/Kylie240/word-search',
      link: 'https://oliver-word-search.netlify.app/',
    },
    {
      title: 'Smoothie Queen',
      image: 'https://kylieoliver.com/smoothie-queen.png',
      stack: ['HTML', 'CSS', 'Tailwind', 'Javascript', 'React', 'express', 'Node JS', 'Mongo DB'],
      description: 'Find, save, and create you favorite smoothie recipes. Features the ability to create an account, edit saved recipes, and create a shopping list of based off of listed ingredients.',
      credentials: 'For quick login use email: "test@gmail.com" & password: "test"',
      code: 'https://github.com/Kylie240/recipe-app',
      link: 'https://oliver-smoothie-queen.netlify.app/',
    },
  ]

  handleLink(link: string) {
    window.open(link, '_blank');
  }
}
