import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable()
export class TodoService {

  constructor() { }
  
  saveTodos(todos){
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  getTodos():Array<any>{
    let data = localStorage.getItem('todos');
    return data?JSON.parse(data):[];
  }

  addTodo(todo){
    let todos = this.getTodos();
    todo['id'] = uuid();
    todos.push(todo);
    this.saveTodos(todos);
    return true;
  }

  doneTodo(id){
    let todos = this.getTodos();
    todos = todos.filter(todo=>todo.id != id);
    this.saveTodos(todos);
    return todos;
  }

}
