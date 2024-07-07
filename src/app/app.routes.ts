import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'register', component: RegistrationComponent }
];
