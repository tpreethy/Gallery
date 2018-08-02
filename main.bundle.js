webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__ = __webpack_require__("./node_modules/ngx-bootstrap/alert/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_detail_image_detail_component__ = __webpack_require__("./src/app/image-detail/image-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__image_service__ = __webpack_require__("./src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: "gallery", component: __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */] },
    { path: "image/:id", component: __WEBPACK_IMPORTED_MODULE_7__image_detail_image_detail_component__["a" /* ImageDetailComponent */] },
    { path: "", redirectTo: "/gallery", pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__image_detail_image_detail_component__["a" /* ImageDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* ImageFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* ImageFilterPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageFilterPipe = /** @class */ (function () {
    function ImageFilterPipe() {
    }
    ImageFilterPipe.prototype.transform = function (items, criteria) {
        if (criteria === 'all') {
            return items;
        }
        else {
            return items.filter(function (item) {
                return item.category === criteria;
            });
        }
    };
    ImageFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'imageFilter'
        })
    ], ImageFilterPipe);
    return ImageFilterPipe;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\n    padding:0; \n    width:1200px;\n    margin:20px auto\n}\n\nli{\n    display:inline;\n}\n\n.tn{\n    padding:10px;\n    margin:6px;\n    border:4px solid #eee;\n    -webkit-box-shadow: #555 1px 1px 8px 1px;\n            box-shadow: #555 1px 1px 8px 1px;\n}\n\n.btn{\n    margin:4px;\n}"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<div class=\"row\">\n  <button class=\"btn btn-lg btn-info\" [class.active]=\"filterBy==='all'\" (click)=\"filterBy='all'\">All</button>\n  <button class=\"btn btn-lg btn-info\" [class.active]=\"filterBy==='boats'\" (click)=\"filterBy='boats'\">Boats</button>\n  <button class=\"btn btn-lg btn-info\" [class.active]=\"filterBy==='nature'\" (click)=\"filterBy='nature'\">Nature</button>\n  <button class=\"btn btn-lg btn-info\" [class.active]=\"filterBy==='birds'\" (click)=\"filterBy='birds'\">Birds</button>\n\n  <ul id=\"thumbnailsList\">\n    <li *ngFor=\"let image of (visibleImages | imageFilter:filterBy)\">\n      <a [routerLink]=\"['/image',image.id]\">\n         <img src=\"{{image.url}}\" class=\"tn\" width=\"200\" height=\"200\">\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_service__ = __webpack_require__("./src/app/image.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(imageService) {
        this.imageService = imageService;
        this.title = 'Recent Photos';
        this.visibleImages = [];
        this.filterBy = 'all';
        this.visibleImages = this.imageService.getImages();
    }
    GalleryComponent.prototype.ngOnChanges = function () {
        this.visibleImages = this.imageService.getImages();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], GalleryComponent.prototype, "filterBy", void 0);
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/image-detail/image-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".img-container{\n    margin:24px;\n    -webkit-box-shadow:#555 1px 2px 8px 1px;\n            box-shadow:#555 1px 2px 8px 1px;\n    min-height: 500px;\n    min-width: 0px;\n    background-position: center;\n    background-repeat: no-repeat;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n\n#caption{\n    font-size: 1.5em;\n    font-family: \"Montserrat\", sans-serif;\n    padding: 18px;\n    color: #222;\n    background-color: #f5f5f5;\n    border: 1px solid #bbb;\n    width: 900px;\n  }\n\n.caption-row{\n    padding: 24px;\n    text-align: center;\n  }\n"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div [ngStyle]=\"{'background-image':'url('+ image.url +')'}\" class=\"img-container paper\">\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 caption-row\">\n      <span id=\"caption\">\n        {{image.caption}}\n      </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/image-detail/image-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_service__ = __webpack_require__("./src/app/image.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageDetailComponent = /** @class */ (function () {
    function ImageDetailComponent(imageService, route) {
        this.imageService = imageService;
        this.route = route;
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
        this.image = this.imageService.getImage(this.route.snapshot.params['id']);
    };
    ImageDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-image-detail',
            template: __webpack_require__("./src/app/image-detail/image-detail.component.html"),
            styles: [__webpack_require__("./src/app/image-detail/image-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__image_service__["a" /* ImageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ImageDetailComponent);
    return ImageDetailComponent;
}());



/***/ }),

/***/ "./src/app/image.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ImageService = /** @class */ (function () {
    function ImageService() {
        this.visibleImages = [];
    }
    ImageService.prototype.getImages = function () {
        return this.visibleImages = IMAGES.slice(0);
    };
    ImageService.prototype.getImage = function (id) {
        return IMAGES.slice(0).find(function (image) { return image.id == id; });
    };
    ImageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ImageService);
    return ImageService;
}());

var IMAGES = [
    { "id": 1, "category": "boats", "caption": "Sailing the boat", "url": "assets/img/boat1.jpg" },
    { "id": 2, "category": "boats", "caption": "Fishing boat", "url": "assets/img/boat2.jpg" },
    { "id": 3, "category": "birds", "caption": "Magpie", "url": "assets/img/bird1.jpg" },
    { "id": 4, "category": "birds", "caption": "northern-mockingbird", "url": "assets/img/bird2.jpg" },
    { "id": 5, "category": "birds", "caption": "Green Wing Macaw", "url": "assets/img/bird3.jpg" },
    { "id": 6, "category": "nature", "caption": "Plitvice lakes", "url": "assets/img/nature1.jpg" },
    { "id": 7, "category": "nature", "caption": "Trees in Park", "url": "assets/img/nature2.jpeg" },
    { "id": 8, "category": "nature", "caption": "canoe water nature", "url": "assets/img/nature3.jpg" },
];


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\nnav{\n    font-family: 'Lato', sans-serif;\n    background-color: #424242;\n  }\n  \n  .logo{\n    color: #fff;\n    font-family: 'cabin', sans-serif;\n    font-size: 1.5em;\n  }\n  \n  ul.nav a{\n    -webkit-transition:0.3s ease;\n    transition:0.3s ease;\n  }\n  \n  ul.nav a:hover{\n    color: #fff;\n    background-color: #0D47A1;\n  }\n  \n  .active>a{\n    background-color: #616161;\n  }"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <nav class=\"navbar fixed-top navbar-dark bg-dark\">\n     <div class=\"container\">\n       <div class=\"navbar-header\">\n           <a class=\"navbar-brand logo\" href=\"#\">\n              {{title}}\n           </a>\n        </div>\n      </div>  \n  </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.title = 'Gallery';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map