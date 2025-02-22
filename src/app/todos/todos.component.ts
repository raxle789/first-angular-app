import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TTodo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { HighlightCompletedTodoDirective } from '../directives/highlight-completed-todo.directive';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../pipes/filter-todo.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, FormsModule, FilterTodoPipe],
  templateUrl: './todos.component.html',
  styles: ``,
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todoItems = signal<Array<TTodo>>([]);
  searchTerm = signal('');
  // todoToggled = output<TTodo>();

  logTodo(todo: TTodo) {
    console.log(todo);
  }
  todoClicked(todoItem: TTodo) {
    // this.todoToggled.emit(todoItem);

    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
  // updateTodoItems(todoItem: TTodo) {
  //   this.todoItems.update((todos) => {
  //     return todos.map((todo) => {
  //       if (todo.id === todoItem.id) {
  //         return {
  //           ...todo,
  //           completed: !todo.completed,
  //         };
  //       }
  //       return todo;
  //     });
  //   });
  // }

  ngOnInit(): void {
    this.todosService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
