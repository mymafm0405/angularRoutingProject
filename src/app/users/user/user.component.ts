import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AppUserCanDeactivate } from "./userCanDeactivateGuard.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, AppUserCanDeactivate {
  user: { id: number; name: string };
  canLeave = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"],
    };

    this.route.params.subscribe((params: Params) => {
      this.user = {
        id: params["id"],
        name: params["name"],
      };
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.canLeave) {
      return confirm("You can not leave without saying HI!");
    } else {
      return false;
    }
  }
}
