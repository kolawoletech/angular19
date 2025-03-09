import { createReducer, on } from '@ngrx/store';
import { updateOnboarding, resetOnboarding } from './onboarding.actions';
import { initialOnboardingState } from './onboarding.state';

export const onboardingReducer = createReducer(
  initialOnboardingState,
  on(updateOnboarding, (state, { data }) => ({
    ...state,
    ...data
  })),
  on(resetOnboarding, () => initialOnboardingState)
);
