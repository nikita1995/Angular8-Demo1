import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName = '';
  url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  setUserName(nm: string) {
    this.userName = nm.trim().toLocaleUpperCase();
  }

  getUserName() {
    return this.userName;
  }

  getFromTypicode() {
    return this.http.get(this.url, {observe: 'response'});
  }

  postToTypicode(body) {
    return this.http.post(this.url, body, {observe: 'response'});
  }

  validateTitle(cnt : AbstractControl) {
    if(cnt.value.startsWith('I')){
      return null;
    } else {
      return {'Should start with I': true}
    }
  }
}
