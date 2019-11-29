var ac_main =
webpackJsonpac__name_([10],{

/***/ 105:
/***/ (function(module, exports) {

module.exports = ".section {\n  padding: 2.5rem 0;\n  min-height: 300px; }\n"

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #696969; }\n  footer .bottom_article {\n    padding: 30px 0; }\n    footer .bottom_article .row .col-sm-7 .my_avatar .figure {\n      width: 150px;\n      height: 150px; }\n      footer .bottom_article .row .col-sm-7 .my_avatar .figure .figure-caption {\n        color: #ffffff;\n        font-size: 12px; }\n    footer .bottom_article .row .col-sm-7 .my_tell {\n      margin-left: 1.5rem; }\n      footer .bottom_article .row .col-sm-7 .my_tell h4 {\n        color: #ffffff; }\n      footer .bottom_article .row .col-sm-7 .my_tell p {\n        color: #999999; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .fo_icon {\n        display: inline-block;\n        width: 32px;\n        height: 32px;\n        cursor: pointer; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .wechat {\n        background: url(./../../assets/icon/wechat.png) center no-repeat; }\n        footer .bottom_article .row .col-sm-7 .my_tell .more_link .wechat:hover {\n          background: url(./../../assets/icon/wechat1.png) center no-repeat;\n          width: 32px;\n          height: 32px; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .facebook {\n        background: url(./../../assets/icon/facebook.png) center no-repeat; }\n        footer .bottom_article .row .col-sm-7 .my_tell .more_link .facebook:hover {\n          background: url(./../../assets/icon/facebook1.png) center no-repeat;\n          width: 32px;\n          height: 32px; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .linkedin {\n        background: url(./../../assets/icon/social-linkedin.png) center no-repeat; }\n        footer .bottom_article .row .col-sm-7 .my_tell .more_link .linkedin:hover {\n          background: url(./../../assets/icon/social-linkedin1.png) center no-repeat;\n          width: 32px;\n          height: 32px; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .github {\n        background: url(./../../assets/icon/github.png) center no-repeat; }\n        footer .bottom_article .row .col-sm-7 .my_tell .more_link .github:hover {\n          background: url(./../../assets/icon/github1.png) center no-repeat;\n          width: 32px;\n          height: 32px; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .zhanku {\n        background: url(./../../assets/icon/zhanku.png) center no-repeat; }\n        footer .bottom_article .row .col-sm-7 .my_tell .more_link .zhanku:hover {\n          background: url(./../../assets/icon/zhanku1.png) center no-repeat;\n          width: 32px;\n          height: 32px; }\n      footer .bottom_article .row .col-sm-7 .my_tell .more_link .my_weichat {\n        width: 100%; }\n    footer .bottom_article .row .col-sm-5 .pull-left h4 {\n      color: #ffffff; }\n    footer .bottom_article .row .col-sm-5 .pull-left p {\n      color: #999999; }\n  footer .right {\n    background-color: #111111; }\n    footer .right p {\n      font-size: 12px;\n      margin: 0; }\n"

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

module.exports = ".content {\n  background: linear-gradient(135deg, #ffa000 20%, #ff5000 80%);\n  overflow: hidden;\n  position: relative; }\n  .content:before {\n    background-position: center center;\n    background-size: 750px;\n    background: url(\"./../../assets/img/icon-bg3.png\") 0 0 repeat;\n    position: absolute;\n    height: 200%;\n    width: 100%;\n    display: block;\n    z-index: 0;\n    content: '';\n    opacity: 0.07;\n    pointer-events: none;\n    animation: bannermove 5s;\n    animation-fill-mode: forwards; }\n\n@keyframes bannermove {\n  from {\n    top: 0px; }\n  to {\n    top: -30%; } }\n  .content .container .navbar {\n    padding: 20px 0;\n    text-align: center; }\n    .content .container .navbar .navbar-toggle .icon-bar {\n      background-color: #666666; }\n    .content .container .navbar .navbar-brand {\n      padding: 0; }\n      .content .container .navbar .navbar-brand .my_logo {\n        width: 30px;\n        margin-right: 12px; }\n        .content .container .navbar .navbar-brand .my_logo img {\n          width: 30px; }\n      .content .container .navbar .navbar-brand .brnd_text {\n        color: #4F3A4B; }\n    .content .container .navbar .collapse {\n      position: relative; }\n      .content .container .navbar .collapse .navbar-nav {\n        margin: auto;\n        max-width: 450px;\n        float: none; }\n        .content .container .navbar .collapse .navbar-nav .login, .content .container .navbar .collapse .navbar-nav .logout {\n          cursor: pointer; }\n      .content .container .navbar .collapse .navbar-right {\n        position: absolute;\n        right: 15px;\n        top: 50%;\n        margin-top: -5px; }\n        .content .container .navbar .collapse .navbar-right li a {\n          text-decoration: none; }\n  .content .banner {\n    padding-bottom: 30px; }\n    .content .banner .container .header #test_h2 strong {\n      font-size: 4rem;\n      text-transform: uppercase;\n      background-image: linear-gradient(45deg, #f00, #ffe70a, #e6001f, #ffbc25);\n      -webkit-background-clip: text;\n      color: transparent;\n      animation: animate 20s linear infinite;\n      background-size: 1000%; }\n    .content .banner .container .header p {\n      color: #ffffff; }\n\n@keyframes animate {\n  0% {\n    background-position: 0% 100%; }\n  50% {\n    background-position: 100% 0%; }\n  100% {\n    background-position: 0% 100%; } }\n\n@media (max-width: 768px) {\n  .collapse .navbar-right {\n    display: none; } }\n"

/***/ }),

/***/ 108:
/***/ (function(module, exports) {

module.exports = "<header-app></header-app>\n<div class=\"container section\">\n    <router-outlet></router-outlet>\n</div>\n<footer-app></footer-app>\n"

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container bottom_article\">\n            <div class=\"row\">\n                <div class=\"col-sm-7 col-xs-12\">\n                    <div class=\"pull-left my_avatar\">\n                            <!-- <div class=\"card\" style=\"width: 20rem\">\n                                <img class=\"card-img-top\" src=\"./../../assets/img/100k.jpg\" alt=\"\">\n                            </div> -->\n                            <figure class=\"figure\">\n                                    <img src=\"./../../assets/img/110.png\"  class=\"figure-img img-fluid rounded\" alt=\"\">\n                                    <figcaption class=\"figure-caption\">Welcome to discuss with me.</figcaption>\n                                  </figure>\n                    </div>\n                    <div class=\"pull-left my_tell\">\n                            <h4>Thanks +</h4>\n                            <p>大家可以添加我的微信共同学习#</p>\n                            <div class=\"more_link\">\n                                <a class=\"wechat fo_icon\" data-toggle=\"modal\" data-target=\".bd-example-modal-sm\">\n                                    <!-- <img src=\"\" alt=\"\"> -->\n                                </a>\n                                <div class=\"modal fade bd-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\" aria-hidden=\"true\">\n                                  <div class=\"modal-dialog modal-sm\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <h5 class=\"modal-title\">扫一扫添加微信哟～</h5>\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                              <span aria-hidden=\"true\">&times;</span>\n                                            </button>\n                                          </div>\n                                          <div class=\"modal-body\">\n                                            <img class=\"rounded mx-auto d-block my_weichat\" src=\"./../../../../assets/img/WechatIMG41.jpeg\" alt=\"\">\n                                          </div>\n                                          <div class=\"modal-footer\">\n                                            <button type=\"button\" class=\"btn btn-primary\">给我留言</button>\n                                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">关闭</button>\n                                          </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <a class=\"github fo_icon\" href=\"https://www.github.com/mangguoaidami\" target=\"_blank\"></a>\n                                <a class=\"facebook fo_icon\" href=\"https://www.facebook.com/zhang.lionel.9\" target=\"_blank\"></a>\n                                <a class=\"linkedin fo_icon\" href=\"https://www.linkedin.com/in/%E6%9D%B0-%E7%AB%A0-76a85113a/\" target=\"_blank\"></a>\n                                <a class=\"zhanku fo_icon\" href=\"http://www.zcool.com.cn/u/14580103\" target=\"_blank\"></a>\n                            </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-5 col-xs-12\">\n                    <div class=\"pull-left\">\n                        <h4>more...</h4>\n                        <p>杭州(now) | 北京 | 合肥</p>\n                        <p>2年前端中级工程师-本科艺术设计UI侧重</p>\n                        <p>email: lionelzhang123@gmail.com</p>\n                        <p></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"right\">\n            <p class=\"text-center\">\n                    ©LIONEL ZHANG, <span id=\"todady\">{{ data }}</span><br/>\n                    powered by private.法律声明\n                    转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，<br/>\n                    商业媒体及纸媒请先联系：lionelzhang123@gmail.com\n            </p>\n        </div>\n</footer>\n"

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"container\">\n        <nav class=\"navbar navbar-toggleable-md navbar-light\">\n                <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bs-collapse-1\" aria-controls=\"bs-collapse-1\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-icon\"></span>\n                      </button>\n            <a [routerLink]=\"['/pages']\" class=\"navbar-brand\">\n                <span class=\"my_logo\">\n                    <img src=\"./../../assets/icon/lion.png\">\n                </span>\n                <span class=\"brnd_text\">\n                    Lionel-blog\n                </span>\n            </a>\n            <div id=\"bs-collapse-1\" class=\"collapse navbar-collapse\">\n                <ul class=\"navbar-nav\">\n                    <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                                <a class=\"nav-link\" [routerLink]=\"['/pages/list']\">Topic</a>\n                            </li>\n                    <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                        <a class=\"nav-link\" [routerLink]=\"['/pages/source']\">Source</a>\n                    </li>\n                    <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                        <a class=\"nav-link\" [routerLink]=\"['/pages/about']\">AboutAuthor</a>\n                    </li>\n                    <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n                        <a class=\"nav-link\" [routerLink]=\"['/pages/more']\">More</a>\n                    </li>\n                </ul>\n                <ul class=\"navbar-nav navbar-right\">\n                    <li class=\"login\" *ngIf=\"false\">\n                        <a [routerLink]=\"['/']\">Login</a>\n                    </li>\n                    <li class=\"logout\">\n                        <a href=\"javascript:void(0);\" class=\"btn btn-outline-danger btn-md\" (click)=\"logout()\">LogOut</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n    </div>\n    <div class=\"banner\">\n        <div class=\"container\">\n            <div class=\"header\">\n                <h2 class=\"text-center\" id=\"test_h2\"><strong>Hello World</strong></h2>\n                <p class=\"text-center\">Welcome to my blog🌈</p>\n                <div class=\"clearfix text-center\">\n                    <a [routerLink]=\"['/register']\" class=\"btn btn-outline-danger btn-md\">signUp</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(12);

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2
// rc2 workaround


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    // disableDebugTools();
    enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });



var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.authUrl = 'https://reqres.in/api';
    }
    /**
     * this is http request
     */
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.authUrl + "/login", { username: username, password: password })
            .map(function (res) { return res.json(); })
            .do(function (res) {
            // debugger;
            if (res.token)
                localStorage.setItem('auth_token', res.token); // 设置localstorage
            console.log('登录时间：' + new Date().getTime()); // 打印登录时间
        });
    };
    ;
    /**
     * 判断是否登录状态，返回boolean
     */
    AuthService.prototype.hasLoggedIn = function () {
        var testToken = localStorage.getItem('auth_token');
        /**
         * If local sessionStorage
         */
        if (testToken) {
            return true;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });

