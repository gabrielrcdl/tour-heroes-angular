import { Component, OnInit } from '@angular/core';
import { IHero } from '../core/models/hero.model';
import { HeroService } from '../core/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }


  getHeroes(): void{
    // variável heroes irá colocar na propriedade this.heroes  os heroes que tá vindo do service
    this.heroService.getAll().subscribe(heroes => this.heroes = heroes.slice(1, 6))

  }

}
