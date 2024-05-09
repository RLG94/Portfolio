import {  AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { appRoutingProviders } from './app.routes';
import { PhoneMenuComponent } from './components/phone-menu/phone-menu.component';
import { CommonModule, NgIf } from '@angular/common';




@Component({
  selector: 'app-root',        ///Nombre del componente en su etiqueta HTML
  standalone: true,
  imports: [RouterOutlet,RouterModule,AboutComponent,ContactComponent,ProyectsComponent,appRoutingProviders,PhoneMenuComponent,CommonModule,NgIf],      ///Equivalencia al antiguo app.module.ts, importar componentes aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'proyect-angular';

  showPhoneMenu = false;
  @ViewChild('menuButton') menuButton!: ElementRef;
  
  
  ngAfterViewInit() {
    this.menuButton.nativeElement.addEventListener('click', (event: Event) => {
      event.preventDefault();
      console.log("FUNCIONO");
      this.showPhoneMenu = !this.showPhoneMenu;
    
    });
  }

}
