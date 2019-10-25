(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define('settings', ['exports', '@angular/core', '@angular/router', '@angular/material'], factory) :
    (global = global || self, factory(global.settings = {}, global.ng.core, global.ng.router, global.ng.material));
}(this, (function (exports, core, router, material) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SettingsService = /** @class */ (function () {
        function SettingsService() {
        }
        SettingsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SettingsService.ctorParameters = function () { return []; };
        /** @nocollapse */ SettingsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });
        return SettingsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CxSettingsComponent = /** @class */ (function () {
        function CxSettingsComponent() {
        }
        /**
         * @return {?}
         */
        CxSettingsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        CxSettingsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-settings',
                        template: "<form>\r\n  <mat-expansion-panel [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Configuration\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Some basic configurations\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div>\r\n      <mat-slide-toggle\r\n        [checked]=\"true\">\r\n        is International\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div>\r\n      <mat-slide-toggle\r\n        [checked]=\"false\">\r\n        Timesheets\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div>\r\n      <mat-slide-toggle\r\n        [checked]=\"false\">\r\n        disableCandidateDeduplication\r\n      </mat-slide-toggle>\r\n    </div>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"true\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        General\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Some General settings\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <div>\r\n      <mat-slide-toggle\r\n        [checked]=\"true\">\r\n        showExchange\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div>\r\n      <mat-slide-toggle\r\n        [checked]=\"true\">\r\n        allowAdditionalRoles\r\n      </mat-slide-toggle>\r\n    </div>\r\n    <div>\r\n      <mat-slide-toggle\r\n        [checked]=\"true\">\r\n        autoLoginActive\r\n      </mat-slide-toggle>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</form>\r\n",
                        styles: [":host{padding:30px;display:block}mat-panel-title{font-weight:500}mat-expansion-panel{margin-bottom:30px}mat-slide-toggle{margin-bottom:10px}"]
                    }] }
        ];
        /** @nocollapse */
        CxSettingsComponent.ctorParameters = function () { return []; };
        return CxSettingsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CxSettingsModule = /** @class */ (function () {
        function CxSettingsModule() {
        }
        CxSettingsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CxSettingsComponent],
                        imports: [
                            material.MatExpansionModule,
                            material.MatSlideToggleModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            router.RouterModule.forChild([{
                                    path: '',
                                    component: CxSettingsComponent
                                }])
                        ],
                        exports: [CxSettingsComponent]
                    },] }
        ];
        return CxSettingsModule;
    }());

    exports.CxSettingsComponent = CxSettingsComponent;
    exports.CxSettingsModule = CxSettingsModule;
    exports.SettingsService = SettingsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=settings.umd.js.map
