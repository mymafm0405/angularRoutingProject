import { Params, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ServersService } from "../servers.service";
import { AppCanDeactivateGuard } from "./canDeactivate.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, AppCanDeactivateGuard {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changedSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changedSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      this.serverName !== this.server.name ||
      (this.serverStatus !== this.server.status && !this.changedSaved)
    ) {
      return confirm("Do you want to discard changes?");
    } else {
      return true;
    }
  }
}
