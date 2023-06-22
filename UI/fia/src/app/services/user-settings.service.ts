import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSettings } from '../../models/usersettings';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor(private http: HttpClient) { }

  getUserSettings(): Observable<UserSettings> {
    return this.http.get<UserSettings>(environment.apiUrl + 'api/user/mysettings');
  }

  saveSettings(settings: UserSettings): Observable<UserSettings> {
    console.log(settings);
    return this.http.put<UserSettings>(environment.apiUrl + 'api/user/mysettings', settings);
  }
}
