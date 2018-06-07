import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { FirebaseAuth } from 'angularfire2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>
  private userDetails: firebase.User = null;
  constructor(private _fireBaseAuth: AngularFireAuth, private router: Router) {
    this.user = _fireBaseAuth.authState
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }
  loginWithEmailAndPassword(email: string, password: string) {
    return this._fireBaseAuth.auth.signInWithEmailAndPassword(email, password)
  }
  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
    }
  logout() {
    this._fireBaseAuth.auth.signOut()

  }



  sendPasswordResetEmail(email:string)
  {
    this._fireBaseAuth.auth.sendPasswordResetEmail(email)
  }
}
