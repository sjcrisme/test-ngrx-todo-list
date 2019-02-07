import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoAddComponent } from './todo-add/todo-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoPageComponent, TodoAddComponent]
})
export class TodoModule { }
