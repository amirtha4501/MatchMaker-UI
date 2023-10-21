import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedbacks() {
    return this.http.get(`${environment.api}/feedback`);
  }

  updateFeedback(payload: any) {
    return this.http.patch(`${environment.api}/feedback/${payload.feedback_id}`, payload);
  }

  deleteFeedback(id: number) {
    return this.http.delete(`${environment.api}/feedback/${id}`);
  }
}
