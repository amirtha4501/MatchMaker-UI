import { Component } from '@angular/core';
import { PlansService } from '../services/plans.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfilesService } from '../services/profiles.service';
import { PaymentService } from '../services/payment.service';

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
    private paymentService: PaymentService,
    private planService: PlansService,
    private profileService: ProfilesService
  ) { }

  getPayments() {
    this.paymentService.getPayments().subscribe(
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
    this.plan_id = 0;
    this.paymentForm.reset();
  }

  onPaymentSubmit() {
    const payload: any = this.paymentForm.value;
    payload.active = true;

    this.paymentService.createPayment(payload).subscribe(
      () => {
        this.getPayments();
        this.toggleForm();
        alert("Successfully created");
        this.paymentForm.reset();
      }
    )
  }
}
