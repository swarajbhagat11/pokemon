import { Component, Input, OnInit } from '@angular/core';

import { FontSize } from '../../enums/font-size';
import { FontWeight } from '../../enums/font-weight';
import { Pokemon } from '../../interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pokemon: Pokemon = {} as Pokemon;

  FontSize = FontSize;
  FontWeight = FontWeight;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
  }

}
