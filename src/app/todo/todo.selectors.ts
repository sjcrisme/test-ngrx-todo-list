import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.reducer';
import { StatusTodo } from '../core/todo';

export const getState = createFeatureSelector<State>('todo');

export const getAllTodos = createSelector(getState, state => state.results);
export const getLastId = createSelector(getState, state => state.results.length);

export const getFilter = createSelector(getState, state => state.query);
export  const getComplited = createSelector(getState, state => state.results.filter(item => item.status === StatusTodo.Completed));
