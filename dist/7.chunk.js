webpackJsonpac__name_([7],{

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_sigle_routing__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_sigle_component__ = __webpack_require__(268);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularSigleModule", function() { return AngularSigleModule; });




var AngularSigleModule = (function () {
    function AngularSigleModule() {
    }
    AngularSigleModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_sigle_routing__["a" /* routing */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__angular_sigle_component__["a" /* AngularSigleComponent */]]
        })
    ], AngularSigleModule);
    return AngularSigleModule;
}());



/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_services_articleService_article_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularSigleComponent; });



var AngularSigleComponent = (function () {
    function AngularSigleComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    ;
    AngularSigleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.service.getAngularSigle(id)
            .subscribe(function (data) {
            _this.article = data;
        });
    };
    ;
    AngularSigleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(295),
            styles: [__webpack_require__(286)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__theme_services_articleService_article_service__["a" /* ArticleService */]])
    ], AngularSigleComponent);
    return AngularSigleComponent;
}());



/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_sigle_component__ = __webpack_require__(268);
/* unused harmony export route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var route = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__angular_sigle_component__["a" /* AngularSigleComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(route);


/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 295:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\">\n    <div [innerHtml]=\"article.text\"></div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=7.chunk.js.map