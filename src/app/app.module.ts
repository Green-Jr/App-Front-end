import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { AuthService } from './services/auth.service';
import { NotesService } from './services/notes.service';
import { AppRoutingModule } from './app-routing.module'; // Importar el módulo de enrutamiento

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule 
  ],
  providers: [AuthService, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
