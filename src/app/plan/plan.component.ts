import { Component } from '@angular/core';
import { PlansService } from '../services/plans.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {

  plans: any = [];
  show: boolean = false;
  isEdit: boolean = false;
  plan_id: number = 0;

  planForm = new FormGroup({
    plan_name: new FormControl(''),
    currency: new FormControl(''),
    price: new FormControl(''),
    billing_cycle: new FormControl(''),
    description: new FormControl('')
  })

  ngOnInit(): void {
    this.getPlans();
  }

  constructor(
    private planService: PlansService
  ) { }

  getPlans() {
    this.planService.getPlans().subscribe(
      (plans) => {
        this.plans = plans;
      }
    );
  }

  toggleForm() {
    this.show = !this.show;
    this.isEdit = false;
    this.planForm.reset();
  }

  clear() {
    this.show = false;
    this.isEdit = false;
    this.plan_id = 0;
    this.planForm.reset();
  }

  onEdit(plan: any) {
    this.show = true;
    this.isEdit = true;
    this.plan_id = plan.plan_id;
    this.planForm.patchValue(plan);
  }

  onDelete(plan_id: number) {
    this.planService.deletePlan(plan_id).subscribe(
      () => {
        this.getPlans();
        alert("Successfully Deleted");
      }
    )
  }

  onPlanSubmit() {
    const payload: any = this.planForm.value;
    payload.active = true;

    if (!this.isEdit) {
      this.planService.createPlan(payload).subscribe(
        () => {
          this.getPlans();
          this.toggleForm();
          alert("Successfully created");
          this.planForm.reset();
        }
      )
    } else if (this.plan_id) {
      this.planService.updatePlan(payload, this.plan_id).subscribe(
        () => {
          this.getPlans();
          this.toggleForm();
          alert("Successfully updated");
          this.planForm.reset();
        }
      )  
    }
  }
}
