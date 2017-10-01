import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'app-sign-up',
    component: SignUpComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
