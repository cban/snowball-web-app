import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { log } from '@firebase/database/dist/src/core/util/util';
import{ Router} from '@angular/router'
import { FormControl , FormGroup,Validators} from '@angular/forms';
import { AuthProvider } from '@firebase/auth-types';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 myGroup = new FormGroup({
  email: new FormControl(),
  password:new FormControl()
  
});
em:string
pass:string
  user = {
  email: '',
   password: ''
 };

  constructor(private af: AngularFireAuth,private router: Router,private authService:AuthService ) { }

  ngOnInit() {
    
  }

  login()
  {
    this.authService.loginWithEmailAndPassword(this.myGroup.controls.email.value,this.myGroup.controls.password.value).then( (res) => {
      console.log(res);
      this.router.navigate(['dashboard'])
    })
    .catch( (err) => {
      console.log('auth error',err);  
    })
    
  }
}
