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
  userResource: UserResource = {
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

    if (this.userResource.id === '') {
      this.userResourceService.addResource(this.userResource)
        .subscribe(
          response => {
            this.getAllResources();
            this.userResource = {
              id: '',
              name: '',
              quantity: 0,
              start: "",
              end: ''
            };
          }
        )
    }
    else {
      this.updateUserResource(this.userResource);
    }
  }

  deleteUserResource(id: string) {
    this.userResourceService.deleteUserResource(id)
      .subscribe(
        response => {
          this.getAllResources();
        }
      );
  }

  populateForm(userResource: UserResource) {
    this.userResource = userResource;
  }

  updateUserResource(userResource: UserResource) {
    this.userResourceService.updateUserResource(userResource)
      .subscribe(response => {
        this.getAllResources();
    })
  }
}
