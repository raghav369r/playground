import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { LoginComponent } from './pages/login/login.component';
import { AllCodeComponent } from './pages/all-code/all-code.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'all-code', component: AllCodeComponent },
  { path: 'playground', component: PlaygroundComponent },
];
