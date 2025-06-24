import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  ngOnInit(): void {
    console.log('Bienvenue sur mon profil');
  }
  
  onClick(): void {
    console.log('Découvrez mon profil')
  }

  onSave(): undefined {
    console.log('Enregistre le message'); 
  }
}
