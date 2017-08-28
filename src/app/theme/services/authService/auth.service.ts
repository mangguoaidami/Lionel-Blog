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
    
    /**
     * If local sessionStorage
     */
    if(testToken == 'test'){
        return true;
    }
  }
}
