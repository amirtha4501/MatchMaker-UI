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

  getProfiles() {
    return this.http.get(`${environment.api}/profile`);
  }

  getProfileById(id: string) {
    return this.http.get(`${environment.api}/profile/` + id);
  }
}
