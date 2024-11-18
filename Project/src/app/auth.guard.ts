import { inject, Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = () => {
  //Hum create-bin ko access nahi kar sakte jab tak authanticate user na hojaye
  //Agar hum create bin api ko hit karege bina autheticate huye to hume redirect
  // karwana hai uska code likhna hai

  const router = inject(Router);

  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/']); // Redirect code
    return false;
  }
};
