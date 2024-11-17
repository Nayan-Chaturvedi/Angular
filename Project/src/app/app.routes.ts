import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { CrateBinComponent } from './components/crate-bin/crate-bin.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'crate-bin', component: CrateBinComponent },
  {
    path: 'about-Component',
    loadComponent: () =>
      import('./components/about-component/about-component.component').then(
        (mod) => mod.AboutComponentComponent
      ),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, 

];
