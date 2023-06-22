import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptConnectionService {
  private apiUrl = 'https://api.chatgpt.com';

  constructor(private http: HttpClient) { }

  sendMessage(message: string): Observable<any> {
    const requestBody = {
      message: {
        content: message
      }
    };
    return this.http.post<any>(`${this.apiUrl}/chat`, requestBody);
  }
}
