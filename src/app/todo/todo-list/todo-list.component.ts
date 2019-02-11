import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusTodo, Todo } from '../../core/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo[];
  @Output() checked = new EventEmitter();
  status = StatusTodo;

  constructor() { }

  ngOnInit() { }

  onChangeStatus(item: Todo, event) {
    this.checked.emit({id: item.id, status: event.target.checked, message: item.message});
  }
}
