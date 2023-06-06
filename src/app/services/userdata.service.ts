import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url= "http://localhost:8080"
  constructor() { }
}
