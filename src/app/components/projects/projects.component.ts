import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-projects',
  imports: [CardModule, ButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Ready Shoot',
      image: 'https://kylieoliver.com/ready-shoot.png',
      stack: ['html', 'css', 'tailwind', 'javascript', 'react', 'express', 'node js', 'mongo'],
      description: 'A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.',
      credentials: 'For quick login use email: "test@gmail.com" & password: "test"',
      code: 'https://github.com/Kylie240/ready-shoot',
      link: 'https://ready-shoot.netlify.app/',
    },
    {
      title: 'Ready Shoot',
      image: 'https://kylieoliver.com/ready-shoot.png',
      stack: ['html', 'css', 'tailwind', 'javascript', 'react', 'express', 'node js', 'mongo'],
      description: 'A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.',
      credentials: 'For quick login use email: "test@gmail.com" & password: "test"',
      code: 'https://github.com/Kylie240/ready-shoot',
      link: 'https://ready-shoot.netlify.app/',
    },
    {
      title: 'Ready Shoot',
      image: 'https://kylieoliver.com/ready-shoot.png',
      stack: ['html', 'css', 'tailwind', 'javascript', 'react', 'express', 'node js', 'mongo'],
      description: 'A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.',
      credentials: 'For quick login use email: "test@gmail.com" & password: "test"',
      code: 'https://github.com/Kylie240/ready-shoot',
      link: 'https://ready-shoot.netlify.app/',
    },
    {
      title: 'Ready Shoot',
      image: 'https://kylieoliver.com/ready-shoot.png',
      stack: ['html', 'css', 'tailwind', 'javascript', 'react', 'express', 'node js', 'mongo'],
      description: 'A handy rental website for cameras, that utilizes authentication via JSONwebtoken and password encryption. Other features include CRUD operations, product filtering, and state management.',
      credentials: 'For quick login use email: "test@gmail.com" & password: "test"',
      code: 'https://github.com/Kylie240/ready-shoot',
      link: 'https://ready-shoot.netlify.app/',
    },
  ]
}
