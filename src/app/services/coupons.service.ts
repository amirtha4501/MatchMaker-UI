import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CouponsService {

  constructor(private http: HttpClient) { }

  getCoupons() {
    return this.http.get(`${environment.api}/coupon`);
  }

  createCoupon(payload: any) {
    return this.http.post(`${environment.api}/coupon`, payload);
  }

  updateCoupon(payload: any, plan_id: number) {
    return this.http.patch(`${environment.api}/coupon/${plan_id}`, payload);
  }

  deleteCoupon(id: number) {
    return this.http.delete(`${environment.api}/coupon/${id}`);
  }
}
