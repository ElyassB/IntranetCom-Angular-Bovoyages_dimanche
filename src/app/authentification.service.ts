import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ValidUser} from './valid-user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  username = '';
  password = '';

  constructor(private httpClient: HttpClient) { }


  authentificationCom(username: string, password: string): Promise<ValidUser> {
    const url = environment.serverUrl + `authentification/${username}/${password}`;
    console.log(`${url}`);
    return this.httpClient.get<ValidUser>(url).toPromise();
  }



}
