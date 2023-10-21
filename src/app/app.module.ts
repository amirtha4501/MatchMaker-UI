import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { PlanComponent } from './plan/plan.component';
import { PaymentComponent } from './payment/payment.component';
import { CouponComponent } from './coupon/coupon.component';
import { AuthComponent } from './auth/auth.component';
import { FeedbackComponent } from './feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfilesComponent,
    ProfileDetailComponent,
    UserProfilesComponent,
    RegisterProfileComponent,
    PlanComponent,
    CouponComponent,
    PaymentComponent,
    AuthComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
