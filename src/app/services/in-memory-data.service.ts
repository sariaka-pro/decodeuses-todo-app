import { Injectable } from '@angular/core';
import { todo } from '../models/todo.model';
import { Utilisateur } from '../models/utilisateur.model';

/// Le service fait le lien entre le front et le back. Il fait les opérations CRUD (creat, read, update, Delete) >> il existe une méthode pour chaque opération. (le C, R etc représente une opération). 
@Injectable({
  providedIn: 'root'
})

// API virtuelle mock 
// 'InMemory' cad données initialisé avec chaque démarrage. 
/// npm i angular in-memory-web-api@.19.0
/// ng g service on-memory-data
export class InMemoryDataService {

  constructor() { }

  createDb() {
    /*
    const todos: todo[] = [
      { id: 1, title: 'Learn Angular bloc 1', completed: false, priorities: null, dueDate: new Date().toISOString(), textarea: null},
      { id: 2, title: 'Tache aujourdhui', completed: false, priorities: null, dueDate: new Date().toISOString(), textarea: null},
      { id: 3, title: 'Tache en retard', completed: false, priorities: null, dueDate: new Date(2025,5,1).toISOString(), textarea: null},
      { id: 4, title: 'Tache en retard', completed: false, priorities: null, dueDate: new Date(2025,5,1).toISOString(), textarea: null},
    ];*/
    
    const todos: todo[] = []; 

    const utilisateurs: Utilisateur[] = [
      { id: 1, nom: 'Dupont', prenom: 'Marie', sexe: 'femme' },
      { id: 2, nom: 'Dupont', prenom: 'Jean', sexe: 'homme' },
      { id: 3, nom: 'Wilson', prenom: 'Lisa', sexe: 'femme' },
      { id: 4, nom: 'Lee', prenom: 'Louis', sexe: 'homme' }
    ];
    
    return { todos, utilisateurs }; // ça va donner un lien endpoint api/todos 
  }
}
