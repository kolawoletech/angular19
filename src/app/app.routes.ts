import { Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';


export const routes: Routes = [
    { path: 'crud', component: CrudComponent },
    { path: '', redirectTo: '/crud', pathMatch: 'full' },
    { path: '**', redirectTo: '/crud' }
  ];