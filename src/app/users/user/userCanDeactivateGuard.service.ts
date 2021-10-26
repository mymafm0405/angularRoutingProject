import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";

export interface CanUserDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({ providedIn: "root" })
export class AppUserCanDeactivate implements CanDeactivate<CanUserDeactivate> {
  canDeactivate(
    component: CanUserDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
