import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent {

  profileId: string = "";
  profile: any = {};

  constructor(
    private profileService: ProfilesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id') || "";
    this.getProfileById(this.profileId);
  }

  getProfileById(id: string) {
    this.profileService.getProfileById(id).subscribe(
      (profile: any) => {
        this.profile = profile;
        let ts = this.ageCalculator(profile['birth_date'])
        this.profile.age = ts.age;
        this.profile.dob = ts.dob;
      }
    );
  }

  ageCalculator(timestamp: string) {
    const birthDate = new Date(timestamp);
    const currentDate = new Date();

    // Calculate the age in years
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      // Subtract 1 from the age if the birthday hasn't occurred yet this year
      age--;
    }
    const dob = `${String(birthDate.getDate()).padStart(2, "0")}-${String(
      birthDate.getMonth() + 1
    ).padStart(2, "0")}-${birthDate.getFullYear()}`;

    return { age, dob }
  }
}
