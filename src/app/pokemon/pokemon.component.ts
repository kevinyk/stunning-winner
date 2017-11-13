import { Component, OnInit } from '@angular/core';
import { PokeService } from './../poke.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: object = {number: ""};
  shownPokemon: any = {name: "", image: ""};
  constructor(private _pokeService: PokeService) { }

  ngOnInit() {
  }
  requestPokemon(){
  	console.log("wanted to get new pokemon");
  	this._pokeService.getPokemon(this.pokemon)
  	// OBSERVABLE VERSION
  	// .subscribe((response)=>{
  	// 	console.log(response);
  	// 	this.shownPokemon.name = response.name;
  	// 	this.shownPokemon.image = response.sprites.front_default;
  	// }, (error)=>{
  	// 	console.log(error);
  	// })
  	// PROMISE VERSION
  	.then((data)=>{
  		console.log("then", data);
  		this.shownPokemon.name = data.name;
  		this.shownPokemon.image = data.sprites.front_default;
  	})
  	.catch((error)=>{
  		console.log(error);
  	})
  }

}
