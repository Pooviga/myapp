import { Component } from '@angular/core';
 type Todo={
  id:number,
  item: string,
  done:boolean

 }


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  todos : Array<Todo>=[]
  id:number = 0
  text:string = ''
  addTodo() {
    // if (this.newTask == '') {
    // }
    // else {
    //     this.items.push(this.newTask);
    //     this.newTask = '';
    // }
    // this.todo.item="";
    this.id = this.todos.length+1
    this.todos.push({id:this.id,item:this.text,done:false});
    this.text = ''
    // this.todo.item='';
  }

  toggleDone(todo: Todo) {
    console.log(todo);
    // this.todos.filter((td) => td.id === todo.id)[0].done = !todo.done;
    (this.todos.find((td) => td.id === todo.id) as Todo).done = !todo.done;
  }
  editItems(item:string){

  }
  deleteItems(i : number) {

     this.todos.splice(i,1);
 
  }
}
