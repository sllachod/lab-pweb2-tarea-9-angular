import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hangman-status',
  templateUrl: './hangman-status.component.html',
  styleUrls: ['./hangman-status.component.css']
})
export class HangmanStatusComponent {
  @Input() attempts: number = 0;
  @Input() maxAttempts: number = 6;

  hangmanStages: string[] = [
    `
     ------
     |    |
     |
     |
     |
     |
    ---
    `,
    `
     ------
     |    |
     |    O
     |
     |
     |
    ---
    `,
    `
     ------
     |    |
     |    O
     |    |
     |
     |
    ---
    `,
    `
     ------
     |    |
     |    O
     |   /|
     |
     |
    ---
    `,
    `
     ------
     |    |
     |    O
     |   /|\\
     |
     |
    ---
    `,
    `
     ------
     |    |
     |    O
     |   /|\\
     |   /
     |
    ---
    `,
    `
     ------
     |    |
     |    O
     |   /|\\
     |   / \\
     |
    ---
    `
  ];

  getHangmanStage(): string {
    return this.hangmanStages[this.attempts];
  }
}
