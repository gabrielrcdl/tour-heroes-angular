import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero.model';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit  {

  heroes: IHero[] = [];
  selectedHero?: IHero;

  constructor(private heroService: HeroService){}


  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: IHero): void{
    this.selectedHero = hero
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes()
  }


}
