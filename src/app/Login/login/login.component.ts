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
 
 myFormGroup:FormGroup;
  email: FormControl;
  password:FormControl

//  myGroup = new FormGroup({
//   email: new FormControl('',[Validators.required,Validators.email]
// ]),
//   password:new FormControl('',[Validators.required,Validators.minLength(6)]),
// })

  constructor(private af: AngularFireAuth,private router: Router,private authService:AuthService ) { }

  ngOnInit() {
    this.createFormControls()
    this.createForm()
    
  }

  createFormControls() { 
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required,Validators.minLength(6)]);
  }
createForm()
{
  this.myFormGroup = new FormGroup({
    email: this.email,
    password:this.password
  });
}

 
  login()  {
     this.authService.loginWithEmailAndPassword(this.email.value,this.password.value).then( (res) => {
      console.log(res);
      this.router.navigate(['dashboard'])
    })
    .catch( (err) => {
      console.log('auth error',err);  
    })
    
  }
}
