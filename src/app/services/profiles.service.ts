import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(payload: any) {
    return this.http.post(`${environment.api}/auth/signin`, payload);
  }

  createUser(payload: any) {
    return this.http.post(`${environment.api}/auth/signup`, payload);
  }

  createProfile(payload: any) {
    return this.http.post(`${environment.api}/profile`, payload);
  }

  getUsers() {
    return this.http.get(`${environment.api}/auth/users`);
  }

  getProfiles(param: any) {
    let api = param.user_id ? `?user_id=${param.user_id}` : "";
    return this.http.get(`${environment.api}/profile` + api);
  }

  getProfileById(id: string) {
    return this.http.get(`${environment.api}/profile/` + id);
  }
}
