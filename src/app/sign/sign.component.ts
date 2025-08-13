import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-sign',
  standalone: false,
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent implements OnInit {

  listGenre = [
    {text: 'female', value: 'f'},
    {text: 'male', value: 'h'},
    {text: 'notdefined', value: 'n'}
  ]
  signForm ! : FormGroup

  constructor(private signGroup : FormBuilder, private authService : AuthService, private router: Router) {

  }

  ngOnInit(): void {
  this.signForm = this.signGroup.group({
    lastname: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    genre: ['', [Validators.required]]
  })
}

onSubmit(){
  if(this.signForm.valid){
    const userData = {
      username: this.signForm.value.username, 
      password: this.signForm.value.password, 
      lastname: this.signForm.value.lastname, 
      firstname: this.signForm.value.firstname, 
      genre: this.signForm.value.genre, 
      role: 'ROLE_USER'
    }; 

  this.authService.registerUser(userData).subscribe({
    next: (response: any) => {
      console.log('Utilisateur enregistré avec succès', response);
      this.router.navigateByUrl('');
    }, 
    error: (error: any) => {
      console.error('Erreur lors de l\'enregistrement', error);
    }

  })
  } else {
    this.signForm.markAllAsTouched();
  }
}

}

