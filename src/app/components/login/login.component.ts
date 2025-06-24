import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm ! : FormGroup; 

  constructor(private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    /*throw new Error('Method not implemented.');*/
    console.log('Coucou login');
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
   if(this.loginForm.valid) { /// on utilise le IF pour vérifier que le formulaire est valide. 
    console.log(this.loginForm.value);
   } 
  };

}
