import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DbService } from '../../services/db.service';
import { Snippet } from '../../../models/snippet';

@Component({
  selector: 'app-crate-bin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crate-bin.component.html',
  styleUrl: './crate-bin.component.css',
})
export class CrateBinComponent {

  constructor(private dbService :DbService){}
  title = new FormControl('', [Validators.required]);

  code = new FormControl('', [Validators.required, Validators.minLength(6)]);

  binForm = new FormGroup({
    title: this.title,
    code: this.code,
  });

  async save()
  {
    console.log(this.binForm.value)
   await this.dbService.createSnippet(this.binForm.value as Snippet) // TypeCasting
  }
}
