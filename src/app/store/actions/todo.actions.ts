import { Action } from '@ngrx/store';
import { Todo } from './../../core/todo';

export const TODO_LOAD         = '[Todo] LOAD';
export const TODO_LOAD_SUCCESS = '[Todo] LOAD SUCCESS';
export const TODO_LOAD_FAIL    = '[Todo] LOAD FAIL';

export const TODO_ADD          = '[Todo] ADD ';
export const TODO_SUCCESS      = '[Todo] SUCCESS';
export const TODO_ADD_FAIL     = '[Todo] ADD FAIL';

export const TODO_CHECKED      = '[Todo] CKEKED';
export const TODO_DELETE       = '[Todo] DELETE';

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
export class TodoSuccess implements Action {
  readonly type = TODO_SUCCESS;
  constructor() {}
}
export class TodoAddFail implements Action {
  readonly type = TODO_ADD_FAIL;
  constructor(public payload: string) {}
}

export class TodoChecked implements Action {
  readonly type = TODO_CHECKED;
  constructor(public payload: Todo) {}
}

export class TodoDelete implements Action {
  readonly type = TODO_DELETE;
  constructor(public payload: number) {}
}

 export type All =
  | TodoLoad
  | TodoLoadSuccess
  | TodoLoadFail
  | TodoAdd
  | TodoSuccess
  | TodoAddFail
  | TodoChecked
  | TodoDelete
   ;
