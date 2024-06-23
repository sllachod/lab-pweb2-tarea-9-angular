import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  word: string = 'ANGULAR'; // palabra a adivinar
  hiddenWord: string[] = [];
  attempts: number = 0;
  maxAttempts: number = 6;
  gameStatus: string = 'playing'; // playing, won, lost
  usedLetters: string[] = [];

  ngOnInit(): void {
    this.resetGame();
  }

  guess(letter: string): void {
    if (this.usedLetters.includes(letter) || this.gameStatus !== 'playing') {
      return;
    }

    this.usedLetters.push(letter);

    if (this.word.includes(letter)) {
      this.word.split('').forEach((char, index) => {
        if (char === letter) {
          this.hiddenWord[index] = letter;
        }
      });
      if (!this.hiddenWord.includes('_')) {
        this.gameStatus = 'won';
      }
    } else {
      this.attempts++;
      if (this.attempts >= this.maxAttempts) {
        this.gameStatus = 'lost';
      }
    }
  }

  restartGame(): void {
    this.resetGame();
  }

  private resetGame(): void {
    this.hiddenWord = '_'.repeat(this.word.length).split('');
    this.attempts = 0;
    this.gameStatus = 'playing';
    this.usedLetters = [];
  }
}
