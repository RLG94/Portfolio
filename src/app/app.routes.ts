
import { Routes } from '@angular/router';




import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ErrorComponent } from './components/error/error.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';


export const routes: Routes = [{path:'',component:AboutComponent},
                               {path:'about-me', component:AboutComponent},
                               {path:'projects', component: ProyectsComponent},
                               {path:'contact',component:ContactComponent},
                               {path:'technologies',component:TechnologiesComponent},
                               {path:'**',component:ErrorComponent}
];


export const appRoutingProviders: any[] = [];
