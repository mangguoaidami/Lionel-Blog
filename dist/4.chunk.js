webpackJsonpac__name_([4],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_routing__ = __webpack_require__(281);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });





var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__login_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */]]
            // providers: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_services_authService_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });




var LoginComponent = (function () {
    function LoginComponent(authService, fb, router) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.submitted = false;
        this.ifShowLoadig = false;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('1.copy this code in your constol: localStorage.setItem("auth_token", "QpwL5tke4Pnpja7X")' +
            '\n' +
            '2.Input account to login => username: eve.holt@reqres.in, password: cityslicka');
    };
    ;
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.inputE.nativeElement.focus();
    };
    ;
    /**
     * login表单提交
     */
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.ifShowLoadig = true;
        this.submitted = true; // 绑定submitted
        this.authService.login(this.email.value, this.password.value)
            .subscribe(function (data) {
            // debugger;
            console.log('router', _this.router);
            // this.router.navigate()
            _this.router.navigate(['/pages']);
        }, function (err) {
            console.error('err', err);
        });
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], LoginComponent.prototype, "inputE", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(299),
            styles: [__webpack_require__(290)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__theme_services_authService_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(272);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* LoginComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "#login-box {\n  background: url(./../../../assets/img/3626.jpg) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  font-family: 'Open Sans', sans-serif;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: absolute; }\n\n.form-group label {\n  color: #444444; }\n\n.login-card h3 {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 24px;\n  color: #444444; }\n\n.login-card {\n  display: block;\n  padding: 40px;\n  width: 500px;\n  background: transparent;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden; }\n\n.login {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n  /* border-radius: 3px; */\n  /* -webkit-user-select: none;\nuser-select: none; */ }\n\n.login-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  background-color: #4d90fe;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\n  cursor: pointer; }\n\n.login-card a {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  transition: opacity ease 0.5s; }\n\n.login-card a:hover {\n  opacity: 1; }\n\n.login-help {\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: #dddddd; }\n  .login-help a {\n    color: #ffffff; }\n\n.loading {\n  margin: 0 auto;\n  display: block; }\n\n@media (max-width: 550px) {\n  .login-card {\n    margin: 0px;\n    width: 100%;\n    height: 100%; }\n  .login-submit {\n    position: absolute;\n    bottom: 20px;\n    margin: 0 auto;\n    width: 75%;\n    cursor: pointer; } }\n"

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div id=\"login-box\">\n    <div class=\"login-card\">\n            <h3>Log-in</h3>\n            <hr>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\n                    <label for=\"formGroupEmail\">Email</label>\n                    <input type=\"text\" [formControl]=\"email\" name=\"formGroupEmail\" class=\"form-control\" id=\"formGroupEmail\" placeholder=\"Email/Username\" #myInput>\n                </div>\n\n                <div class=\"form-group\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n                    <label for=\"formGroupPassword\">Password</label>\n                    <input type=\"password\" [formControl]=\"password\" class=\"form-control\" name=\"formGroupPassword\" id=\"formGroupPassword\" placeholder=\"Password\">\n                </div>\n\n                <div class=\"login-help\">\n                    <p>By signing up or clicking <a [routerLink]=\"['/register']\">here</a>, I confirm that I have\n            read and agree to the Terms and <a href=\"/\">Privacy Policy</a></p>\n                </div>\n                \n                <div class=\"form-group\">\n                    <button class=\"btn btn-info btn-block login-submit\" id=\"test_btn\" type=\"submit\" [disabled]=\"!form.valid\">\n                        <span *ngIf=\"!ifShowLoadig\">Login</span>\n                        <img *ngIf=\"ifShowLoadig\" class=\"loading\" src=\"./../../../assets/img/loading-spinning-bubbles.svg\" width=\"20\" height=\"20\" />\n                    </button>\n                </div>\n                \n            </form>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map