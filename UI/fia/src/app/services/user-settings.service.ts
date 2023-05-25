import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserSettings } from '../../models/usersettings';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor(private http: HttpClient) { }

  getUserSettings() {
    return this.http.get<UserSettings>(environment.apiUrl + 'api/user/me');
  }
}
