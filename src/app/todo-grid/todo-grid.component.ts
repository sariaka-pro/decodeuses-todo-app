import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-grid',
  standalone: false,
  templateUrl: './todo-grid.component.html',
  styleUrl: './todo-grid.component.css',
})


export class TodoGridComponent implements OnInit {
  todos : todo [] = [];
  kpis = [

    {color: '!bg-blue-500', title: 'À faire aujourdh\'ui', icon: 'event', subtitle: 0}, 
    {color: '!bg-red-700', title: 'En retard', icon: 'warning', subtitle: 0}, 
    {color: '!bg-yellow-500', title: 'Urgents', icon: 'priority_high', subtitle: 0}, 
  
   ]; 

  constructor(private todoservice: TodoService) {
    
  }
 ngOnInit(): void {
   this.fetchTodo();
 };

 fetchTodo() {
  this.todoservice.getTodos().subscribe((data) => {
    this.todos = data;
    // Créer 3 variables de type nombre 
    let countUrgents = 0, countAfaire = 0, countRetard = 0;
    let priorities = null; 
    let today = new Date(2025,5,10);
     
    // A faire aujourdhui= dueDate = aujourd'hui countAfaire = this.todos.filter(kpis => kpis.dueDate === new Date).length;
    //countAfaire = this.todos.filter(kpis =>  kpis.priority == null && new Date (kpis.dueDate).toDateString() == today.toDateString()).length; /// toDateString = ???? 
    /// this.kpis[0].subtitle = countAfaire. 

    for(let todo of this.todos) {
      const dueDate = new Date(); 
      if(new Date (todo.dueDate).toDateString() == today.toDateString()) {
        countAfaire ++; 
    }
    this.kpis[0].subtitle = countAfaire; 
  }
    /// En retard: dueDate < aujourdhui countRetard = this.todos.filter(kpis => kpis.dueDate <  new Date).length;
    ///countRetard = this.todos.filter(kpis => kpis.priority == null && new Date (kpis.dueDate).toDateString() > today.toDateString()).length; /// toDateString = ???? 
  
    ///this.kpis[1].subtitle = countRetard;


    for(let i = 0; i < this.todos.length; i++) {
      if(new Date(this.todos[i].dueDate) < today) {
        countRetard = countRetard + 1;
      }
    }this.kpis[1].subtitle = countRetard;


    /// taches urgentes : priority: 1 et dueDate = aujourd'hui 
    countUrgents = this.todos.filter(kpis => kpis.priorities == '1' && new Date (kpis.dueDate).toDateString() == today.toDateString()).length; /// toDateString = ???? 
  
    this.kpis[2].subtitle = countUrgents;
   //  this.todos.filter
}); 
} 
}
