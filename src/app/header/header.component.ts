import { Component } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  token = this.profileService.token || localStorage.getItem("token");

  constructor(
    private router: Router,
    public profileService: ProfilesService
  ) { }

  signout() {
    this.profileService.token = "";
    localStorage.removeItem("token");
    this.router.navigate(['/profiles']);
  }


}
