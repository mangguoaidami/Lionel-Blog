webpackJsonpac__name_([2],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_routing__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });



var RegisterModule = (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__register_routing__["a" /* routing */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* RegisterComponent */]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(301),
            styles: [__webpack_require__(292)]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_component__ = __webpack_require__(274);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__register_component__["a" /* RegisterComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 292:
/***/ (function(module, exports) {

module.exports = "#login-box {\n  background: url(./../../../assets/img/3626.jpg) no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  font-family: 'Open Sans', sans-serif;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: absolute; }\n\n.form-group label {\n  color: #444444; }\n\n.login-card h3 {\n  margin: 0 auto;\n  text-align: center;\n  font-size: 24px;\n  color: #444444; }\n\n.login-card {\n  display: block;\n  padding: 40px;\n  width: 500px;\n  background: transparent;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden; }\n\n.login {\n  text-align: center;\n  font-size: 14px;\n  font-family: 'Arial', sans-serif;\n  font-weight: 700;\n  height: 36px;\n  padding: 0 8px;\n  /* border-radius: 3px; */\n  /* -webkit-user-select: none;\n  user-select: none; */ }\n\n.login-submit {\n  /* border: 1px solid #3079ed; */\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0, 0, 0, 0.1);\n  background-color: #4d90fe;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */ }\n\n.login-card a {\n  text-decoration: none;\n  color: #ffffff;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  transition: opacity ease 0.5s; }\n\n.login-card a:hover {\n  opacity: 1; }\n\n.login-help {\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: #dddddd; }\n\n@media (max-width: 550px) {\n  .login-card {\n    margin: 0px;\n    width: 100%;\n    height: 100%; }\n  .login-submit {\n    position: absolute;\n    bottom: 20px;\n    margin: 0 auto;\n    width: 75%; } }\n"

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "<div id=\"login-box\">\n    <div class=\"login-card\">\n            <h3>Register</h3>\n            <hr>\n            <form action=\"dash.html\">\n                <div class=\"form-group\">\n                    <label for=\"formGroupUsername\">Username</label>\n                    <input type=\"email\" class=\"form-control\" id=\"formGroupUsername\" placeholder=\"Username\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"formGroupEmail\">Email</label>\n                    <input type=\"email\" class=\"form-control\" id=\"formGroupEmail\" placeholder=\"Email\">\n                    </div>\n                <div class=\"form-group\">\n                <label for=\"formGroupPassword\">Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"formGroupPassword\" placeholder=\"Password\">\n                </div>\n\n\n                <div class=\"login-help\">\n                    <p>Already have an account clicking <a [routerLink]=\"['/login']\">there</a>, I confirm that I have\n            read and agree to the Terms and <a href=\"#\">Privacy Policy</a></p>\n                </div>\n                \n                <button class=\"btn btn-info btn-block login-submit\" type=\"submit\">sign up</button>\n            </form>\n    </div>\n</div>"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map