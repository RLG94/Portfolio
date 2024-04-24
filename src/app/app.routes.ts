
import { Routes } from '@angular/router';




import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { ProyectsComponent } from './components/proyects/proyects.component';
import { ErrorComponent } from './components/error/error.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';


export const routes: Routes = [{path:'',component:AboutComponent},
                               {path:'about-me', component:AboutComponent},
                               {path:'projects', component: ProyectsComponent},
                               {path:'contact',component:ContactComponent},
                               {path:'socialMedia',component:SocialMediaComponent},
                               {path:'**',component:ErrorComponent}
];


export const appRoutingProviders: any[] = [];
