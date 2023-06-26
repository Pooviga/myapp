import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-colour-box',
  templateUrl: './colour-box.component.html',
  styleUrls: ['./colour-box.component.css']
})
export class ColourBoxComponent {
  @Input() clr : string ="orange";
}
