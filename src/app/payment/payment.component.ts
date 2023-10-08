import { Component } from '@angular/core';
import { PlansService } from '../services/plans.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  plans: any = [];
  payments: any = [];
  users: any = [];
  show: boolean = false;
  isEdit: boolean = false;
  plan_id: number = 0;

  paymentForm = new FormGroup({
    amount: new FormControl(''),
    currency: new FormControl(''),
    payment_gateway: new FormControl(''),
    payment_method: new FormControl(''),
    transaction_id: new FormControl(''),
    status: new FormControl(''),
    plan_id: new FormControl(''),
    user_id: new FormControl('')
  })

  ngOnInit(): void {
    this.getPlans();
    this.getUsers();
    this.getPayments();
  }

  constructor(
    private planService: PlansService,
    private profileService: ProfilesService
  ) { }

  getPayments() {
    this.planService.getPayments().subscribe(
      (payments) => {
        this.payments = payments;
      }
    );
  }

  getPlans() {
    this.planService.getPlans().subscribe(
      (plans) => {
        this.plans = plans;
      }
    );
  }

  getUsers() {
    this.profileService.getUsers().subscribe(
      (users) => {
        this.users = users;
      }
    );
  }

  toggleForm() {
    this.show = !this.show;
    this.paymentForm.reset();
  }

  clear() {
    this.show = false;
    this.isEdit = false;
    this.plan_id = 0;
    this.paymentForm.reset();
  }

  onEdit(plan: any) {
    this.show = true;
    this.isEdit = true;
    this.plan_id = plan.plan_id;
    this.paymentForm.patchValue(plan);
  }

  onDelete(plan_id: number) {
    this.planService.deletePlan(plan_id).subscribe(
      () => {
        this.getPlans();
        alert("Successfully Deleted");
      }
    )
  }

  onPaymentSubmit() {
    const payload: any = this.paymentForm.value;
    payload.active = true;

    if (!this.isEdit) {
      this.planService.createPlan(payload).subscribe(
        () => {
          this.getPlans();
          this.toggleForm();
          alert("Successfully created");
          this.paymentForm.reset();
        }
      )
    } else if (this.plan_id) {
      this.planService.updatePlan(payload, this.plan_id).subscribe(
        () => {
          this.getPlans();
          this.toggleForm();
          alert("Successfully updated");
          this.paymentForm.reset();
        }
      )
    }
  }
}
