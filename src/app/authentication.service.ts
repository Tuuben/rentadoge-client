import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { first, map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthenticationService {
  constructor(private fireAuth: AngularFireAuth) {}

  register(email: string, password: string) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email: string, password: string) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.fireAuth.auth.signOut();
  }

  getAuthToken() {
    return this.fireAuth.user
      .pipe(
        first(),
        map(user => !!user && user.getIdToken())
      )
      .toPromise();
  }

  getUser() {
    return this.fireAuth.user;
  }
}
