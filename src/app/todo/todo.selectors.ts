import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.reducer';

export const getState = createFeatureSelector<State>('todo');

export const getAllTodos = createSelector(getState, state => state.results);
