import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'] // Fixed typo 'styleUrl' to 'styleUrls'
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(0, '', false, new Date());
  formattedDate: string = '';

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.todoService.retrieveTodo('akash', this.id).subscribe(
        data => {
          this.todo = data;
          this.formattedDate = this.formatDate(this.todo.targetDate);
        },
        error => console.error('Error retrieving todo:', error)
      );
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toISOString().split('T')[0]; 
  }

  updateTargetDate(event: string): void {
    this.todo.targetDate = new Date(event);
  }

  saveTodo() {
    
  }
}
