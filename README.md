# Angular-Routing
this repository is for describing the angular routing.
### for routing you need to change two file one is app.route.ts and another is where you are providing the routing link or navigation
# here is example how routing works in angular 17 or 18

# here is code for app.route.ts file of angular

```javascript
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


```

# here is the code for app.component.html

```html

<nav>
  <ul>
    <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">Home</a></li>
    <li><a routerLink="/about" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">about</a></li>
    <li><a routerLink="/details" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">details</a></li>
    <li><a routerLink="/contact" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">contactus</a></li>
  </ul>
</nav>

<router-outlet></router-outlet>

<footer style="text-align: center;">
  <p>all rights reserved © {{year}} by Bharat yadav  </p>
</footer>

```
