import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-status',
  templateUrl: './hangman-status.component.html',
  styleUrls: ['./hangman-status.component.css']
})
export class HangmanStatusComponent {
  @Input()
  attempts!: number;
  @Input()
  maxAttempts!: number;
}
