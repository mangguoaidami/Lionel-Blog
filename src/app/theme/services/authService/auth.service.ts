import {Injectable} from "@angular/core";
// import {ApiService} from "../apiService"

// @Injectable()
export class AuthService {
  constructor() {
  }

  login(credentials) {
    // return this.apiService.login(credentials);
  }

  isLoggedIn() {
    let testToken = sessionStorage.getItem("blog.testToken");
    let currentTime = new Date().getTime();

    // if(expiration !== null && currentTime > Number(expiration)){
    //   sessionStorage.clear();
    //   return false;
    // }
    if(testToken == 'test'){
        return true;
    }

    // return sessionStorage.getItem("isk.accessToken") !== null;
  }
}
