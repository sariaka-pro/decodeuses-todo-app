import { Component, OnInit } from '@angular/core';
import { todo } from '../models/todo.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';



@Component({
  selector: 'app-todo-list-details',
  standalone: false,
  templateUrl: './todo-list-details.component.html',
  styleUrl: './todo-list-details.component.css'
})


export class TodoDetailComponent implements OnInit {
  todo!: todo;
  formGroup!: FormGroup;

  currentMember = new FormControl('');
  selectedContacts : Contact[] = [];
  allContacts: Contact[] = [];
  filteredContacts: Contact[] = [];

  constructor (
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private contactService: ContactService) {
  } 

  priorities = [
    {id: 1, number: 1}, 
    {id: 2, number: 2}, 
    {id: 3, number: 3}, 
  ]; 



  

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  
    this.todoService.getTodo(id).subscribe(data => {
      this.todo = data;
  
      this.contactService.getAll().subscribe(contacts => {
        this.allContacts = contacts;
        this.filteredContacts = [...this.allContacts];
  
        // ➡️ Initialiser selectedContacts après avoir les contacts
        this.selectedContacts = this.allContacts.filter(c => this.todo.memberIds.includes(c.id));
  
        // ➡️ Initialiser le formulaire avec toutes les données
        this.formGroup = this.fb.group({
          id: [this.todo.id],
          title: [this.todo.title, Validators.required],
          priorities: Number(this.todo.priorities),
          dueDate: [this.todo.dueDate],
          completed: [this.todo.completed],
          textarea: [this.todo.textarea],
          memberIds: [this.todo.memberIds]
        });
      });
    });
  }

onSubmit() {

  if(this.formGroup.value.dueDate) {
    this.formGroup.value.dueDate = this.toLocalIsoString(this.formGroup.value.dueDate); 

    this.formGroup.get('memberIds')?.setValue(this.selectedContacts.map(c=>c.id));

    if(this.formGroup.valid) {
      this.todoService.updateTodo(this.formGroup.value).subscribe(data => {
        this.snackBar.open('Updated !', '', {duration: 1000});
        this.router.navigate(['/']);
        console.log(this.formGroup.value)
      });
    }
  }

}
/// revenir à la page d'accueil au click 
onCancel() {
  this.router.navigate(['/']);
}

/// 
toLocalIsoString(dateString: string): string {
const dateObject = new Date(dateString); 
return new Date(dateObject.getTime() - dateObject.getTimezoneOffset()* 60000).toISOString();
}


remove(contact: string): void {
  this.selectedContacts = this.selectedContacts.filter(c => c.id !== contact);
}

onCurrentContactChange(value: string) {
  const filterValue = value.toLowerCase();
  this.filteredContacts = this.allContacts.filter(contact =>
    contact.prenom?.toLowerCase().includes(filterValue)
  );
}

selected(event: MatAutocompleteSelectedEvent): void {
  let selectedContacts = this.allContacts.find(c => c.id == event.option.value);
  if(selectedContacts != null) {
    this.selectedContacts = [...this.selectedContacts, selectedContacts];
    this.currentMember.setValue('');
    event.option.deselect();
  }
}

}
