(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/shared-lib/src/app/app.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/shared-lib/src/app/app.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<lib-header [logoLocation]=\"'assets/images/logo.png'\" \n            [bgColor]=\"'grey'\" \n            [navBarColor]=\"'light'\" \n            [navbarText]=\"'light'\">\n</lib-header>\n<div class=\"carousel-container\">\n    <img class=\"d-block w-100\" src=\"assets/images/hero1.png\" alt=\"First slide\">\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/shared-lib/src/app/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/shared-lib/src/app/header/header.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\"  [style.background-color]=\"bgColor\">\n    <mdb-navbar #menu id=\"menu\" [containerInside]=\"false\"\n        SideClass=\" fixed-top animated fadeInDown navbar navbar-expand-lg navbar-{{navbarText}} bg-{{navBarColor}}\">\n        <mdb-navbar-brand>\n            <a href=\"/\" class=\"navbar-brand\" [style.background]=\"'url('+logoLocation+')'\" id=\"logo\" title=\"mjf-legal\">\n\n            </a>\n            <br>\n            28202 Cabot Road, Suite 300\n            <br>\n            Laguna Niguel, CA, 92677\n        </mdb-navbar-brand>\n\n        <links>\n            <div #navContainer class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-8 offset-4\">\n                        <div class=\"float-right tel\">\n                            Call Now: <a href=\"tel:+1-949-364-1511 \">+1(949)-364-1511</a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-8 offset-4\">\n                        <div class=\"float-right\">\n                            <a class=\"button \" href=\"/contact-us/attorney-referral-and-co-counsel-opportunities/\">\n                                MCLE Signup <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a class=\"button secondary\" href=\"/contact-us/\">\n                                Contact Us <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row float-right\">\n                    <ul id=\"menu-main-navigation\" class=\"navbar-nav mr-auto\">\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.price-law.com/\" aria-current=\"page\">\n                                Home\n                            </a>\n                        </li>\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item dropdown\" dropdown>\n                            <a dropdownToggle type=\"button\" class=\"nav-link dropdown-toggle\">\n                                Mediation<span class=\"caret\"></span>\n                            </a>\n                            <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">About Mediation</a>\n                                <div class=\"divider dropdown-divider\"></div>\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Civil Mediation</a>\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Family Mediation</a>\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Workplace Mediation</a>\n\n                            </div>\n                        </li>\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item dropdown\" dropdown>\n                            <a dropdownToggle  type=\"button\" class=\"nav-link dropdown-toggle\">\n                                Services<span class=\"caret\"></span>\n                            </a>\n                            <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">About Services</a>\n                                <div class=\"divider dropdown-divider\"></div>\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Privacy Consultant</a>\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Professional Speaker</a>\n                                <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">MCLE Education</a>\n\n                            </div>\n                        </li>\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.price-law.com/\" aria-current=\"page\">\n                                Articles\n                            </a>\n                        </li>\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.price-law.com/\" aria-current=\"page\">\n                                FAQ\n                            </a>\n                        </li>\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.price-law.com/\" aria-current=\"page\">\n                                Links\n                            </a>\n                        </li>\n                        <li [style.margin-left.px]=\"navContainer.offsetWidth/navItemsSpacing\" class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"https://www.price-law.com/\" aria-current=\"page\">\n                                About Us\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </links>\n\n    </mdb-navbar>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <lib-header [logoLocation]=\"'assets/images/logo.png'\" [bgColor]=\"'grey'\" [navBarColor]=\"'light'\"\n        [navbarText]=\"'light'\">\n    </lib-header>\n\n    <div class=\"row\">\n        <div class=\"col-12 content-hero\">\n            <img #hero class=\"w-100 animated slideInUp\" src=\"assets/images/hero1.png\" alt=\"First slide\">  \n            <i #chevron [style.top.px]=\"hero.height-convertRemToPixels(5)\" [style.right.px]=\"hero.width/2\" class=\"animated bounce infinite chevron-down fas fa-5x fa-chevron-down\"></i>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 content-main\">\n            <div class=\"container\">\n                <div class=\"row justify-content-center\">\n                    <div class=\"col-12\">\n                        <img src=\"assets/images/headline.gif\" class=\"img-fluid mx-auto d-block\">\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-12 col-lg-6 order-lg-12\">\n                        <div class=\"embed-responsive embed-responsive-4by3\">\n                            <video controls autoplay muted class=\"embed-responsive-item\">\n                                <source src=\"assets/video/intro.mp4\" type=\"video/mp4\">\n                                <font face=\"Times New Roman\" size=\"2\">\n                                    If the above embeded video does not play due to your computer security, please <a\n                                        href=\"Video/intro.wmv\">click here.</a>\n                                </font>\n                            </video>\n                        </div>\n                        <a href=\"faq.html\" style=\"color: #bb0511; font-family: Arial; font-size: 18\">\n                            <p align=\"center\">Watch Mari's short video clips to answer your mediation questions</p>\n                        </a>\n                    </div>\n                    <div class=\"col-12 col-lg-6 my-auto\">\n                        <div>\n                            <font color=\"#800000\" face=\"Times New Roman\" size=\"3\"><b>Attorney/Mediator who facilitates\n                                    mutually satisfying agreements</b>\n                            </font>\n                            <div class=\"d-lg-none\">\n                                <a href=\"#section1\" data-toggle=\"collapse\">\n                                    <small>read more...</small>\n                                </a>\n                                <br><br>\n                            </div>\n                            <div id=\"section1\" class=\"div-collapse collapse d-lg-block\">\n                                <p align=\"justify\">\n                                    <font face=\"Times New Roman\" size=\"3\">With over 20 years of legal\n                                        mediation experience, Mari Frank&#146;s skills in conflict deflection help you\n                                        achieve the\n                                        best outcome with a minimum of stress. Her process of &quot;solutioneering&quot;\n                                        is more\n                                        financially and emotionally advantageous than a court battle. Ms. Frank&#146;s\n                                        unique\n                                        style provides a safe harbor where proposals can be shared in a private\n                                        protected setting\n                                        managed by an expert facilitator.</font>\n                                </p>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-12\">\n                        <p style=\"margin-bottom:0px\" align=\"justify\">\n                            <b>\n                                <font color=\"#800000\" face=\"Times New Roman\" size=\"3\">We respect\n                                    your privacy</font>\n                            </b>\n                        </p>\n                        <div class=\"d-lg-none\">\n                            <a href=\"#section2\" data-toggle=\"collapse\">\n                                <small>read more...</small>\n                            </a>\n                            <br><br>\n                        </div>\n                        <div id=\"section2\" class=\"div-collapse collapse d-lg-block\">\n                            <p align=\"justify\">\n                                <font face=\"Times New Roman\" size=\"3\">As a lawyer, mediator and\n                                    privacy consultant, Mari&#146;s expertise in privacy, civil and family law, and\n                                    mediation\n                                    techniques enables you to attain a mutually satisfying agreement without\n                                    compromising your\n                                    confidentiality or privacy. As author of <i>Safeguard Your Identity</i>, Ms. Frank\n                                    has a\n                                    keen consciousness about the need to keep sensitive information out of the public\n                                    eye. </font>\n                            </p>\n                            <p align=\"justify\">\n                                <font face=\"Times New Roman\" size=\"3\">Aside from avoiding soaring\n                                    litigation costs, and resolving all issues to everyone's satisfaction, mediation has\n                                    the\n                                    perk of confidentiality.&nbsp; In Mari's office, you participate in a private\n                                    mediation\n                                    process; the public does not hear embarrassing statements or accusations, nor do you\n                                    make\n                                    public record of you or your company's finances and sensitive information. </font>\n                            </p>\n                            <p ALIGN=\"JUSTIFY\">\n                                <font face=\"Times New Roman\" size=\"3\">Mari Frank is an attorney/\n                                    mediator, author, professional trainer, and privacy consultant in private practice\n                                    in\n                                    Laguna Niguel, California. She has worked in the District Attorney&#146;s Office,\n                                    practiced law in insurance defense, and has had a general civil law practice. In\n                                    recent\n                                    years she has limited her legal practice to resolving disputes through mediation and\n                                    has\n                                    successfully settled thousands of disputes as a neutral.</font>\n                            </p>\n                            <p ALIGN=\"JUSTIFY\">\n                                <font face=\"Times New Roman\" size=\"3\">Ms. Frank has taught hundreds of\n                                    law students as a law professor, and thousands of attorneys as a certified trainer\n                                    for\n                                    continuing legal education for the State Bar of California She presently teaches\n                                    business\n                                    professionals negotiation and mediation in the Conflict Resolution Department of the\n                                    University of California, Irvine. She also presents transformational training\n                                    programs for\n                                    companies and governmental agencies. As a privacy expert, Mari has testified many\n                                    times in\n                                    congress, and has appeared on dozens of national television shows including <b>48\n                                        Hours,\n                                        Dateline, NBC and CBS evening news, CNN</b> and has been featured in the\n                                    <i><b>Wall St.\n                                            Journal, the New York Times, the LA Times, US News and World Reports, USA\n                                            Today </b></i>and\n                                    more. She&#146;s been interviewed on over 250 radio shows and is the host of her own\n                                    radio\n                                    show &quot;Privacy Piracy &quot;on KUCI 88.9 FM in Irvine www.kuci.org. Mari&#146;s\n                                    own 90\n                                    Minute PBS television special &quot;Protecting Yourself in the Information Age&quot;\n                                    aired\n                                    nationally in 2005.</font>\n                            </p>\n                            <p ALIGN=\"JUSTIFY\">\n                                <font face=\"Times New Roman\" size=\"3\">Ms. Frank uses a variety of\n                                    &quot;solutioneering&quot; techniques in her career as a mediator, privacy expert,\n                                    and\n                                    author. Please visit her other websites at <a href=\"http://www.identitytheft.org/\"\n                                        onclick=\"NewWindow(this.href,'name','640','480','yes');return false\"><b>www.identitytheft.org</b></a>\n                                    and <b><a href=\"http://www.kuci.org/privacypiracy\"\n                                            onclick=\"NewWindow(this.href,'name','640','480','yes');return false\">www.kuci.org/privacypiracy</a>.&nbsp;\n                                    </b>\n                                </font>\n                            </p>\n\n\n                        </div>\n                        <p><b><a href=\"contact.html\">Contact</a>\n                                <font color=\"#800000\"> Mari\n                                    Frank today for a free consultation. </font>\n                            </b>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./projects/shared-lib/src/app/app.component.styl":
/*!********************************************************!*\
  !*** ./projects/shared-lib/src/app/app.component.styl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./projects/shared-lib/src/app/app.component.ts":
/*!******************************************************!*\
  !*** ./projects/shared-lib/src/app/app.component.ts ***!
  \******************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shared-lib';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./projects/shared-lib/src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./projects/shared-lib/src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./projects/shared-lib/src/app/app.module.ts":
/*!***************************************************!*\
  !*** ./projects/shared-lib/src/app/app.module.ts ***!
  \***************************************************/
/*! exports provided: AppModule, SharedLibrary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLibrary", function() { return SharedLibrary; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./projects/shared-lib/src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./projects/shared-lib/src/app/header/header.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");




/* Import these*/


var providers = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

var SharedLibrary = /** @class */ (function () {
    function SharedLibrary() {
    }
    SharedLibrary.forRoot = function () {
        return {
            ngModule: AppModule,
            providers: providers
        };
    };
    SharedLibrary = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({ providers: providers })
    ], SharedLibrary);
    return SharedLibrary;
}());



