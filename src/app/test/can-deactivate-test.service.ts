import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from "@angular/router";

export interface TestCanDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({ providedIn: "root" })
export class AppTestCanDeactivate implements CanDeactivate<TestCanDeactivate> {
  canDeactivate(
    component: TestCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
