import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from '../models/todo.model';
import { identity } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiURL = environment.apiURL + '/api/action'; 

  /// HttpClient pour communiquer avec le API/Backend 
  constructor(private http: HttpClient) { }

  // CREATE 
  addTodo(item : todo) {
    return this.http.post<todo>(this.apiURL, item); /// <todo> = ca veut dire je veux recevoir un élémemnt de type todo. 
  }

  // READ
  /// Fetch list (ensemble des todos) 
  getTodos() {
    return this.http.get<todo[]>(this.apiURL);
  }
// Fetch 1 item de todos
  getTodo(id: number){
    return this.http.get<todo>(this.apiURL + '/'+ id); 
  }


  /// UPDATE
  updateTodo(item : todo){
    return this.http.put<todo>(this.apiURL + '/'+ item.id, item); /// par défaut on rajoute le / + id pour update. 
  }


  // DELETE 
  deleteTodo(id : number) {
    return this.http.delete(this.apiURL + '/'+ id); 
  }
}
