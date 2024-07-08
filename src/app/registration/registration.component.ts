import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IregisterForm } from './interface';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
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
    city: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    state: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    postal: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    phone: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl<string>('', [Validators.email]),
  });

  get _firstName() {
        return this.form.get('firstName');
  }
  get _lastName() {
        return this.form.get('lastName');
  }
  get _address() {
        return this.form.get('address');
  }
  get _city() {
        return this.form.get('city');
  }
  get _state() {
        return this.form.get('state');
  }
  get _postal() {
        return this.form.get('postal');
  }
  get _phone() {
        return this.form.get('phone');
  }
  get _email() {
        return this.form.get('email');
  }
  
  navigateToWelcomePage() {
    this.router.navigate(['/']);
  }
  onSubmit(): void {
    
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    } else {
      alert( "Form is not valid, try again")
    }
  }
}