var PagesComponent = (function () {
    function PagesComponent() {
    }
    PagesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pages',
            styles: [__webpack_require__(105)],
            template: __webpack_require__(108)
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authService__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.hasLoggedIn()) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__services_authService__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgaModule; });




var NGA_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__components__["a" /* HeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components__["b" /* FooterComponent */]
];
var NgaModule = (function () {
    var NgaModule = NgaModule_1 = function NgaModule() {
    };
    NgaModule.forRoot = function () {
        return {
            ngModule: NgaModule_1
        };
    };
    ;
    NgaModule = NgaModule_1 = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]],
            declarations: NGA_COMPONENTS.slice(),
            providers: [],
            exports: NGA_COMPONENTS.slice()
        })
    ], NgaModule);
    return NgaModule;
    var NgaModule_1;
}());



/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(455);

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(522);

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });



/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });



var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        this.url = 'https://reqres.in/api/users';
    }
    /**
     * Get all article
     */
    ArticleService.prototype.getAllArticle = function () {
        // return this.http.get(this.url)
        return this.http.get('./../../../../assets/mocks/article.response.json')
            .map(function (res) { return res.json().data; });
    };
    ;
    /**
     * Get a sigle Article
     */
    ArticleService.prototype.getArticleSigle = function (id) {
        return this.http.get('./../../../../assets/mocks/article.response.json')
            .map(function (res) { return res.json().data[id]; });
    };
    ;
    /**
     * Get Angular article list
     */
    ArticleService.prototype.getAllAngularArticle = function () {
        return this.http.get('./../../../../assets/mocks/article-angular.response.json')
            .map(function (res) { return res.json().data; });
    };
    /**
     * Get Angular sigle article detiel
     */
    ArticleService.prototype.getAngularSigle = function (id) {
        return this.http.get('./../../../../assets/mocks/article-angular.response.json')
            .map(function (res) { return res.json().data[id]; });
    };
    ArticleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });

