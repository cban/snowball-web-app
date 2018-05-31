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
  private user: Observable<firebase.User>
  constructor(private _fireBaseAuth: AngularFireAuth, private router: Router) {
    this.user = _fireBaseAuth.authState

    // }
    //  } )
  }
  loginWithEmailAndPassword(email: string, password: string) {
    // const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    return this._fireBaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    this._fireBaseAuth.auth.signOut()
    this.router.navigate(['login'])
  }

}
