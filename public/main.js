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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <header>\n      <h3>\n          <span class=\"glyphicon glyphicon-user\"></span>\n          {{ customer.firstName }} {{ customer.lastName }}\n      </h3>\n  </header>\n  <br />\n  <form [formGroup]=\"customerForm\" (ngSubmit)=\"submit(customerForm)\" class=\"editForm\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.firstName.untouched || customerForm.controls.firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.lastName.untouched || customerForm.controls.lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <br />\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Male\" />\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" formControlName=\"gender\" value=\"Female\"  /> \n          Female\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.email.untouched || customerForm.controls.email.valid\">Email is required and must be valid</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.address.untouched || customerForm.controls.address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"city\" />\n      <div class=\"alert alert-danger\" [hidden]=\"customerForm.controls.city.untouched || customerForm.controls.city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\" formControlName=\"stateId\">\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\n      </select>\n    </div>\n    <br />\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer._id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer._id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <header>\n      <h3>\n          <span class=\"glyphicon glyphicon-user\"></span>\n          {{ customer.firstName }} {{ customer.lastName }}\n      </h3>\n  </header>\n  <br />\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.untouched || firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.untouched || lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Gender</label>\n      <br />\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Male\" required />\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"customer.gender\" #gender=\"ngModel\" value=\"Female\" required /> \n          Female\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"customer.email\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" />\n      <div class=\"alert alert-danger\" [hidden]=\"email.untouched || email.valid\">Email is required and must be valid</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"address.untouched || address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"city.untouched || city.valid\">City is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>State</label>\n      <select class=\"form-control\" \n              [(ngModel)]=\"customer.stateId\"\n              name=\"state\" \n              required>\n          <option *ngFor=\"let state of states\" [ngValue]=\"state.id\">{{state.name}}</option>\n      </select>\n    </div>\n    <br />\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer._id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer._id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <br />\n    <br />\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row grid-container\">\n        <div class=\"col-md-10\">\n            <div class=\"table\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>&nbsp;</th>\n                            <th (click)=\"sort('firstName')\">First Name</th>\n                            <th (click)=\"sort('lastName')\">Last Name</th>\n                            <th (click)=\"sort('address')\">Address</th>\n                            <th (click)=\"sort('city')\">City</th>\n                            <th (click)=\"sort('state.name')\">State</th>\n                            <th (click)=\"sort('orderTotal')\">Order Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let customer of customers;trackBy:trackby.customer\">\n                            <td><img src=\"/assets/images/{{ customer.gender | lowercase }}.png\"\n                                    class=\"card-image\" alt=\"Customer Image\" /></td>\n                            <td><a [routerLink]=\"['/customers',customer._id]\">{{ customer.firstName | capitalize }}</a></td>\n                            <td>{{ customer.lastName | capitalize }}</td>\n                            <td>{{ customer.address }}</td>\n                            <td>{{ customer.city | trim }}</td>\n                            <td>{{ customer.state.name }}</td>\n                            <td>{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\n                        </tr>\n                        <tr *ngIf=\"!customers.length\">\n                            <td>&nbsp;</td>\n                            <td colspan=\"6\">No Records Found</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-user\"></span>\n                {{ title }}\n            </h3>\n        </header>\n        <br />\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"navbar\">\n                    <app-filter-textbox (changed)=\"filterChanged($event)\"></app-filter-textbox>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <a class=\"btn btn-default\" [routerLink]=\"['/customers', '0']\">Add New Customer</a>\n            </div>\n        </div>\n    \n        <app-customers-grid [customers]=\"filteredCustomers\"></app-customers-grid>\n\n        <app-pagination [totalItems]=\"totalRecords\" \n            [pageSize]=\"pageSize\" \n            (pageChanged)=\"pageChanged($event)\"></app-pagination>\n          \n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav [hidden]=\"!isVisible\">\n  <ul class=\"pagination\">\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\n      <a aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\n      <a>{{ page }}</a>\n    </li>\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\n      <a aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers/customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
/* harmony import */ var _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customer-edit.component */ "./src/app/customers/customer-edit.component.ts");
/* harmony import */ var _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customer-edit-reactive.component */ "./src/app/customers/customer-edit-reactive.component.ts");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"] },
    { path: 'customers/:id', component: _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"] },
    //{ path: 'customers/:id', component: CustomerEditReactiveComponent },
    { path: '**', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule.components = [_customers_customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"], _customers_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"], _customers_customer_edit_reactive_component__WEBPACK_IMPORTED_MODULE_6__["CustomerEditReactiveComponent"], _customers_customers_grid_component__WEBPACK_IMPORTED_MODULE_4__["CustomersGridComponent"]];
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"] //Shared (multi-instance) objects
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"].components],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _data_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _sorter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _trackby_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trackby.service */ "./src/app/core/trackby.service.ts");
/* harmony import */ var _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/ensureModuleLoadedOnceGuard */ "./src/app/shared/ensureModuleLoadedOnceGuard.ts");


