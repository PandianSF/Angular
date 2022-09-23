import { Injectable } from '@angular/core';
//import  axios from 'axios';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}
  getList() {
    const response = this.http.post(this.url+"/auth/new",{name:"hari",phoneNumber:9090849844});
    response.subscribe(console.log);
    return response;
  }
}
