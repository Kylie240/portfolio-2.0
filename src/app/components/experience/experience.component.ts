import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import SettingsDto from '../../dtos/settingsDto';
import { SettingsService } from '../../services/settings.service';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgClass],
  template: `
  <div id="experience" class="grid grid-nogutter w-full justify-content-center" style="padding-top: 80px; height: fit-content;">
    <div class="flex flex-column align-items-start gap-3 {{smallDevice ? 'mx-4 mt-8' : 'mx-8'}}"  style="max-width: 800px;">
        <p class="text-3xl text-center font-bold line-height-3" [ngClass]="smallDevice ? 'w-full pb-4 text-4xl' : ''">Work Experience</p>
        <div class="flex flex-column gap-6">
          @for (item of experiences; track $index) {
            <div class="flex justify-content-center align-items-start gap-4" [ngClass]="smallDevice ? 'flex-column' : ''">
              <p style="min-width: fit-content;">{{item.date}}</p>
              <div class="flex flex-column justify-content-start align-items-start gap-2">
                  <p class="font-bold text-xl p-0">{{item.title}}</p>
                  @if(item?.link){
                      <a href="{{item?.link}}" target="_blank">{{item.company}}</a>
                  } @else {
                      <p>{{item.company}}</p>
                  }
                  <p class="mt-2 text-lg">{{item.description}}</p>
              </div>
          </div>
          }
        </div>
    </div>
  </div>`,
  styles: `
    a{
      text-decoration: none;
      color: black;
    }
  `
})
export class ExperienceComponent {
  experiences = [
    {
      date: '03/2024 - Present',
      title: 'Junior Front End Developer',
      company: 'ThreatLocker',
      link: 'https://www.threatlocker.com/',
      description: 'For the past two years I have been gaining invaluable experience, working closely alongside experienced developers and business analysts to maintain and improve the company`s enterprise level software. My role has involved producing new features for ThreatLocker`s web based portal, solving both internal and client related UI and backend bug issues, and providing documentation and insight for front end practices. In this role I have gone from front end to full stack work with C#, .Net, and Angular, and plan to continue growing my skillset.'
    },
    {
      date: '09/2023 - 11/2023',
      title: 'Front End Developer Volunteer',
      company: 'Greenstand',
      link: 'https://greenstand.org/',
      description: 'As a Front End Developer Volunteer, I contributed to building and improving responsive, user-friendly web interfaces using modern technologies. I collaborated with designers and backend developers to implement features, optimize performance, and ensure cross-browser compatibility. Through this experience, I strengthened my skills in front-end architecture, accessibility, and version control while supporting a mission-driven organization.'
    },
    {
      date: '02/2020 - 03/2024',
      title: 'Webmaster',
      company: 'Claw Collective',
      link: '',
      description: 'As the Webmaster for a small nail business, I managed the company’s online presence, including website design, maintenance, and performance optimization. I implemented SEO strategies to improve search visibility, updated content to reflect current promotions and services, and ensured a smooth, user-friendly experience for customers purchasing from the site. My role combined technical management with creative branding to help grow the business’s digital reach and customer engagement.'
    },
  ]
  isTablet: boolean = false;
    smallDevice: boolean = false;
    settings: SettingsDto = new SettingsDto();
  
    constructor(
      private breakpointObserver: BreakpointObserver,
      private settingsService: SettingsService,
    ){
      const tabletBreakpoint = '(max-width: 1200px)';
      const standardBreakpoint = '(max-width: 1400px)';
      const smallDevice = '(max-width: 600px)';
  
      this.breakpointObserver.observe([tabletBreakpoint, standardBreakpoint, smallDevice]).subscribe(data => {
        this.isTablet = data.breakpoints[tabletBreakpoint];
        this.smallDevice = data.breakpoints[smallDevice];
      });
  
      this.settingsService.data$.subscribe(data => {
        this.settings = data;
      })
    }
}
