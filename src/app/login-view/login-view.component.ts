import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "../authentication.service";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"]
})
export class LoginViewComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  signIn(email: string, password: string) {
    this.authService.signIn(environment.tempEmail, environment.tempPassword);
  }
}
