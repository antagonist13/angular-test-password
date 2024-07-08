import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IregisterForm } from './interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(private router: Router, private fb: FormBuilder) { }

  form: FormGroup<IregisterForm> = new FormGroup({
    firstName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl<string | null>(null, [Validators.required, Validators.minLength(2)]), 
    address: new FormControl<string | null>(null, [Validators.required, Validators.minLength(2)]),
    address2: new FormControl<string | null>(null),
    city: new FormControl<string | null>(null),
    state: new FormControl<string | null>(null),
    postal: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
    email: new FormControl<string | null>(null, [Validators.email]),
  });

  navigateToWelcomePage() {
    this.router.navigate(['/']);
  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      alert( "Form is not valid, try again")
    }
  }
}