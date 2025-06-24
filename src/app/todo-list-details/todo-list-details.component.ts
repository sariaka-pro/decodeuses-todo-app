import { Component, OnInit } from '@angular/core';
import { todo } from '../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-list-details',
  standalone: false,
  templateUrl: './todo-list-details.component.html',
  styleUrl: './todo-list-details.component.css'
})


export class TodoDetailComponent implements OnInit {
  todo!: todo;
  formGroup!: FormGroup;

  constructor (
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) {
  } 

  priorities = [
    {id: 1, number: 1}, 
    {id: 2, number: 2}, 
    {id: 3, number: 3}, 
  ]; 
  

  ngOnInit(): void { 
    // je récup l'id de mon URL et convertis en nombre pour faire appel au fetch by ID du service CRUD
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id')); 

   // appel service pour récup le todo
  this.todoService.getTodo(id).subscribe(data => {
      this.todo = data;

   // initialiser le form avec les valeurs du todo
  this.formGroup = this.fb.group({
        id: [this.todo.id],
        title: [this.todo.title, Validators.required], //1er paramètre "": valeur initiale du champ, 2ème (liste): validators
        priority: [this.todo.priority],
        dueDate: [this.todo.dueDate],
        completed: [this.todo.completed],
        textarea: [this.todo.textarea],
      });
 }); 

}

onSubmit() {
  if(this.formGroup.valid) {
    this.todoService.updateTodo(this.formGroup.value).subscribe(data => {
      this.snackBar.open('Updated !', '', {duration: 1000});
      this.router.navigate(['/']);
      console.log(this.formGroup.value)
    });
  }
}

onCancel() {
  this.router.navigate(['/']);
}

}
