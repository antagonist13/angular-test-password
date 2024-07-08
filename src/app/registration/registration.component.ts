import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IregisterForm } from './interface';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
}) 
export class RegistrationComponent {
  constructor(private router: Router, private fb: FormBuilder) { }
  
  form: FormGroup<IregisterForm> = new FormGroup({
    firstName: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl<string>('', [Validators.required, Validators.minLength(2)]), 
    address: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    address2: new FormControl<string>(''),
    city: new FormControl<string>(''),
    state: new FormControl<string>(''),
    postal: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    email: new FormControl<string>('', [Validators.email]),
  });

  get _firstName() {
        return this.form.get('firstName');
  }
  
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


