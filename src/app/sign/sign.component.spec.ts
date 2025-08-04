import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignComponent } from './sign.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

describe('SignComponent', () => {
  let component: SignComponent;
  let fixture: ComponentFixture<SignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignComponent], 
      imports: [
        MatButtonModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatSelectModule, 
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatTableModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulaire invalide si email vide', () => {
    component.signForm.controls['email'].setValue(''); 
    expect(component.signForm.valid).toBeFalse(); 
  }); 

});
