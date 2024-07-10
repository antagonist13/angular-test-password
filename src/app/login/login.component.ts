import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IloginForm } from './interface';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], 
  providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
}) 
export class LoginComponent {
  constructor(private router: Router, private fb: FormBuilder) { }
  passwordStrengthClass: string[] = ['', '', ''];
  
  form: FormGroup<IloginForm> = new FormGroup({
    login: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(8)]), 
  });

  get _login() {
        return this.form.get('login');
  }
  get _password() {
        return this.form.get('password');
  }
  
  checkPasswordStrength() {
    const password = this._password?.value || '';
    this.passwordStrengthClass = this.calculatePasswordStrength(password);
  }
    calculatePasswordStrength(password: string): string[] {
    const strengthClass = ['','',''];
    const hasLetters = /[A-Za-z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSymbols = /[^A-Za-z0-9]/.test(password);

    if (password.length === 0) {
      return strengthClass
    }

    if (password.length < 8) {
      return ['weak', 'weak', 'weak']
    }

    if (hasLetters && hasDigits && hasSymbols) {
      return ['strong', 'strong', 'strong']
    }

    if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return ['medium', 'medium', '']
    }

    return ['weak', '', '']
  }
  validateEnglishInput(event: any) {
    const input = event.target.value;
    const englishInput = input.replace(/[^A-Za-z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g, '');
    event.target.value = englishInput;
    if ( event.target.name === 'password') {
      this.form.get('password')?.setValue(englishInput, { emitEvent: false });
    }
    if ( event.target.name === 'login') {
      this.form.get('login')?.setValue(englishInput, { emitEvent: false });
    }
    
  }


  navigateToWelcomePage() {
    this.router.navigate(['/']);
  }
  onSubmit(): void {
    
    if (this.form.valid) {
      console.log(this.form.value);
      this.passwordStrengthClass = ['', '', '']
      this.form.reset();
    } else {
      alert( "Form is not valid, try again")
    }
  }
}


