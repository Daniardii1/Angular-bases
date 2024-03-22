import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ) {
  }

  get characters(): Character[] {
    // Devuelve una copia del array de personajes para no afectar el original en caso de cambiarlo
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
