import { Action } from '@ngrx/store';

export const FILTER_ALL         = '[Filter] ALL';
export const FILTER_COMPLETED   = '[Filter] Completed';
export const FILTER_ARCHIVED    = '[Filter] Archived';
export const FILTER_ACTIONS     = '[Filter] Action';

export class FilterActions implements Action {
  readonly type = FILTER_ACTIONS;
  constructor(public payload: number) {}
}

export class FilterAll implements Action {
  readonly type = FILTER_ALL;
  constructor(public payload: number) {}
}

export class FilterCompleted implements Action {
  readonly type = FILTER_COMPLETED;
  constructor(public payload: number) {}
}

export class FilterArchived implements Action {
  readonly type = FILTER_ARCHIVED;
  constructor(public payload: number) {}
}

export type All =
  | FilterAll
  | FilterCompleted
  | FilterArchived
  | FilterActions
  ;
