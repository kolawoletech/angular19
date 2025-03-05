import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


export const routes: Routes = [
    { path: 'crud', component: CrudComponent },
    { path: '', redirectTo: '/crud', pathMatch: 'full' },
    { path: '**', redirectTo: '/crud' },
    { path: 'form', component: ReactiveFormComponent }
  ];