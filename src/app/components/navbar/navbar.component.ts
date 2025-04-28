import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { PopoverModule } from 'primeng/popover';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule, ToggleSwitchModule, ToolbarModule, PopoverModule,FormsModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  name: string = '';
  email: string = '';
  theme: string = '';
  checked: boolean = false;

  handleSettingsChange() {
    
  }
}
