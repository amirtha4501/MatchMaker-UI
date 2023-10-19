import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getPayments() {
    return this.http.get(`${environment.api}/payment`);
  }

  createPayment(payload: any) {
    return this.http.post(`${environment.api}/payment`, payload);
  }
}