//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//core.module.ts.httpmodule file instead (simply rename it to the name 
//of this file to use it instead)






let CoreModule = class CoreModule extends _shared_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_7__["EnsureModuleLoadedOnceGuard"] {
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            //Can use with Angular 4.3+ to 
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _data_filter_service__WEBPACK_IMPORTED_MODULE_4__["DataFilterService"], _sorter__WEBPACK_IMPORTED_MODULE_5__["Sorter"], _trackby_service__WEBPACK_IMPORTED_MODULE_6__["TrackByService"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
], CoreModule);

//Example of a custom XSRF class
//export class MyCookieXSRFStrategy implements XSRFStrategy {
//    constructor(
//        private _cookieName: string = 'XSRF-TOKEN', private _headerName: string = 'X-XSRF-TOKEN') { }
//    private getCookie(name: string) {
//        let ca: Array<string> = document.cookie.split(';');
//        let caLen: number = ca.length;
//        let cookieName = name + "=";
//        let c: string;
//        for (let i: number = 0; i < caLen; i += 1) {
//            c = ca[i].replace(/^\s\+/g, "");
//            if (c.indexOf(cookieName) == 0) {
//                return c.substring(cookieName.length, c.length);
//            }
//        }
//        return "";
//    }
//    configureRequest(req: Request) {
//        let xsrfToken = this.getCookie(this._cookieName);
//        alert(xsrfToken);
//        if (xsrfToken) {
//            req.headers.set(this._headerName, xsrfToken);
//        }
//    }
//}


/***/ }),

/***/ "./src/app/core/data-filter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/data-filter.service.ts ***!
  \*********************************************/
/*! exports provided: DataFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterService", function() { return DataFilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let DataFilterService = class DataFilterService {
    filter(datasource, filterProperties, filterData) {
        if (datasource && filterProperties && filterData) {
            filterData = filterData.toUpperCase();
            const filtered = datasource.filter(item => {
                let match = false;
                for (const prop of filterProperties) {
                    let propVal = '';
                    //Account for nested properties like 'state.name'
                    if (prop.indexOf('.') > -1) {
                        propVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, item);
                        if (propVal) {
                            propVal = propVal.toString().toUpperCase();
                        }
                    }
                    else {
                        if (item[prop]) {
                            propVal = item[prop].toString().toUpperCase();
                        }
                    }
                    if (propVal.indexOf(filterData) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            return filtered;
        }
        else {
            return datasource;
        }
    }
};
DataFilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataFilterService);



/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


//Using the new HttpClientModule now. If you're still on < Angular 4.3 see the 
//data.service.ts file instead (simplify rename it to the name 
//of this file to use it instead)



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/customers';
        this.baseStatesUrl = '/api/states';
    }
    getCustomers() {
        return this.http.get(this.baseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((customers) => {
            this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomersPage(page, pageSize) {
        return this.http.get(`${this.baseUrl}/page/${page}/${pageSize}`, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            const totalRecords = +res.headers.get('x-inlinecount');
            let customers = res.body;
            this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCustomer(id) {
        return this.http.get(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    insertCustomer(customer) {
        return this.http.post(this.baseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('insertCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateCustomer(customer) {
        return this.http.put(this.baseUrl + '/' + customer._id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            console.log('updateCustomer status: ' + data.status);
            return data.customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteCustomer(id) {
        return this.http.delete(this.baseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getStates() {
        return this.http.get(this.baseStatesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    calculateCustomersOrderTotal(customers) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += (order.price * order.quantity);
                }
                customer.orderTotal = total;
            }
        }
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Node.js server error');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/core/sorter.ts":
/*!********************************!*\
  !*** ./src/app/core/sorter.ts ***!
  \********************************/
