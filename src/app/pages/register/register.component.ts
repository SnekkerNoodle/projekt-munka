import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder,} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from "@angular/flex-layout";
import { DatabaseService } from '../../database.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,
     MatButtonModule, MatIconModule, FlexLayoutModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  logged :boolean = false;
  errorMessage = '';
  passwordMessage = '';
  constructor(private database: DatabaseService) {
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
      const user = {email: this.email.value!,
      password: this.password.value!}
      this.database.upload(user);}
  }
}