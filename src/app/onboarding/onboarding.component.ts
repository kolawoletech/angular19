import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentStep } from '../store/onboarding.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  private store = inject(Store);
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
}
