import { importProvidersFrom, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import {MatSelectModule} from '@angular/material/select';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { provideHttpClient } from '@angular/common/http';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { TodoDetailComponent } from './todo-list-details/todo-list-details.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldControl } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { TodoTableComponent } from './todo-table/todo-table.component';
import { TodoGridComponent } from './todo-grid/todo-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SignComponent,
    TodoListComponent,
    UtilisateurListComponent,
    TodoDetailComponent,
    TodoTableComponent,
    TodoGridComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule, 
    MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule, 
    MatCheckboxModule, 
    MatSnackBarModule,
    RouterLink, 
    MatDatepickerModule,
    MatTableModule
  ],
  providers: [
    /// injecter in-memory-data.service.ts 
    // Comme il est @Injectable
    provideHttpClient(), 
    provideNativeDateAdapter(),
    importProvidersFrom([
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService,{delay: 200} /// pour mettre un temps de latence entre l'excécution et la récception de l'action. 
      ) 
    ]),
    { provide: LOCALE_ID, useValue: 'fr'} /// permet de mettre la langue en FR. 
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