/*! exports provided: Sorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sorter", function() { return Sorter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/property-resolver */ "./src/app/shared/property-resolver.ts");



let Sorter = class Sorter {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(collection, prop) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort((a, b) => {
            let aVal;
            let bVal;
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, a);
                bVal = _shared_property_resolver__WEBPACK_IMPORTED_MODULE_2__["propertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal))
                aVal = aVal.trim().toUpperCase();
            if (this.isString(bVal))
                bVal = bVal.trim().toUpperCase();
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    isString(val) {
        return (val && (typeof val === 'string' || val instanceof String));
    }
};
Sorter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Sorter);



/***/ }),

/***/ "./src/app/core/trackby.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/trackby.service.ts ***!
  \*****************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrackByService = class TrackByService {
    customer(index, customer) {
        return customer._id;
    }
};
TrackByService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TrackByService);



/***/ }),

/***/ "./src/app/customers/customer-edit-reactive.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/customers/customer-edit-reactive.component.ts ***!
  \***************************************************************/
/*! exports provided: CustomerEditReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditReactiveComponent", function() { return CustomerEditReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");






let CustomerEditReactiveComponent = class CustomerEditReactiveComponent {
    constructor(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
        this.buildForm();
    }
    getCustomer(id) {
        this.dataService.getCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
            this.buildForm();
        }, (err) => console.log(err));
    }
    buildForm() {
        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [this.customer.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: [this.customer.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.customer.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            address: [this.customer.address, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: [this.customer.city, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            stateId: [this.customer.stateId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    getStates() {
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    submit({ value, valid }) {
        value._id = this.customer._id;
        value.zip = this.customer.zip || 0;
        // var customer: ICustomer = {
        //   _id: this.customer._id,
        // };
        if (value._id) {
            this.dataService.updateCustomer(value)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to save customer';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertCustomer(value)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/customers']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => console.log(err));
    }
};
CustomerEditReactiveComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CustomerEditReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit-reactive',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit-reactive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit-reactive.component.html")).default
    })
], CustomerEditReactiveComponent);



/***/ }),

/***/ "./src/app/customers/customer-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/customers/customer-edit.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");




let CustomerEditComponent = class CustomerEditComponent {
    constructor(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.customer = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getCustomer(id);
        }
        this.getStates();
    }
    getCustomer(id) {
        this.dataService.getCustomer(id)
            .subscribe((customer) => {
            this.customer = customer;
        }, (err) => console.log(err));
    }
    getStates() {
        this.dataService.getStates().subscribe((states) => this.states = states);
    }
    submit() {
        if (this.customer._id) {
            this.dataService.updateCustomer(this.customer)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to save customer';
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.insertCustomer(this.customer)
                .subscribe((customer) => {
                if (customer) {
                    this.router.navigate(['/customers']);
                }
                else {
                    this.errorMessage = 'Unable to add customer';
                }
            }, (err) => console.log(err));
        }
    }
    cancel(event) {
        event.preventDefault();
        this.router.navigate(['/']);
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer._id)
            .subscribe((status) => {
            if (status) {
                this.router.navigate(['/customers']);
            }
            else {
                this.errorMessage = 'Unable to delete customer';
            }
        }, (err) => console.log(err));
    }
};
CustomerEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-edit.component.html")).default
    })
], CustomerEditComponent);



/***/ }),

/***/ "./src/app/customers/customers-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sorter */ "./src/app/core/sorter.ts");
/* harmony import */ var _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/trackby.service */ "./src/app/core/trackby.service.ts");




let CustomersGridComponent = class CustomersGridComponent {
    constructor(sorter, trackby) {
        this.sorter = sorter;
        this.trackby = trackby;
        this.customers = [];
    }
    ngOnInit() {
    }
    sort(prop) {
        this.sorter.sort(this.customers, prop);
    }
};
CustomersGridComponent.ctorParameters = () => [
    { type: _core_sorter__WEBPACK_IMPORTED_MODULE_2__["Sorter"] },
    { type: _core_trackby_service__WEBPACK_IMPORTED_MODULE_3__["TrackByService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CustomersGridComponent.prototype, "customers", void 0);
CustomersGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers-grid.component.html")).default,
        //When using OnPush detectors, then the framework will check an OnPush 
        //component when any of its input properties changes, when it fires 
        //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })
], CustomersGridComponent);



/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data-filter.service */ "./src/app/core/data-filter.service.ts");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");





