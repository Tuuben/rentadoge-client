import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // add authorization header with basic auth credentials if available
    const authTokenPromise = this.authenticationService.getAuthToken();

    if (!authTokenPromise) {
      return next.handle(request);
    }

    return from(authTokenPromise).pipe(
      switchMap(idToken => {
        if (!idToken) {
          return next.handle(request);
        }

        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${idToken}`
          }
        });

        return next.handle(request);
      })
    );
  }
}
