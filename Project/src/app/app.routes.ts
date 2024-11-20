import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { CrateBinComponent } from './components/crate-bin/crate-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { SnippetComponent } from './components/snippet/snippet.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'crate-bin', component: CrateBinComponent, canActivate: [authGuard] }, // here update
  {
    path: 'about-Component',
    loadComponent: () =>
      import('./components/about-component/about-component.component').then(
        (mod) => mod.AboutComponentComponent
      ),
  },

  { path: '', component:HomeComponent },
  { path: 'snippet/:id', component:SnippetComponent },
  { path: '**', component: NotFoundComponent },
];
