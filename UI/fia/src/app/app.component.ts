import { Component, OnInit } from '@angular/core';
import { ResourceService } from './service/resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fia';

  constructor(private resourceService: ResourceService) {

  }

  ngOnInit(): void {
    this.getAllResources();
  }

  getAllResources() {
    this.resourceService.getAllResources()
      .subscribe(
        response => {
          console.log(response);
        }
    )
  }
}
