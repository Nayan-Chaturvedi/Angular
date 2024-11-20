import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'; // import

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private uid?: string;
  constructor(private router: Router) {
   

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log(this.uid);
        console.log('User loggend in as ', user.email);
      } else {
        
        this.uid=undefined
        console.log('user logged out');
      }
    });
  }

  isAuthenticated()
  {
    //Agar user login hai to true return karuga otherwise false return karuga
    return this.uid?true:false;
  }

  // for registration of user
  registerUser(email: string, password: string) {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        this.router.navigate(['/login']);
      })

      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went Wrong on sign-up');
      });
  }

  // Authentication for login-user
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went wrong While login');
      });
  }

  // LogOut function
  logOut() {
    const auth = getAuth();
    signOut(auth).catch((error) => {
      console.log('something went wrong on while Sign Out');
    });
  }
}
