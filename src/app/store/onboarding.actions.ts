import { createAction, props } from '@ngrx/store';
import { OnboardingState } from './onboarding.state';

export const updateOnboarding = createAction(
  '[Onboarding] Update',
  props<{ data: Partial<OnboardingState> }>()
);

export const resetOnboarding = createAction('[Onboarding] Reset');
