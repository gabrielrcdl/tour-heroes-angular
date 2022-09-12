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

  getAll(): Observable<IHero[]> {
    return this.http
      .get<IHero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));
  }

  getOne(id: number): Observable<IHero> {
    return this.http
      .get<IHero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`Fetched ${this.descAttributes(hero)}`)));
  }

  create(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(this.heroesUrl, hero).pipe(
      tap((hero) => {
        this.log(`Created ${this.descAttributes(hero)} `);
      })
    );
  }

  update(hero: IHero): Observable<IHero> {
    // Url e objeto que sera alterado
    return this.http
      .put<IHero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(tap((hero) => this.log(`Update ${this.descAttributes(hero)}`)));
  }

  

  private descAttributes(hero: IHero): string {
    return `Hero id: ${hero.id} and Name: ${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
