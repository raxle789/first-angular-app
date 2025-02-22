import { Pipe, PipeTransform } from '@angular/core';
import { TTodo } from '../model/todo.type';

@Pipe({
  name: 'filterTodo',
  standalone: true,
})
export class FilterTodoPipe implements PipeTransform {
  transform(todos: TTodo[], searchTerm: string): TTodo[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(text);
    });
  }
}
