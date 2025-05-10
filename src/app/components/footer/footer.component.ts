import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="grid grid-nogutter w-full flex flex-column align-content-center my-6" style="height: fit-content;">
      <div style="border-top: 2px solid lightgrey; width: 85%;">
        <div class="w-full flex justify-content-between align-items-center mt-3" >
          <p>2025 Kylie Oliver. All rights reserved.</p>
          <div class="flex gap-4">
            <a target="_blank" href="https://github.com/Kylie240">GitHub</a>
            <a target="_blank" href="https://linkedin.com/in/kylie-oliver">LinkedIn</a>
            <a target="_blank" href="">Twitter</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    a{
      text-decoration: none;
      color: black;
    }
  `
})
export class FooterComponent {

}
