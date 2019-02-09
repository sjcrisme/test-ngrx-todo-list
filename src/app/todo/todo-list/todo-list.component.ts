import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../core/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
