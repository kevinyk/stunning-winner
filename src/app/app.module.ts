import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokeService } from './poke.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
