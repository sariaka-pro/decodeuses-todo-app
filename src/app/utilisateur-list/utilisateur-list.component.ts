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

constructor(private fb: FormBuilder, private utilisateurservice : UtilisateurService){
  this.FormGroup = this.fb.group({
  id: ['',[Validators.required]],
  nom: ['',[Validators.required]],
  prenom: ['', [Validators.required]],
  sexe: ['',[Validators.required]]
  })

}ngOnInit(): void {
    this.utilisateurservice.getUtilisateurs().subscribe((data) => {
      this.utilisateurs = data;
    })
}

}
