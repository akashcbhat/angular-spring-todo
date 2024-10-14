import { Component, OnInit } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { TodoDataService } from '../service/data/todo-data.service';
import { response } from 'express';
import { Router } from '@angular/router';

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
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = []; // Initialize to avoid undefined errors
  message: string = ''

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('akash').subscribe({
      next: (response: Todo[]) => {
        this.todos = response; 
      },
      error: (err) => {
        console.error('Error retrieving todos:', err);
      }
    });
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo('akash',id).subscribe({
      next:(response)=>{
        console.log(response)
        this.message = `Deleted ${id} Successfully!`
        this.refreshTodos()

      },
      error:(err)=>{
        console.error("Error deleting todo:", err)
      }
    })
  }

  updateTodo(id:number){

    this.router.navigate(['todos',id])

  }
}
