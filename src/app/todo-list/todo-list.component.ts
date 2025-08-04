import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { todo } from '../models/todo.model';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
FormGroup : FormGroup;
todos : todo [] = [];


constructor(private fb: FormBuilder, private todoservice : TodoService, private  snackBar : MatSnackBar) {
this.FormGroup = this.fb.group ({
  title: ['', [Validators.required]]
})
}
/// subscribe : communication asynchrone donc il faut s'inscrire pour avoir le retour. 
  ngOnInit(): void {
      this.fetchTodo();
    }; 

  fetchTodo() {
  this.todoservice.getTodos().subscribe((data) =>
  this.todos = data
  )
}; 
  onAddTodo() {
  if(this.FormGroup.valid) {
    const formValue = this.FormGroup.value;

    const todo : todo = {
      id: null, 
      title:formValue.title, 
      completed: true, 
      priorities: null, 
      dueDate: '',
      textarea: null,
      memberIds: []
    }; 

    this.todoservice.addTodo(todo).subscribe((data) =>
      {this.fetchTodo()}
    )
    };
  }

  onDeleteClick(id: number | null) {
    if(id == null)
      return;

    this.todoservice.deleteTodo(id).subscribe(() => {
      this.fetchTodo(); /// On fetch à nouveau pour que l'élément soit supprimé. 
      this.snackBar.open('Deleted !', ''); 
    });
  }

  onClickBox(event: MatCheckboxChange, todo: todo) {
    console.log(todo);
    todo.completed = event.checked; 

    //mettre à jour dans l'api : 
    this.todoservice.updateTodo(todo).subscribe(data =>{
    console.log(data);
    this.snackBar.open('Updated !', '', {duration: 1000});
  }); 
  }
}

