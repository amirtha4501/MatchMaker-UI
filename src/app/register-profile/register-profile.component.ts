import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilesService } from '../services/profiles.service';

@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent {

  detail: any = {};
  regForm: FormGroup = new FormGroup({
    img_data_1: new FormControl(''),
    img_data_2: new FormControl(''),
    img_data_3: new FormControl(''),
    name: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    birth_date: new FormControl(''),
    birth_place: new FormControl(''),
    religion: new FormControl(''),
    caste: new FormControl(''),
    subcaste: new FormControl(''),
    star: new FormControl(''),
    rasi: new FormControl(''),
    qualification: new FormControl(''),
    job: new FormControl(''),
    income: new FormControl(''),
    height: new FormControl(''),
    mother_tongue: new FormControl(''),
    known_language: new FormControl(''),
    marital_status: new FormControl(''),

    // Family details
    father_name: new FormControl(''),
    mother_name: new FormControl(''),
    contact: new FormControl(''),
    sibiling_count: new FormControl(''),
    family_status: new FormControl(''),

    // Partner Expectations
    expected_qualification: new FormControl(''),
    expected_place: new FormControl(''),
    expected_income: new FormControl(''),
    expected_caste: new FormControl(''),
    expected_subcaste: new FormControl(''),
    expected_marital_status: new FormControl(''),
    expected_age_difference: new FormControl(''),
    expected_height: new FormControl('')
  });
  submitted = false;
  registered = false;
  img_data_1: any;
  img_data_2: any;
  img_data_3: any;
  public message: string = "";
  public imagePath = "";
  storeImg: string = "";
  storeImg1: string = "";
  storeImg2: string = "";

  stars = [
    "Ashwini - 1",
    "Ashwini - 2",
    "Ashwini - 3",
    "Ashwini - 4",
    "Barani - 1",
    "Barani - 2",
    "Barani - 3",
    "Barani - 4",
    "Karthigai - 1",
    "Karthigai - 2",
    "Karthigai - 3",
    "Karthigai - 4",
    "Rohini - 1",
    "Rohini - 2",
    "Rohini - 3",
    "Rohini - 4",
    "Mirugasiridam - 1",
    "Mirugasiridam - 2",
    "Mirugasiridam - 3",
    "Mirugasiridam - 4",
    "Thiruvathirai - 1",
    "Thiruvathirai - 2",
    "Thiruvathirai - 3",
    "Thiruvathirai - 4",
    "Punarposam - 1",
    "Punarposam - 2",
    "Punarposam - 3",
    "Punarposam - 4",
    "Posam - 1",
    "Posam - 2",
    "Posam - 3",
    "Posam - 4",
    "Ailyam - 1",
    "Ailyam - 2",
    "Ailyam - 3",
    "Ailyam - 4",
    "Magam - 1",
    "Magam - 2",
    "Magam - 3",
    "Magam - 4",
    "Puram - 1",
    "Puram - 2",
    "Puram - 3",
    "Puram - 4",
    "Uthiram - 1",
    "Uthiram - 2",
    "Uthiram - 3",
    "Uthiram - 4",
    "Hastham - 1",
    "Hastham - 2",
    "Hastham - 3",
    "Hastham - 4",
    "Chithirai - 1",
    "Chithirai - 2",
    "Chithirai - 3",
    "Chithirai - 4",
    "Suvathi - 1",
    "Suvathi - 2",
    "Suvathi - 3",
    "Suvathi - 4",
    "Visagam - 1",
    "Visagam - 2",
    "Visagam - 3",
    "Visagam - 4",
    "Anusam - 1",
    "Anusam - 2",
    "Anusam - 3",
    "Anusam - 4",
    "Kettai - 1",
    "Kettai - 2",
    "Kettai - 3",
    "Kettai - 4",
    "Mulam - 1",
    "Mulam - 2",
    "Mulam - 3",
    "Mulam - 4",
    "Puradam - 1",
    "Puradam - 2",
    "Puradam - 3",
    "Puradam - 4",
    "Uthiradam - 1",
    "Uthiradam - 2",
    "Uthiradam - 3",
    "Uthiradam - 4",
    "Thiruvonam - 1",
    "Thiruvonam - 2",
    "Thiruvonam - 3",
    "Thiruvonam - 4",
    "Avitam - 1",
    "Avitam - 2",
    "Avitam - 3",
    "Avitam - 4",
    "Sathayam - 1",
    "Sathayam - 2",
    "Sathayam - 3",
    "Sathayam - 4",
    "Puratathi - 1",
    "Puratathi - 2",
    "Puratathi - 3",
    "Puratathi - 4",
    "Uthiratathi - 1",
    "Uthiratathi - 2",
    "Uthiratathi - 3",
    "Uthiratathi - 4",
    "Revathi - 1",
    "Revathi - 2",
    "Revathi - 3",
    "Revathi - 4"
  ]
  rasies = [
    "Mesham - Aries",
    "Rishabam - Taurus",
    "Midhunam - Gemini",
    "Kadagam - Cancer",
    "Simmam - Leo",
    "Kanni - Virgo",
    "Thulaam - Libra",
    "Viruchigam - Scorpio",
    "Dhanusu - Sagittarius",
    "Magaram - Capricorn",
    "Kumbam - Aquarius",
    "Meenam - Pisces"
  ]
  castes = [
    "Brahmin",
    "Chettiyar",
    "Desikar",
    "Devar/thevar",
    "Dhanak",
    "Gandla",
    "Ganiga",
    "Gramani",
    "Gounder",
    "Isai vellalar",
    "Julaha",
    "Kanakkan padanna",
    "Kandara",
    "Karukathar",
    "Khatik",
    "Kerala mudali",
    "Kasukara",
    "Karunneegar",
    "Mannan/velan/vannan",
    "Maruthuvar",
    "Meenavar",
    "Meghwal",
    "Mudaliyar",
    "Muthuraja",
    "Nadar",
    "Naicker",
    "Naidu",
    "Pannan",
    "Parkavakulam/udayar",
    "Poundra",
    "Pattusali",
    "Parvatha rajakulam",
    "Paswan/dusadh",
    "Pillai",
    "Pulaya/cheruman",
    "Reddy",
    "Rohit/ chamar",
    "Sc",
    "St",
    "Saliyar",
    "Samagar",
    "Sambava",
    "Satnami",
    "Senguntha mudaliyar",
    "Sonakar",
    "Senai thalaivar",
    "Telgupatti",
    "Thandan",
    "Vadambar",
    "Veera saivam",
    "Vanniakula kshatriyar/padaiyachi",
    "Valluvan",
    "Vaduvan",
    "Vellalar",
    "Vishwakarma",
    "Yadavar",
    "Yadava naidu",
    "Vokkaliga",
    "Vellan chettiar",
  ];
  preview(files: any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.img_data_1 = reader.result;
      this.storeImg = btoa(this.img_data_1);
    }
  }
  preview1(files: any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.img_data_2 = reader.result;
      this.storeImg1 = btoa(this.img_data_2);
    }
  }
  preview2(files: any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.img_data_3 = reader.result;
      this.storeImg2 = btoa(this.img_data_3);
    }
  }

  resetFileUploader() {
    this.img_data_1 = null;
    this.img_data_2 = null;
    this.img_data_3 = null;
  }

  resetFileUploader1() {
    this.img_data_2 = null;
    this.img_data_3 = null;
  }

  resetFileUploader2() {
    this.img_data_3 = null;
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private profileService: ProfilesService
  ) {
    // this.createRegForm();
    // const tok = localStorage.getItem('token');
    // if (tok) {
    //   this.updateProfile(tok);
    // }
  }


  createRegForm() {
    this.regForm = this.fb.group({
      img_data_1: [''],
      img_data_2: [''],
      img_data_3: [''],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      // age: ['', [Validators.required, Validators.min(18), Validators.max(50)]],
      dob: ['', [Validators.required]],
      gender: ['', Validators.required],
      // birth_time: [''],
      birth_place: [''],
      religion: ['', [Validators.required]],
      caste: [''],
      subcaste: [''],
      star: [''],
      rasi: [''],
      qualification: [''],
      job: [''],
      income: [''],
      height: ['', [Validators.required, Validators.min(4), Validators.max(9)]],
      mother_tongue: [''],
      known_language: [''],
      marital_status: [''],

      // Family details
      father_name: [''],
      mother_name: [''],
      contact: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      sibiling_count: [''],
      family_status: [''],

      // Partner Expectations
      expected_qualification: [''],
      expected_place: [''],
      expected_income: [''],
      expected_caste: [''],
      expected_subcaste: [''],
      expected_marital_status: [],
      expected_age_difference: [''],
      expected_height: ['', [Validators.maxLength(25)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.regForm.controls; }


  onSubmit() {
    this.submitted = true;

    this.detail = this.regForm.value;
    this.detail['img_data_1'] = this.storeImg;
    this.detail['img_data_2'] = this.storeImg1;
    this.detail['img_data_3'] = this.storeImg2;
    this.detail['user_id'] = localStorage.getItem("user_id");
    if (this.regForm.invalid) { return; }
    // if (!this.isUpdate) {
      this.profileService.createProfile(this.detail).subscribe((res: any) => {
        this.registered = true;
        this.regForm.reset();
        alert('REGISTRATION SUCCESSFULLY COMPLETED!');
        this.router.navigate(['/profiles']);
      });
    // }
    // if (this.id == this.logId && this.isUpdate) {
    //   this.detail['image'] = this.uStoreImg;
    //   this.detail['image1'] = this.uStoreImg1;
    //   this.detail['image2'] = this.uStoreImg2;
    //   this.profileService.updateAccount(this.id, this.detail).subscribe((res) => {
    //     alert('PROFILE UPDATED SUCCESSFULLY!');
    //     this.router.navigate(['/profiles'])
    //   });
    // }
  }
}
