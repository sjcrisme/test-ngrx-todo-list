import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.reducer';
import { StatusTodo, Todo } from '../core/todo';

export const getState = createFeatureSelector<State>('todo');

export const getAllTodos = createSelector(getState, state => state.results);
export const getLastId = createSelector(getState, state => state.results.length);

export const getFilter = createSelector(getState, state => state.query);
export const getAllByFilter = createSelector(
  getState,
  getFilter,
  (all, filter) => {
    if (all.results.length) {
      let result;
      if (filter === StatusTodo.All) {
        result = all.results.map(item => item);
      } else {
        result = all.results.filter(item => {
          if (item.status === filter) {
            return item;
          }
        });
      }
      return result;
    }
  });

export  const getComplited = createSelector(getState, state => state.results.filter(item => item.status === StatusTodo.Completed));
