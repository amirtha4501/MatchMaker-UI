import { Component } from '@angular/core';
import { PlansService } from '../services/plans.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfilesService } from '../services/profiles.service';
import { PaymentService } from '../services/payment.service';
import { CouponsService } from '../services/coupons.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent {

  // plans: any = [];
  coupons: any = [];
  users: any = [];
  show: boolean = false;
  isEdit: boolean = false;
  coupon_id: number = 0;

  couponForm = new FormGroup({
    coupon_code: new FormControl(''),
    discount_amount: new FormControl(''),
    usage_limit: new FormControl(''),
    active: new FormControl(''),
    expiry_date: new FormControl(''),
    // plan_id: new FormControl(''),
    // user_id: new FormControl('')
  })

  ngOnInit(): void {
    // this.getPlans();
    // this.getUsers();
    this.getCoupons();
  }

  constructor(
    private couponService: CouponsService,
    // private planService: PlansService,
    // private profileService: ProfilesService
  ) { }

  getCoupons() {
    this.couponService.getCoupons().subscribe(
      (coupons) => {
        this.coupons = coupons;
      }
    );
  }

  // getPlans() {
  //   this.planService.getPlans().subscribe(
  //     (plans) => {
  //       this.plans = plans;
  //     }
  //   );
  // }

  // getUsers() {
  //   this.profileService.getUsers().subscribe(
  //     (users) => {
  //       this.users = users;
  //     }
  //   );
  // }

  toggleForm() {
    this.show = !this.show;
    this.isEdit = false;
    this.couponForm.reset();
  }

  clear() {
    this.show = false;
    this.isEdit = false;
    this.coupon_id = 0;
    this.couponForm.reset();
  }

  onEdit(coupon: any) {
    this.show = true;
    this.isEdit = true;
    this.coupon_id = coupon.coupon_id;
    this.couponForm.patchValue(coupon);
  }

  onDelete(coupon_id: number) {
    this.couponService.deleteCoupon(coupon_id).subscribe(
      () => {
        this.getCoupons();
        alert("Successfully Deleted");
      }
    )
  }

  onCouponSubmit() {
    const payload: any = this.couponForm.value;
    payload.active = true;

    if (!this.isEdit) {
      this.couponService.createCoupon(payload).subscribe(
        () => {
          this.getCoupons();
          this.toggleForm();
          alert("Successfully created");
          this.couponForm.reset();
        }
      )
    } else if (this.coupon_id) {
      this.couponService.updateCoupon(payload, this.coupon_id).subscribe(
        () => {
          this.getCoupons();
          this.toggleForm();
          alert("Successfully updated");
          this.couponForm.reset();
        }
      )  
    }
  }
}
