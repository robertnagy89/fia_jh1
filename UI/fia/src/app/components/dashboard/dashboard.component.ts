import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public users: any = [];
  public name: string = "";
  public role: string = "";

  constructor(private auth: AuthService, private userService: UserService, private userStore: UserStoreService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
      });
    this.userStore.getNameFromStore()
      .subscribe(val => {
        const nameFromToken = this.auth.getNameFromToken();
        this.name = val || nameFromToken
      });

    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken
      })    
  }

  logOut() {
    this.auth.signOut();
  }

}
