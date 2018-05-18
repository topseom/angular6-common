import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../providers/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list = [];
  constructor(public todo:TodoService){
    this.list = todo.getTodos();
  }

  doneTodo(id){
    this.list = this.todo.doneTodo(id);
  }

  ngOnInit() {
  }
  

}
