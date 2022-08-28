import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHero } from '../models/hero.model';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}



  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.heroesUrl).pipe(
      tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)))
  }


  getHero(id: number): Observable<IHero> {
    return this.http.get<IHero>(`${this.heroesUrl}/${id}`).pipe(
      tap((hero)=> this.log(`fetched hero id: ${id} and name: ${hero.name}`) )
    )
  }









  private log(message: string): void{
    this.messageService.add(`HeroService: ${message}`)
  }
}
