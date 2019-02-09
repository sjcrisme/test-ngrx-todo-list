import { InjectionToken } from '@angular/core';
import { Todo } from './../core/todo';
import * as TodoActions from '../store/actions/todo.actions';

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
    default: {
      return state;
    }
  }
};

export const reducerToken = new InjectionToken('TodoReducer');
