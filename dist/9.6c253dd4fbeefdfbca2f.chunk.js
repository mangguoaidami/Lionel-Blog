webpackJsonp([9],{422:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),r=e(37),a=e(471),o=e(444);e.d(n,"AngularSigleModule",(function(){return c}));var c=(function(){function t(){}return t=__decorate([e.i(i.x)({imports:[r.c,a.a],declarations:[o.a]})],t)})()},444:function(t,n,e){"use strict";var i=e(4),r=e(21),a=e(188);e.d(n,"a",(function(){return o}));var o=(function(){function t(t,n){this.route=t,this.service=n}return t.prototype.ngOnInit=function(){var t=this,n=this.route.snapshot.params.id;this.service.getAngularSigle(n).subscribe((function(n){t.article=n}))},t=__decorate([e.i(i._10)({template:e(493),styles:[e(482)]}),__metadata("design:paramtypes",[r.g,a.a])],t)})()},471:function(t,n,e){"use strict";var i=e(21),r=e(444);e.d(n,"a",(function(){return o}));var a=[{path:"",component:r.a}],o=i.a.forChild(a)},482:function(t,n){t.exports=""},493:function(t,n){t.exports='<div *ngIf="article">\n    <div [innerHtml]="article.text"></div>\n</div>\n'}});