import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiURL = environment.apiURL + 'api/users'; // faire attetion et prendre l'url utilisateur du Back et non route Angular car il va chercher dans l'api du Back. 

  constructor(private http: HttpClient) { }


  addUtilisateur(item: Utilisateur) {
    return this.http.post<Utilisateur>(this.apiURL, item); /// <Utilisateur> = ca veut dire je veux recevoir un élémemnt de type utilisateur. 
  }

  // READ
  /// Fetch list (ensemble des Utilisateurs) 
  getUtilisateurs() {
    return this.http.get<Utilisateur[]>(this.apiURL);
  }
  // Fetch 1 item de todos
  getUtilisateur(id: number) {
    return this.http.get<Utilisateur>(this.apiURL + '/' + id);
  }

  /// UPDATE
  updateUtilisateur(item: Utilisateur) {
    return this.http.put<Utilisateur>(this.apiURL + '/' + item.id, item); /// par défaut on rajoute le / + id pour update. 
  }

  // DELETE 
  deleteUtilisateur(id: number) {
    return this.http.delete(this.apiURL + '/' + id);
  }
}
