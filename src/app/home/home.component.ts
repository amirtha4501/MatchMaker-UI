import { Component } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  testimonials: any = [];
  testimonialForm = new FormGroup({
    testimonial_text: new FormControl(''),
    rating: new FormControl(''),
    relationship_length: new FormControl('')
  })

  constructor(
    private fb: FormBuilder,
    private testimonialService: TestimonialService,
  ) {
    this.getTestimonials();
  }

  getTestimonials() {
    this.testimonialService.getTestimonials().subscribe(
      (res) => {
        this.testimonials = res;
      }
    );
  }

  onTestimonialSubmit() {
    const payload: any = this.testimonialForm.value;
    payload.user_id = localStorage.getItem("user_id");

    this.testimonialService.createTestimonial(payload).subscribe(
      () => {
        this.getTestimonials();
        alert("Successfully created");
        this.testimonialForm.reset();
      }
    )
  }
}
