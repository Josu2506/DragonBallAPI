// app.component.ts
import { Component, OnInit } from '@angular/core';
import { CharacterListComponent } from '../app/character-list/character-list.component';
import { ThemeService } from './service/theme.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterListComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isDarkMode$: Observable<boolean>;

  constructor(public themeService: ThemeService) {
    this.isDarkMode$ = this.themeService.darkMode$;
  }

  ngOnInit() {}
}
