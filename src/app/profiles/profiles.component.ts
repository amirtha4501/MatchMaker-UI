import { Component } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {

  profiles: any = [];

  constructor(
    private profileService: ProfilesService
  ) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe(
      (profiles) => {
        this.profiles = profiles;
        this.profiles.forEach((profile: { [x: string]: string; }, i: number) => {
          // profile['image'] = atob(profile['image']);
          let ts = this.ageCalculator(profile['birth_date']);
          this.profiles[i].age = ts.age;
          this.profiles[i].dob = ts.dob;
        });
        console.log(this.profiles);
      },
      (error) => {
        if (error.status == '404') { alert('User not found') }
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
