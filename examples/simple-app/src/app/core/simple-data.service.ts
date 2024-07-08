import { map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type user = {
  name: string;
};

@Injectable({
  providedIn: 'root'
})
export class SimpleDataService {

  constructor(private http: HttpClient) { }

  getName() {
    return this.http.get<user[]>('api/names')
      .pipe(
        // pick a random user and return their name
        map(users => users[Math.floor(Math.random() * users.length)].name)
      )
  }
}
