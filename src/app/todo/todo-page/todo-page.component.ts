import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { TodoAdd, TodoLoad } from '../../store/actions/todo.actions';
import { getAllTodos, getLastId } from '../todo.selectors';
import { StatusTodo } from '../../core/todo';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {

  todos$ = this.store.pipe(select(getAllTodos));
  lastId$ = this.store.pipe(select(getLastId));
  message: any;

  constructor(private store: Store<AppState>, private http: HttpClient) {
    this.store.dispatch(new TodoLoad());
  }

  ngOnInit() {
  }

  addTodo(message, count) {
    const id = parseInt(count.textContent, 10) + 1;
    this.store.dispatch(new TodoAdd({id: id, message: message, status: StatusTodo.Pending}));
  }

  showAll() {
    console.log('All');
  }

  Completed() {
    console.log('Completed');
  }

  Archived() {
    console.log('Archived');
  }
  // test() {
  //   this.http.post('http://localhost:3000/todo',{ id: 4, message: 'test test test', status: StatusTodo.Pending})
  //     .subscribe(x => console.log('x:', x));
  // }
}
