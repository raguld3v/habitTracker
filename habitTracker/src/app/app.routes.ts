import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { HabitFormComponent } from './features/habits/habit-form/habit-form.component';

export const routes: Routes = [
    { path: 'login', component:  LoginComponent},
    { path: 'register', component:  RegisterComponent},
    { path: 'habitForm', component:  HabitFormComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
