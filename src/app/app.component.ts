import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  	selector: 'app-root',
  	templateUrl: './templates/app.component.html',
  	styleUrls: ['./css/app.component.css'],
  	providers: [HeroService]
})
export class AppComponent implements OnInit {
  	title = 'Tour of Heroes';
	heroes: Hero[];
  	// heroes = HEROES;
  	selectedHero: Hero;
  	constructor(private heroService: HeroService) { };

  	getHeroes(): void {
	    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	};

	ngOnInit(): void {
	    this.getHeroes();
	}

  	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}
}