var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 1; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });



var AppComponent = (function () {
    function AppComponent(slimLoader, router) {
        var _this = this;
        this.slimLoader = slimLoader;
        this.router = router;
        // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationStart"]) {
                _this.slimLoader.start();
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationCancel"] ||
                event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationError"]) {
                _this.slimLoader.complete();
            }
        }, function (error) {
            _this.slimLoader.complete();
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: "\n  <ng2-slim-loading-bar></ng2-slim-loading-bar>\n  <router-outlet></router-outlet>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_services_authService_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_guards_AuthGuard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__theme_services_articleService_article_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__theme_services_pagerService_pager_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__theme_nga_module__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_toPromise__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_do__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_do__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/** import Angular core module 🎆 🎆 🎆 🎆 🎆 🎆  */


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__theme_nga_module__["a" /* NgaModule */].forRoot() // import Nga modules
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__environment__["b" /* ENV_PROVIDERS */],
                __WEBPACK_IMPORTED_MODULE_10__theme_services_authService_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__theme_guards_AuthGuard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_12__theme_services_articleService_article_service__["a" /* ArticleService */],
                __WEBPACK_IMPORTED_MODULE_13__theme_services_pagerService_pager_service__["a" /* PagerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes, { useHash: true });


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });





var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__pages_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */]]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_guards_AuthGuard_ts__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__(20);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



// import { LoginComponent } from './login/login.component';
// import { ArticleSigleComponent } from './article-sigle/article-sigle.component';
var routes = [
    {
        path: 'login',
        loadChildren: function() { return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 263))  .then( function(module) { return module['LoginModule']; } ); }
    },
    {
        path: 'register',
        loadChildren: function() { return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 265))  .then( function(module) { return module['RegisterModule']; } ); }
    },
    {
        path: 'pages',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: function() { return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 262))  .then( function(module) { return module['ListModule']; } ); } },
            { path: 'articleangular', loadChildren: function() { return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 260))  .then( function(module) { return module['ArticleAngularModule']; } ); } },
            { path: 'source', loadChildren: function() { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 266))  .then( function(module) { return module['SourceModule']; } ); } },
            { path: 'about', loadChildren: function() { return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 258))  .then( function(module) { return module['AboutModule']; } ); } },
            { path: 'more', loadChildren: function() { return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 264))  .then( function(module) { return module['MoreModule']; } ); } },
            { path: 'article/:id', loadChildren: function() { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 261))  .then( function(module) { return module['ArticleSigleModule']; } ); } },
            { path: 'angulesigle/:id', loadChildren: function() { return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 259))  .then( function(module) { return module['AngularSigleModule']; } ); } }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__theme_guards_AuthGuard_ts__["a" /* AuthGuard */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });

var FooterComponent = (function () {
    function FooterComponent() {
        this.data = new Date().toLocaleDateString();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer-app',
            template: __webpack_require__(109),
            styles: [__webpack_require__(106)]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__(67);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });



/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('auth_token'); // 删除localstorage
        this.logIn = false;
        this.router.navigate(['/login']);
    };
    ;
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-app',
            template: __webpack_require__(110),
            styles: [__webpack_require__(107)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(69);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });



/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer__ = __webpack_require__(68);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__footer__["a"]; });




/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });



/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(34);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ })

},[73]);
//# sourceMappingURL=main.bundle.js.map