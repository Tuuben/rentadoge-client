import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "apollo-client/util/Observable";
import { tap } from "rxjs/operators";
import { AuthenticationService } from "src/app/authentication.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit, OnDestroy {
  userAuthenticated: boolean;
  authSub: Subscription;
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authSub = this.authService
      .getUser()
      .pipe(tap(user => (this.userAuthenticated = !!user)))
      .subscribe();
  }

  ngOnDestroy() {
    if (!this.authSub.closed) {
      this.authSub.unsubscribe();
    }
  }

  signOut() {
    this.authService.signOut().then(_ => {});
  }
}
