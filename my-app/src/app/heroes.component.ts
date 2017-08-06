import { Component } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';



@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
  
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  constructor(private heroService:HeroService){}
  selectedHero: Hero;
  onSelect(hero:Hero): void{
      this.selectedHero=hero;
  }
  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit():void{
    this.getHeroes();
  }
  
}

