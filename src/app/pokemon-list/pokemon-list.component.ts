import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../shared/services/pokemon.service';
import { PokemonList, Pokemon, StoreData, DDOptions } from '../shared/interface';
import { FontSize } from '../shared/enums/font-size';
import { FontWeight } from '../shared/enums/font-weight';
import { Sort } from '../shared/enums/sort';

enum SortBy {
  Name,
  Height,
  Weight
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: PokemonList = {} as PokemonList;
  pokemons: Array<Pokemon> = [];
  FontSize = FontSize;
  FontWeight = FontWeight;
  storeData: StoreData = <StoreData>{
    search: '',
    sort: { name: Sort.Na, height: Sort.Na, weight: Sort.Na },
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    recordCount: '20'
  };
  storageKey: string = 'storeData';
  recordCountList: Array<DDOptions> = [{ name: '10', value: '10' }, { name: '20', value: '20' }, { name: '50', value: '50' }];
  SortBy = SortBy;

  constructor(private pokemonService: PokemonService) {
    this._init();
  }

  ngOnInit(): void {
  }

  onPreviousLinkClick() {
    this._getPokemonList(this.pokemonList.previous);
    this._resetSearchSort(this.pokemonList.previous);
  }

  onNextLinkClick() {
    this._getPokemonList(this.pokemonList.next);
    this._resetSearchSort(this.pokemonList.next);
  }

  searchPokemon() {
    this._filterPokemon();
    this.storeData.sort.name = Sort.Na;
    this.storeData.sort.height = Sort.Na;
    this.storeData.sort.weight = Sort.Na;
    this._addStoreDataToStorage();
  }

  onSorting(sortBy: SortBy) {
    switch (sortBy) {
      case SortBy.Name:
        this._sortPokemon('name', this.storeData.sort.name);
        this.storeData.sort.height = Sort.Na;
        this.storeData.sort.weight = Sort.Na;
        break;
      case SortBy.Height:
        this._sortPokemon('height', this.storeData.sort.height);
        this.storeData.sort.name = Sort.Na;
        this.storeData.sort.weight = Sort.Na;
        break;
      case SortBy.Weight:
        this._sortPokemon('weight', this.storeData.sort.weight);
        this.storeData.sort.height = Sort.Na;
        this.storeData.sort.name = Sort.Na;
        break;
    }
    this._addStoreDataToStorage();
  }

  onSelectRecordCount() {
    this._resetSearchSort(`https://pokeapi.co/api/v2/pokemon?limit=${this.storeData.recordCount}&offset=0`);
    this._init();
  }

  _sortPokemon(prop: 'name' | 'height' | 'weight', sort: Sort) {
    switch (sort) {
      case Sort.Asc:
        this.pokemons = this.pokemons.sort((a, b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
        break;
      case Sort.Desc:
        this.pokemons = this.pokemons.sort((a, b) => (a[prop] < b[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0))
        break;
      default:
        this._filterPokemon();
        break;
    }
  }

  _filterPokemon() {
    this.pokemons = this.pokemonList.results.filter(x =>
      x.name.includes(this.storeData.search) || x.abilities.includes(this.storeData.search));
  }

  _init() {
    let storeData: string | null = sessionStorage.getItem(this.storageKey);
    if (storeData) {
      this.storeData = <StoreData>JSON.parse(storeData);
    }
    this._getPokemonList(this.storeData.url, () => {
      if (this.storeData.search || this.storeData.search) {
        this._filterPokemon();
      }
      if (this.storeData.sort.name != Sort.Na) {
        this._sortPokemon('name', this.storeData.sort.name);
      }
      if (this.storeData.sort.height != Sort.Na) {
        this._sortPokemon('height', this.storeData.sort.height);
      }
      if (this.storeData.sort.weight != Sort.Na) {
        this._sortPokemon('weight', this.storeData.sort.weight);
      }
    });
  }

  _resetSearchSort(url: string) {
    this.storeData.search = '';
    this.storeData.sort = { name: Sort.Na, height: Sort.Na, weight: Sort.Na };
    this.storeData.url = url;
    this._addStoreDataToStorage();
  }

  _addStoreDataToStorage() {
    sessionStorage.clear();
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.storeData));
  }

  _getPokemonList(url: string, cb: Function = () => { }) {
    this.pokemonService.getAllPokemons(url).subscribe((data: PokemonList) => {
      this.pokemonList = data;
      this.pokemons = [...this.pokemonList.results];
      cb();
    });
  }

}
