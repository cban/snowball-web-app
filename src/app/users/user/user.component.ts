import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 

  constructor(public userService: UserService,private auth:AuthService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(userForm:NgForm) {
    if (userForm.value.key == null){
      this.userService.insertUser(userForm.value);}
    else
      this.userService.updateUser(userForm.value);
    this.resetForm()
  }

  resetForm(userForm?: NgForm) {
    if (userForm != null)
      userForm.reset();
    this.userService.selectedUser = {
      key: null,
      name: '',
      email: '',

    }

  }
}
