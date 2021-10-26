import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;
  username = "";

  isAuthnticate() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 800);
    });

    return promise;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  getUsername() {
    const promise = new Promise((resolve, reject) => {
      if (this.username === "Mahmoud") {
        resolve(true);
      } else {
        resolve(false);
      }
    });

    return promise;
  }

  setUsername() {
    this.username = "Mahmoud";
  }

  clearUsername() {
    this.username = "";
  }

  myTestFunction(): boolean {
    const answer = prompt("How are you?");
    if (answer === "fine") {
      return confirm(
        "You should be fine to enter this component. Are you fine?"
      );
    } else {
      alert("Your answer should be fine to continue!");
      return false;
    }
  }
}
