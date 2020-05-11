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


    var _routing_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./routing-pages/homepage/homepage.component */
    "./src/app/routing-pages/homepage/homepage.component.ts");
    /* harmony import */


    var _routing_pages_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routing-pages/select-page/select-page.component */
    "./src/app/routing-pages/select-page/select-page.component.ts");
    /* harmony import */


    var _routing_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./routing-pages/list-page/list-page.component */
    "./src/app/routing-pages/list-page/list-page.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _routing_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
    }, {
      path: 'select',
      component: _routing_pages_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_3__["SelectPageComponent"]
    }, {
      path: 'list',
      component: _routing_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_4__["ListPageComponent"]
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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


    var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");

    var _c0 = function _c0(a0) {
      return {
        "dark-theme": a0
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(themeService) {
        _classCallCheck(this, AppComponent);

        this.themeService = themeService;
        this.title = 'TDP-productivity-Angular';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isDarkTheme = this.themeService.isDarkTheme;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 15,
      vars: 5,
      consts: [[3, "ngClass"], [1, "footerClass"], ["color", "primary", "role", "footer"], ["src", "../favicon.ico", "alt", "Pie", 2, "padding-right", "10px"], [1, "nav-spacer"], [1, "mat-small"], ["_ngcontent-fps-c54", "", "href", "https://github.com/angular/components/blob/master/LICENSE"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Productivity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Uses Angular Material by Google ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Licensed under an MIT-style License.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isDarkTheme)));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".nav-icon[_ngcontent-%COMP%] {\r\n    padding: 0 14px;\r\n}\r\n\r\n.nav-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\nmat-slide-toggle[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    padding:5px;\r\n}\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%]{\r\n    height: 7vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7SUFDRyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAubmF2LWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxNHB4O1xyXG59XHJcblxyXG4ubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxubWF0LXNsaWRlLXRvZ2dsZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOjVweDtcclxufVxyXG5cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeXtcclxuICAgIGhlaWdodDogN3ZoO1xyXG59XHJcblxyXG5cclxuIl19 */"]
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
          type: _theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _task_components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-components/task-list/task-list.component */
    "./src/app/task-components/task-list/task-list.component.ts");
    /* harmony import */


    var _task_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./task-components/task-form/task-form.component */
    "./src/app/task-components/task-form/task-form.component.ts");
    /* harmony import */


    var _project_components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./project-components/project-list/project-list.component */
    "./src/app/project-components/project-list/project-list.component.ts");
    /* harmony import */


    var _project_components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./project-components/project-form/project-form.component */
    "./src/app/project-components/project-form/project-form.component.ts");
    /* harmony import */


    var _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material-design/material-design.module */
    "./src/app/material-design/material-design.module.ts");
    /* harmony import */


    var _selection_components_selection_form_selection_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./selection-components/selection-form/selection-form.component */
    "./src/app/selection-components/selection-form/selection-form.component.ts");
    /* harmony import */


    var _selection_components_selection_list_selection_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./selection-components/selection-list/selection-list.component */
    "./src/app/selection-components/selection-list/selection-list.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _user_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user-components/user-form/user-form.component */
    "./src/app/user-components/user-form/user-form.component.ts");
    /* harmony import */


    var _user_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-components/user-list/user-list.component */
    "./src/app/user-components/user-list/user-list.component.ts");
    /* harmony import */


    var _project_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./project-components/project-modal/project-modal.component */
    "./src/app/project-components/project-modal/project-modal.component.ts");
    /* harmony import */


    var _task_components_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./task-components/task-modal/task-modal.component */
    "./src/app/task-components/task-modal/task-modal.component.ts");
    /* harmony import */


    var _user_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./user-components/user-modal/user-modal.component */
    "./src/app/user-components/user-modal/user-modal.component.ts");
    /* harmony import */


    var _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./user-components/user-login/user-login.component */
    "./src/app/user-components/user-login/user-login.component.ts");
    /* harmony import */


    var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./toolbar/toolbar.component */
    "./src/app/toolbar/toolbar.component.ts");
    /* harmony import */


    var _routing_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./routing-pages/homepage/homepage.component */
    "./src/app/routing-pages/homepage/homepage.component.ts");
    /* harmony import */


    var _routing_pages_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./routing-pages/select-page/select-page.component */
    "./src/app/routing-pages/select-page/select-page.component.ts");
    /* harmony import */


    var _routing_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./routing-pages/list-page/list-page.component */
    "./src/app/routing-pages/list-page/list-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _task_components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"], _task_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_7__["TaskFormComponent"], _project_components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjectListComponent"], _project_components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_9__["ProjectFormComponent"], _selection_components_selection_form_selection_form_component__WEBPACK_IMPORTED_MODULE_11__["SelectionFormComponent"], _selection_components_selection_list_selection_list_component__WEBPACK_IMPORTED_MODULE_12__["SelectionListComponent"], _user_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_15__["UserFormComponent"], _user_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"], _project_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProjectModalComponent"], _task_components_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_18__["TaskModalComponent"], _user_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__["UserModalComponent"], _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_20__["UserLoginComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__["ToolbarComponent"], _routing_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__["HomepageComponent"], _routing_pages_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_23__["SelectPageComponent"], _routing_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_24__["ListPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]],
        exports: [_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _task_components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"], _task_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_7__["TaskFormComponent"], _project_components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjectListComponent"], _project_components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_9__["ProjectFormComponent"], _selection_components_selection_form_selection_form_component__WEBPACK_IMPORTED_MODULE_11__["SelectionFormComponent"], _selection_components_selection_list_selection_list_component__WEBPACK_IMPORTED_MODULE_12__["SelectionListComponent"], _user_components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_15__["UserFormComponent"], _user_components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"], _project_components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_17__["ProjectModalComponent"], _task_components_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_18__["TaskModalComponent"], _user_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_19__["UserModalComponent"], _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_20__["UserLoginComponent"], _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__["ToolbarComponent"], _routing_pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__["HomepageComponent"], _routing_pages_select_page_select_page_component__WEBPACK_IMPORTED_MODULE_23__["SelectPageComponent"], _routing_pages_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_24__["ListPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]],
          exports: [_material_design_material_design_module__WEBPACK_IMPORTED_MODULE_10__["MaterialDesignModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/login.service.ts":
  /*!**********************************!*\
    !*** ./src/app/login.service.ts ***!
    \**********************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService() {
        _classCallCheck(this, LoginService);

        this._login = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLogin = this._login.asObservable(); //stuk aangaande de select button update

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(LoginService, [{
        key: "setLogin",
        value: function setLogin() {
          this._login.next(this.globalLoginId != null && this.globalLoginId >= 0);
        }
      }, {
        key: "getLogin",
        value: function getLogin() {
          return this.isLogin;
        }
      }, {
        key: "sendProject",
        value: function sendProject(projNum) {
          this.subject.next({
            projNum: projNum
          });
        }
      }, {
        key: "getProject",
        value: function getProject() {
          return this.subject.asObservable();
        }
      }]);

      return LoginService;
    }();

    LoginService.ɵfac = function LoginService_Factory(t) {
      return new (t || LoginService)();
    };

    LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material-design/material-design.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/material-design/material-design.module.ts ***!
    \***********************************************************/

  /*! exports provided: MaterialDesignModule */

  /***/
  function srcAppMaterialDesignMaterialDesignModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialDesignModule", function () {
      return MaterialDesignModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js"); // src/material-design/material-design.module.ts
    // import { MatButtonModule } from '@angular/material/button';
    // import { MatCheckboxModule } from '@angular/material/checkbox';
    // import { CdkTableModule } from '@angular/cdk/table';
    // import {MatDatepickerModule} from '@angular/material/datepicker';
    // import {MatInputModule} from '@angular/material/input';
    // import {MatSelectModule} from '@angular/material/select'
    // import {MatIconModule} from '@angular/material/icon'
    // import {MatSliderModule} from '@angular/material/slider';


    var modules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"]]; // Declare Module that imports/exports the @angular/material modules needed in the app

    var MaterialDesignModule = function MaterialDesignModule() {
      _classCallCheck(this, MaterialDesignModule);
    };

    MaterialDesignModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialDesignModule
    });
    MaterialDesignModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialDesignModule_Factory(t) {
        return new (t || MaterialDesignModule)();
      },
      imports: [[].concat(modules), _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialDesignModule, {
        imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialDesignModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [].concat(modules),
          exports: [].concat(modules)
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/project.ts":
  /*!***********************************!*\
    !*** ./src/app/models/project.ts ***!
    \***********************************/

  /*! exports provided: Project */

  /***/
  function srcAppModelsProjectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project", function () {
      return Project;
    });

    var Project = function Project() {
      _classCallCheck(this, Project);

      this.id = 0;
      this.users = [];
      /* tasks: Task[];
      */
    };
    /***/

  },

  /***/
  "./src/app/models/projectuser.ts":
  /*!***************************************!*\
    !*** ./src/app/models/projectuser.ts ***!
    \***************************************/

  /*! exports provided: ProjectUser */

  /***/
  function srcAppModelsProjectuserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectUser", function () {
      return ProjectUser;
    });

    var ProjectUser = function ProjectUser() {
      _classCallCheck(this, ProjectUser);
    };
    /***/

  },

  /***/
  "./src/app/models/task.ts":
  /*!********************************!*\
    !*** ./src/app/models/task.ts ***!
    \********************************/

  /*! exports provided: Task */

  /***/
  function srcAppModelsTaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });

    var Task = function Task() {
      _classCallCheck(this, Task);

      this.id = 0;
      this.status = 'New';
    };
    /***/

  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);

      this.id = 0; //project: number;
      //projects: Project[];
    };
    /***/

  },

  /***/
  "./src/app/project-components/project-form/project-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/project-components/project-form/project-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProjectFormComponent */

  /***/
  function srcAppProjectComponentsProjectFormProjectFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectFormComponent", function () {
      return ProjectFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _models_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/project */
    "./src/app/models/project.ts");
    /* harmony import */


    var _project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../project-modal/project-modal.component */
    "./src/app/project-components/project-modal/project-modal.component.ts");
    /* harmony import */


    var src_app_models_projectuser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/projectuser */
    "./src/app/models/projectuser.ts");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var src_app_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var ProjectFormComponent = /*#__PURE__*/function () {
      function ProjectFormComponent(projectService, dialog, themeService, loginService) {
        _classCallCheck(this, ProjectFormComponent);

        this.projectService = projectService;
        this.dialog = dialog;
        this.themeService = themeService;
        this.loginService = loginService;
        this.projectUser = new src_app_models_projectuser__WEBPACK_IMPORTED_MODULE_4__["ProjectUser"]();
        var currentDate = new Date();
        currentDate.getDate();
        this.minDate = currentDate;
      }

      _createClass(ProjectFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userID = this.loginService.globalLoginId;
          this.projectUser.project = new _models_project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
          this.projectUser.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
          this.projectUser.user.id = this.userID;
        }
      }, {
        key: "save",
        value: function save() {
          var _this = this;

          this.projectService.save(this.projectUser).subscribe(function () {
            return _this.projectList.reloadAll();
          });
        }
      }, {
        key: "newProject",
        value: function newProject() {
          var _this2 = this;

          this.theme = this.themeService.currentActive();
          var dialogRef = this.dialog.open(_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_3__["ProjectModalComponent"], {
            width: '50%',
            data: {
              projectEdit: this.projectUser
            },
            panelClass: this.theme
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this2.projectService.save(result).subscribe(function () {
              return _this2.projectList.reloadAll();
            });

            _this2.clear();
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.projectUser.project.projectName = "";
          this.projectUser.project.deadline = null;
          this.projectUser.project.duration = null;
        }
      }]);

      return ProjectFormComponent;
    }();

    ProjectFormComponent.ɵfac = function ProjectFormComponent_Factory(t) {
      return new (t || ProjectFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]));
    };

    ProjectFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectFormComponent,
      selectors: [["app-project-form"]],
      inputs: {
        projectList: "projectList"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])],
      decls: 2,
      vars: 0,
      consts: [["mat-flat-button", "", "color", "primary", 3, "click"]],
      template: function ProjectFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectFormComponent_Template_button_click_0_listener() {
            return ctx.newProject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jb21wb25lbnRzL3Byb2plY3QtZm9ybS9wcm9qZWN0LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWNvbXBvbmVudHMvcHJvamVjdC1mb3JtL3Byb2plY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-form',
          templateUrl: './project-form.component.html',
          styleUrls: ['./project-form.component.css'],
          providers: [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]]
        }]
      }], function () {
        return [{
          type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]
        }, {
          type: src_app_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
        }];
      }, {
        projectList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/project-components/project-list/project-list.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/project-components/project-list/project-list.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProjectListComponent */

  /***/
  function srcAppProjectComponentsProjectListProjectListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function () {
      return ProjectListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../project-modal/project-modal.component */
    "./src/app/project-components/project-modal/project-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var src_app_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ProjectListComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectListComponent_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r10.id, " ");
      }
    }

    function ProjectListComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectListComponent_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r11.projectName, " ");
      }
    }

    function ProjectListComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Deadline ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectListComponent_td_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r12.deadline, " ");
      }
    }

    function ProjectListComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectListComponent_td_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectListComponent_td_12_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var project_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.editProject(project_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectListComponent_td_12_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var project_r13 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16["delete"](project_r13.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectListComponent_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
      }
    }

    function ProjectListComponent_tr_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
      }
    }

    var ProjectListComponent = /*#__PURE__*/function () {
      function ProjectListComponent(projectService, dialog, themeService, loginService) {
        var _this3 = this;

        _classCallCheck(this, ProjectListComponent);

        this.projectService = projectService;
        this.dialog = dialog;
        this.themeService = themeService;
        this.loginService = loginService;
        this.displayedColumns = ['id', 'projectName', 'deadline', 'actions'];
        this.projectService.findAll().subscribe(function (projects) {
          return _this3.projects = projects;
        });
      }

      _createClass(ProjectListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projects;
          this.projectUpdate;
          this.userID = parseInt(sessionStorage.getItem('loginId'));
          this.reloadAll(); //this.selectProjects(this.userID)
          // this.loginService.getProject().subscribe(
          //     input => {
          //       this.reloadAll();
          //       this.selectProjects(input.projNum);}) 
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.reloadAll(); //this.selectProjects(this.userID)
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          var _this4 = this;

          this.projectService.findAll().subscribe(function (projects) {
            _this4.projects = projects;
            var filter = new Array();

            for (var indexp = 0; indexp < _this4.projects.length; indexp++) {
              for (var indexu = 0; indexu < _this4.projects[indexp].users.length; indexu++) {
                if (_this4.projects[indexp].users[indexu].user.id === _this4.userID) {
                  filter.push(_this4.projects[indexp]);
                }
              }
            }

            _this4.projects = filter; //this.projectUpdate.projects = filter
          }); //this.projectService.findAll().subscribe(projects => this.projects = projects);
          //this.projectService.findAll().subscribe(projects => this.projectUpdate.projects = projects);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this5 = this;

          this.projectService["delete"](id).subscribe(function () {
            return _this5.reloadAll();
          });
        }
      }, {
        key: "editProject",
        value: function editProject(project) {
          var _this6 = this;

          this.theme = this.themeService.currentActive();
          var dialogRef = this.dialog.open(_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_2__["ProjectModalComponent"], {
            width: '50%',
            data: {
              projectEdit: project
            },
            panelClass: this.theme
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this6.projectService.patchProject(result.id, result).subscribe(function () {
              return _this6.reloadAll();
            });
          });
        }
      }]);

      return ProjectListComponent;
    }();

    ProjectListComponent.ɵfac = function ProjectListComponent_Factory(t) {
      return new (t || ProjectListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]));
    };

    ProjectListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectListComponent,
      selectors: [["app-project-list"]],
      inputs: {
        projectUpdate: "projectUpdate"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])],
      decls: 15,
      vars: 3,
      consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "projectName"], ["matColumnDef", "deadline"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function ProjectListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectListComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectListComponent_td_3_Template, 3, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectListComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectListComponent_td_6_Template, 3, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectListComponent_th_8_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectListComponent_td_9_Template, 3, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectListComponent_th_11_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectListComponent_td_12_Template, 6, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectListComponent_tr_13_Template, 1, 0, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectListComponent_tr_14_Template, 1, 0, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jb21wb25lbnRzL3Byb2plY3QtbGlzdC9wcm9qZWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtY29tcG9uZW50cy9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-list',
          templateUrl: './project-list.component.html',
          styleUrls: ['./project-list.component.css'],
          providers: [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]]
        }]
      }], function () {
        return [{
          type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
        }, {
          type: src_app_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
        }];
      }, {
        projectUpdate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/project-components/project-modal/project-modal.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/project-components/project-modal/project-modal.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProjectModalComponent */

  /***/
  function srcAppProjectComponentsProjectModalProjectModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function () {
      return ProjectModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectModalComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
      }
    }

    function ProjectModalComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r2.data.projectEdit);
      }
    }

    var ProjectModalComponent = /*#__PURE__*/function () {
      function ProjectModalComponent(dialogRef, data) {
        _classCallCheck(this, ProjectModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        var currentDate = new Date();
        currentDate.getDate();
        this.minDate = currentDate;
      }

      _createClass(ProjectModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectModalComponent;
    }();

    ProjectModalComponent.ɵfac = function ProjectModalComponent_Factory(t) {
      return new (t || ProjectModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    ProjectModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectModalComponent,
      selectors: [["app-project-modal"]],
      inputs: {
        projectEdit: "projectEdit"
      },
      decls: 17,
      vars: 7,
      consts: [["mat-dialog-content", ""], ["appearance", "standard"], ["matInput", "", "required", "", "type", "text", "name", "projectName", 3, "ngModel", "ngModelChange"], ["for", "inputprojectdeadline"], ["matInput", "", "required", "", "name", "deadline", 3, "min", "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", "mat-dialog-close", ""], [4, "ngIf"], ["mat-button", "", "color", "primary", 3, "disabled"], ["mat-button", "", "color", "primary", 3, "mat-dialog-close"]],
      template: function ProjectModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectModalComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.data.projectEdit.project.projectName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Deadline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectModalComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.data.projectEdit.project.deadline = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-datepicker-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectModalComponent_ng_container_15_Template, 3, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectModalComponent_ng_container_16_Template, 3, 1, "ng-container", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.projectEdit.project.projectName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r0)("ngModel", ctx.data.projectEdit.project.deadline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.projectEdit.project.projectName == null || ctx.data.projectEdit.project.deadline == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.projectEdit.project.projectName != null && ctx.data.projectEdit.project.deadline != null);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtY29tcG9uZW50cy9wcm9qZWN0LW1vZGFsL3Byb2plY3QtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project-modal',
          templateUrl: './project-modal.component.html',
          styleUrls: ['./project-modal.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        projectEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/project-user.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/project-user.service.ts ***!
    \*****************************************/

  /*! exports provided: ProjectUserService */

  /***/
  function srcAppProjectUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectUserService", function () {
      return ProjectUserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectUserService = /*#__PURE__*/function () {
      function ProjectUserService(http) {
        _classCallCheck(this, ProjectUserService);

        this.http = http;
      }

      _createClass(ProjectUserService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get('/projectuser');
        }
      }, {
        key: "save",
        value: function save(projectUser) {
          return this.http.post('/projectuser', projectUser);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]('/projectuser/' + id);
        } //to edit the listing.

      }, {
        key: "patchProject",
        value: function patchProject(id, projectUser) {
          return this.http.patch('/projectuser/' + id, projectUser);
        }
      }]);

      return ProjectUserService;
    }();

    ProjectUserService.ɵfac = function ProjectUserService_Factory(t) {
      return new (t || ProjectUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProjectUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectUserService,
      factory: ProjectUserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectUserService, [{
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
  "./src/app/project.service.ts":
  /*!************************************!*\
    !*** ./src/app/project.service.ts ***!
    \************************************/

  /*! exports provided: ProjectService */

  /***/
  function srcAppProjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectService", function () {
      return ProjectService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProjectService = /*#__PURE__*/function () {
      function ProjectService(http) {
        _classCallCheck(this, ProjectService);

        this.http = http;
      }

      _createClass(ProjectService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get('/project');
        }
      }, {
        key: "save",
        value: function save(projectUser) {
          return this.http.post('/project', projectUser);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]('/project/' + id);
        } //to edit the listing.

      }, {
        key: "patchProject",
        value: function patchProject(id, projectUser) {
          return this.http.patch('/project/' + id, projectUser);
        }
      }]);

      return ProjectService;
    }();

    ProjectService.ɵfac = function ProjectService_Factory(t) {
      return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProjectService,
      factory: ProjectService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
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
  "./src/app/routing-pages/homepage/homepage.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/routing-pages/homepage/homepage.component.ts ***!
    \**************************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppRoutingPagesHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../user-components/user-login/user-login.component */
    "./src/app/user-components/user-login/user-login.component.ts");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setStorage",
        value: function setStorage() {
          console.log("enter set");
          sessionStorage.setItem('key', '1');
        }
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 9,
      vars: 0,
      consts: [[1, "mat-app-background", "basic-container", "center"], [1, "mat-h1"], [1, "mat-h2"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to the Pie Productivity App!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A productivity app built for the YER Talent Development Programme by Edwin Bolt, Inge van Haaften and Pieter van der Scheer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-user-login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_2__["UserLoginComponent"]],
      styles: [".center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n  text-align: center;\r\n}\r\n\r\n.mat-h1[_ngcontent-%COMP%]{\r\n  font-size: 56px;\r\n  font-weight: 300;\r\n  line-height: 56px;\r\n  margin: 15px 5px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n  margin:0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy1wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmctcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtaDF7XHJcbiAgZm9udC1zaXplOiA1NnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgbWFyZ2luOiAxNXB4IDVweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBtYXJnaW46MHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routing-pages/list-page/list-page.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/routing-pages/list-page/list-page.component.ts ***!
    \****************************************************************/

  /*! exports provided: ListPageComponent */

  /***/
  function srcAppRoutingPagesListPageListPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageComponent", function () {
      return ListPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _project_components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../project-components/project-form/project-form.component */
    "./src/app/project-components/project-form/project-form.component.ts");
    /* harmony import */


    var _project_components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../project-components/project-list/project-list.component */
    "./src/app/project-components/project-list/project-list.component.ts");
    /* harmony import */


    var _task_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../task-components/task-form/task-form.component */
    "./src/app/task-components/task-form/task-form.component.ts");
    /* harmony import */


    var _task_components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../task-components/task-list/task-list.component */
    "./src/app/task-components/task-list/task-list.component.ts");

    var ListPageComponent = /*#__PURE__*/function () {
      function ListPageComponent(loginService) {
        _classCallCheck(this, ListPageComponent);

        this.loginService = loginService;
      }

      _createClass(ListPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projectIdUser = this.loginService.globalLoginId;
        }
      }]);

      return ListPageComponent;
    }();

    ListPageComponent.ɵfac = function ListPageComponent_Factory(t) {
      return new (t || ListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]));
    };

    ListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListPageComponent,
      selectors: [["app-list-page"]],
      decls: 13,
      vars: 2,
      consts: [[1, "mat-app-background", "basic-container"], ["id", "Tabbed lists"], ["label", "Projects"], [3, "projectList"], ["projectComp", ""], ["label", "Tasks"], [3, "taskList"], ["taskComp", ""]],
      template: function ListPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-project-form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-project-list", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-task-form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-task-list", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projectList", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("taskList", _r1);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _project_components_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"], _project_components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectListComponent"], _task_components_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_6__["TaskFormComponent"], _task_components_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__["TaskListComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRpbmctcGFnZXMvbGlzdC1wYWdlL2xpc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list-page',
          templateUrl: './list-page.component.html',
          styleUrls: ['./list-page.component.css']
        }]
      }], function () {
        return [{
          type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routing-pages/select-page/select-page.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/routing-pages/select-page/select-page.component.ts ***!
    \********************************************************************/

  /*! exports provided: SelectPageComponent */

  /***/
  function srcAppRoutingPagesSelectPageSelectPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectPageComponent", function () {
      return SelectPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _selection_components_selection_form_selection_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../selection-components/selection-form/selection-form.component */
    "./src/app/selection-components/selection-form/selection-form.component.ts");
    /* harmony import */


    var _selection_components_selection_list_selection_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../selection-components/selection-list/selection-list.component */
    "./src/app/selection-components/selection-list/selection-list.component.ts");

    var SelectPageComponent = /*#__PURE__*/function () {
      function SelectPageComponent() {
        _classCallCheck(this, SelectPageComponent);
      }

      _createClass(SelectPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectPageComponent;
    }();

    SelectPageComponent.ɵfac = function SelectPageComponent_Factory(t) {
      return new (t || SelectPageComponent)();
    };

    SelectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectPageComponent,
      selectors: [["app-select-page"]],
      decls: 7,
      vars: 1,
      consts: [[1, "mat-app-background", "basic-container"], ["id", "SelectionComponent"], [3, "list"], ["selectionComp", ""]],
      template: function SelectPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Task selection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-selection-form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-selection-list", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", _r0);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _selection_components_selection_form_selection_form_component__WEBPACK_IMPORTED_MODULE_2__["SelectionFormComponent"], _selection_components_selection_list_selection_list_component__WEBPACK_IMPORTED_MODULE_3__["SelectionListComponent"]],
      styles: [".SelectionComponent[_ngcontent-%COMP%]{\r\n    height: 1500px;\r\n    width: 350px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy1wYWdlcy9zZWxlY3QtcGFnZS9zZWxlY3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yb3V0aW5nLXBhZ2VzL3NlbGVjdC1wYWdlL3NlbGVjdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2VsZWN0aW9uQ29tcG9uZW50e1xyXG4gICAgaGVpZ2h0OiAxNTAwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbn0gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select-page',
          templateUrl: './select-page.component.html',
          styleUrls: ['./select-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/selection-components/selection-form/selection-form.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/selection-components/selection-form/selection-form.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SelectionFormComponent */

  /***/
  function srcAppSelectionComponentsSelectionFormSelectionFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionFormComponent", function () {
      return SelectionFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SelectionFormComponent_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("value", function SelectionFormComponent_mat_option_5_Template_mat_option_value_0_listener() {
          var project_r1 = ctx.$implicit;
          return project_r1.id;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r1.projectName, " ");
      }
    }

    var SelectionFormComponent = /*#__PURE__*/function () {
      function SelectionFormComponent(projectService, taskService) {
        _classCallCheck(this, SelectionFormComponent);

        this.projectService = projectService;
        this.taskService = taskService;
      }

      _createClass(SelectionFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.projects;
          this.filteredProjects;
          this.projectNumber;
          this.timeWindow;
          this.userID = parseInt(sessionStorage.getItem('loginId')); //this.userService.findAll().subscribe(users =>{this.user=users.find(user => user.id === this.userID)});

          this.reloadAll();
          this.priority();
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          var _this7 = this;

          this.projectService.findAll().subscribe(function (projects) {
            _this7.projects = projects;
            var filter = new Array();

            for (var indexp = 0; indexp < _this7.projects.length; indexp++) {
              for (var indexu = 0; indexu < _this7.projects[indexp].users.length; indexu++) {
                if (_this7.projects[indexp].users[indexu].user.id === _this7.userID) {
                  filter.push(_this7.projects[indexp]);
                }
              }
            }

            _this7.filteredProjects = filter;
          });
        }
      }, {
        key: "priority",
        value: function priority() {
          var _this8 = this;

          this.taskService.findAll().subscribe(function (tasks) {
            _this8.important = tasks.sort(function (a, b) {
              return a.deadline > b.deadline ? 1 : -1;
            });
            _this8.important = _this8.important.slice(0, 2);
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.list.selectedProjectID = this.projectNumber;
          this.list.selectedTimeWindow = this.timeWindow;
          this.projectNumber = 0;
          this.timeWindow = null;
          this.list.reloadAll();
        }
      }, {
        key: "delete",
        value: function _delete() {
          this.list.selectedProjectID = 0;
          this.list.selectedTimeWindow = 0;
          this.list.reloadAll();
        }
      }]);

      return SelectionFormComponent;
    }();

    SelectionFormComponent.ɵfac = function SelectionFormComponent_Factory(t) {
      return new (t || SelectionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]));
    };

    SelectionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectionFormComponent,
      selectors: [["app-selection-form"]],
      inputs: {
        list: "list"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])],
      decls: 28,
      vars: 3,
      consts: [["mat-select", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "standard"], [3, "value", "valueChange"], ["value", "5"], ["value", "10"], ["value", "15"], ["value", "30"], ["value", "45"], ["value", "60"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]],
      template: function SelectionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SelectionFormComponent_Template_mat_select_valueChange_4_listener($event) {
            return ctx.projectNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectionFormComponent_mat_option_5_Template, 2, 1, "mat-option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Time window");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SelectionFormComponent_Template_mat_select_valueChange_9_listener($event) {
            return ctx.timeWindow = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "5 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "10 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "15 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "30 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "45 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "60 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionFormComponent_Template_button_click_24_listener() {
            return ctx.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionFormComponent_Template_button_click_26_listener() {
            return ctx["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.projectNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredProjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.timeWindow);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: ["mat-form-field[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    padding: 10px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0aW9uLWNvbXBvbmVudHMvc2VsZWN0aW9uLWZvcm0vc2VsZWN0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0aW9uLWNvbXBvbmVudHMvc2VsZWN0aW9uLWZvcm0vc2VsZWN0aW9uLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAiXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selection-form',
          templateUrl: './selection-form.component.html',
          styleUrls: ['./selection-form.component.css'],
          providers: [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]]
        }]
      }], function () {
        return [{
          type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
        }, {
          type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }];
      }, {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/selection-components/selection-list/selection-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/selection-components/selection-list/selection-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SelectionListComponent */

  /***/
  function srcAppSelectionComponentsSelectionListSelectionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionListComponent", function () {
      return SelectionListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _task_components_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../task-components/task-modal/task-modal.component */
    "./src/app/task-components/task-modal/task-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SelectionListComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r54 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r54.id, " ");
      }
    }

    function SelectionListComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r55.name, " ");
      }
    }

    function SelectionListComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r56 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r56.project.id, " ");
      }
    }

    function SelectionListComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r57.project.projectName, " ");
      }
    }

    function SelectionListComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Duration (min.) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r58.duration, " ");
      }
    }

    function SelectionListComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r59.description, " ");
      }
    }

    function SelectionListComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r60 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r60.status, " ");
      }
    }

    function SelectionListComponent_th_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_27_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_27_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var task_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r64.startTask(task_r61);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SelectionListComponent_ng_container_27_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_27_ng_container_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var task_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r67.closeTask(task_r61);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SelectionListComponent_ng_container_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectionListComponent_ng_container_27_ng_container_2_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectionListComponent_ng_container_27_ng_container_3_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_27_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var task_r61 = ctx.$implicit;

          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r70.editTask(task_r61);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_27_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);

          var task_r61 = ctx.$implicit;

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r72["delete"](task_r61.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r61.status == "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r61.status == "Started");
      }
    }

    function SelectionListComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function SelectionListComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    function SelectionListComponent_th_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r74 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r74.id, " ");
      }
    }

    function SelectionListComponent_th_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r75 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r75.name, " ");
      }
    }

    function SelectionListComponent_th_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r76 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r76.project.id, " ");
      }
    }

    function SelectionListComponent_th_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r77 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r77.project.projectName, " ");
      }
    }

    function SelectionListComponent_th_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Duration ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r78 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r78.duration, " ");
      }
    }

    function SelectionListComponent_th_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r79 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r79.description, " ");
      }
    }

    function SelectionListComponent_th_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r80 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r80.status, " ");
      }
    }

    function SelectionListComponent_th_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_55_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_55_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var task_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r84.startTask(task_r81);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SelectionListComponent_ng_container_55_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_55_ng_container_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);

          var task_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.closeTask(task_r81);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SelectionListComponent_ng_container_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectionListComponent_ng_container_55_ng_container_2_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectionListComponent_ng_container_55_ng_container_3_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_55_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var task_r81 = ctx.$implicit;

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.editTask(task_r81);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_55_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r91);

          var task_r81 = ctx.$implicit;

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92["delete"](task_r81.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r81 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r81.status == "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r81.status == "Started");
      }
    }

    function SelectionListComponent_tr_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function SelectionListComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    function SelectionListComponent_th_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r94.id, " ");
      }
    }

    function SelectionListComponent_th_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r95 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r95.name, " ");
      }
    }

    function SelectionListComponent_th_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_68_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r96 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r96.project.id, " ");
      }
    }

    function SelectionListComponent_th_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_71_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r97 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r97.project.projectName, " ");
      }
    }

    function SelectionListComponent_th_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Duration ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r98 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r98.duration, " ");
      }
    }

    function SelectionListComponent_th_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_77_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r99 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r99.description, " ");
      }
    }

    function SelectionListComponent_th_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r100 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r100.status, " ");
      }
    }

    function SelectionListComponent_th_82_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SelectionListComponent_ng_container_83_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_83_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106);

          var task_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r104.startTask(task_r101);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SelectionListComponent_ng_container_83_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_83_ng_container_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);

          var task_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r107.closeTask(task_r101);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function SelectionListComponent_ng_container_83_Template(rf, ctx) {
      if (rf & 1) {
        var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelectionListComponent_ng_container_83_ng_container_2_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectionListComponent_ng_container_83_ng_container_3_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_83_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var task_r101 = ctx.$implicit;

          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r110.editTask(task_r101);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectionListComponent_ng_container_83_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111);

          var task_r101 = ctx.$implicit;

          var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r112["delete"](task_r101.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r101 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r101.status == "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r101.status == "Started");
      }
    }

    function SelectionListComponent_tr_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
      }
    }

    function SelectionListComponent_tr_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
      }
    }

    var SelectionListComponent = /*#__PURE__*/function () {
      function SelectionListComponent(taskService, dialog) {
        _classCallCheck(this, SelectionListComponent);

        this.taskService = taskService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'project.projectName', 'duration', 'status', 'actions'];
        this.selectedTasks = [];
        this.columnsToDisplay = ['name', 'duration', 'deadline', 'status'];
      }

      _createClass(SelectionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reloadAll();
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          var _this9 = this;

          this.taskService.findAll().subscribe(function (tasks) {
            // Stukje code dat filtered en sorteerd voor new
            var newfilteredTasks = tasks.filter(function (task) {
              return task.project.id === _this9.selectedProjectID;
            });
            newfilteredTasks = newfilteredTasks.filter(function (task) {
              return task.duration <= _this9.selectedTimeWindow;
            });
            newfilteredTasks = newfilteredTasks.filter(function (task) {
              return task.status === "New";
            });
            newfilteredTasks.sort(function (a, b) {
              return a.duration > b.duration ? 1 : -1;
            });
            newfilteredTasks.sort(function (a, b) {
              return a.deadline > b.deadline ? 1 : -1;
            });
            _this9.newTasks = newfilteredTasks.slice(0, 4); // Stukje code dat filtered en sorteerd voor started

            var startedfilteredTasks = tasks.filter(function (task) {
              return task.project.id === _this9.selectedProjectID;
            });
            startedfilteredTasks = startedfilteredTasks.filter(function (task) {
              return task.duration <= _this9.selectedTimeWindow;
            });
            startedfilteredTasks = startedfilteredTasks.filter(function (task) {
              return task.status === "Started";
            });
            startedfilteredTasks.sort(function (a, b) {
              return a.duration > b.duration ? 1 : -1;
            });
            startedfilteredTasks.sort(function (a, b) {
              return a.deadline > b.deadline ? 1 : -1;
            });
            _this9.startedTasks = startedfilteredTasks.slice(0, 4); //Stukje code dat filtered en sorteerd voor coming up

            var comingupfilteredTasks = tasks.sort(function (a, b) {
              return a.deadline > b.deadline ? 1 : -1;
            });
            _this9.comingupTasks = comingupfilteredTasks.slice(0, 4);
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this10 = this;

          this.taskService["delete"](id).subscribe(function () {
            return _this10.reloadAll();
          });
        }
      }, {
        key: "startTask",
        value: function startTask(startedTask) {
          var _this11 = this;

          startedTask.status = "Started";
          this.taskService.patchTask(startedTask.id, startedTask).subscribe(function () {
            return _this11.reloadAll();
          });
        }
      }, {
        key: "closeTask",
        value: function closeTask(closedTask) {
          var _this12 = this;

          closedTask.status = "Closed";
          this.taskService.patchTask(closedTask.id, closedTask).subscribe(function () {
            return _this12.reloadAll();
          });
        }
      }, {
        key: "editTask",
        value: function editTask(task) {
          var _this13 = this;

          var dialogRef = this.dialog.open(_task_components_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_3__["TaskModalComponent"], {
            width: '50%',
            data: {
              taskEdit: task
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this13.taskService.patchTask(result.id, result).subscribe(function () {
              return _this13.reloadAll();
            });
          });
        }
      }, {
        key: "selectTasks",
        value: function selectTasks(IdProject) {
          this.selectedTasks = [];

          for (var index = 0; index < this.tasks.length; index++) {
            if (this.tasks[index].project.id == IdProject) {
              this.selectedTasks.push(this.tasks[index]);
            }
          }
        }
      }]);

      return SelectionListComponent;
    }();

    SelectionListComponent.ɵfac = function SelectionListComponent_Factory(t) {
      return new (t || SelectionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    SelectionListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectionListComponent,
      selectors: [["app-selection-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])],
      decls: 86,
      vars: 9,
      consts: [["id", "Tabbed lists"], ["label", "Coming up"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "project.id"], ["matColumnDef", "project.projectName"], ["matColumnDef", "duration"], ["matColumnDef", "description"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "New"], ["label", "Started"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function SelectionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectionListComponent_th_5_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectionListComponent_ng_container_6_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SelectionListComponent_th_8_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SelectionListComponent_ng_container_9_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SelectionListComponent_th_11_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SelectionListComponent_ng_container_12_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SelectionListComponent_th_14_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SelectionListComponent_ng_container_15_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SelectionListComponent_th_17_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SelectionListComponent_ng_container_18_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SelectionListComponent_th_20_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SelectionListComponent_ng_container_21_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SelectionListComponent_th_23_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SelectionListComponent_ng_container_24_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SelectionListComponent_th_26_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SelectionListComponent_ng_container_27_Template, 8, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SelectionListComponent_tr_28_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SelectionListComponent_tr_29_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-tab", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SelectionListComponent_th_33_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SelectionListComponent_ng_container_34_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SelectionListComponent_th_36_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SelectionListComponent_ng_container_37_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SelectionListComponent_th_39_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SelectionListComponent_ng_container_40_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SelectionListComponent_th_42_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SelectionListComponent_ng_container_43_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SelectionListComponent_th_45_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SelectionListComponent_ng_container_46_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SelectionListComponent_th_48_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SelectionListComponent_ng_container_49_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](50, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SelectionListComponent_th_51_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SelectionListComponent_ng_container_52_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](53, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, SelectionListComponent_th_54_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, SelectionListComponent_ng_container_55_Template, 8, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, SelectionListComponent_tr_56_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, SelectionListComponent_tr_57_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-tab", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](60, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, SelectionListComponent_th_61_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SelectionListComponent_ng_container_62_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, SelectionListComponent_th_64_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, SelectionListComponent_ng_container_65_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, SelectionListComponent_th_67_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, SelectionListComponent_ng_container_68_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, SelectionListComponent_th_70_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, SelectionListComponent_ng_container_71_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, SelectionListComponent_th_73_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, SelectionListComponent_ng_container_74_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](75, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SelectionListComponent_th_76_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SelectionListComponent_ng_container_77_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](78, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SelectionListComponent_th_79_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, SelectionListComponent_ng_container_80_Template, 3, 1, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](81, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, SelectionListComponent_th_82_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, SelectionListComponent_ng_container_83_Template, 8, 2, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, SelectionListComponent_tr_84_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, SelectionListComponent_tr_85_Template, 1, 0, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.comingupTasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.newTasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.startedTasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\ntr.example-detail-row[_ngcontent-%COMP%] {\r\n    height: 0;\r\n  }\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n    background: whitesmoke;\r\n  }\r\n\r\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n    background: #efefef;\r\n  }\r\n\r\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom-width: 0;\r\n  }\r\n\r\n.example-element-detail[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    display: flex;\r\n  }\r\n\r\n.example-element-diagram[_ngcontent-%COMP%] {\r\n    min-width: 80px;\r\n    border: 2px solid black;\r\n    padding: 8px;\r\n    font-weight: lighter;\r\n    margin: 8px 0;\r\n    height: 104px;\r\n  }\r\n\r\n.example-element-symbol[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    font-size: 40px;\r\n    line-height: normal;\r\n  }\r\n\r\n.example-element-description[_ngcontent-%COMP%] {\r\n    padding: 16px;\r\n  }\r\n\r\n.example-element-description-attribution[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZWN0aW9uLWNvbXBvbmVudHMvc2VsZWN0aW9uLWxpc3Qvc2VsZWN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFNBQVM7RUFDWDs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvc2VsZWN0aW9uLWNvbXBvbmVudHMvc2VsZWN0aW9uLWxpc3Qvc2VsZWN0aW9uLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICAgIGhlaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgdHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICAgIG1pbi13aWR0aDogODBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAiXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '0px',
          minHeight: '0'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          height: '*'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-selection-list',
          templateUrl: './selection-list.component.html',
          styleUrls: ['./selection-list.component.css'],
          providers: [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '0px',
            minHeight: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/task-components/task-form/task-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/task-components/task-form/task-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: TaskFormComponent */

  /***/
  function srcAppTaskComponentsTaskFormTaskFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function () {
      return TaskFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/task */
    "./src/app/models/task.ts");
    /* harmony import */


    var _models_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/project */
    "./src/app/models/project.ts");
    /* harmony import */


    var _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../task-modal/task-modal.component */
    "./src/app/task-components/task-modal/task-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var TaskFormComponent = /*#__PURE__*/function () {
      function TaskFormComponent(taskService, dialog, themeService) {
        _classCallCheck(this, TaskFormComponent);

        this.taskService = taskService;
        this.dialog = dialog;
        this.themeService = themeService;
        this.task = new _models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]();
        var currentDate = new Date();
        currentDate.getDate();
        this.minDate = currentDate;
      }

      _createClass(TaskFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.task.project = new _models_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
        }
      }, {
        key: "save",
        value: function save() {
          var _this14 = this;

          this.taskService.save(this.task).subscribe(function () {
            return _this14.taskList.reloadAll();
          });
        }
      }, {
        key: "newTask",
        value: function newTask() {
          var _this15 = this;

          this.theme = this.themeService.currentActive();
          var dialogRef = this.dialog.open(_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_4__["TaskModalComponent"], {
            width: '50%',
            data: {
              taskEdit: this.task
            },
            panelClass: this.theme
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this15.taskService.save(result).subscribe(function () {
              _this15.taskList.reloadAll();

              _this15.clear();
            });
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.task.name = "";
          this.task.project = new _models_project__WEBPACK_IMPORTED_MODULE_3__["Project"]();
          this.task.duration = null;
          this.task.description = "";
          this.task.deadline = null;
        }
      }]);

      return TaskFormComponent;
    }();

    TaskFormComponent.ɵfac = function TaskFormComponent_Factory(t) {
      return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]));
    };

    TaskFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskFormComponent,
      selectors: [["app-task-form"]],
      inputs: {
        taskList: "taskList"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])],
      decls: 2,
      vars: 0,
      consts: [["mat-flat-button", "", "color", "primary", 3, "click"]],
      template: function TaskFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskFormComponent_Template_button_click_0_listener() {
            return ctx.newTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Task");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1jb21wb25lbnRzL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90YXNrLWNvbXBvbmVudHMvdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task-form',
          templateUrl: './task-form.component.html',
          styleUrls: ['./task-form.component.css'],
          providers: [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]]
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]
        }];
      }, {
        taskList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/task-components/task-list/task-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/task-components/task-list/task-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: TaskListComponent */

  /***/
  function srcAppTaskComponentsTaskListTaskListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskListComponent", function () {
      return TaskListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../task.service */
    "./src/app/task.service.ts");
    /* harmony import */


    var _task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../task-modal/task-modal.component */
    "./src/app/task-components/task-modal/task-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var src_app_project_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/project-user.service */
    "./src/app/project-user.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function TaskListComponent_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r18.id, " ");
      }
    }

    function TaskListComponent_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r19.name, " ");
      }
    }

    function TaskListComponent_th_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project ID ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r20.project.id, " ");
      }
    }

    function TaskListComponent_th_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Project Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r21.project.projectName, " ");
      }
    }

    function TaskListComponent_th_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Duration ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r22.duration, " ");
      }
    }

    function TaskListComponent_th_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r23.description, " ");
      }
    }

    function TaskListComponent_th_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r24.status, " ");
      }
    }

    function TaskListComponent_th_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TaskListComponent_ng_container_24_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_container_24_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var task_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.startTask(task_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TaskListComponent_ng_container_24_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_container_24_ng_container_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var task_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.closeTask(task_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function TaskListComponent_ng_container_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskListComponent_ng_container_24_ng_container_2_Template, 3, 0, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskListComponent_ng_container_24_ng_container_3_Template, 3, 0, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_container_24_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var task_r25 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.editTask(task_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_ng_container_24_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var task_r25 = ctx.$implicit;

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36["delete"](task_r25.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var task_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r25.status == "New");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r25.status == "Started");
      }
    }

    function TaskListComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
      }
    }

    function TaskListComponent_tr_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    var TaskListComponent = /*#__PURE__*/function () {
      function TaskListComponent(taskService, dialog, themeService, projectUserService) {
        _classCallCheck(this, TaskListComponent);

        this.taskService = taskService;
        this.dialog = dialog;
        this.themeService = themeService;
        this.projectUserService = projectUserService;
        this.tempTasks = [];
        this.displayedColumns = ['name', 'project.projectName', 'duration', 'description', 'status', 'actions'];
        this.reloadAll();
        this.duration = 0;
        this.temp = 0;
      }

      _createClass(TaskListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userID = parseInt(sessionStorage.getItem('loginId'));
          this.projectIDs;
          this.tasks;
          this.tempTasks;
          this.reloadAll();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.reloadAll();
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          var _this16 = this;

          this.projectUserService.findAll().subscribe(function (projectUsers) {
            var filterP = new Array();

            for (var i = 0; i < projectUsers.length; i++) {
              if (projectUsers[i].user.id === _this16.userID) {
                filterP.push(projectUsers[i].project.id);
              }
            }

            _this16.projectIDs = filterP; //filter all tasks to projects connected to the current user

            _this16.taskService.findAll().subscribe(function (tasks) {
              _this16.tasks = tasks;
              var filter = new Array();

              for (var _i = 0; _i < _this16.tasks.length; _i++) {
                if (_this16.projectIDs.includes(_this16.tasks[_i].project.id)) {
                  filter.push(_this16.tasks[_i]);
                }
              }

              _this16.tasks = filter;

              _this16.durationCalc(_this16.tasks);

              console.log("the total duration of all the tasks= " + _this16.duration);
            });
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this17 = this;

          this.taskService["delete"](id).subscribe(function () {
            return _this17.reloadAll();
          });
        }
      }, {
        key: "startTask",
        value: function startTask(startedTask) {
          var _this18 = this;

          startedTask.status = "Started";
          this.taskService.patchTask(startedTask.id, startedTask).subscribe(function () {
            return _this18.reloadAll();
          });
        }
      }, {
        key: "closeTask",
        value: function closeTask(closedTask) {
          var _this19 = this;

          closedTask.status = "Closed";
          this.taskService.patchTask(closedTask.id, closedTask).subscribe(function () {
            return _this19.reloadAll();
          });
        }
      }, {
        key: "editTask",
        value: function editTask(task) {
          var _this20 = this;

          this.theme = this.themeService.currentActive();
          var dialogRef = this.dialog.open(_task_modal_task_modal_component__WEBPACK_IMPORTED_MODULE_2__["TaskModalComponent"], {
            width: '50%',
            data: {
              taskEdit: task
            },
            panelClass: this.theme
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this20.taskService.patchTask(result.id, result).subscribe(function () {
              return _this20.reloadAll();
            });
          });
        }
      }, {
        key: "durationCalc",
        value: function durationCalc(selectedTasks) {
          var _this21 = this;

          this.tempTasks = this.tasks.filter(function (task) {
            return task.status === "New";
          });
          this.tempTasks = this.tempTasks.filter(function (task) {
            return task.status === "Started";
          });
          selectedTasks.forEach(function (element) {
            _this21.temp += element.duration;
          });
          this.duration = this.temp;
          this.temp = 0;
        }
      }]);

      return TaskListComponent;
    }();

    TaskListComponent.ɵfac = function TaskListComponent_Factory(t) {
      return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_user_service__WEBPACK_IMPORTED_MODULE_5__["ProjectUserService"]));
    };

    TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskListComponent,
      selectors: [["app-task-list"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])],
      decls: 30,
      vars: 4,
      consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "project.id"], ["matColumnDef", "project.projectName"], ["matColumnDef", "duration"], ["matColumnDef", "description"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function TaskListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskListComponent_th_2_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskListComponent_ng_container_3_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskListComponent_th_5_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskListComponent_ng_container_6_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskListComponent_th_8_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskListComponent_ng_container_9_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskListComponent_th_11_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskListComponent_ng_container_12_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskListComponent_th_14_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskListComponent_ng_container_15_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskListComponent_th_17_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskListComponent_ng_container_18_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TaskListComponent_th_20_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TaskListComponent_ng_container_21_Template, 3, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskListComponent_th_23_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TaskListComponent_ng_container_24_Template, 8, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TaskListComponent_tr_25_Template, 1, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TaskListComponent_tr_26_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tasks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The total duration of all new and started tasks combined is: ", ctx.duration, " min.");
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1jb21wb25lbnRzL3Rhc2stbGlzdC90YXNrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stY29tcG9uZW50cy90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task-list',
          templateUrl: './task-list.component.html',
          styleUrls: ['./task-list.component.css'],
          providers: [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]]
        }]
      }], function () {
        return [{
          type: _task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _theme_service__WEBPACK_IMPORTED_MODULE_4__["ThemeService"]
        }, {
          type: src_app_project_user_service__WEBPACK_IMPORTED_MODULE_5__["ProjectUserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/task-components/task-modal/task-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/task-components/task-modal/task-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: TaskModalComponent */

  /***/
  function srcAppTaskComponentsTaskModalTaskModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskModalComponent", function () {
      return TaskModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_project_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/project-user.service */
    "./src/app/project-user.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function TaskModalComponent_mat_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var project_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", project_r4.projectName, " ");
      }
    }

    function TaskModalComponent_ng_container_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
      }
    }

    function TaskModalComponent_ng_container_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r3.data.taskEdit);
      }
    }

    var TaskModalComponent = /*#__PURE__*/function () {
      function TaskModalComponent(dialogRef, data, projectUserService) {
        _classCallCheck(this, TaskModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.projectUserService = projectUserService;
        var currentDate = new Date();
        currentDate.getDate();
        this.minDate = currentDate; // this.taskEdit.name = "default_Name"
      }

      _createClass(TaskModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userID = parseInt(sessionStorage.getItem('loginId'));
          this.projects;
          this.reloadAll();
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          var _this22 = this;

          this.projectUserService.findAll().subscribe(function (projectUsers) {
            var filterP = new Array();

            for (var i = 0; i < projectUsers.length; i++) {
              if (projectUsers[i].user.id === _this22.userID) {
                filterP.push(projectUsers[i].project);
              }
            }

            _this22.projects = filterP;
          }); //this.projectService.findAll().subscribe(projects => this.projects = projects);
        }
      }]);

      return TaskModalComponent;
    }();

    TaskModalComponent.ɵfac = function TaskModalComponent_Factory(t) {
      return new (t || TaskModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_user_service__WEBPACK_IMPORTED_MODULE_2__["ProjectUserService"]));
    };

    TaskModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskModalComponent,
      selectors: [["app-task-modal"]],
      inputs: {
        taskEdit: "taskEdit"
      },
      decls: 46,
      vars: 11,
      consts: [["mat-dialog-content", ""], ["appearance", "standard"], ["matInput", "", "required", "", "type", "text", "name", "taskName", 3, "ngModel", "ngModelChange"], ["required", "", "mat-select", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["required", "", 3, "value", "valueChange"], ["value", "5"], ["value", "10"], ["value", "15"], ["value", "30"], ["value", "45"], ["value", "60"], ["for", "inputprojectdeadline"], ["matInput", "", "required", "", "name", "deadline", 3, "min", "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "standard", 2, "width", "800px"], ["rows", "10", "cols", "100", "matInput", "", "required", "", "name", "description", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", "mat-dialog-close", ""], [4, "ngIf"], [3, "value"], ["mat-button", "", "color", "primary", 3, "disabled"], ["mat-button", "", "color", "primary", 3, "mat-dialog-close"]],
      template: function TaskModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskModalComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.data.taskEdit.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TaskModalComponent_Template_mat_select_valueChange_9_listener($event) {
            return ctx.data.taskEdit.project.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskModalComponent_mat_option_10_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Duration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TaskModalComponent_Template_mat_select_valueChange_14_listener($event) {
            return ctx.data.taskEdit.duration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "10 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "15 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "30 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "45 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "60 min.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Deadline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskModalComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.data.taskEdit.deadline = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker-toggle", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-datepicker", null, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskModalComponent_Template_textarea_ngModelChange_40_listener($event) {
            return ctx.data.taskEdit.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TaskModalComponent_ng_container_44_Template, 3, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TaskModalComponent_ng_container_45_Template, 3, 1, "ng-container", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.taskEdit.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.taskEdit.project.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.data.taskEdit.duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r1)("ngModel", ctx.data.taskEdit.deadline);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.taskEdit.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.taskEdit.name == null || ctx.data.taskEdit.project.id == null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.taskEdit.name != null && ctx.data.taskEdit.project.id != null);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stY29tcG9uZW50cy90YXNrLW1vZGFsL3Rhc2stbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task-modal',
          templateUrl: './task-modal.component.html',
          styleUrls: ['./task-modal.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_project_user_service__WEBPACK_IMPORTED_MODULE_2__["ProjectUserService"]
        }];
      }, {
        taskEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/task.service.ts":
  /*!*********************************!*\
    !*** ./src/app/task.service.ts ***!
    \*********************************/

  /*! exports provided: TaskService */

  /***/
  function srcAppTaskServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskService", function () {
      return TaskService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TaskService = /*#__PURE__*/function () {
      function TaskService(http) {
        _classCallCheck(this, TaskService);

        this.http = http;
      }

      _createClass(TaskService, [{
        key: "findAll",
        value: function findAll() {
          return this.http.get('/task');
        }
      }, {
        key: "save",
        value: function save(task) {
          return this.http.post('/task', task);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]('/task/' + id);
        } //to edit the listing.

      }, {
        key: "patchTask",
        value: function patchTask(id, task) {
          return this.http.patch('/task/' + id, task);
        }
      }]);

      return TaskService;
    }();

    TaskService.ɵfac = function TaskService_Factory(t) {
      return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TaskService,
      factory: TaskService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
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
  "./src/app/theme.service.ts":
  /*!**********************************!*\
    !*** ./src/app/theme.service.ts ***!
    \**********************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this._darkTheme = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isDarkTheme = this._darkTheme.asObservable();
      }

      _createClass(ThemeService, [{
        key: "setDarkTheme",
        value: function setDarkTheme(isDarkTheme) {
          this._darkTheme.next(isDarkTheme);

          if (isDarkTheme) {
            this.theme = "dark-theme";
          } else {
            this.theme = "";
          }

          ;
        }
      }, {
        key: "currentActive",
        value: function currentActive() {
          return this.theme;
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/toolbar/toolbar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/toolbar/toolbar.component.ts ***!
    \**********************************************/

  /*! exports provided: ToolbarComponent */

  /***/
  function srcAppToolbarToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () {
      return ToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../user-components/user-login/user-login.component */
    "./src/app/user-components/user-login/user-login.component.ts");

    var ToolbarComponent = /*#__PURE__*/function () {
      function ToolbarComponent(themeService, loginService) {
        _classCallCheck(this, ToolbarComponent);

        this.themeService = themeService;
        this.loginService = loginService;
      }

      _createClass(ToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.isDarkTheme = this.themeService.isDarkTheme;
          this.loginService.setLogin();
          this.loginService.getLogin().subscribe(function (isLogin) {
            return _this23.isLogin = isLogin;
          });
          this.checkLogin();
        }
      }, {
        key: "toggleDarkTheme",
        value: function toggleDarkTheme(checked) {
          this.themeService.setDarkTheme(checked);
          this.isDarkTheme = this.themeService.isDarkTheme;
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          if (parseInt(sessionStorage.getItem('loginId')) > 0) {
            this.isLogin = true;
          } else this.isLogin = false;
        }
      }]);

      return ToolbarComponent;
    }();

    ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) {
      return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]));
    };

    ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToolbarComponent,
      selectors: [["app-toolbar"]],
      decls: 17,
      vars: 3,
      consts: [["color", "primary"], ["routerLink", "/home", "mat-button", "", "aria-label", "navigate to homepage"], ["routerLink", "/select", "mat-button", "", "aria-label", "navigate to project selector", 3, "disabled"], ["routerLink", "/list", "mat-button", "", "aria-label", "navigate to lists", 3, "disabled"], [1, "nav-spacer"], [3, "checked", "change"]],
      template: function ToolbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pie Productivity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lists");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "wb_sunny");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-slide-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ToolbarComponent_Template_mat_slide_toggle_change_13_listener($event) {
            return ctx.toggleDarkTheme($event.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "nights_stay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-user-login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !ctx.isDarkTheme);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggle"], _user_components_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_8__["UserLoginComponent"]],
      styles: [".nav-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\nmat-slide-toggle[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n    padding:5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5idXR0b24sIGEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1zbGlkZS10b2dnbGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-toolbar',
          templateUrl: './toolbar.component.html',
          styleUrls: ['./toolbar.component.css']
        }]
      }], function () {
        return [{
          type: _theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
        }, {
          type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-components/user-form/user-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user-components/user-form/user-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppUserComponentsUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../user.service */
    "./src/app/user.service.ts");

    var UserFormComponent = /*#__PURE__*/function () {
      function UserFormComponent(userService) {
        _classCallCheck(this, UserFormComponent);

        this.userService = userService;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.userService.save(this.user).subscribe();
        }
      }, {
        key: "clear",
        value: function clear() {//this.user.project = null;
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ɵfac = function UserFormComponent_Factory(t) {
      return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserFormComponent,
      selectors: [["app-user-form"]],
      decls: 0,
      vars: 0,
      template: function UserFormComponent_Template(rf, ctx) {},
      styles: ["button[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb21wb25lbnRzL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY29tcG9uZW50cy91c2VyLWZvcm0vdXNlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-form',
          templateUrl: './user-form.component.html',
          styleUrls: ['./user-form.component.css']
        }]
      }], function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-components/user-list/user-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user-components/user-list/user-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserComponentsUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserListComponent_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_8_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var user_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.setUserProject(user_r1.project);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_8_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var user_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4["delete"](user_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Del");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.project);
      }
    } //import { EventEmitter } from 'protractor';


    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(userService) {
        _classCallCheck(this, UserListComponent);

        this.userService = userService;
        this.project = 0;
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reloadAll();
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          var _this24 = this;

          this.userService.findAll().subscribe(function (users) {
            return _this24.users = users;
          });
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this25 = this;

          this.userService["delete"](id).subscribe(function () {
            return _this25.reloadAll();
          });
        }
      }, {
        key: "setUserProject",
        value: function setUserProject(value) {
          this.project = value; //this.appGlobal.projectIdUser = value;
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));
    };

    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      inputs: {
        appGlobal: "appGlobal"
      },
      decls: 9,
      vars: 1,
      consts: [["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "user ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Acces to project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserListComponent_tr_8_Template, 9, 2, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItY29tcG9uZW50cy91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-list',
          templateUrl: './user-list.component.html',
          styleUrls: ['./user-list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      }, {
        appGlobal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user-components/user-login/user-login.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/user-components/user-login/user-login.component.ts ***!
    \********************************************************************/

  /*! exports provided: UserLoginComponent */

  /***/
  function srcAppUserComponentsUserLoginUserLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function () {
      return UserLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user-modal/user-modal.component */
    "./src/app/user-components/user-modal/user-modal.component.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/theme.service */
    "./src/app/theme.service.ts");
    /* harmony import */


    var src_app_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/login.service */
    "./src/app/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function UserLoginComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.loginUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserLoginComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserLoginComponent = /*#__PURE__*/function () {
      function UserLoginComponent(userService, dialog, themeService, loginService, router) {
        _classCallCheck(this, UserLoginComponent);

        this.userService = userService;
        this.dialog = dialog;
        this.themeService = themeService;
        this.loginService = loginService;
        this.router = router;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.logoutId = -1;
      }

      _createClass(UserLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.LoginId = parseInt(sessionStorage.getItem('loginId'));
          this.logoutId;
          this.loginService.getLogin().subscribe(function (isLogin) {
            return _this26.isLogin = isLogin;
          });
          if (this.LoginId > 0) this.isLogin = true;else this.isLogin = false;
          console.log("in onInit xxxx" + this.isLogin);
        } //if register button has been pressed

      }, {
        key: "newUser",
        value: function newUser() {
          var _this27 = this;

          this.theme = this.themeService.currentActive();
          var dialogRef = this.dialog.open(_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_2__["UserModalComponent"], {
            width: '50%',
            data: {
              user: this.user,
              origin: "register"
            },
            panelClass: this.theme
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this27.userService.save(result).subscribe();

            _this27.userService.login(result).subscribe(function (answer) {
              //this.LoginId =  answer;
              //this.loginService.globalLoginId = this.LoginId; 
              _this27.loginService.globalLoginId = answer;

              _this27.loginService.setLogin();

              sessionStorage.setItem('loginId', answer.toString());
              console.log("loginID = " + _this27.loginService.globalLoginId);
            });
          });
        } //if login button has been pressed.

      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this28 = this;

          this.theme = this.themeService.currentActive();
          var dialogRef = this.dialog.open(_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_2__["UserModalComponent"], {
            width: '50%',
            data: {
              user: this.user,
              origin: "login"
            },
            panelClass: this.theme
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this28.userService.login(result).subscribe(function (answer) {
              //this.LoginId =  answer;
              //this.loginService.globalLoginId = this.LoginId;
              sessionStorage.setItem('loginId', answer.toString());
              _this28.LoginId = answer;
              console.log("in login xxxx " + _this28.isLogin);

              if (answer == -1) {
                alert("Login failed. Incorrect credentials");
              } else {
                _this28.router.navigate(['select']);

                _this28.isLogin = true;
                _this28.loginService.globalLoginId = answer;

                _this28.loginService.setLogin();

                console.log("loginID = " + _this28.loginService.globalLoginId);
              }

              _this28.send();
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.setItem('loginId', this.logoutId.toString());
          this.LoginId = this.logoutId;
          this.loginService.globalLoginId = this.logoutId;
          this.loginService.setLogin();
          this.isLogin = false;
          console.log("in logout xxx " + this.isLogin); // this.checkLogin()

          this.router.navigate(['home']); //this.ngOnInit()
        } //function that sends the observable to login service 

      }, {
        key: "send",
        value: function send() {
          this.loginService.sendProject(this.loginService.globalLoginId);
        }
      }]);

      return UserLoginComponent;
    }();

    UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) {
      return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserLoginComponent,
      selectors: [["app-user-login"]],
      decls: 4,
      vars: 2,
      consts: [["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "click"]],
      template: function UserLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserLoginComponent_button_0_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserLoginComponent_button_1_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLoginComponent_Template_button_click_2_listener() {
            return ctx.newUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb21wb25lbnRzL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jb21wb25lbnRzL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-login',
          templateUrl: './user-login.component.html',
          styleUrls: ['./user-login.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]
        }, {
          type: src_app_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-components/user-modal/user-modal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/user-components/user-modal/user-modal.component.ts ***!
    \********************************************************************/

  /*! exports provided: UserModalComponent */

  /***/
  function srcAppUserComponentsUserModalUserModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModalComponent", function () {
      return UserModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/project.service */
    "./src/app/project.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function UserModalComponent_div_11_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The entered passwords do not match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserModalComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Repeat password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserModalComponent_div_11_Template_input_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.data.passwordCheck = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserModalComponent_div_11_p_5_Template, 2, 0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.data.passwordCheck);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.data.user.password != ctx_r0.data.passwordCheck);
      }
    }

    function UserModalComponent_div_15_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r6.data.user);
      }
    }

    function UserModalComponent_div_15_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserModalComponent_div_15_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.validateLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function UserModalComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserModalComponent_div_15_ng_container_1_Template, 3, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserModalComponent_div_15_ng_container_2_Template, 3, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.user.username != null && ctx_r1.data.user.password != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.data.user.username == null || ctx_r1.data.user.password == null);
      }
    }

    function UserModalComponent_div_16_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx_r10.data.user);
      }
    }

    function UserModalComponent_div_16_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserModalComponent_div_16_ng_container_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.validateRegistration();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function UserModalComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserModalComponent_div_16_ng_container_1_Template, 3, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserModalComponent_div_16_ng_container_2_Template, 3, 0, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.data.user.username != null && ctx_r2.data.user.password != null && ctx_r2.data.passwordCheck != null && ctx_r2.data.passwordCheck == ctx_r2.data.user.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.data.user.username == null || ctx_r2.data.user.password == null || ctx_r2.data.passwordCheck == null || ctx_r2.data.passwordCheck != ctx_r2.data.user.password);
      }
    }

    var UserModalComponent = /*#__PURE__*/function () {
      function UserModalComponent(dialogRef, data, projectService) {
        _classCallCheck(this, UserModalComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.projectService = projectService;
      }

      _createClass(UserModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.reloadAll();
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {//this.projectService.findAll().subscribe(projects => this.projects = projects);
        }
      }, {
        key: "validateRegistration",
        value: function validateRegistration() {
          if (this.data.user.username == undefined) this.validationMessage = "Name cannot be empty";else if (this.data.user.password == undefined) this.validationMessage = "Password cannot be empty";else if (this.data.passwordCheck != this.data.user.password) this.validationMessage = "Second password not identical to first"; //else if (this.data.user.id == undefined)
          //this.validationMessage = "Project field cannot be empty"

          alert(this.validationMessage);
        }
      }, {
        key: "validateLogin",
        value: function validateLogin() {
          if (this.data.user.username == undefined) this.validationMessage = "Name cannot be empty";else if (this.data.user.password == undefined) this.validationMessage = "Password cannot be empty";
          alert(this.validationMessage);
        }
      }]);

      return UserModalComponent;
    }();

    UserModalComponent.ɵfac = function UserModalComponent_Factory(t) {
      return new (t || UserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]));
    };

    UserModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserModalComponent,
      selectors: [["app-user-modal"]],
      inputs: {
        user: "user"
      },
      decls: 17,
      vars: 5,
      consts: [["mat-dialog-content", ""], ["appearance", "standard"], ["matInput", "", "type", "text", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "name", "password", "required", "", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", ""], ["class", "mat-caption", 4, "ngIf"], [1, "mat-caption"], ["mat-flat-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-button", "", "color", "primary", 3, "click"]],
      template: function UserModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserModalComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.data.user.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserModalComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.data.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserModalComponent_div_11_Template, 6, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserModalComponent_div_15_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserModalComponent_div_16_Template, 3, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.user.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.user.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.origin == "register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.origin == "login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.origin == "register");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
      styles: ["button[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1jb21wb25lbnRzL3VzZXItbW9kYWwvdXNlci1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdXNlci1jb21wb25lbnRzL3VzZXItbW9kYWwvdXNlci1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-modal',
          templateUrl: './user-modal.component.html',
          styleUrls: ['./user-modal.component.css']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: src_app_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "login",
        value: function login(user) {
          return this.http.get('/user/login?user=' + user.username + '&password=' + user.password);
        }
      }, {
        key: "findAll",
        value: function findAll() {
          return this.http.get('/user');
        }
      }, {
        key: "save",
        value: function save(user) {
          return this.http.post('/user', user);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]('/user/' + id);
        } //to edit the listing.

      }, {
        key: "patchUser",
        value: function patchUser(id, user) {
          return this.http.patch('/user/' + id, user);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
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
    /*! C:\Users\E Bolt\Documents\project\TDP-productivity-Angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map