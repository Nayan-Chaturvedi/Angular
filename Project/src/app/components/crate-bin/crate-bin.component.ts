import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crate-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crate-bin.component.html',
  styleUrl: './crate-bin.component.css',
})
export class CrateBinComponent {
  title = new FormControl('', [Validators.required]);

  code = new FormControl('', [Validators.required, Validators.minLength(6)]);

  binForm = new FormGroup({
    title: this.title,
    code: this.code,
  });

  save()
  {
    console.log(this.binForm.value)
  }
}
