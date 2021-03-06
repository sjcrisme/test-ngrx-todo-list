import { InjectionToken } from '@angular/core';
import { Todo } from './../core/todo';
import * as TodoActions from '../store/actions/todo.actions';
import { StatusTodo } from '../core/todo';
import * as FilterActions from '../store/actions/filter.actions';

export interface State {
  query: number;
  loading: boolean;
  results: Todo[];
}

export const initialState: State = {
  query: StatusTodo.All,
  loading: false,
  results: [],
};

export const reducer = (state: State = initialState, action: TodoActions.All | FilterActions.All) => {
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
    case TodoActions.TODO_SUCCESS: {
      return {...state};
    }
    case TodoActions.TODO_ADD_FAIL: {
      return {...state, results: action.payload};
    }
///
    case TodoActions.TODO_CHECKED: {
      const selected = action.payload.id;
      const newResult = state.results.map(i => {
        if (i.id == selected) {
          i.status = StatusTodo.Completed;
        }
        return i;
      });
      return {...state, results: newResult};
    }
    case TodoActions.TODO_ARCHIVE: {
      const selected = action.payload.id;
      const newResult = state.results.map(i => {
        if (i.id == selected) {
          i.status = StatusTodo.Archived;
        }
        return i;
      });
      return {...state, results: newResult};
    }
    case TodoActions.TODO_DELETE: {
      return {...state, results: [...state.results.filter((x) => x.id !== action.payload)]};
    }
    case FilterActions.FILTER_ACTIONS: {
      return {...state, query: action.payload};
    }
    default: {
      return state;
    }
  }
};

export const reducerToken = new InjectionToken('TodoReducer');
