import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authUrl: string = 'https://reqres.in/api';

  constructor(private router: Router, private http: Http) {
  }
  /**
   * this is http request
   */
  // login(username: string, password: string): Observable<string> {
  //       return this.http.post(`${this.authUrl}/login`, { username, password })
  //         .map(res => res.json())
  //         .do(res => {
  //           if (res.token) localStorage.setItem('auth_token', res.token); // 设置localstorage
  //           console.log('登录时间：' + new Date().getTime());  // 打印登录时间
  //         });
  //     };

  // passAuthValidation() {
  //   localStorage.setItem('auth_token', 'auccess'); // 设置localstorage
  //   console.log('登录时间：' + new Date().getTime());  // 打印登录时间
  // };

/**
 * 判断是否登录状态，返回boolean
 */
  hasLoggedIn() {
    let testToken = localStorage.getItem('auth_token');
    /**
     * If local sessionStorage
     */
    if (testToken === 'success'){
        return true;
    }
  }
}
