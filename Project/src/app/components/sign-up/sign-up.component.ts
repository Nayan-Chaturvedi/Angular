import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  // dependency inject authService
  constructor(private authService:AuthService) {}

  email = new FormControl('', [
    
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

 
  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  signUp() {
    const email = this.registerForm.value.email || '';
    const password = this.registerForm.value.password || '';
    
    console.log(this.registerForm.value);
    this.authService.registerUser(email, password);
    //Jab user sign is hoga tab yaha se hamne registerUser() function call kiya
    
  }
  reset() {
    this.registerForm.reset();
  }
 
}
