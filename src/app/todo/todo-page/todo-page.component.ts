import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { TodoAdd, TodoArchive, TodoChecked, TodoDelete, TodoLoad } from '../../store/actions/todo.actions';
import { getAllByFilter, getLastId } from '../todo.selectors';
import { Estatus, StatusTodo, Todo } from '../../core/todo';

import { HttpClient } from '@angular/common/http';
import { FilterActions } from '../../store/actions/filter.actions';

interface ITodoEvent {
  id: number;
  message: string;
  ev: Estatus;
  status?: StatusTodo;
}

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {

  todos$ = this.store.pipe(select(getAllByFilter));
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
    this.store.dispatch(new FilterActions(StatusTodo.All));
  }

  Completed() {
    this.store.dispatch(new FilterActions(StatusTodo.Completed));
  }

  Archived() {
    // console.log('Archived');
    this.store.dispatch(new FilterActions(StatusTodo.Archived));
  }

  getCheked(item: ITodoEvent) {
    const acction: Estatus = item.ev;
    let it = 0;
    if (item.status) it = 1;

    if (!acction) {
      console.log('delete');
      this.store.dispatch(new TodoDelete(item.id));
    } else if (acction === Estatus.TOARCHIVE) {
      this.store.dispatch(new TodoArchive({id: item.id, status: it, message: item.message}));
    } else{
      console.log('checked');
      this.store.dispatch(new TodoChecked({id: item.id, status: it, message: item.message}));
    }
  }
  test() {
    // this.http.post('http://localhost:3000/todo',{ id: 4, message: 'test test test', status: StatusTodo.Pending})
    //   .subscribe(x => console.log('x:', x));
     this.http.put(`http://localhost:3000/todo/3`, {id: 3, message: 'clear the code', status: StatusTodo.Completed})
       .subscribe(x => console.log('x:', x));
  }
}
