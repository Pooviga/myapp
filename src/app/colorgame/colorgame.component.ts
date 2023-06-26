import { Component } from '@angular/core';

@Component({
  selector: 'app-colorgame',
  templateUrl: './colorgame.component.html',
  styleUrls: ['./colorgame.component.css']
})
export class ColorgameComponent {
  clr="";
  // typing(event:any){
  //   console.log(event.target.value)
  //   this.clr=event.target.value;
  // }
  colors=["pink","orange"];
  addColor(){
    this.colors.push(this.clr);
    this.clr="";
  }

}
