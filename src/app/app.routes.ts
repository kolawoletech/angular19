import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AcceptTermsComponent } from './onboarding/accept-terms/accept-terms.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { SetEmailComponent } from './onboarding/set-email/set-email.component';
import { SetEmergencyContactComponent } from './onboarding/set-emergency-contact/set-emergency-contact.component';
import { SetGenderComponent } from './onboarding/set-gender/set-gender.component';
import { SetPasswordComponent } from './onboarding/set-password/set-password.component';
import { SetPhoneNumberComponent } from './onboarding/set-phone-number/set-phone-number.component';
import { SetUserInfoComponent } from './onboarding/set-user-info/set-user-info.component';
import { SetWebNotificationComponent } from './onboarding/set-web-notification/set-web-notification.component';

export const routes: Routes = [
  { path: '', redirectTo: '/crud', pathMatch: 'full' }, // Redirect to CRUD by default
  { path: 'crud', component: CrudComponent },
  {
    path: 'onboarding',
    component: OnboardingComponent,
    children: [
      { path: '', redirectTo: 'set-email', pathMatch: 'full' },
      { path: 'set-email', component: SetEmailComponent },
      { path: 'set-password', component: SetPasswordComponent },
      { path: 'set-user-info', component: SetUserInfoComponent },
      { path: 'set-gender', component: SetGenderComponent },
      { path: 'set-phone-number', component: SetPhoneNumberComponent },
      {
        path: 'set-emergency-contact',
        component: SetEmergencyContactComponent,
      },
      { path: 'accept-terms', component: AcceptTermsComponent },
      { path: 'set-web-notification', component: SetWebNotificationComponent },
    ],
  },
  { path: 'form', component: ReactiveFormComponent },
  { path: '**', redirectTo: '/crud' }, // Handle unknown paths
];
