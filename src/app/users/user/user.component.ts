import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 

  constructor(public userService: UserService,private toast:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(userForm: NgForm) {
    if (userForm.value.$key == null){
      this.userService.insertUser(userForm.value);
      this.resetForm()
      this.toast.success('Submitted Succcessfully', 'User Added');}
    else {
      this.userService.updateUser(userForm.value);
      this.resetForm()
      this.toast.success('Submitted Succcessfully', 'User Edited');
    }
    
  }


  resetForm(userForm?: NgForm) {
    if (userForm != null)
      userForm.reset();
    this.userService.selectedUser = {
      $key: null,
      name: '',
      email: '',
      password:''

    }

  }
}
