import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PopoverModule } from 'primeng/popover';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Menu } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { SettingsService } from '../../services/settings.service';
import SettingsDto from '../../dtos/settingsDto';

@Component({
  selector: 'app-navbar',
  imports: [
    ButtonModule, 
    ToggleSwitchModule, 
    ToolbarModule, 
    PopoverModule,
    FormsModule, 
    InputTextModule, 
    CheckboxModule, 
    IconFieldModule, 
    InputIconModule,
    Menu,
    DialogModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  settings: SettingsDto = new SettingsDto();
  checked: boolean = false;
  isTablet: boolean = false;
  visible: boolean = false;
  items = [
    {
        items: [
            {
              label: 'Home',
              // icon: 'fa-solid fa-house',
              command: () => {
                document.getElementById('header')?.scrollIntoView({ behavior: 'smooth' });
              }
            },
            {
              label: 'About',
              // icon: 'fa-solid fa-avatar',
              command: () => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }
            },
            {
              label: 'Experience',
              // icon: 'fa-solid fa-tool',
              command: () => {
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              }
            },
            {
              label: 'Projects',
              // icon: 'fa-solid fa-star',
              command: () => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }
            },
            // {
            //   label: 'Contact',
            //   // icon: 'fa-solid fa-phone',
            //   command: () => {
            //     document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            //   }
            // }
        ]
    },
    {
      items: [
          {
              label: 'LinkedIn',
              // icon: 'fa-brands fa-linkedin',
              url: 'https://linkedin.com/in/kylie-oliver'
          },
          {
              label: 'Github',
              // icon: 'fa-brands fa-github',
              url: 'https://linkedin.com/in/kylie-oliver'
          },
      ]
  }
];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private settingsService: SettingsService,
  ) {
    const tabletBreakpoint = '(max-width: 1000px)';
    const standardBreakpoint = '(max-width: 1400px)';

    this.breakpointObserver.observe([tabletBreakpoint, standardBreakpoint]).subscribe(data => {
      this.isTablet = data.breakpoints[tabletBreakpoint];
    });
  };

    ngOnInit(): void {
      if(this.breakpointObserver.isMatched('(max-width: 1000px)')) {
        this.isTablet = true;
      }
    }

    handleSettingsChange() {
      this.settingsService.setData(this.settings);
    }

    handleScroll(ref: string) {
      document.getElementById(ref)?.scrollIntoView();
    }
  }
