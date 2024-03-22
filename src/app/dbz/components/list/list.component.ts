import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(id: string): void {
    const deletedCharacter = this.characterList.find(character => character.id === id);
    console.log("Deleted character", deletedCharacter);
    this.onDelete.emit(deletedCharacter?.id);
  }
}