/***/ }),

/***/ "./projects/shared-lib/src/app/header/header.component.styl":
/*!******************************************************************!*\
  !*** ./projects/shared-lib/src/app/header/header.component.styl ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  font-family: 'Lora', serif;\n}\n#header {\n  background-color: #fff;\n  opacity: 0.75;\n}\n#header #logo {\n  width: 20rem;\n  height: 5rem;\n  display: block;\n  cursor: pointer;\n  text-indent: -9999em;\n  float: left;\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n}\n#header #logo.opacity1.animated {\n  opacity: 1 !important;\n}\n#header a {\n  margin: 0px !important;\n  padding: 0.5rem 0 0 0.5rem !important;\n}\n#header a.button {\n  margin: 0.5rem 0 !important;\n  margin-left: 0.5rem !important;\n  padding: 0.5rem 0.5rem !important;\n  color: #fff;\n  font-family: 'Lora', serif;\n  font-size: 14px;\n  text-transform: uppercase;\n  height: 39px;\n  line-height: 39px;\n  display: inline-block;\n  background: #81052a;\n}\n#header a.button.secondary {\n  background: #525254;\n}\n#header .tel {\n  color: #505052;\n  cursor: default;\n}\n#menu-main-navigation {\n  padding-right: 10rem !important;\n}\n"

/***/ }),

/***/ "./projects/shared-lib/src/app/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./projects/shared-lib/src/app/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.navItemsSpacing = 25;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "logoLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "navBarColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HeaderComponent.prototype, "navbarText", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lib-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./projects/shared-lib/src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.styl */ "./projects/shared-lib/src/app/header/header.component.styl")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-hero,\n.content-main {\n  z-index: -1000 !important;\n}\n.content-hero {\n  position: relative !important;\n}\n.content-hero .chevron-down {\n  position: absolute !important;\n}\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mari-frank-new';
    }
    AppComponent.prototype.getChevronHeight = function () {
        return this.chevron.nativeElement.height;
    };
    AppComponent.prototype.convertRemToPixels = function (rem) {
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chevron', { static: false })
    ], AppComponent.prototype, "chevron", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _projects_shared_lib_src_app_app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/shared-lib/src/app/app.module */ "./projects/shared-lib/src/app/app.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _projects_shared_lib_src_app_app_module__WEBPACK_IMPORTED_MODULE_6__["SharedLibrary"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ray/Documents/git/mari-frank-new/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);