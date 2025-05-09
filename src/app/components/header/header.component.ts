import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  template: `
    <div id="header" class="grid grid-nogutter w-full" style="padding-top: -80px; height: 100vh;">
      <div class="w-full h-full flex justify-content-center align-items-center">
        <div class="flex flex-column justify-content-center align-items-center mx-8" style="max-width: 830px;">
          <div class="flex flex-column justify-content-center align-items-center">
            <img alt="Card" class="border-circle" [style]="{ width: '120px', height: '120px' }" src="https://media.licdn.com/dms/image/D4E03AQH1o4Avl01RCA/profile-displayphoto-shrink_800_800/0/1698873322772?e=2147483647&v=beta&t=bU_iaAUxnhokAcSmCwTi-LFF1MTZ12S4OruFTeeneoQ" />
            <div class="text-2xl font-light py-3">Hello! My name is Kylie</div>
            <div class="line-height-1 text-center pb-2 {{isTablet ? 'text-7xl' : 'text-8xl'}}">Full Stack developer based in Orlando.</div>
            <p class="text-lg text-center line-height-3 mx-4 text-gray-800">I am a full stack developer with a specialty in front end angular development. Currently, I am expanding my skillset working at one of the world's leading Cybersecurity platforms.</p>
          </div>
          <div class="flex align-items-center gap-3 pt-3">
            <button [style]="{'height': '40px', 'width': '40px'}" class="text-5xl text-green-600" pButton icon="fa-brands fa-github" [rounded]="true" [text]="true" severity="secondary" (click)="handleLink('https://github.com/Kylie240')"></button>
            <p-button styleClass="pb-2" [style]="{'height': '40px', 'width': '40px'}" [rounded]="true" icon="fa-brands fa-linkedin-in text-xl" severity="info" (onClick)="handleLink('https://linkedin.com/in/kylie-oliver')"/>
            <p-button  [style]="{'height': '50px'}" styleClass="px-4 py-2" class="pl-1" [rounded]="true" label="my resume" variant="outlined" icon="fa-solid fa-download" iconPos="right" severity="contrast" />
          </div>
        </div>
      </div>
    </div>
    `,
})
export class HeaderComponent {
  isTablet: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
  ){
    const tabletBreakpoint = '(max-width: 1200px)';
    const standardBreakpoint = '(max-width: 1400px)';

    this.breakpointObserver.observe([tabletBreakpoint, standardBreakpoint]).subscribe(data => {
      this.isTablet = data.breakpoints[tabletBreakpoint];
    })
  }

  handleLink(link: string) {
    window.open(link, '_blank');
  }
}
