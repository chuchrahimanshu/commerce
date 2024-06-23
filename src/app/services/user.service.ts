import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUpInterface } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HTTP: HttpClient) { }

  signUpAPI(data: SignUpInterface){
    return this.HTTP.post('http://localhost:3000/user', data);
  }
}
