import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AppTestCanDeactivate } from "./can-deactivate-test.service";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"],
})
export class TestComponent implements OnInit, AppTestCanDeactivate {
  constructor() {}

  ngOnInit(): void {}

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm("You must say hi again to leave this component!");
  }
}
