import { FormControl } from '@angular/forms';

export interface IregisterForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  address: FormControl<string | null>;
  address2: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  postal: FormControl<string | null>;
  phone: FormControl<string | null>;
  email: FormControl<string | null>;
}