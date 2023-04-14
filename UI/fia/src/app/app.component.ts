import { Component, OnInit } from '@angular/core';
import { UserResource } from '../models/userresource.model';
import { UserResourceService } from './service/userresource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fia';
  userresources: UserResource[] = [];
  userresource: UserResource = {
    id: '',
    name: '',
    quantity: 0,
    start: "",
    end: ''
  }

  constructor(private userResourceService: UserResourceService) {

  }

  ngOnInit(): void {
    this.getAllResources();
  }

  getAllResources() {
    this.userResourceService.getAllResources()
      .subscribe(
        response => {
          this.userresources = response;
        }
    )
  }

  onSubmit() {
    console.log(this.userresource);
    this.userResourceService.addResource(this.userresource)
      .subscribe(
        response => {
          this.getAllResources();
          this.userresource = {
            id: '',
            name: '',
            quantity: 0,
            start: "",
            end: ''
          };
        }
    )
  }

  deleteUserResource(id: string) {
    this.userResourceService.deleteUserResource(id)
      .subscribe(
        response => {
          this.getAllResources();
        }
      );
  }
}
