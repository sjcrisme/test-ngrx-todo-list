import { Action } from '@ngrx/store';
import { Todo } from './../../core/todo';

export const TODO_LOAD         = '[Todo] LOAD';
export const TODO_LOAD_SUCCESS = '[Todo] LOAD SUCCESS';
export const TODO_LOAD_FAIL    = '[Todo] LOAD FAIL';

export const TODO_ADD          = '[Todo] ADD ';
export const TODO_ADD_SUCCESS  = '[Todo] ADD SUCCESS';
export const TODO_ADD_FAIL     = '[Todo] ADD FAIL';

export class TodoLoad implements Action {
  readonly type = TODO_LOAD;
  constructor() {}
}
export class TodoLoadSuccess implements Action {
  readonly type = TODO_LOAD_SUCCESS;
  constructor(public payload: Todo[]) {}
}
export class TodoLoadFail implements Action {
  readonly type = TODO_LOAD_FAIL;
  constructor(public payload: string) {}
}

export class TodoAdd implements Action {
  readonly type = TODO_ADD;
  constructor(public payload: Todo) {}
}
export class TodoAddSuccess implements Action {
  readonly type = TODO_ADD_SUCCESS;
  constructor() {}
}
export class TodoAddFail implements Action {
  readonly type = TODO_ADD_FAIL;
  constructor(public payload: string) {}
}

 export type All =
  | TodoLoad
  | TodoLoadSuccess
  | TodoLoadFail
  | TodoAdd
  | TodoAddSuccess
  | TodoAddFail
   ;
