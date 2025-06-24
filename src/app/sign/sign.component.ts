import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  constructor(private signGroup : FormBuilder) {

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
    console.log(this.signForm.value) 
  }
}

}

