import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProfilesService } from '../services/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  signup: boolean = false;

  authLoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  authForm = new FormGroup({
    user_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    user_type: new FormControl(''),
  })

  constructor(
    private profilesService: ProfilesService,
    private router: Router
  ) {
  }

  onAuthLoginSubmit() {
    const payload: any = this.authLoginForm.value;
    this.profilesService.loginUser(payload).subscribe(
      (res: any) => {
        this.profilesService.token = res.accessToken;
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("user_id", res.user_id);
        alert("Successfully Logged In");
        this.authLoginForm.reset();
        this.router.navigate(['/home']);
      }
    )
  }

  onAuthSubmit() {
    const payload: any = this.authForm.value;
    payload.user_id = localStorage.getItem("user_id");
    payload.paid_status = "unpaid";

    this.profilesService.createUser(payload).subscribe(
      (res: any) => {
        this.profilesService.token = res.accessToken;
        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("user_id", res.user_id);
        alert("Successfully created");
        this.authForm.reset();
        this.router.navigate(['/home']);
      }
    )
  }
}
