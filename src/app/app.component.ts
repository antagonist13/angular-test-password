import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomePageComponent,RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-test-password';
}
