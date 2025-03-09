import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentStep } from '../store/onboarding.selectors';
import { nextStep, prevStep } from '../store/onboarding.actions';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Ensure CommonModule is imported
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  private store = inject(Store);
  private router = inject(Router);
  currentStep$ = this.store.select(selectCurrentStep);

  steps = [
    'set-email',
    'set-password',
    'set-user-info',
    'set-gender',
    'set-phone-number',
    'set-emergency-contact',
    'accept-terms',
    'set-web-notification'
  ];

  // ✅ Navigate to the next step
  nextStep() {
    this.store.dispatch(nextStep());
    this.currentStep$.subscribe(step => {
      if (step < this.steps.length) {
        this.router.navigate(['/onboarding', this.steps[step]]);
      } else {
        this.router.navigate(['/form']); // ✅ Navigate to form after last step
      }
    });
  }

  // ✅ Navigate to the previous step
  prevStep() {
    this.store.dispatch(prevStep());
    this.currentStep$.subscribe(step => {
      if (step >= 0) {
        this.router.navigate(['/onboarding', this.steps[step]]);
      }
    });
  }
}
