import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { reducer, reducerToken } from './todo.reducer';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TodoPageComponent}
    ]),

    // IMPORT NGRX FEATURE MODULES
    StoreModule.forFeature('todo', reducerToken),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [
    // to avoid AOT build issues
    {provide: reducerToken, useValue: reducer}
  ],
  declarations: [TodoPageComponent, TodoAddComponent, TodoElementComponent, TodoListComponent]
})
export class TodoModule { }
