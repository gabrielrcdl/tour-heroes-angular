import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: IHero = {
    id: 1,
    name: "Wolverine"
  };

  constructor() { }

  ngOnInit(): void {
    return
  }

}
