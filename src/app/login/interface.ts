import { FormControl } from '@angular/forms';

export interface IloginForm {
  login: FormControl<string | null>;
  password: FormControl<string | null>;
}