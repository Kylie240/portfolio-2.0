import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      date: 'Mar 2024 - Present',
      title: 'Junior Front End Developer',
      company: 'ThreatLocker',
      link: 'https://www.threatlocker.com/',
      description: 'For the past year I have been gaining invaluable experience, working closely alongside backend developers and business analysts to maintain and improve the company`s enterprise level software. My role has involved producing new features for ThreatLocker`s web based portal, solving both internal and client related UI and backend bug issues, and providing documentation and insight for front end practices.'
    },
    {
      date: 'Sep 2023 - Nov 2023',
      title: 'Front End Developer Volunteer',
      company: 'Greenstand',
      link: 'https://greenstand.org/',
      description: 'For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.'
    },
    {
      date: 'Feb 2020 - Mar 2024',
      title: 'Webmaster',
      company: 'Claw Collective',
      link: '',
      description: 'For the past two years, I have primarily worked with startups, developing products from the ground up. I have led the frontend development of an AI-powered Interview Platform, building a job marketplace for dentists, and creating a system for managing promotional prize games.'
    },
  ]
}
