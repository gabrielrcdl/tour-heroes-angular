import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IHero } from '../../../core/models/hero.model';
import { HeroService } from '../../../core/services/hero.service';
import { MessageService } from '../../../core/services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit  {

  heroes: IHero[] = [];
 // selectedHero?: IHero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService){}


  ngOnInit(): void {
    this.getHeroes()
  }

  // onSelect(hero: IHero): void{
  //   this.selectedHero = hero
  //   this.messageService.add(`HeroesComponent: Selected hero id ${hero.id}`)
  // }

  getHeroes(): void {

    this.heroService.getAll().subscribe(heroes => this.heroes = heroes );
    //.subscribe queremos ser notificados quando ocorrer uma mudança no observable do HeroService

    }
}