let CustomersComponent = class CustomersComponent {
    constructor(router, dataService, dataFilter) {
        this.router = router;
        this.dataService = dataService;
        this.dataFilter = dataFilter;
        this.customers = [];
        this.filteredCustomers = [];
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    ngOnInit() {
        this.title = 'Customers';
        this.getCustomersPage(1);
    }
    filterChanged(filterText) {
        if (filterText && this.customers) {
            let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
            this.filteredCustomers = this.dataFilter.filter(this.customers, props, filterText);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    }
    pageChanged(page) {
        this.getCustomersPage(page);
    }
    getCustomersPage(page) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response) => {
            this.customers = this.filteredCustomers = response.results;
            this.totalRecords = response.totalRecords;
        }, (err) => console.log(err), () => console.log('getCustomersPage() retrieved customers'));
    }
};
CustomersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _core_data_filter_service__WEBPACK_IMPORTED_MODULE_3__["DataFilterService"] }
];
CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customers.component.html")).default
    })
], CustomersComponent);



/***/ }),

/***/ "./src/app/shared/ensureModuleLoadedOnceGuard.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/ensureModuleLoadedOnceGuard.ts ***!
  \*******************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterTextboxComponent = class FilterTextboxComponent {
    constructor() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    filterChanged(event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterTextboxComponent.prototype, "changed", void 0);
FilterTextboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-textbox',
        template: `
    <form>
         Filter:
         <input type="text" name="filter"
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `
    })
], FilterTextboxComponent);



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination>.active>a, .pagination>.active>a:focus, .pagination>.active>a:hover, .pagination>.active>span, .pagination>.active>span:focus, .pagination>.active>span:hover {\n  background-color: #027FF4;\n  border-color: #027FF4;\n}\n\n.pagination a {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdGlvbj4uYWN0aXZlPmEsIC5wYWdpbmF0aW9uPi5hY3RpdmU+YTpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5hOmhvdmVyLCAucGFnaW5hdGlvbj4uYWN0aXZlPnNwYW4sIC5wYWdpbmF0aW9uPi5hY3RpdmU+c3Bhbjpmb2N1cywgLnBhZ2luYXRpb24+LmFjdGl2ZT5zcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyN0ZGNDtcbiAgYm9yZGVyLWNvbG9yOiAjMDI3RkY0O1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get pageSize() {
        return this.pagerPageSize;
    }
    set pageSize(size) {
        this.pagerPageSize = size;
        this.update();
    }
    get totalItems() {
        return this.pagerTotalItems;
    }
    set totalItems(itemCount) {
        this.pagerTotalItems = itemCount;
        this.update();
    }
    ngOnInit() {
    }
    update() {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (let i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    }
    previousNext(direction, event) {
        let page = this.currentPage;
        if (direction == -1) {
            if (page > 1)
                page--;
        }
        else {
            if (page < this.totalPages)
                page++;
        }
        this.changePage(page, event);
    }
    changePage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page)
            return;
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "pageSize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "totalItems", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "pageChanged", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CapitalizePipe = class CapitalizePipe {
    transform(value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }
};
CapitalizePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'capitalize' })
], CapitalizePipe);



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrimPipe = class TrimPipe {
    transform(value) {
        if (!value) {
            return '';
        }
        return value.trim();
    }
};
TrimPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
], TrimPipe);



/***/ }),

/***/ "./src/app/shared/property-resolver.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/property-resolver.ts ***!
  \*********************************************/
/*! exports provided: propertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propertyResolver", function() { return propertyResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class propertyResolver {
    static resolve(path, obj) {
        return path.split('.').reduce((prev, curr) => {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_5__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_6__["TrimPipe"], _filter_textbox_filter_textbox_component__WEBPACK_IMPORTED_MODULE_7__["FilterTextboxComponent"], _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_4__["PaginationComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ValidationService {
    static getValidatorErrorMessage(code) {
        let config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    }
    static creditCardValidator(control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danwahlin/Dropbox/Projects/GitHub/Angular-CLI-NodeJS-MongoDB-CustomersService/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map