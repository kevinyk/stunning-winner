import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokeService {

  constructor(private _http: Http) { }
  getPokemon(pokemonObject){
  	// OBSERVABLE VERSION
  	// return this._http.get('https://pokeapi.co/api/v2/pokemon/'+pokemonObject.number+"/").map(Response=>Response.json());
  	// PROMISE VERSION
  	return this._http.get('https://pokeapi.co/api/v2/pokemon/'+pokemonObject.number+"/").map(Response=>Response.json()).toPromise();
  }
}
