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

  ngOnInit(): void {
    this.hiddenWord = '_'.repeat(this.word.length).split('');
  }

  guess(letter: string): void {
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
}
