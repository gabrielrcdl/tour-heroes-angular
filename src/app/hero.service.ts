import { Injectable } from '@angular/core';
import { IHero } from './hero.model';
import {HEROES} from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): IHero[]{
    return HEROES;
  }

  constructor() { }
}
