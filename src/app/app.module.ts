import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule,routingComponents } from './/app-routing.module';
import {MatRippleModule,MatToolbarModule, MatSidenavModule,MatInputModule, MatIconModule,MatFormFieldModule, MatListModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup/signup.component'
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './Login/login/login.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    UsersComponent,
    UserListComponent,
    routingComponents, 
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatRippleModule,BrowserAnimationsModule,MatToolbarModule,MatInputModule,MatFormFieldModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase,'snowball-web-app'),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
