import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../components/layout/layout.module";
import { LoginViewRoutingModule } from "./login-view-routing.module";
import { LoginViewComponent } from "./login-view.component";

@NgModule({
  declarations: [LoginViewComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule,
    LoginViewRoutingModule
  ]
})
export class LoginViewModule {}
