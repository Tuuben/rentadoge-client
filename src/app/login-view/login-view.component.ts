import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";
import { UserService } from "../core/user.service";

@Component({
  selector: "app-login-view",
  templateUrl: "./login-view.component.html",
  styleUrls: ["./login-view.component.scss"]
})
export class LoginViewComponent implements OnInit {
  showLogin = true;

  registerGroup: FormGroup;
  registerCredentialsGroup: FormGroup;
  loginGroup: FormGroup;

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", Validators.required)
    });

    this.registerCredentialsGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required)
    });

    this.registerGroup = new FormGroup({
      name: new FormControl("", Validators.required),
      streetAdress: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      country: new FormControl("", Validators.required)
    });
  }

  async signIn() {
    const { email, password } = this.loginGroup.value;
    this.authService
      .signIn(email, password)
      .then(_ => {
        this.snackbar.open("Welcome back!!!");
        this.router.navigate(["/"]);
      })
      .catch(err => {
        console.error(err);
        this.snackbar.open(
          "Whoops, seems like you provided wrong email or password!",
          null,
          { duration: 2000 }
        );
      });
  }

  register() {
    const { email, password } = this.registerCredentialsGroup.value;
    this.authService
      .register(email, password)
      .then(res => {
        if (!!res) {
          const data = this.registerGroup.value;
          return this.userService.createUser(data);
        }
      })
      .then(res => {
        if (!!res) {
          this.snackbar.open("Whooooo welcome!!");
          this.router.navigate(["/"]);
        }
      })
      .catch(err => {
        console.error(err);
        this.snackbar.open(
          "Whoops, some problem occured while trying to register.",
          null,
          { duration: 2000 }
        );
      });
  }

  toggleRegister() {
    this.showLogin = !this.showLogin;
  }
}
