import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuicklinkStrategy } from "ngx-quicklink";

const routes: Routes = [
  {
    path: "",
    redirectTo: "discover",
    pathMatch: "full"
  },
  {
    path: "discover",
    loadChildren: () =>
      import("./discover-view/discover-view.module").then(
        m => m.DiscoverViewModule
      )
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login-view/login-view.module").then(m => m.LoginViewModule)
  },
  {
    path: "user",
    loadChildren: () =>
      import("./user-view/user-view.module").then(m => m.UserViewModule)
  },
  {
    path: "**",
    redirectTo: "404"
  },
  {
    path: "404",
    loadChildren: () =>
      import("./not-found-view/not-found-view.module").then(
        m => m.NotFoundViewModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
