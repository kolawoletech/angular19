export interface OnboardingState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: string;
  address: string;
  profilePic: string;
  gender: string;
  phoneNumber: string;
  emergencyContact: string;
  acceptedTerms: boolean;
  webNotifications: boolean;
  currentStep: number;
}

export const initialOnboardingState: OnboardingState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  birthday: '',
  address: '',
  profilePic: '',
  gender: '',
  phoneNumber: '',
  emergencyContact: '',
  acceptedTerms: false,
  webNotifications: false,
  currentStep: 1,
};
