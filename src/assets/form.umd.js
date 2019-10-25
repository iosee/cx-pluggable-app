(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('form', ['exports', '@angular/core', '@angular/router', '@angular/material'], factory) :
    (global = global || self, factory(global.form = {}, global.ng.core, global.ng.router, global.ng.material));
}(this, (function (exports, core, router, material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormService = /** @class */ (function () {
        function FormService() {
        }
        FormService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FormService.ctorParameters = function () { return []; };
        /** @nocollapse */ FormService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FormService_Factory() { return new FormService(); }, token: FormService, providedIn: "root" });
        return FormService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CxFormComponent = /** @class */ (function () {
        function CxFormComponent() {
        }
        /**
         * @return {?}
         */
        CxFormComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CxFormComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-form',
                        template: "<form>\r\n  <mat-expansion-panel [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Personal information\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Type your name and telephone\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div class=\"field-group\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"First Name\" value=\"Joopl\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Last Name\" value=\"Earnhart\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <span matPrefix>+1 &nbsp;</span>\r\n        <input type=\"tel\" matInput placeholder=\"Telephone\">\r\n        <mat-icon matSuffix>mode_edit</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Company information\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Fill in company information\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width\">\r\n      <textarea matInput placeholder=\"Address 2\"></textarea>\r\n    </mat-form-field>\r\n    <table class=\"example-full-width\" cellspacing=\"0\"><tr>\r\n      <td><mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"City\">\r\n      </mat-form-field></td>\r\n      <td><mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"State\">\r\n      </mat-form-field></td>\r\n      <td><mat-form-field class=\"example-full-width\">\r\n        <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n        <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n      </mat-form-field></td>\r\n    </tr></table>\r\n  </mat-expansion-panel>\r\n</form>\r\n",
                        styles: [":host{padding:30px;display:block}.example-full-width{width:100%}.field-group{display:-webkit-box;display:flex}.field-group mat-form-field{margin-right:20px;-webkit-box-flex:1;flex:1}mat-panel-title{font-weight:500}mat-expansion-panel{margin-bottom:30px}"]
                    }] }
        ];
        /** @nocollapse */
        CxFormComponent.ctorParameters = function () { return []; };
        return CxFormComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CxFormModule = /** @class */ (function () {
        function CxFormModule() {
        }
        CxFormModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CxFormComponent],
                        imports: [
                            material.MatInputModule,
                            material.MatIconModule,
                            material.MatExpansionModule,
                            router.RouterModule.forChild([{
                                    path: '',
                                    component: CxFormComponent
                                }])
                        ],
                        exports: [CxFormComponent]
                    },] }
        ];
        return CxFormModule;
    }());

    exports.CxFormComponent = CxFormComponent;
    exports.CxFormModule = CxFormModule;
    exports.FormService = FormService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=form.umd.js.map
