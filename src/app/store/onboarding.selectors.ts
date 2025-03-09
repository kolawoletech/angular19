import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OnboardingState } from './onboarding.state';

export const selectOnboardingState = createFeatureSelector<OnboardingState>('onboarding');

export const selectCurrentStep = createSelector(
  selectOnboardingState,
  (state) => state.currentStep
);
