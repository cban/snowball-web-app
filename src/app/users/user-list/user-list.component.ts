import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
userList :User[];
  constructor(private userService : UserService, private authService:AuthService,private toast:ToastrService) { }

  ngOnInit() {
    var x = this.userService.getData();
    x.snapshotChanges().subscribe(item => {
      this.userList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.userList.push(y as User);
      });
    });
  }
 
  onEdit(user: User) {
    this.userService.selectedUser = Object.assign({}, user);
  }
 
  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.userService.deleteUser(key);
      this.toast.warning("Deleted Successfully");
    }

  }
  
  resetPassword(email: string)
  {
    this.authService.sendPasswordResetEmail(email)
    this.toast.success("Password successfully resetted")
  }


}
