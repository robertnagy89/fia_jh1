import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserResource } from '../../models/userresource.model';

@Injectable({
  providedIn: 'root'
})
export class UserResourceService {

  baseUrl = 'https://localhost:5001/api/userresource';

  constructor(private http: HttpClient) { }


  getAllResources(): Observable<UserResource[]> {
    return this.http.get<UserResource[]>(this.baseUrl);
  }


  addResource(userresource: UserResource): Observable<UserResource> {
    userresource.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<UserResource>(this.baseUrl, userresource);
  }


  deleteUserResource(id: string): Observable<UserResource> {
    return this.http.delete<UserResource>(this.baseUrl + '/' + id);
  }


  updateUserResource(userResource: UserResource): Observable<UserResource> {
    return this.http.put<UserResource>(this.baseUrl + '/' + userResource.id, userResource);
  }
}
