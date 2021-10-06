import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { widgets } from './widgets';
import { PokemonService, LoaderService, InterceptorService } from './services';

const shared_component = [...widgets];

@NgModule({
  declarations: [
    shared_component
  ],
  exports: [shared_component],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }]
})
export class SharedModule { }