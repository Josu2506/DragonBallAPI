// app.component.ts
import { Component } from '@angular/core';
import { CharacterListComponent } from '../app/character-list/character-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterListComponent],
  template: `
    <h1>Dragon Ball API Demo</h1>
    <app-character-list></app-character-list>
  `
})
export class AppComponent { }
