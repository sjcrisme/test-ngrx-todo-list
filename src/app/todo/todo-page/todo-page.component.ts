import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { TodoLoad } from '../../store/actions/todo.actions';
import { getAllTodos } from '../todo.selectors';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  todos$ = this.store.pipe(select(getAllTodos));

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new TodoLoad());
  }

  ngOnInit() {
  }

}
