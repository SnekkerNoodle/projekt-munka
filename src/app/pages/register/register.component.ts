import { Component } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from "@angular/flex-layout";
import {merge} from 'rxjs';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,
     MatButtonModule, MatIconModule, FlexLayoutModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  errorMessage = '';
  passwordMessage = '';
  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'Írd be az email címed';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Ez nem email cím';
    } else {
      this.errorMessage = '';
    }
  }
  updatePasswordMessage() {
    if (this.password.hasError('required')) {
      this.passwordMessage = 'Írd be a jelszavad';
    } else {
      this.passwordMessage = '';
    }
  }



  signupForm: FormGroup = new FormBuilder().group(
    {email:this.email, password:this.password}
);

  onSubmit(){
    if (this.signupForm.valid) {
      const data = localStorage.getItem("user");
      if (data) {
        console.log(data)
          localStorage.setItem(
              "user",
              JSON.stringify([
                  JSON.parse(data),
                  {
                      email: this.email,
                      password: this.password,
                  },
              ]),
          );
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify([
              {
                  email: this.email,
                  password: this.password,
              },
          ]),
      );
      }
    } else {
      this.errorMessage = "Invalid format";
    }
  }
}