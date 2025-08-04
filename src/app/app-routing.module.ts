import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SignComponent } from './sign/sign.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { TodoDetailComponent } from './todo-list-details/todo-list-details.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TodoGridComponent } from './todo-grid/todo-grid.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [ // créer un élément et ajouter 

{
  path: 'profile', component: ProfileComponent
},

{
  path: 'sign', component: SignComponent
},

{
  path: '', component: TodoListComponent
},

{
  path: 'utilisateur', component: UtilisateurListComponent
},

{
  path: 'todo-details/:id', component: TodoDetailComponent
},

{
  path: 'todo-table', component: TodoTableComponent
},

{
  path: 'todo-grid', component: TodoGridComponent
},

{
  path:'login', component: LoginComponent
}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
