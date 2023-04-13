import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserResource } from '../../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  baseUrl = 'https://localhost:7054/api/resource';

  constructor(private http: HttpClient) { }

  // Get All Resources
  getAllResources(): Observable<UserResource[]> {
    return this.http.get<UserResource[]>(this.baseUrl);
  }
}
