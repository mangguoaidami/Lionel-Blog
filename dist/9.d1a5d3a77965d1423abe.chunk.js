webpackJsonp([9],{409:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(7),r=e(37),a=e(458),o=e(431);e.d(n,"AngularSigleModule",(function(){return c}));var c=(function(){function t(){}return t})();c=__decorate([e.i(i.x)({imports:[r.c,a.a],declarations:[o.a]})],c)},431:function(t,n,e){"use strict";var i=e(7),r=e(35),a=e(187);e.d(n,"a",(function(){return o}));var o=(function(){function t(t,n){this.route=t,this.service=n}return t.prototype.ngOnInit=function(){var t=this,n=this.route.snapshot.params.id;this.service.getAngularSigle(n).subscribe((function(n){t.article=n}))},t})();o=__decorate([e.i(i._10)({template:e(480),styles:[e(469)]}),__metadata("design:paramtypes",[r.c,a.a])],o)},458:function(t,n,e){"use strict";var i=e(35),r=e(431);e.d(n,"a",(function(){return o}));var a=[{path:"",component:r.a}],o=i.a.forChild(a)},469:function(t,n){t.exports=""},480:function(t,n){t.exports='<div *ngIf="article">\n    <div [innerHtml]="article.text"></div>\n</div>'}});