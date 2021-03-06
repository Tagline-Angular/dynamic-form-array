import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteUser(i: number) {
    this.todoService.users.splice(i, 1);
  }

}
