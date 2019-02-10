import { InjectionToken } from '@angular/core';
import { Todo } from './../core/todo';
import * as TodoActions from '../store/actions/todo.actions';
import { StatusTodo } from '../core/todo';

export interface State {
  loading: boolean;
  query: string;
  results: Todo[];
}

export const initialState: State = {
  query: '',
  loading: false,
  results: [],
};

export const reducer = (state: State = initialState, action: TodoActions.All) => {
  switch (action.type) {
    case TodoActions.TODO_LOAD: {
      return {...state, loading: true};
    }
    case TodoActions.TODO_LOAD_SUCCESS: {
      return {...state, loading: false, results: action.payload};
    }
    case TodoActions.TODO_LOAD_FAIL: {
      return {...state, loading: false, results: action.payload};
    }
    ///
    case TodoActions.TODO_ADD: {
      return {...state, results: [...state.results, action.payload]};
    }
    case TodoActions.TODO_ADD_SUCCESS: {
      return {...state};
    }
    case TodoActions.TODO_ADD_FAIL: {
      return {...state, results: action.payload};
    }
///
    case TodoActions.TODO_CHECKED: {
      const selected = action.payload;
      const newResult = state.results;
      newResult[selected].status = StatusTodo.Completed;
      return {...state, results: newResult};
    }
    default: {
      return state;
    }
  }
};

export const reducerToken = new InjectionToken('TodoReducer');
