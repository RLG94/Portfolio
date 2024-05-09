import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-phone-menu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './phone-menu.component.html',
  styleUrl: './phone-menu.component.css'
})
export class PhoneMenuComponent {

}
