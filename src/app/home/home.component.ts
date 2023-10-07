import { Component } from '@angular/core';
import { TestimonialService } from '../services/testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  testimonials: any = [];

  constructor(
    private testimonialService: TestimonialService
  ) {
    this.getTestimonials()
  }

  getTestimonials() {
    this.testimonialService.getTestimonials().subscribe(
      (res) => {
        console.log("res---", res);
        this.testimonials = res;
      }
    )
  }
}
