import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { reducer, reducerToken } from './todo.reducer';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: TodoPageComponent}
    ]),
    FormsModule,
    // IMPORT NGRX FEATURE MODULES
    StoreModule.forFeature('todo', reducerToken),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [
    // to avoid AOT build issues
    {provide: reducerToken, useValue: reducer}
  ],
  declarations: [TodoPageComponent, TodoElementComponent, TodoListComponent]
})
export class TodoModule { }
