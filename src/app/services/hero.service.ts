import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../hero.model';
import { MessageService } from './message.service';
import {HEROES} from '../mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<IHero[]>{
   // of: a lista de HEROES irá virar um observable
   const heroes = of(HEROES);
   this.messageService.add('HeroService: fetched heroes')
   return heroes
  }

  getHero(id: number): Observable<IHero>{
      // Se o hero.id da lista mocada for igual ao id que estou fornecendo
      const hero = HEROES.find(hero => hero.id === id)!;
      this.messageService.add(`HeroService: fetched hero = ${id}`)
      return of (hero)
  }

}
