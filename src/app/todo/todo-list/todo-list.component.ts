import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StatusTodo, Todo } from '../../core/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo[];
  status = StatusTodo;
  constructor() { }

  ngOnInit() {
  }

}
