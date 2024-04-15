
import { Routes } from '@angular/router';




import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ProyectsComponent } from './components/proyects/proyects.component';
import { ErrorComponent } from './components/error/error.component';


export const routes: Routes = [{path:'',component:AboutComponent},
                               {path:'About-me', component:AboutComponent},
                               {path:'proyects', component: ProyectsComponent},
                               {path:'Contact',component:ContactComponent},
                               {path:'**',component:ErrorComponent}
];


export const appRoutingProviders: any[] = [];
