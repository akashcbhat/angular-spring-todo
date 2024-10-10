import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'] // Use 'styleUrls' (plural)
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Learn Photography', false, new Date()),
    new Todo(3, 'Visit Paris', false, new Date())
  ];
}
