import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  standalone: false,
  templateUrl: './utilisateur-list.component.html',
  styleUrl: './utilisateur-list.component.css'
})
export class UtilisateurListComponent implements OnInit{
FormGroup: FormGroup; 
utilisateurs : Utilisateur [] = [];
/// J'ai déclaré que le nom d'utilisateur était un string et à vide. 
userName: string[] = [];

constructor(private fb: FormBuilder, private utilisateurservice : UtilisateurService){
  this.FormGroup = this.fb.group({
  id: ['',[Validators.required]],
  nom: ['',[Validators.required]],
  prenom: ['', [Validators.required]],
  sexe: ['',[Validators.required]]
  })

}
ngOnInit(): void {
    this.utilisateurservice.getUtilisateurs().subscribe((data) => {
      this.utilisateurs = data;
    })
}

/// Utiliser la méthose if() = si ce n'est pas vide alors 
onSubmit(){
  /// SI le champ utilisateur est vide
  if(!this.userName) {
    //  tu "push" le nom utilisateur saisi dans la liste des utilisateurs. 
    this.utilisateurs.push(this.userName);
   console.log('Nom ajouté !', this.utilisateurs); 

  } else {
    console.log('Aucun nom ajouté !')
  }

} 
}
