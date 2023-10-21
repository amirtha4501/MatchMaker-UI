import { Component } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbacks: any = [];
  status: string = '';
  feedback_id: number = 0;

  constructor(
    private feedbackService: FeedbackService,
  ) {
    this.getFeedbacks();
  }

  getFeedbacks() {
    this.feedbackService.getFeedbacks().subscribe(
      (res) => {
        this.feedbacks = res;
      }
    );
  }

  onEdit(feedbackIndex: any) {
    this.feedbacks[feedbackIndex].show = true;
    this.status = this.feedbacks[feedbackIndex].status;
    this.feedback_id = this.feedbacks[feedbackIndex].feedback_id;
  }

  submitStatus() {
    console.log('Status:', this.status);
    if (this.status) {
      this.feedbackService.updateFeedback({status: this.status, feedback_id: this.feedback_id}).subscribe(
        () => {
          this.getFeedbacks();
          alert("Successfully Deleted");
        }
      )
    }
  }

  onDelete(feedback_id: number) {
    this.feedbackService.deleteFeedback(feedback_id).subscribe(
      () => {
        this.getFeedbacks();
        alert("Successfully Deleted");
      }
    )
  }

}
