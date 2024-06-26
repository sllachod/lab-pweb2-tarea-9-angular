import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  @Input() usedLetters: string[] = [];
  @Output() letterClicked = new EventEmitter<string>();
  letters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  onLetterClick(letter: string): void {
    this.letterClicked.emit(letter);
  }
}
