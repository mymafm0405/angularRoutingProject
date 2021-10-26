import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable({ providedIn: "root" })
export class TestActivateGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.myTestFunction();
  }
}
