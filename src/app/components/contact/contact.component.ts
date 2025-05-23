import { Component } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [TextareaModule, InputTextModule, FormsModule, ButtonModule],
  template: `
  <div id="contact" class="relative grid grid-nogutter w-full" style="padding-top: 80px; height: 100vh;">
      <div class="w-full h-full flex justify-content-center align-items-center">
        <div class="flex flex-column justify-content-center align-items-center" style="max-width: 700px;">
          <p class="text-lg text-center line-height-3">Let's connect!</p>
          <div class="text-7xl line-height-1 text-center pb-1">Get In Touch</div>
          <p class="text-lg text-center line-height-4 pb-4">Feel free to reach out to me about any question or concern, by filling in your info in the contact form. I look forward to hearing from you!</p>
          <div class="flex flex-column justify-content-center align-items-center gap-4" style="width: 700px;">
            <div class="flex justify-content-between w-full gap-4">
              <input class="bg-white" style="width: 350px;" type="text" pInputText [(ngModel)]="name" placeholder="Enter your name"/>
              <input style="width: 350px;" type="text" pInputText [(ngModel)]="email" placeholder="Enter your email"/>
            </div>
            <textarea class="w-full" rows="10" cols="30" pTextarea [(ngModel)]="message" placeholder="Enter your message"></textarea>
          </div>
          <p-button class="pt-4" styleClass="px-3 pt-2" label="Submit now" [rounded]="true" severity="contrast" />
        </div>
      </div>

      <!-- Color blob -->
    <span class="blob absolute" style="bottom: 20%; left: 30%; opacity: .2;"></span>
  </div>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = ''
  email: string = ''
  message: string = ''
}
