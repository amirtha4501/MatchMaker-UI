import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient) { }

  getTestimonials() {
    console.log("Called service")
    return this.http.get(`${environment.api}/testimonial`);
  }

}
