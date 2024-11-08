// app.component.ts
import { Component, OnInit } from '@angular/core';
import { CharacterListComponent } from '../app/character-list/character-list.component';
import { ThemeService } from './service/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterListComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isDarkMode = false;

  constructor(public themeService: ThemeService) {}
  get isDarkMode$() {
    return this.themeService.darkMode$;
  }

  ngOnInit() {}
}
