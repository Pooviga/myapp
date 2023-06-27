import { Component, Input } from '@angular/core';
import { ColorgameComponent } from '../colorgame/colorgame.component';
// import {colors} from ColorgameComponent;
@Component({
  selector: 'app-colour-box',
  templateUrl: './colour-box.component.html',
  styleUrls: ['./colour-box.component.css'],
})
export class ColourBoxComponent {
  @Input() clr: string = 'orange';

  constructor(private func: ColorgameComponent) {}

  deleteItems(i: string) {
    this.func.deleteItems(i);
  }
}
