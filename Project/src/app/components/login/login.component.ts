import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; // Module import karna hai

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule], // import ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
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

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    // Ish function ko hum button click par call karege
    console.log(this.loginForm.value);
  }
  reset() {
    this.loginForm.reset();
  }
  // Reset function se hum formGroup ko reset kar sakte hai
}
