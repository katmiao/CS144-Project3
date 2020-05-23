function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/preview/preview.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      children: [{
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"]
      }, {
        path: 'preview/:id',
        component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"]
      }, {
        path: 'notFound',
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
      }]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(blogService) {
        _classCallCheck(this, AppComponent);

        this.blogService = blogService;
        this.title = 'angular-blog';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.localStorage.setItem('username', this.blogService.parseJWT(document.cookie)["usr"]);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [["id", "list-component"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["#list-component[_ngcontent-%COMP%]\n{\n    width: 25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGlzdC1jb21wb25lbnRcbntcbiAgICB3aWR0aDogMjVlbTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/list/list.component.ts");
    /* harmony import */


    var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit/edit.component */
    "./src/app/edit/edit.component.ts");
    /* harmony import */


    var _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./preview/preview.component */
    "./src/app/preview/preview.component.ts");
    /* harmony import */


    var _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./my-date-pipe.pipe */
    "./src/app/my-date-pipe.pipe.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"], _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["MyDatePipePipe"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"], _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"], _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__["MyDatePipePipe"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog.service.ts":
  /*!*********************************!*\
    !*** ./src/app/blog.service.ts ***!
    \*********************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BlogService = /*#__PURE__*/function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }),
          responseType: 'text'
        };
        this.draft = null;
      }

      _createClass(BlogService, [{
        key: "parseJWT",
        value: function parseJWT(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          return JSON.parse(atob(base64));
        }
      }, {
        key: "fetchPosts",
        value: function fetchPosts(username) {
          var _this = this;

          var url = "/api/".concat(username);
          var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (res) {
              resolve(res);
            })["catch"](function (err) {
              reject(err.message);
            });
          });
          return promise;
        }
      }, {
        key: "getPost",
        value: function getPost(username, postid) {
          var _this2 = this;

          var url = "/api/".concat(username, "/").concat(postid);
          return new Promise(function (resolve, reject) {
            _this2.http.get(url).toPromise().then(function (res) {
              resolve(res);
            })["catch"](function (err) {
              reject(err.message);
            });
          });
        }
      }, {
        key: "newPost",
        value: function newPost(username, post) {
          var _this3 = this;

          var url = "/api/".concat(username, "/").concat(post.postid);
          return new Promise(function (resolve, reject) {
            _this3.http.post(url, post, _this3.httpOptions).toPromise().then(function () {
              resolve();
            })["catch"](function (err) {
              reject(err.message);
            });
          });
        }
      }, {
        key: "updatePost",
        value: function updatePost(username, post) {
          var _this4 = this;

          var url = "/api/".concat(username, "/").concat(post.postid);
          return new Promise(function (resolve, reject) {
            _this4.http.put(url, post, _this4.httpOptions).toPromise().then(function (res) {
              resolve();
            })["catch"](function (err) {
              reject(err.message);
            });
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(username, postid) {
          var _this5 = this;

          var url = "/pi/".concat(username, "/").concat(postid);
          return new Promise(function (resolve, reject) {
            _this5.http["delete"](url, _this5.httpOptions).toPromise().then(function () {
              resolve();
            })["catch"](function (err) {
              reject(err.message);
            });
          });
        }
      }, {
        key: "setCurrentDraft",
        value: function setCurrentDraft(post) {
          this.draft = post;
        }
      }, {
        key: "getCurrentDraft",
        value: function getCurrentDraft() {
          return this.draft;
        } // local API

      }, {
        key: "getLocalPosts",
        value: function getLocalPosts() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.postList);
        }
      }, {
        key: "getCurrentDraftObservable",
        value: function getCurrentDraftObservable() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.draft);
        }
      }, {
        key: "getNextPostId",
        value: function getNextPostId() {
          return this.nextPostid;
        }
      }, {
        key: "incrementNextPostId",
        value: function incrementNextPostId() {
          this.nextPostid++;
        }
      }, {
        key: "addLocalPost",
        value: function addLocalPost(post) {
          this.postList.push(post);
        }
      }, {
        key: "deleteLocalPost",
        value: function deleteLocalPost(postid) {
          for (var i = 0; i < this.postList.length; i++) {
            if (this.postList[i].postid == postid) {
              this.postList.splice(i, 1);
              break;
            }
          }
        }
      }, {
        key: "updateLocalPosts",
        value: function updateLocalPosts() {
          var _this6 = this;

          return this.fetchPosts(localStorage.getItem('username')).then(function (res) {
            _this6.nextPostid = res[res.length - 1].postid + 1;

            for (var i = 0; i < res.length; i++) {
              res[i].unsaved = false;
              res[i].isNewPost = false;
            }

            _this6.postList = res;
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }]);

      return BlogService;
    }();

    BlogService.ɵfac = function BlogService_Factory(t) {
      return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BlogService,
      factory: BlogService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/edit/edit.component.ts":
  /*!****************************************!*\
    !*** ./src/app/edit/edit.component.ts ***!
    \****************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../my-date-pipe.pipe */
    "./src/app/my-date-pipe.pipe.ts");

    var EditComponent = /*#__PURE__*/function () {
      function EditComponent(blogService, route, router) {
        _classCallCheck(this, EditComponent);

        this.blogService = blogService;
        this.route = route;
        this.router = router;
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.paramMap.subscribe(function () {
            var postid = parseInt(_this7.route.snapshot.paramMap.get('id'));

            _this7.getPost(postid);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "onChangeTitle",
        value: function onChangeTitle(newTitle) {
          if (!this.post.unsaved) {
            this.post.unsaved = true;
          }

          this.post.title = newTitle;
        }
      }, {
        key: "onChangeBody",
        value: function onChangeBody(newBody) {
          if (!this.post.unsaved) {
            this.post.unsaved = true;
          }

          this.post.body = newBody;
        }
      }, {
        key: "getPost",
        value: function getPost(postid) {
          var _this8 = this;

          if (this.blogService.getCurrentDraft() === null) {
            this.blogService.getPost(localStorage.getItem('username'), postid).then(function (res) {
              _this8.post = res;
              _this8.post.unsaved = false;
            })["catch"](function (err) {
              console.log(err);

              _this8.router.navigate(['notFound']);
            });
          } else {
            this.post = this.blogService.getCurrentDraft();
          }
        }
      }, {
        key: "savePost",
        value: function savePost() {
          var _this9 = this;

          if (this.post.isNewPost) {
            delete this.post.isNewPost;
            delete this.post.unsaved;
            console.log(this.post);
            this.blogService.newPost(localStorage.getItem('username'), this.post).then(function () {
              _this9.post.isNewPost = false;
              _this9.post.unsaved = false;
              _this9.post.modified = new Date().getTime();

              _this9.blogService.setCurrentDraft(_this9.post);
            })["catch"](function (err) {
              console.log(err);
            });
          } else {
            delete this.post.isNewPost;
            delete this.post.unsaved;
            this.blogService.updatePost(localStorage.getItem('username'), this.post).then(function () {
              _this9.post.isNewPost = false;
              _this9.post.unsaved = false;
              _this9.post.modified = new Date().getTime();

              _this9.blogService.setCurrentDraft(_this9.post);
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }
      }, {
        key: "deletePost",
        value: function deletePost() {
          this.blogService.setCurrentDraft(null);

          if (!this.post.unsaved) {
            this.blogService.deletePost(localStorage.getItem('username'), this.post.postid)["catch"](function (err) {
              console.log(err);
            });
          }

          this.blogService.deleteLocalPost(this.post.postid);
          this.router.navigate(['/']);
        }
      }, {
        key: "previewPost",
        value: function previewPost() {
          this.router.navigate(['preview', this.post.postid]);
        }
      }]);

      return EditComponent;
    }();

    EditComponent.ɵfac = function EditComponent_Factory(t) {
      return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditComponent,
      selectors: [["app-edit"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 22,
      vars: 8,
      consts: [[2, "text-align", "left", "margin-bottom", "20px"], ["type", "text", "placeholder", "Write the title of your post here...", 3, "ngModel", "ngModelChange"], [2, "text-align", "left"], ["placeholder", "Write the body of your post here...", 3, "ngModel", "ngModelChange"], ["id", "buttons"], [3, "click"], [3, "disabled", "click"]],
      template: function EditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.onChangeTitle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_textarea_ngModelChange_10_listener($event) {
            return ctx.onChangeBody($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "myDatePipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_16_listener() {
            return ctx.previewPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Preview ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_18_listener() {
            return ctx.savePost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditComponent_Template_button_click_20_listener() {
            return ctx.deletePost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post == null ? null : ctx.post.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post == null ? null : ctx.post.body);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Last Modified: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.post == null ? null : ctx.post.modified), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabledBtn", !(ctx.post == null ? null : ctx.post.unsaved));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.post == null ? null : ctx.post.unsaved));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      pipes: [_my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_4__["MyDatePipePipe"]],
      styles: ["input[_ngcontent-%COMP%]\n{\n    padding: 0.7em;\n    width: 25em;\n}\n\ntextarea[_ngcontent-%COMP%]\n{\n    padding: 0.7em;\n    height: 10em;\n    width: 25em;\n}\n\nlabel[_ngcontent-%COMP%]\n{\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 125%;\n}\n\ninput[_ngcontent-%COMP%]\n{\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n#buttons[_ngcontent-%COMP%]\n{\n    display: flex;\n}\n\n#buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]\n{\n    margin: 0.5em 0.3em 0.5em 0;\n}\n\n.disabledBtn[_ngcontent-%COMP%]\n{\n    color: #c0c0c0;\n}\n\n.disabledBtn[_ngcontent-%COMP%]:hover\n{\n    cursor: context-menu;\n    background-color: #EEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUNBQXlDO0FBQzdDOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRcbntcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICB3aWR0aDogMjVlbTtcbn1cblxudGV4dGFyZWFcbntcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBoZWlnaHQ6IDEwZW07XG4gICAgd2lkdGg6IDI1ZW07XG59XG5cbmxhYmVsXG57XG4gICAgY29sb3I6ICMzNjk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMjUlO1xufVxuXG5pbnB1dFxue1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4jYnV0dG9uc1xue1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNidXR0b25zID4gYnV0dG9uXG57XG4gICAgbWFyZ2luOiAwLjVlbSAwLjNlbSAwLjVlbSAwO1xufVxuXG4uZGlzYWJsZWRCdG5cbntcbiAgICBjb2xvcjogI2MwYzBjMDtcbn1cblxuLmRpc2FibGVkQnRuOmhvdmVyXG57XG4gICAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit',
          templateUrl: './edit.component.html',
          styleUrls: ['./edit.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/list/list.component.ts":
  /*!****************************************!*\
    !*** ./src/app/list/list.component.ts ***!
    \****************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../post */
    "./src/app/post.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../my-date-pipe.pipe */
    "./src/app/my-date-pipe.pipe.ts");

    function ListComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_li_4_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var p_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onSelect(p_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "myDatePipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", p_r1 === ctx_r0.blogService.getCurrentDraft());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, p_r1.modified));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.title, " ");
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(blogService, route, router) {
        _classCallCheck(this, ListComponent);

        this.blogService = blogService;
        this.route = route;
        this.router = router;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.blogService.updateLocalPosts().then(function () {
            _this10.blogService.getLocalPosts().subscribe(function (res) {
              _this10.posts = res;
            });
          });
          this.route.queryParams.subscribe(function (params) {// todo - https://angular.io/guide/router - for all components 
          });
        }
      }, {
        key: "onSelect",
        value: function onSelect(post) {
          this.blogService.setCurrentDraft(post);
          this.router.navigate(['edit', post.postid]);
        }
      }, {
        key: "onNewPost",
        value: function onNewPost() {
          var currentUtc = new Date().getTime();
          var p = new _post__WEBPACK_IMPORTED_MODULE_1__["Post"](this.blogService.getNextPostId(), currentUtc, currentUtc, "", "", true, true); //console.log(this.blogService.getNextPostId());

          this.blogService.addLocalPost(p);
          this.blogService.setCurrentDraft(p);
          this.blogService.incrementNextPostId();
          this.router.navigate(['edit', p.postid]);
        }
      }, {
        key: "onDeletePost",
        value: function onDeletePost(post) {
          this.blogService.setCurrentDraft(null);
          this.blogService.deleteLocalPost(post.postid);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 5,
      vars: 1,
      consts: [["id", "post-list", 1, "component"], [3, "click"], [1, "list"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "badge"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_1_listener() {
            return ctx.onNewPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_li_4_Template, 5, 6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_my_date_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["MyDatePipePipe"]],
      styles: [".list[_ngcontent-%COMP%] {\nmargin: 0 0 2em 0;\nlist-style-type: none;\npadding: 0;\nwidth: 25em;\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\ncursor: pointer;\nposition: relative;\nleft: 0;\nbackground-color: #EEE;\nmargin: .5em;\npadding: .3em 0;\nheight: 1.6em;\nwidth: 25em;\nborder-radius: 4px;\n}\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\ncolor: #607D8B;\nbackground-color: #DDD;\nleft: .1em;\n}\n.list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\nbackground-color: #CFD8DC;\ncolor: white;\n}\n.list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\nbackground-color: #BBD8DC;\ncolor: white;\n}\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\ncolor: #333;\ntext-decoration: none;\nposition: relative;\ndisplay: block;\nwidth: 250px;\n}\n.list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\ncolor:#607D8B;\n}\n.list[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\ndisplay: inline-block;\nfont-size: small;\ncolor: white;\npadding: 0.8em 0.7em 0 0.7em;\nbackground-color:#405061;\nline-height: 1em;\nposition: relative;\nleft: -1px;\ntop: -4px;\nheight: 1.8em;\nwidth: 13em;\nmargin-right: .8em;\nborder-radius: 4px 0 0 4px;\n}\n.component[_ngcontent-%COMP%]\n{\n    float: left;\n}\n#post-list[_ngcontent-%COMP%]\n{\n    width: 30em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHlDQUF5QztBQUN6QztBQUNBLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsVUFBVTtBQUNWLFdBQVc7QUFDWDtBQUNBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1Asc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEIsVUFBVTtBQUNWO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaO0FBRUE7QUFDQSxXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsWUFBWTtBQUNaO0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixVQUFVO0FBQ1YsU0FBUztBQUNULGFBQWE7QUFDYixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQjtBQUVBOztJQUVJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcbi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuLmxpc3Qge1xubWFyZ2luOiAwIDAgMmVtIDA7XG5saXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5wYWRkaW5nOiAwO1xud2lkdGg6IDI1ZW07XG59XG4ubGlzdCBsaSB7XG5jdXJzb3I6IHBvaW50ZXI7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5sZWZ0OiAwO1xuYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbm1hcmdpbjogLjVlbTtcbnBhZGRpbmc6IC4zZW0gMDtcbmhlaWdodDogMS42ZW07XG53aWR0aDogMjVlbTtcbmJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5saXN0IGxpOmhvdmVyIHtcbmNvbG9yOiAjNjA3RDhCO1xuYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbmxlZnQ6IC4xZW07XG59XG4ubGlzdCBsaS5zZWxlY3RlZCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xuY29sb3I6IHdoaXRlO1xufVxuLmxpc3QgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3QgYSB7XG5jb2xvcjogIzMzMztcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmRpc3BsYXk6IGJsb2NrO1xud2lkdGg6IDI1MHB4O1xufVxuICBcbi5saXN0IGE6aG92ZXIge1xuY29sb3I6IzYwN0Q4Qjtcbn1cblxuLmxpc3QgLmJhZGdlIHtcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmZvbnQtc2l6ZTogc21hbGw7XG5jb2xvcjogd2hpdGU7XG5wYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xubGluZS1oZWlnaHQ6IDFlbTtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmxlZnQ6IC0xcHg7XG50b3A6IC00cHg7XG5oZWlnaHQ6IDEuOGVtO1xud2lkdGg6IDEzZW07XG5tYXJnaW4tcmlnaHQ6IC44ZW07XG5ib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn1cblxuLmNvbXBvbmVudFxue1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4jcG9zdC1saXN0XG57XG4gICAgd2lkdGg6IDMwZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/my-date-pipe.pipe.ts":
  /*!**************************************!*\
    !*** ./src/app/my-date-pipe.pipe.ts ***!
    \**************************************/

  /*! exports provided: MyDatePipePipe */

  /***/
  function srcAppMyDatePipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyDatePipePipe", function () {
      return MyDatePipePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MyDatePipePipe = /*#__PURE__*/function () {
      function MyDatePipePipe() {
        _classCallCheck(this, MyDatePipePipe);
      }

      _createClass(MyDatePipePipe, [{
        key: "transform",
        value: function transform(utc) {
          var date = new Date(utc);
          var day = date.getDate();
          var month = date.getMonth() + 1;
          var year = date.getFullYear();
          var hour = date.getHours();
          var minutes = date.getMinutes();
          var seconds = date.getSeconds();
          var zeroMinutes = "";
          var zeroSeconds = "";

          if (minutes < 10) {
            zeroMinutes = "0";
          }

          if (seconds < 10) {
            zeroSeconds = "0";
          }

          var meridium = "AM";

          if (hour >= 12) {
            if (hour > 12) hour = hour % 12;
            meridium = "PM";
          } else if (hour == 0) {
            hour = 12;
          }

          var ret = "".concat(month, "/").concat(day, "/").concat(year, ", ").concat(hour, ":").concat(zeroMinutes).concat(minutes, ":").concat(zeroSeconds).concat(seconds, " ").concat(meridium);
          return ret;
        }
      }]);

      return MyDatePipePipe;
    }();

    MyDatePipePipe.ɵfac = function MyDatePipePipe_Factory(t) {
      return new (t || MyDatePipePipe)();
    };

    MyDatePipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "myDatePipe",
      type: MyDatePipePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyDatePipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'myDatePipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post.ts":
  /*!*************************!*\
    !*** ./src/app/post.ts ***!
    \*************************/

  /*! exports provided: Post */

  /***/
  function srcAppPostTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Post", function () {
      return Post;
    });

    var Post = function Post(postid, created, modified, title, body, unsaved, isNewPost) {
      _classCallCheck(this, Post);

      this.postid = postid;
      this.created = created;
      this.modified = modified;
      this.title = title;
      this.body = body;
      this.unsaved = unsaved;
      this.isNewPost = isNewPost;
    };
    /***/

  },

  /***/
  "./src/app/preview/preview.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/preview/preview.component.ts ***!
    \**********************************************/

  /*! exports provided: PreviewComponent */

  /***/
  function srcAppPreviewPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewComponent", function () {
      return PreviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! commonmark */
    "./node_modules/commonmark/lib/index.js");
    /* harmony import */


    var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PreviewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewComponent_div_0_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.toEdit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.markdownTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.markdownBody, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var PreviewComponent = /*#__PURE__*/function () {
      /** TODO
      *  Subscribe to the URL activation event
      *  so that the post to display can be obtained with BlogService
      *  and rendered as HTML when a “preview URL” is activated
      */
      function PreviewComponent(blogService, route, router) {
        _classCallCheck(this, PreviewComponent);

        this.blogService = blogService;
        this.route = route;
        this.router = router;
      }

      _createClass(PreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.blogService.getCurrentDraftObservable().subscribe(function (res) {
            _this11.post = res;
          });
          this.parser = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
          this.htmlRenderer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"]();
          this.preview();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.preview();
        }
      }, {
        key: "preview",
        value: function preview() {
          if (this.post == null) {
            console.log("---ERROR: previewing null post");
            this.router.navigate(['notFound']);
            return;
          }

          this.markdownTitle = this.htmlRenderer.render(this.parser.parse(this.post.title));
          this.markdownBody = this.htmlRenderer.render(this.parser.parse(this.post.body));
        }
      }, {
        key: "toEdit",
        value: function toEdit() {
          this.router.navigate(['edit', this.post.postid]);
        }
      }]);

      return PreviewComponent;
    }();

    PreviewComponent.ɵfac = function PreviewComponent_Factory(t) {
      return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PreviewComponent,
      selectors: [["app-preview"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "click"], [3, "innerHTML"]],
      template: function PreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PreviewComponent_div_0_Template, 5, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-preview',
          templateUrl: './preview.component.html',
          styleUrls: ['./preview.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/cs144/shared/Project4/CS144-Project4/angular-blog/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map