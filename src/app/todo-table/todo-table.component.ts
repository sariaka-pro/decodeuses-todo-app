import { Component, OnInit } from '@angular/core';
import { todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-table',
  standalone: false,
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.css'
})


export class TodoTableComponent implements OnInit {
  FormGroup : FormGroup;
  todos : todo [] = [];
  displayedColumns: string[] = ['id', 'title', 'priority', 'dueDate', 'completed', 'textarea'];


constructor(private fb: FormBuilder, private todoservice : TodoService) {
    this.FormGroup = this.fb.group ({
      id: [''],
      title: [''],
      priority: [''],
      dueDate: [''],
      completed: [''],
      textarea: ['']
    })


} ngOnInit(): void {
    this.fetchTodo();
  }

  fetchTodo() {
    this.todoservice.getTodos().subscribe((data) =>
    this.todos = data
    )
    }
}