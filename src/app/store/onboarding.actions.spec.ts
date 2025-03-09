import { updateOnboarding, resetOnboarding } from './onboarding.actions';
import { OnboardingState } from './onboarding.state';

describe('Onboarding Actions', () => {
  
  it('should create the updateOnboarding action with correct type and payload', () => {
    const mockData: Partial<OnboardingState> = {
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe'
    };

    const action = updateOnboarding({ data: mockData });

    expect(action.type).toBe('[Onboarding] Update'); // ✅ Verify action type
    expect(action.data).toEqual(mockData); // ✅ Verify payload
  });

  it('should create the resetOnboarding action with correct type', () => {
    const action = resetOnboarding();

    expect(action.type).toBe('[Onboarding] Reset'); // ✅ Verify action type
  });

});
