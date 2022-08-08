import { Component } from '@angular/core';
import { IHero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent  {


  heroes  = HEROES;
  selectedHero?: IHero;

  onSelect(hero: IHero): void{
    this.selectedHero = hero
  }

}
