import { ErrorPageComponent } from "./error-page/error-page.component";
import { TestComponent } from "./test/test.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { AuthGuard2 } from "./auth-guard2.service";

import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppCanDeactivateGuard } from "./servers/edit-server/canDeactivate.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { AppUserCanDeactivate } from "./users/user/userCanDeactivateGuard.service";
import { UsersComponent } from "./users/users.component";
import { TestActivateGuard } from "./test/can-activate-guard.service";
import { AppTestCanDeactivate } from "./test/can-deactivate-test.service";
import { ServerResolverService } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    canActivate: [AuthGuard2],
    component: UsersComponent,
    children: [
      {
        path: ":id/:name",
        canDeactivate: [AppUserCanDeactivate],
        component: UserComponent,
      },
    ],
  },
  {
    path: "servers",
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolverService },
      },
      {
        path: ":id/edit",
        canDeactivate: [AppCanDeactivateGuard],
        component: EditServerComponent,
      },
    ],
  },
  {
    path: "test",
    canActivate: [TestActivateGuard],
    canDeactivate: [AppTestCanDeactivate],
    component: TestComponent,
  },
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "You can not visit a page that does not exist!" },
  },
  { path: "**", redirectTo: "/not-found", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
