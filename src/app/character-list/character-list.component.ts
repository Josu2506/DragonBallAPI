import { Component, NgModule, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, switchMap, tap } from 'rxjs';
import { DragonBallService } from '../service/dragon-ball-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiResponse, Character } from '../interfaces/drangon-ball.interface';

NgModule({
  providers: [DragonBallService],
  imports: [HttpClient],
});
@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
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
        // you can access the items property here
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
