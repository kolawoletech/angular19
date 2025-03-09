import { createAction, props } from '@ngrx/store';
import { OnboardingState } from './onboarding.state';

// ✅ Update Onboarding Data
export const updateOnboarding = createAction(
  '[Onboarding] Update',
  props<{ data: Partial<OnboardingState> }>()
);

// ✅ Move to the Next Step
export const nextStep = createAction('[Onboarding] Next Step');

// ✅ Move to the Previous Step
export const prevStep = createAction('[Onboarding] Previous Step');

// ✅ Reset Onboarding State
export const resetOnboarding = createAction('[Onboarding] Reset');
