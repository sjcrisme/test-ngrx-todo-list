import { Route } from '@angular/router';

export const routes: Route[] = [
  {path: '', redirectTo: 'todo', pathMatch: 'full'},
  {path: 'todo', loadChildren: './todo/todo.module#TodoModule'}
];
