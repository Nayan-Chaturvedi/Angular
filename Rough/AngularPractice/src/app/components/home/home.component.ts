import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';

function formatName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input({ alias: 'userName', transform: formatName }) user = '';
  @Input({ transform: booleanAttribute }) status!: boolean; //! symbol TypeScript ko assure karta hai ki property zaroor assign hogi.
  @Input({transform:numberAttribute}) salary!:number;
}
