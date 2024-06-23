import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { HangmanStatusComponent } from './hangman-status/hangman-status.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    KeyboardComponent,
    HangmanStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
