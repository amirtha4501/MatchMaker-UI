import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  getPlans() {
    return this.http.get(`${environment.api}/plan`);
  }

  createPlan(payload: any) {
    return this.http.post(`${environment.api}/plan`, payload);
  }

  updatePlan(payload: any, plan_id: number) {
    return this.http.patch(`${environment.api}/plan/${plan_id}`, payload);
  }

  deletePlan(id: number) {
    return this.http.delete(`${environment.api}/plan/${id}`);
  }}
