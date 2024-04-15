import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { appRoutingProviders } from './app.routes';



@Component({
  selector: 'app-root',        ///Nombre del componente en su etiqueta HTML
  standalone: true,
  imports: [RouterOutlet,AboutComponent,ContactComponent,ProyectsComponent,appRoutingProviders],      ///Equivalencia al antiguo app.module.ts, importar componentes aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect-angular';
}
