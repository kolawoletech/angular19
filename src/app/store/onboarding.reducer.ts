import { createReducer, on } from '@ngrx/store';
import { updateOnboarding, resetOnboarding, nextStep, prevStep } from './onboarding.actions';
import { initialOnboardingState } from './onboarding.state';

export const onboardingReducer = createReducer(
  initialOnboardingState,

  // ✅ Update onboarding data
  on(updateOnboarding, (state, { data }) => ({
    ...state,
    ...data
  })),

  // ✅ Move to the Next Step
  on(nextStep, (state) => ({
    ...state,
    currentStep: state.currentStep + 1
  })),

  // ✅ Move to the Previous Step
  on(prevStep, (state) => ({
    ...state,
    currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0
  })),

  // ✅ Reset onboarding process
  on(resetOnboarding, () => initialOnboardingState)
);
