import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignComponent } from './sign/sign.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { TodoDetailComponent } from './todo-list-details/todo-list-details.component';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TodoGridComponent } from './todo-grid/todo-grid.component';

const routes: Routes = [ // créer un élément et ajouter 
{
  path: 'login', component: LoginComponent 
}, //tu peux grace à 'path: 'login' aller chercher le component et forcer à afficher le login. 

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
}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
