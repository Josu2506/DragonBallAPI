import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject, switchMap, tap } from 'rxjs';
import { DragonBallService } from '../service/dragon-ball-service.service';
import { ApiResponse, Character } from '../interfaces/drangon-ball.interface';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters$: Observable<ApiResponse<Character>>;
  currentPage = 1;
  private pageSubject = new BehaviorSubject<number>(1);

  constructor(private dragonBallService: DragonBallService) {
    this.characters$ = this.pageSubject.pipe(
      switchMap((page) => this.dragonBallService.getCharacters(page)),
      tap((response: ApiResponse<Character>) => {
        this.currentPage = response.meta.currentPage;
        console.log(response.items);
      })
    );
  }

  ngOnInit(): void {
    // Initial load is handled by the BehaviorSubject's initial value
  }

  changePage(delta: number): void {
    this.pageSubject.next(this.currentPage + delta);
  }
}
