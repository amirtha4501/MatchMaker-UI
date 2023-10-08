import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent {

  userId = localStorage.getItem("user_id");
  show: boolean = false;

  constructor(
  ) { }

  toggleRegForm() {
    this.show = !this.show;
  }

}
