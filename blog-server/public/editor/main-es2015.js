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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");







const routes = [
    {
        path: '',
        children: [
            { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
            { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] },
            { path: 'notFound', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
        ]
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(blogService) {
        this.blogService = blogService;
        this.title = 'angular-blog';
    }
    ngOnInit() {
        window.localStorage.setItem('username', this.blogService.parseJWT(document.cookie)["usr"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"], ["id", "list-component"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#list-component[_ngcontent-%COMP%]\n{\n    width: 25em;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsaXN0LWNvbXBvbmVudFxue1xuICAgIHdpZHRoOiAyNWVtO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-date-pipe.pipe */ "./src/app/my-date-pipe.pipe.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
        _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"],
        _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["MyDatePipePipe"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                    _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                    _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"],
                    _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["MyDatePipePipe"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class BlogService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            responseType: 'text'
        };
        this.draft = null;
    }
    parseJWT(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    }
    fetchPosts(username) {
        const url = `/api/${username}`;
        let promise = new Promise((resolve, reject) => {
            this.http.get(url)
                .toPromise()
                .then(res => {
                res.sort(function (a, b) {
                    if (a.postid < b.postid)
                        return -1;
                    if (a.postid > b.postid)
                        return 1;
                    return 0;
                });
                resolve(res);
            })
                .catch(err => {
                reject(err.message);
            });
        });
        return promise;
    }
    getPost(username, postid) {
        const url = `/api/${username}/${postid}`;
        return new Promise((resolve, reject) => {
            this.http
                .get(url)
                .toPromise()
                .then(res => {
                resolve(res);
            })
                .catch(err => {
                reject(err.message);
            });
        });
    }
    newPost(username, post) {
        const url = `/api/${username}/${post.postid}`;
        return new Promise((resolve, reject) => {
            this.http
                .post(url, post, this.httpOptions)
                .toPromise()
                .then(() => {
                resolve();
            })
                .catch(err => {
                reject(err.message);
            });
        });
    }
    updatePost(username, post) {
        const url = `/api/${username}/${post.postid}`;
        return new Promise((resolve, reject) => {
            this.http
                .put(url, post, this.httpOptions)
                .toPromise()
                .then((res) => {
                resolve();
            })
                .catch(err => {
                reject(err.message);
            });
        });
    }
    deletePost(username, postid) {
        const url = `/api/${username}/${postid}`;
        return new Promise((resolve, reject) => {
            this.http
                .delete(url, this.httpOptions)
                .toPromise()
                .then(() => {
                resolve();
            })
                .catch(err => {
                reject(err.message);
            });
        });
    }
    setCurrentDraft(post) {
        this.draft = post;
    }
    getCurrentDraft() {
        return this.draft;
    }
    // local API
    getLocalPostsObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.postList);
    }
    getCurrentDraftObservable() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.draft);
    }
    getNextPostId() {
        return this.nextPostid;
    }
    incrementNextPostId() {
        this.nextPostid++;
    }
    addLocalPost(post) {
        this.postList.push(post);
    }
    deleteLocalPost(postid) {
        for (let i = 0; i < this.postList.length; i++) {
            if (this.postList[i].postid == postid) {
                this.postList.splice(i, 1);
                break;
            }
        }
    }
    updateLocalPosts() {
        return this.fetchPosts(localStorage.getItem('username'))
            .then(res => {
            this.nextPostid = res[res.length - 1].postid + 1;
            for (let i = 0; i < res.length; i++) {
                res[i].unsaved = false;
                res[i].isNewPost = false;
            }
            this.postList = res;
        })
            .catch(err => {
            console.log(err);
        });
    }
    ;
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-date-pipe.pipe */ "./src/app/my-date-pipe.pipe.ts");






class EditComponent {
    constructor(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    ;
    ngOnInit() {
        this.route.paramMap.subscribe(() => {
            let postid = parseInt(this.route.snapshot.paramMap.get('id'));
            this.getPost(postid);
        });
    }
    ngOnChanges() {
    }
    onChangeTitle(newTitle) {
        if (!this.post.unsaved) {
            this.post.unsaved = true;
        }
        this.post.title = newTitle;
    }
    onChangeBody(newBody) {
        if (!this.post.unsaved) {
            this.post.unsaved = true;
        }
        this.post.body = newBody;
    }
    getPost(postid) {
        if (this.blogService.getCurrentDraft() === null) {
            this.blogService
                .getPost(localStorage.getItem('username'), postid)
                .then(res => {
                this.post = res;
                this.post.unsaved = false;
                this.blogService.setCurrentDraft(this.post);
            })
                .catch(err => {
                console.log(err);
                this.router.navigate(['notFound']);
            });
        }
        else {
            this.post = this.blogService.getCurrentDraft();
        }
    }
    savePost() {
        if (this.post.isNewPost) {
            delete this.post.isNewPost;
            delete this.post.unsaved;
            this.blogService
                .newPost(localStorage.getItem('username'), this.post)
                .then(() => {
                this.post.isNewPost = false;
                this.post.unsaved = false;
                this.post.modified = new Date().getTime();
                this.blogService.setCurrentDraft(this.post);
            })
                .catch(err => {
                console.log(err);
            });
        }
        else {
            delete this.post.isNewPost;
            delete this.post.unsaved;
            this.blogService
                .updatePost(localStorage.getItem('username'), this.post)
                .then(() => {
                this.post.isNewPost = false;
                this.post.unsaved = false;
                this.post.modified = new Date().getTime();
                this.blogService.setCurrentDraft(this.post);
            })
                .catch(err => {
                console.log(err);
            });
        }
    }
    deletePost() {
        this.blogService.setCurrentDraft(null);
        if (!this.post.unsaved) {
            this.blogService
                .deletePost(localStorage.getItem('username'), this.post.postid)
                .catch(err => {
                console.log(err);
            });
        }
        this.blogService.deleteLocalPost(this.post.postid);
        this.router.navigate(['/']);
    }
    previewPost() {
        this.router.navigate(['preview', this.post.postid]);
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 8, consts: [[2, "text-align", "left", "margin-bottom", "20px"], ["type", "text", "placeholder", "Write the title of your post here...", 3, "ngModel", "ngModelChange"], [2, "text-align", "left"], ["placeholder", "Write the body of your post here...", 3, "ngModel", "ngModelChange"], ["id", "buttons"], [3, "disabled", "click"], [3, "click"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_5_listener($event) { return ctx.onChangeTitle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.onChangeBody($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "myDatePipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_17_listener() { return ctx.savePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_19_listener() { return ctx.previewPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_21_listener() { return ctx.deletePost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post == null ? null : ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post == null ? null : ctx.post.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 6, ctx.post == null ? null : ctx.post.modified), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabledBtn", !(ctx.post == null ? null : ctx.post.unsaved));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.post == null ? null : ctx.post.unsaved));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__["MyDatePipePipe"]], styles: ["input[_ngcontent-%COMP%]\n{\n    padding: 0.7em;\n    width: 25em;\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n\ntextarea[_ngcontent-%COMP%]\n{\n    padding: 0.7em;\n    height: 10em;\n    width: 25em;\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n\nlabel[_ngcontent-%COMP%]\n{\n    color: #8D9B6A;\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n    font-size: 125%;\n}\n\ninput[_ngcontent-%COMP%]\n{\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n\n#buttons[_ngcontent-%COMP%]\n{\n    display: flex;\n}\n\n#buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]\n{\n    margin: 0.5em 0.3em 0.5em 0;\n}\n\n.disabledBtn[_ngcontent-%COMP%]\n{\n    color: #c0c0c0;\n}\n\n.disabledBtn[_ngcontent-%COMP%]:hover\n{\n    cursor: context-menu;\n    background-color: #E8DFE0;\n}\n\np[_ngcontent-%COMP%]\n{\n    color: #8D9B6A;\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCw2RkFBNkY7QUFDakc7O0FBRUE7O0lBRUksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkZBQTZGO0FBQ2pHOztBQUVBOztJQUVJLGNBQWM7SUFDZCw2RkFBNkY7SUFDN0YsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSw2RkFBNkY7QUFDakc7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGNBQWM7SUFDZCw2RkFBNkY7QUFDakciLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0XG57XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgd2lkdGg6IDI1ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiUGFsYXRpbm8gTFQgU1REXCIsIEdlb3JnaWEsIHNlcmlmOyBcbn1cblxudGV4dGFyZWFcbntcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBoZWlnaHQ6IDEwZW07XG4gICAgd2lkdGg6IDI1ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiUGFsYXRpbm8gTFQgU1REXCIsIEdlb3JnaWEsIHNlcmlmOyBcbn1cblxubGFiZWxcbntcbiAgICBjb2xvcjogIzhEOUI2QTtcbiAgICBmb250LWZhbWlseTogXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJQYWxhdGlubyBMVCBTVERcIiwgR2VvcmdpYSwgc2VyaWY7IFxuICAgIGZvbnQtc2l6ZTogMTI1JTtcbn1cblxuaW5wdXRcbntcbiAgICBmb250LWZhbWlseTogXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJQYWxhdGlubyBMVCBTVERcIiwgR2VvcmdpYSwgc2VyaWY7IFxufVxuXG4jYnV0dG9uc1xue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNidXR0b25zID4gYnV0dG9uXG57XG4gICAgbWFyZ2luOiAwLjVlbSAwLjNlbSAwLjVlbSAwO1xufVxuXG4uZGlzYWJsZWRCdG5cbntcbiAgICBjb2xvcjogI2MwYzBjMDtcbn1cblxuLmRpc2FibGVkQnRuOmhvdmVyXG57XG4gICAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4REZFMDtcbn1cblxucFxue1xuICAgIGNvbG9yOiAjOEQ5QjZBO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIlBhbGF0aW5vIExUIFNURFwiLCBHZW9yZ2lhLCBzZXJpZjsgXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit',
                templateUrl: './edit.component.html',
                styleUrls: ['./edit.component.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post */ "./src/app/post.ts");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../my-date-pipe.pipe */ "./src/app/my-date-pipe.pipe.ts");







function ListComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "myDatePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    const currVal_0 = p_r1.postid == ((tmp_0_0 = ctx_r0.blogService.getCurrentDraft()) == null ? null : tmp_0_0.postid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", currVal_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, p_r1.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
} }
class ListComponent {
    constructor(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.blogService
            .updateLocalPosts()
            .then(() => {
            this.blogService
                .getLocalPostsObservable()
                .subscribe(res => {
                this.posts = res;
                for (let i = 0; i < this.posts.length; i++)
                    console.log(this.posts[i].postid);
            });
        });
    }
    ngOnChanges() {
        console.log(this.blogService.getCurrentDraft());
    }
    onSelect(post) {
        this.blogService.setCurrentDraft(post);
        this.router.navigate(['edit', post.postid]);
    }
    onNewPost() {
        let currentUtc = new Date().getTime();
        let p = new _post__WEBPACK_IMPORTED_MODULE_1__["Post"](this.blogService.getNextPostId(), currentUtc, currentUtc, "", "", true, true);
        //console.log(this.blogService.getNextPostId());
        this.blogService.addLocalPost(p);
        this.blogService.setCurrentDraft(p);
        this.blogService.incrementNextPostId();
        this.router.navigate(['edit', p.postid]);
    }
    onDeletePost(post) {
        this.blogService.setCurrentDraft(null);
        this.blogService.deleteLocalPost(post.postid);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 1, consts: [["id", "post-list", 1, "component"], [3, "click"], [1, "list"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "badge"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_1_listener() { return ctx.onNewPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_li_4_Template, 5, 6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["MyDatePipePipe"]], styles: [".list[_ngcontent-%COMP%] {\nmargin: 0 0 2em 0;\nlist-style-type: none;\npadding: 0;\nwidth: 25em;\nfont-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\ncursor: pointer;\nposition: relative;\nleft: 0;\nbackground-color: #E8DFE0;\nmargin: .5em;\npadding: .3em 0;\nheight: 1.6em;\nwidth: 25em;\nborder-radius: 4px;\nfont-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\ncolor: #8D9B6A;\nbackground-color: #DDD;\nleft: .1em;\n}\n.list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\nbackground-color: #DAB692;\n}\n.list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\nbackground-color: #C28556;\n}\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\ncolor: #333;\ntext-decoration: none;\nposition: relative;\ndisplay: block;\nwidth: 250px;\n}\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\ncolor:#8D9B6A;\n}\n.list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\ndisplay: inline-block;\nfont-size: small;\ncolor: white;\npadding: 0.8em 0.7em 0 0.7em;\nbackground-color:#8D9B6A;\nline-height: 1em;\nposition: relative;\nleft: -1px;\ntop: -4px;\nheight: 1.8em;\nwidth: 13em;\nmargin-right: .8em;\nborder-radius: 4px 0 0 4px;\nfont-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n.component[_ngcontent-%COMP%]\n{\n    float: left;\n    height: 40em;\n}\n#post-list[_ngcontent-%COMP%]\n{\n    width: 30em;\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLFVBQVU7QUFDVixXQUFXO0FBQ1gsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYLGtCQUFrQjtBQUNsQiw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEIsVUFBVTtBQUNWO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUVBO0FBQ0EsV0FBVztBQUNYLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsVUFBVTtBQUNWLFNBQVM7QUFDVCxhQUFhO0FBQ2IsV0FBVztBQUNYLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsNkZBQTZGO0FBQzdGO0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsNkZBQTZGO0FBQ2pHIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XG5tYXJnaW46IDAgMCAyZW0gMDtcbmxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbnBhZGRpbmc6IDA7XG53aWR0aDogMjVlbTtcbmZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIlBhbGF0aW5vIExUIFNURFwiLCBHZW9yZ2lhLCBzZXJpZjsgXG59XG4ubGlzdCBsaSB7XG5jdXJzb3I6IHBvaW50ZXI7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5sZWZ0OiAwO1xuYmFja2dyb3VuZC1jb2xvcjogI0U4REZFMDtcbm1hcmdpbjogLjVlbTtcbnBhZGRpbmc6IC4zZW0gMDtcbmhlaWdodDogMS42ZW07XG53aWR0aDogMjVlbTtcbmJvcmRlci1yYWRpdXM6IDRweDtcbmZvbnQtZmFtaWx5OiBcIkJvb2sgQW50aXF1YVwiLCBQYWxhdGlubywgXCJQYWxhdGlubyBMaW5vdHlwZVwiLCBcIlBhbGF0aW5vIExUIFNURFwiLCBHZW9yZ2lhLCBzZXJpZjsgXG59XG4ubGlzdCBsaTpob3ZlciB7XG5jb2xvcjogIzhEOUI2QTtcbmJhY2tncm91bmQtY29sb3I6ICNEREQ7XG5sZWZ0OiAuMWVtO1xufVxuLmxpc3QgbGkuc2VsZWN0ZWQge1xuYmFja2dyb3VuZC1jb2xvcjogI0RBQjY5Mjtcbn1cbi5saXN0IGxpLnNlbGVjdGVkOmhvdmVyIHtcbmJhY2tncm91bmQtY29sb3I6ICNDMjg1NTY7XG59XG5cbi5saXN0IGEge1xuY29sb3I6ICMzMzM7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5kaXNwbGF5OiBibG9jaztcbndpZHRoOiAyNTBweDtcbn1cbiAgXG4ubGlzdCBhOmhvdmVyIHtcbmNvbG9yOiM4RDlCNkE7XG59XG5cbi5saXN0IC5iYWRnZSB7XG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5mb250LXNpemU6IHNtYWxsO1xuY29sb3I6IHdoaXRlO1xucGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbmJhY2tncm91bmQtY29sb3I6IzhEOUI2QTtcbmxpbmUtaGVpZ2h0OiAxZW07XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5sZWZ0OiAtMXB4O1xudG9wOiAtNHB4O1xuaGVpZ2h0OiAxLjhlbTtcbndpZHRoOiAxM2VtO1xubWFyZ2luLXJpZ2h0OiAuOGVtO1xuYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG5mb250LWZhbWlseTogXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJQYWxhdGlubyBMVCBTVERcIiwgR2VvcmdpYSwgc2VyaWY7IFxufVxuXG4uY29tcG9uZW50XG57XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiA0MGVtO1xufVxuXG4jcG9zdC1saXN0XG57XG4gICAgd2lkdGg6IDMwZW07XG4gICAgZm9udC1mYW1pbHk6IFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiUGFsYXRpbm8gTFQgU1REXCIsIEdlb3JnaWEsIHNlcmlmOyBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/my-date-pipe.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/my-date-pipe.pipe.ts ***!
  \**************************************/
/*! exports provided: MyDatePipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDatePipePipe", function() { return MyDatePipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MyDatePipePipe {
    transform(utc) {
        let date = new Date(utc);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let zeroMinutes = "";
        let zeroSeconds = "";
        if (minutes < 10) {
            zeroMinutes = "0";
        }
        if (seconds < 10) {
            zeroSeconds = "0";
        }
        let meridium = "AM";
        if (hour >= 12) {
            if (hour > 12)
                hour = hour % 12;
            meridium = "PM";
        }
        else if (hour == 0) {
            hour = 12;
        }
        let ret = `${month}/${day}/${year}, ${hour}:${zeroMinutes}${minutes}:${zeroSeconds}${seconds} ${meridium}`;
        return ret;
    }
}
MyDatePipePipe.ɵfac = function MyDatePipePipe_Factory(t) { return new (t || MyDatePipePipe)(); };
MyDatePipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "myDatePipe", type: MyDatePipePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyDatePipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'myDatePipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h2[_ngcontent-%COMP%] {\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZGQUE2RjtBQUNqRyIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gICAgZm9udC1mYW1pbHk6IFwiQm9vayBBbnRpcXVhXCIsIFBhbGF0aW5vLCBcIlBhbGF0aW5vIExpbm90eXBlXCIsIFwiUGFsYXRpbm8gTFQgU1REXCIsIEdlb3JnaWEsIHNlcmlmOyBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/post.ts":
/*!*************************!*\
  !*** ./src/app/post.ts ***!
  \*************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor(postid, created, modified, title, body, unsaved, isNewPost) {
        this.postid = postid;
        this.created = created;
        this.modified = modified;
        this.title = title;
        this.body = body;
        this.unsaved = unsaved;
        this.isNewPost = isNewPost;
    }
}


/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ "./node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PreviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.markdownTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.markdownBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class PreviewComponent {
    /** TODO
    *  Subscribe to the URL activation event
    *  so that the post to display can be obtained with BlogService
    *  and rendered as HTML when a “preview URL” is activated
    */
    constructor(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.blogService.getCurrentDraftObservable()
            .subscribe(res => {
            this.post = res;
        });
        this.parser = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        this.htmlRenderer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
        this.preview();
    }
    ngOnChanges() {
        this.preview();
    }
    preview() {
        if (this.post == null) {
            console.log("---ERROR: previewing null post");
            this.router.navigate(['notFound']);
            return;
        }
        this.markdownTitle = this.htmlRenderer.render(this.parser.parse(this.post.title));
        this.markdownBody = this.htmlRenderer.render(this.parser.parse(this.post.body));
    }
    toEdit() {
        this.router.navigate(['edit', this.post.postid]);
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "click"], ["id", "preview", 3, "innerHTML"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreviewComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#preview[_ngcontent-%COMP%] {\n    font-family: \"Book Antiqua\", Palatino, \"Palatino Linotype\", \"Palatino LT STD\", Georgia, serif; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2RkFBNkY7QUFDakciLCJmaWxlIjoic3JjL2FwcC9wcmV2aWV3L3ByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwcmV2aWV3IHtcbiAgICBmb250LWZhbWlseTogXCJCb29rIEFudGlxdWFcIiwgUGFsYXRpbm8sIFwiUGFsYXRpbm8gTGlub3R5cGVcIiwgXCJQYWxhdGlubyBMVCBTVERcIiwgR2VvcmdpYSwgc2VyaWY7IFxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview',
                templateUrl: './preview.component.html',
                styleUrls: ['./preview.component.css']
            }]
    }], function () { return [{ type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/Project4/CS144-Project4/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map