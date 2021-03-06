
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	// getHeroes(): void {} // stub
	/*getHeroes(): Hero[] {
	    return HEROES;
	}*/
	getHeroes(): Promise<Hero[]> {
	  	return Promise.resolve(HEROES);
	}
}