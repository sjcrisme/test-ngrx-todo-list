import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusTodo, Todo } from '../../core/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo[];
  @Output() checked = new EventEmitter();
  status = StatusTodo;

  constructor() { }

  ngOnInit() {
  }

  onChangeStatus(id, event) {
    console.log("id", id, event.target.checked);
  }
}
