import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { PlanComponent } from './plan/plan.component';
import { PaymentComponent } from './payment/payment.component';
import { CouponComponent } from './coupon/coupon.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profiledetail/:id', component: ProfileDetailComponent },
  { path: 'user-profiles', component: UserProfilesComponent },
  { path: 'plans', component: PlanComponent },
  { path: 'coupons', component: CouponComponent },
  { path: 'payments', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
