import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonListComponent } from './pokemon-list.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule, 
    SharedModule
  ],
  exports: [PokemonListComponent],
  providers: []
})
export class PokemonListModule { }