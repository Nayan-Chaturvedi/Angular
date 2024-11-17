import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  constructor(private router: Router) {}

  email = new FormControl('', [
    // Initial value empty hai
    Validators.required,
    Validators.email,
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  // ab hame email and passsword ko group karna hai

  registerForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  signUp() {
    // Ish function ko hum button click par call karege
    console.log(this.registerForm.value);
    this.router.navigate(['/login']);
  }
  reset() {
    this.registerForm.reset();
  }
  // Reset function se hum formGroup ko reset kar sakte hai
}
