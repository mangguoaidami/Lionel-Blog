webpackJsonpac__name_([0],{

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_sigle_routing__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__article_sigle_component__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSigleModule", function() { return ArticleSigleModule; });




var ArticleSigleModule = (function () {
    function ArticleSigleModule() {
    }
    ArticleSigleModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__article_sigle_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__article_sigle_component__["a" /* ArticleSigleComponent */]]
        })
    ], ArticleSigleModule);
    return ArticleSigleModule;
}());



/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_services_articleService_article_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_services_pagerService_pager_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleSigleComponent; });





// import { Article } from './../../theme/services/articleService/article.model';
var ArticleSigleComponent = (function () {
    function ArticleSigleComponent(route, service, pagerService) {
        this.route = route;
        this.service = service;
        this.pagerService = pagerService;
        // array of all items to be paged
        this.article = {};
        // pager object
        this.pager = {};
    }
    ArticleSigleComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** get pages route's ID */
        var id = this.route.snapshot.params['id'];
        this.service.getArticleSigle(id)
            .subscribe(function (data) {
            _this.article = data;
            _this.article.innerHTML = data.string.split('🔚');
            // console.log(this.article);
            // initialize to page 1
            _this.setPage(1);
        });
    };
    ArticleSigleComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.article.innerHTML.length, page);
        // get current page of items
        this.pagedItems = this.article.innerHTML.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ArticleSigleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(297),
            styles: [__webpack_require__(288)]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__theme_services_articleService_article_service__["a" /* ArticleService */], __WEBPACK_IMPORTED_MODULE_4__theme_services_pagerService_pager_service__["a" /* PagerService */]])
    ], ArticleSigleComponent);
    return ArticleSigleComponent;
}());



/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_sigle_component__ = __webpack_require__(270);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__article_sigle_component__["a" /* ArticleSigleComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = ".article nav {\n  margin-top: 1.2rem; }\n"

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"article\" class=\"article\">\n    <p class=\"display-4 text-center\">{{ article.title | json }}</p>\n    <a [routerLink]=\"[article.link]\" class=\"btn btn-outline-warning btn-lg btn-block\" *ngIf=\"article.link\">Quick query</a>\n    <!-- <p class=\"lead text-center\">{{ article.introduction }}</p> -->\n    <div [innerHTML]=\"article.introduction\"></div>\n    <div [innerHTML]=\"pagedItems\"></div>\n\n    <!-- pager -->\n    <nav aria-label=\"Page navigation example\">\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n                    <a (click)=\"setPage(1)\" class=\"page-link\" href=\"javascript:void(0);\">First</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\" href=\"javascript:void(0);\">Previous</a>\n                </li>\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item\">\n                    <a (click)=\"setPage(page)\" class=\"page-link\" href=\"javascript:void(0);\">{{page}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\" href=\"javascript:void(0);\">Next</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item\">\n                    <a (click)=\"setPage(pager.totalPages)\" class=\"page-link\" href=\"javascript:void(0);\">Last</a>\n                </li>\n            </ul>\n    </nav>\n</div>\n"

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(4))(208);

/***/ })

});
//# sourceMappingURL=0.chunk.js.map