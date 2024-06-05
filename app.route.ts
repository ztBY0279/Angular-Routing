import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
//import path from 'path';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:"details",
        component:DetailsComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent
    }
    
];
// defining route wise component
