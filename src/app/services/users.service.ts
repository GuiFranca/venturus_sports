import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private sApiUrl: string;

  constructor(private http: HttpClient) {
    this.sApiUrl = 'https://jsonplaceholder.typicode.com';
  }

  public getUsers(): Observable<any> {
    return this.http.get(`${this.sApiUrl}/users`);
  }
}
