import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { PokemonListFromAPI, PokemonFromAPI, PokemonList, Pokemon, PokemonAPIDetails } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAllPokemons(url: string): Observable<PokemonList> {
    return this.http.get<PokemonListFromAPI>(url).pipe(
      mergeMap((pokemonListFromAPI: PokemonListFromAPI) => {
        const requests: Array<Observable<Pokemon>> = [];
        for (const apiDetails of pokemonListFromAPI.results) {
          requests.push(this._getPokemonObservable(apiDetails));
        }
        return forkJoin(requests)
          .pipe(
            map((pokemonList: Pokemon[]) => this._mapPokemonList(pokemonList, pokemonListFromAPI))
          );
      })
    );
  }

  _getPokemonObservable(pokemonAPIDetails: PokemonAPIDetails): Observable<Pokemon> {
    return this.http.get<PokemonFromAPI>(pokemonAPIDetails.url)
      .pipe(
        map((pokemonData: PokemonFromAPI) => this._mapPokemon(pokemonData, pokemonAPIDetails))
      )
  }

  _mapPokemon(pokemonData: PokemonFromAPI, pokemonAPIDetails: PokemonAPIDetails): Pokemon {
    let abilities: string = '';
    pokemonData.abilities.forEach(ele => abilities += ele.ability.name + ', ');
    return <Pokemon>{
      name: pokemonAPIDetails.name,
      height: pokemonData.height,
      weight: pokemonData.weight,
      imageUrl: pokemonData.sprites.other.dream_world.front_default,
      abilities: abilities.slice(0, -2)
    }
  }

  _mapPokemonList(pokemonList: Pokemon[], pokemonListFromAPI: PokemonListFromAPI): PokemonList {
    return <PokemonList>{
      count: pokemonListFromAPI.count,
      next: pokemonListFromAPI.next,
      previous: pokemonListFromAPI.previous,
      results: pokemonList
    }
  }

}
