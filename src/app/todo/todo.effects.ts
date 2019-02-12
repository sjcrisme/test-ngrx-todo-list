import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from './../core/todo';
import * as TodoActions from '../store/actions/todo.actions';

@Injectable({providedIn: 'root'})
export class TodoEffects {
  @Effect() todo$ = this.actions$.pipe(
    ofType(TodoActions.TODO_LOAD),
    switchMap(action =>
      this.http.get('http://localhost:3000/todo').pipe(
        map((res: Todo[]) => new TodoActions.TodoLoadSuccess(res)),
        catchError((err) => of(new TodoActions.TodoLoadFail(err.message)))
      )
    )
  );

  @Effect() todo_add$ = this.actions$.pipe(
    ofType(TodoActions.TODO_ADD),
    switchMap((action: TodoActions.TodoAdd) =>
     this.http.post('http://localhost:3000/todo', action.payload)
       .pipe(
          map((res: Todo) => new TodoActions.TodoSuccess()),
          catchError((err) => of(new TodoActions.TodoAddFail(err.message)))
        )
     )
  );

  @Effect() todo_cheked$ = this.actions$.pipe(
    ofType(TodoActions.TODO_CHECKED),
    switchMap((action: TodoActions.TodoChecked) =>
      this.http.put(`http://localhost:3000/todo/${action.payload.id}`, action.payload)
        .pipe(
          map((res: Todo) => new TodoActions.TodoSuccess()),
          catchError((err) => of(new TodoActions.TodoAddFail(err.message)))
        )
    )
  );

  @Effect() todo_delete$ = this.actions$.pipe(
    ofType(TodoActions.TODO_DELETE),
    switchMap((action: TodoActions.TodoDelete) =>
      this.http.delete(`http://localhost:3000/todo/${action.payload}`)
        .pipe(
          map((res: Todo) => new TodoActions.TodoSuccess()),
          catchError((err) => of(new TodoActions.TodoAddFail(err.message)))
        )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
