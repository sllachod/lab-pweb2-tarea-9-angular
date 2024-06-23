import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-status',
  templateUrl: './hangman-status.component.html',
  styleUrls: ['./hangman-status.component.css']
})
export class HangmanStatusComponent {
  @Input() attempts: number = 0;
  @Input() maxAttempts: number = 6;

  getHangmanImage(): string {
    return `assets/hangman${this.attempts}.png`;
  }
}
