import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hi-msges',
  templateUrl: './hi-msges.component.html',
  styleUrls: ['./hi-msges.component.css']
})
export class HiMsgesComponent {
  name="Poovi";

  @Input() nam : string =""; //@Input--> decorators

  @Input() img="";
}
