(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-user-user-module"],{

/***/ "./node_modules/@amcharts/amcharts4/.internal/themes/kelly.js":
/*!********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/kelly.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/Color */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Color.js");
/**
 * Kelly's colors is a set of 22 highly contrasting colors.
 *
 * More info:
 * {@link https://i.kinja-img.com/gawker-media/image/upload/1015680494325093012.JPG}
 * {@link https://eleanormaclure.files.wordpress.com/2011/03/colour-coding.pdf}
 */


var theme = function (object) {
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ColorSet")) {
        object.list = [
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F3C300"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#875692"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F38400"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#A1CAF1"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#BE0032"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#C2B280"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#848482"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#008856"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#E68FAC"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#0067A5"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F99379"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#604E97"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F6A600"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#B3446C"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#DCD300"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#882D17"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#8DB600"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#654522"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#E25822"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#2B3D26"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F2F3F4"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#222222")
        ];
        object.minLightness = 0.2;
        object.maxLightness = 0.7;
        object.reuse = true;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=kelly.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/.internal/themes/material.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/.internal/themes/material.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Registry */ "./node_modules/@amcharts/amcharts4/.internal/core/Registry.js");
/* harmony import */ var _core_utils_Color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils/Color */ "./node_modules/@amcharts/amcharts4/.internal/core/utils/Color.js");


var theme = function (object) {
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ColorSet")) {
        object.list = [
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#F44336"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#E91E63"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#9C27B0"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#673AB7"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#3F51B5"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#2196F3"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#03A9F4"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#00BCD4"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#009688"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#4CAF50"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#8BC34A"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#CDDC39"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FFEB3B"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FFC107"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF9800"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#FF5722"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#795548"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#9E9E9E"),
            Object(_core_utils_Color__WEBPACK_IMPORTED_MODULE_1__["color"])("#607D8B")
        ];
        object.minLightness = 0.2;
        object.maxLightness = 0.7;
        object.reuse = true;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "ResizeButton")) {
        object.background.cornerRadiusTopLeft = 20;
        object.background.cornerRadiusTopRight = 20;
        object.background.cornerRadiusBottomLeft = 20;
        object.background.cornerRadiusBottomRight = 20;
    }
    if (Object(_core_Registry__WEBPACK_IMPORTED_MODULE_0__["is"])(object, "Tooltip")) {
        object.animationDuration = 800;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);
//# sourceMappingURL=material.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/themes/kelly.js":
/*!**********************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/kelly.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_kelly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/kelly */ "./node_modules/@amcharts/amcharts4/.internal/themes/kelly.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_kelly__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=kelly.js.map

/***/ }),

/***/ "./node_modules/@amcharts/amcharts4/themes/material.js":
/*!*************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts4/themes/material.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_themes_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.internal/themes/material */ "./node_modules/@amcharts/amcharts4/.internal/themes/material.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _internal_themes_material__WEBPACK_IMPORTED_MODULE_0__["default"]; });


//# sourceMappingURL=material.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/assessment/assessment.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/assessment/assessment.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Assessment</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-exclamation-circle text-dark\"> </i>\n                </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Assessment grade</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart\">\n            <div class=\"amchart\" id=\"as1\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Overall student progress</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart\">\n            <div class=\"amchart\" id=\"as2\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Certifications</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5 class=\"text-muted\">\n                To qualify for your training, you must first certified in\n                various areas.\n              </h5>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"progress-wrapper\">\n                <div class=\"progress-info\">\n                  <h5>Health and Wellness</h5>\n                  <div class=\"progress-percentage\">\n                    <span>74.3%</span>\n                  </div>\n                </div>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-primary\"\n                    role=\"progressbar\"\n                    aria-valuenow=\"74.3\"\n                    aria-valuemin=\"0\"\n                    aria-valuemax=\"100\"\n                    style=\"width: 74.3%\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"progress-wrapper\">\n                <div class=\"progress-info\">\n                  <h5>Officer Survival</h5>\n                  <div class=\"progress-percentage\">\n                    <span>48.0%</span>\n                  </div>\n                </div>\n                <div class=\"progress\">\n                  <div\n                    class=\"progress-bar bg-primary\"\n                    role=\"progressbar\"\n                    aria-valuenow=\"48\"\n                    aria-valuemin=\"0\"\n                    aria-valuemax=\"100\"\n                    style=\"width: 48%\"\n                  ></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Learning Progress</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart\">\n            <div class=\"amchart\" id=\"as3\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/calendar/calendar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/calendar/calendar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Calendar</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-calendar text-dark\"> </i>\n                </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"h5 text-muted mb-1 widget-calendar-year\"></div>\n              <div class=\"h3 mb-0 widget-calendar-day\"></div>\n            </div>\n            <div class=\"col-auto\">\n              <a\n                class=\"fullcalendar-btn-prev btn btn-sm btn-neutral\"\n                href=\"javascript:void(0)\"\n                (click)=\"calendar.next()\"\n              >\n                <i class=\"fas fa-angle-left\"> </i>\n              </a>\n\n              <a\n                class=\"fullcalendar-btn-next btn btn-sm btn-neutral\"\n                href=\"javascript:void(0)\"\n                (click)=\"calendar.prev()\"\n              >\n                <i class=\"fas fa-angle-right\"> </i>\n              </a>\n\n              <a\n                class=\"btn btn-sm btn-neutral\"\n                data-calendar-view=\"month\"\n                href=\"javascript:void(0)\"\n                (click)=\"changeView('dayGridMonth')\"\n              >\n                Month\n              </a>\n\n              <a\n                class=\"btn btn-sm btn-neutral\"\n                data-calendar-view=\"basicWeek\"\n                href=\"javascript:void(0)\"\n                (click)=\"changeView('dayGridWeek')\"\n              >\n                Week\n              </a>\n\n              <a\n                class=\"btn btn-sm btn-neutral\"\n                data-calendar-view=\"basicDay\"\n                href=\"javascript:void(0)\"\n                (click)=\"changeView('dayGridDay')\"\n              >\n                Day\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"calendar\" data-toggle=\"calendar\" id=\"calendar\"></div>\n        </div>\n      </div>\n      <div\n        aria-hidden=\"true\"\n        aria-labelledby=\"new-event-label\"\n        class=\"modal fade\"\n        id=\"new-event\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n      >\n        <div\n          class=\"modal-dialog modal-dialog-centered modal-secondary\"\n          role=\"document\"\n        >\n          <ng-template #modalAdd>\n            <div class=\"modal-body\">\n              <form class=\"new-event--form\">\n                <div class=\"form-group\">\n                  <label class=\"form-control-label\"> Event title </label>\n\n                  <input\n                    class=\"\n                      form-control form-control-alternative\n                      new-event--title\n                    \"\n                    id=\"new-event--title\"\n                    placeholder=\"Event Title\"\n                    type=\"text\"\n                    (change)=\"getNewEventTitle($event)\"\n                  />\n                </div>\n\n                <div class=\"form-group mb-0\">\n                  <label class=\"form-control-label d-block mb-3\">\n                    Status color\n                  </label>\n\n                  <div\n                    class=\"\n                      btn-group btn-group-toggle btn-group-colors\n                      event-tag\n                    \"\n                    data-toggle=\"buttons\"\n                  >\n                    <label\n                      class=\"btn bg-info\"\n                      [ngClass]=\"{ active: radios === 'bg-info' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        checked=\"checked\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-info\"\n                        (click)=\"radios = 'bg-info'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-warning\"\n                      [ngClass]=\"{ active: radios === 'bg-warning' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-warning\"\n                        (click)=\"radios = 'bg-warning'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-danger\"\n                      [ngClass]=\"{ active: radios === 'bg-danger' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-danger\"\n                        (click)=\"radios = 'bg-danger'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-success\"\n                      [ngClass]=\"{ active: radios === 'bg-success' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-success\"\n                        (click)=\"radios = 'bg-success'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-default\"\n                      [ngClass]=\"{ active: radios === 'bg-default' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-default\"\n                        (click)=\"radios = 'bg-default'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-primary\"\n                      [ngClass]=\"{ active: radios === 'bg-primary' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-primary\"\n                        (click)=\"radios = 'bg-primary'\"\n                      />\n                    </label>\n                  </div>\n                </div>\n\n                <input class=\"new-event--start\" type=\"hidden\" />\n\n                <input class=\"new-event--end\" type=\"hidden\" />\n              </form>\n            </div>\n\n            <div class=\"modal-footer\">\n              <button\n                class=\"btn btn-primary new-event--add\"\n                type=\"submit\"\n                (click)=\"addNewEvent()\"\n              >\n                Add event\n              </button>\n\n              <button\n                (click)=\"addModal.hide()\"\n                class=\"btn btn-link ml-auto\"\n                data-dismiss=\"modal\"\n                type=\"button\"\n              >\n                Close\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n\n      <div\n        aria-hidden=\"true\"\n        aria-labelledby=\"edit-event-label\"\n        class=\"modal fade\"\n        id=\"edit-event\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n      >\n        <div\n          class=\"modal-dialog modal-dialog-centered modal-secondary\"\n          role=\"document\"\n        >\n          <ng-template #modalEdit>\n            <div class=\"modal-body\">\n              <form class=\"edit-event--form\">\n                <div class=\"form-group\">\n                  <label class=\"form-control-label\"> Event title </label>\n\n                  <input\n                    class=\"\n                      form-control form-control-alternative\n                      edit-event--title\n                    \"\n                    placeholder=\"Event Title\"\n                    type=\"text\"\n                    value=\"{{ eventTitle }}\"\n                    (change)=\"getNewEventTitle($event)\"\n                  />\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"form-control-label d-block mb-3\">\n                    Status color\n                  </label>\n\n                  <div\n                    class=\"\n                      btn-group btn-group-toggle btn-group-colors\n                      event-tag\n                      mb-0\n                    \"\n                    data-toggle=\"buttons\"\n                  >\n                    <label\n                      class=\"btn bg-info\"\n                      [ngClass]=\"{ active: radios === 'bg-info' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        checked=\"checked\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-info\"\n                        (click)=\"radios = 'bg-info'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-warning\"\n                      [ngClass]=\"{ active: radios === 'bg-warning' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-warning\"\n                        (click)=\"radios = 'bg-warning'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-danger\"\n                      [ngClass]=\"{ active: radios === 'bg-danger' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-danger\"\n                        (click)=\"radios = 'bg-danger'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-success\"\n                      [ngClass]=\"{ active: radios === 'bg-success' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-success\"\n                        (click)=\"radios = 'bg-success'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-default\"\n                      [ngClass]=\"{ active: radios === 'bg-default' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-default\"\n                        (click)=\"radios = 'bg-default'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\"btn bg-primary\"\n                      [ngClass]=\"{ active: radios === 'bg-primary' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-primary\"\n                        (click)=\"radios = 'bg-primary'\"\n                      />\n                    </label>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"form-control-label\"> Description </label>\n\n                  <textarea\n                    class=\"\n                      form-control form-control-alternative\n                      edit-event--description\n                      textarea-autosize\n                    \"\n                    placeholder=\"Event Desctiption\"\n                    value=\"{{ eventDescription }}\"\n                    (change)=\"getNewEventDescription($event)\"\n                  ></textarea>\n\n                  <i class=\"form-group--bar\"> </i>\n                </div>\n\n                <input class=\"edit-event--id\" type=\"hidden\" />\n              </form>\n            </div>\n\n            <div class=\"modal-footer\">\n              <button\n                class=\"btn btn-primary\"\n                data-calendar=\"update\"\n                (click)=\"updateEvent()\"\n              >\n                Update\n              </button>\n\n              <button\n                class=\"btn btn-danger\"\n                data-calendar=\"delete\"\n                (click)=\"deleteEventSweetAlert()\"\n              >\n                Delete\n              </button>\n\n              <button\n                class=\"btn btn-link ml-auto\"\n                data-dismiss=\"modal\"\n                (click)=\"editModal.hide()\"\n              >\n                Close\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/class-registration/class-registration.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/class-registration/class-registration.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Class Registration</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-graduation-cap text-dark\"> </i>\n                </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\"col-lg-6 col-5 text-right\">\n          <a class=\"btn btn-sm btn-neutral\" (click)=\"openModal(newClass)\">\n            Registration\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">List of available classes</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"dataTables_wrapper py-1\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6\">\n                <div class=\"dataTables_length\" id=\"datatable_length\">\n                  <label>\n                    Show\n                    <select\n                      name=\"datatable_length\"\n                      aria-controls=\"datatable\"\n                      class=\"form-control form-control-sm\"\n                      (change)=\"entriesChange($event)\"\n                    >\n                      <option value=\"10\" [selected]=\"entries == 10\">5</option>\n                      <option value=\"25\" [selected]=\"entries == 25\">10</option>\n                      <option value=\"50\" [selected]=\"entries == 50\">15</option>\n                      <option value=\"-1\" [selected]=\"entries == -1\">20</option>\n                    </select>\n                    entries\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6\">\n                <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                  <label>\n                    <input\n                      type=\"search\"\n                      class=\"form-control form-control-sm\"\n                      placeholder=\"Search records\"\n                      aria-controls=\"datatable\"\n                      (keyup)=\"filterTable($event)\"\n                    />\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <ngx-datatable\n              class=\"bootstrap selection-cell\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"'auto'\"\n              [limit]=\"entries != -1 ? entries : undefined\"\n              [rows]=\"temp\"\n              (activate)=\"onActivate($event)\"\n            >\n              <ngx-datatable-column name=\"Name\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Class Name</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Start\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Date</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Office\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Location</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column>\n                <ng-template ngx-datatable-header-template>\n                  <span>info</span>\n                </ng-template>\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <a\n                    class=\"btn btn-sm btn-info\"\n                    (click)=\"openModal(newClass)\"\n                  >\n                    <i class=\"fas fa-info text-white\"></i>\n                  </a>\n                  <a class=\"btn btn-sm btn-success\" (click)=\"confirm()\">\n                    <i class=\"fas fa-check text-white\"></i>\n                  </a>\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #newClass>\n  <div class=\"modal-header bg-default\">\n    <h6 class=\"modal-title text-white my-auto\" id=\"modal-title-default\">\n      Class Registration\n    </h6>\n\n    <button\n      aria-label=\"Close\"\n      class=\"close\"\n      data-dismiss=\"modal\"\n      type=\"button\"\n      (click)=\"closeModal()\"\n    >\n      <span aria-hidden=\"true\" class=\"text-white my-auto\"> × </span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form [formGroup]=\"registerForm\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Class Name</label>\n        <input\n          class=\"form-control\"\n          placeholder=\"Enter class name\"\n          formControlName=\"name\"\n          type=\"text\"\n        />\n      </div>\n      <div class=\" form-group\">\n        <label\n          class=\" form-control-label\"\n          for=\"exampleFormControlTextarea1\"\n        >\n          Basic textarea\n        </label>\n\n        <textarea\n          class=\" form-control\"\n          id=\"exampleFormControlTextarea3\"\n          rows=\"3\"\n        ></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-control-label\" for=\"example-datetime-local-input\">\n          Datetime\n        </label>\n        <input\n          class=\"form-control\"\n          id=\"example-datetime-local-input\"\n          type=\"datetime-local\"\n          value=\"2018-11-23T10:30:00\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Location</label>\n        <input\n          class=\"form-control\"\n          placeholder=\"Kuala Lumpur\"\n          type=\"text\"\n        />\n      </div>\n    </form>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button\n      class=\"btn btn-success\"\n      type=\"button\"\n      (click)=\"confirm()\"\n      [disabled]=\"!registerForm.valid\"\n    >\n      Register\n    </button>\n\n    <button\n      class=\"btn btn-outline-danger ml-auto\"\n      data-dismiss=\"modal\"\n      type=\"button\"\n      (click)=\"closeModal()\"\n    >\n      Close\n    </button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header -->\n<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Dashboard</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-home text-dark\"> </i>\n                </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\"col-lg-6 col-5 text-right\">\n          <a class=\"btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\"btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- body -->\n<div class=\"container-fluid mt--6\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-xl-3 col-md-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                Total Training\n              </h5>\n\n              <span class=\"h2 font-weight-bold mb-0\"> 350,897 </span>\n            </div>\n\n            <div class=\"col-auto\">\n              <div\n                class=\"\n                  icon icon-shape\n                  bg-gradient-red\n                  text-white\n                  rounded-circle\n                  shadow\n                \"\n              >\n                <i class=\"ni ni-active-40\"> </i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                Total Exam\n              </h5>\n\n              <span class=\"h2 font-weight-bold mb-0\"> 2,356 </span>\n            </div>\n\n            <div class=\"col-auto\">\n              <div\n                class=\"\n                  icon icon-shape\n                  bg-gradient-orange\n                  text-white\n                  rounded-circle\n                  shadow\n                \"\n              >\n                <i class=\"ni ni-chart-pie-35\"> </i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xl-3 col-md-6\">\n      <div class=\"card card-stats\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5 class=\"card-title text-uppercase text-muted mb-0\">\n                Days Training\n              </h5>\n\n              <span class=\"h2 font-weight-bold mb-0\"> 924 </span>\n            </div>\n\n            <div class=\"col-auto\">\n              <div\n                class=\"\n                  icon icon-shape\n                  bg-gradient-green\n                  text-white\n                  rounded-circle\n                  shadow\n                \"\n              >\n                <i class=\"ni ni-money-coins\"> </i>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <!-- Inline table -->\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>Title</th>\n\n                <th>Start</th>\n\n                <th>Status</th>\n\n                <th></th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr>\n                <td class=\"table-user\">\n                  <b> Training #45 </b>\n                </td>\n\n                <td><span class=\"text-muted\"> 24 May 2021 </span></td>\n\n                <td>\n                  <span class=\"badge badge-pill badge-success\">completed</span>\n                </td>\n\n                <td class=\"table-actions\">\n                  <button class=\"btn btn-info btn-sm\" type=\"button\">\n                    View\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <!-- Inline table -->\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Status</h5>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>Training</th>\n\n                <th>Start</th>\n\n                <th>Applied date</th>\n\n                <th>Status</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr>\n                <td class=\"table-user\">\n                  <b> Training #45 </b>\n                </td>\n\n                <td><span class=\"text-muted\"> 31 May 2021 </span></td>\n\n                <td>\n                  <span class=\"text-muted\"> 1 April 2021 </span>\n                </td>\n\n                <td>\n                  <span class=\"badge badge-pill badge-warning\">in process</span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Student Overview</h5>\n          <h6 class=\"text-muted ls-1 mb-0\">\n            Analytics for progress, grades, courses, and more.\n          </h6>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-xl-6 col-md-12\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <!-- performance statistic -->\n                  <div class=\"card\">\n                    <div class=\"card-header\">\n                      <h5 class=\"h3 mb-0\">Performance Statistic</h5>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"chart\">\n                        <div class=\"amchart\" id=\"dash1\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <!-- recent grades -->\n                  <div class=\"card\">\n                    <div class=\"card-header\">\n                      <h5 class=\"h3 mb-0\">Recent Grades</h5>\n                    </div>\n                    <div class=\"card-body\">\n                      <div class=\"row mx-1 my-1\">\n                        <div class=\"col-9 bg-secondary pr-0\">\n                          <h5 class=\"h3\">Combat Training - De-escalation</h5>\n                        </div>\n                        <div class=\"col-3 bg-success\">\n                          <h5 class=\"h3 text-white text-center\">7.1</h5>\n                        </div>\n                      </div>\n                      <div class=\"row mx-1 my-1\">\n                        <div class=\"col-9 bg-secondary pr-0\">\n                          <h5 class=\"h3\">\n                            Civilian Rights - Research - De-escalation\n                          </h5>\n                        </div>\n                        <div class=\"col-3 bg-success\">\n                          <h5 class=\"h3 text-white text-center\">6.3</h5>\n                        </div>\n                      </div>\n                      <div class=\"row mx-1 my-1\">\n                        <div class=\"col-9 bg-secondary pr-0\">\n                          <h5 class=\"h3\">Combat Training - Research</h5>\n                        </div>\n                        <div class=\"col-3 bg-success\">\n                          <h5 class=\"h3 text-white text-center\">7.8</h5>\n                        </div>\n                      </div>\n                      <div class=\"row mx-1 my-1\">\n                        <div class=\"col-9 bg-secondary pr-0\">\n                          <h5 class=\"h3\">Public Law - Citation Procedures</h5>\n                        </div>\n                        <div class=\"col-3 bg-danger\">\n                          <h5 class=\"h3 text-white text-center\">3.6</h5>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-xl-6 col-md-12\">\n              <!-- notifications -->\n              <div class=\"card\">\n                <div class=\"card-header\">\n                  <h5 class=\"h3 mb-0\">Notifications</h5>\n                </div>\n                <div class=\"card-body\">\n                  <div class=\"list-group list-group-flush\">\n                    <a\n                      class=\"\n                        list-group-item list-group-item-action\n                        flex-column\n                        align-items-start\n                        py-4\n                        px-4\n                      \"\n                      href=\"javascript:void(0)\"\n                    >\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        <div>\n                          <div class=\"d-flex w-100 align-items-center\">\n                            <img\n                              alt=\"Image placeholder\"\n                              class=\"avatar avatar-xs mr-2\"\n                              src=\"assets/img/theme/team-1.jpg\"\n                            />\n\n                            <h5 class=\"mb-1\">Tim</h5>\n                          </div>\n                        </div>\n\n                        <small> 2 hrs ago </small>\n                      </div>\n\n                      <h4 class=\"mt-3 mb-1\">New order for Argon Dashboard</h4>\n\n                      <p class=\"text-sm mb-0\">\n                        Doasdnec id elit non mi porta gravida at eget metus.\n                        Maecenas sed diam eget risus varius blandit.\n                      </p>\n                    </a>\n\n                    <a\n                      class=\"\n                        list-group-item list-group-item-action\n                        flex-column\n                        align-items-start\n                        py-4\n                        px-4\n                      \"\n                      href=\"javascript:void(0)\"\n                    >\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        <div>\n                          <div class=\"d-flex w-100 align-items-center\">\n                            <img\n                              alt=\"Image placeholder\"\n                              class=\"avatar avatar-xs mr-2\"\n                              src=\"assets/img/theme/team-2.jpg\"\n                            />\n\n                            <h5 class=\"mb-1\">Mike</h5>\n                          </div>\n                        </div>\n\n                        <small> 1 day ago </small>\n                      </div>\n\n                      <h4 class=\"mt-3 mb-1\">\n                        <span class=\"text-info\"> ● </span> Your theme has been\n                        updated\n                      </h4>\n\n                      <p class=\"text-sm mb-0\">\n                        Doasdnec id elit non mi porta gravida at eget metus.\n                        Maecenas sed diam eget risus varius blandit.\n                      </p>\n                    </a>\n\n                    <a\n                      class=\"\n                        list-group-item list-group-item-action\n                        flex-column\n                        align-items-start\n                        py-4\n                        px-4\n                      \"\n                      href=\"javascript:void(0)\"\n                    >\n                      <div class=\"d-flex w-100 justify-content-between\">\n                        <div>\n                          <div class=\"d-flex w-100 align-items-center\">\n                            <img\n                              alt=\"Image placeholder\"\n                              class=\"avatar avatar-xs mr-2\"\n                              src=\"assets/img/theme/team-2.jpg\"\n                            />\n\n                            <h5 class=\"mb-1\">Mike</h5>\n                          </div>\n                        </div>\n\n                        <small> 1 day ago </small>\n                      </div>\n\n                      <h4 class=\"mt-3 mb-1\">\n                        <span class=\"text-info\"> ● </span> Your theme has been\n                        updated\n                      </h4>\n\n                      <p class=\"text-sm mb-0\">\n                        Doasdnec id elit non mi porta gravida at eget metus.\n                        Maecenas sed diam eget risus varius blandit.\n                      </p>\n                    </a>\n                  </div>\n                  <button class=\" btn btn-warning btn-lg btn-block\" type=\"button\">\n                    View older notifications\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Leaderboard</h5>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th>Rank</th>\n\n                <th>Player</th>\n\n                <th>Honor pts</th>\n\n                <th>UGPA</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr>\n                <td class=\"table-user\">\n                  <b> 1 </b>\n                </td>\n\n                <td><span> Zairy </span></td>\n\n                <td>\n                  <span class=\"text-muted\">734</span>\n                </td>\n\n                <td>\n                  <span> 4.0 </span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"table-user\">\n                  <b> 2 </b>\n                </td>\n\n                <td><span> Achmed </span></td>\n\n                <td>\n                  <span class=\"text-muted\">655</span>\n                </td>\n\n                <td>\n                  <span> 4.0 </span>\n                </td>\n              </tr>\n              <tr>\n                <td class=\"table-user\">\n                  <b> 3 </b>\n                </td>\n\n                <td><span> Tan Boon </span></td>\n\n                <td>\n                  <span class=\"text-muted\">630</span>\n                </td>\n\n                <td>\n                  <span> 3.9 </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/discussion/discussion.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/discussion/discussion.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Discussion</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-comments text-dark\"> </i>\n                </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 div col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Title of the discussion.</h5>\n        </div>\n        <div class=\"card-body\">\n          <p class=\"mb-4\">\n            The elaboration about the topic or problem of discussion title so\n            that community would be more understand and can be discuss together\n            thus provide better solution.\n          </p>\n          <div class=\"row align-items-center my-3 pb-3 border-bottom\">\n            <div class=\"col-sm-6\">\n              <div class=\"icon-actions\">\n                <a class=\"like active\" href=\"javascript:void(0)\">\n                  <i class=\"ni ni-like-2\"> </i>\n\n                  <span class=\"text-muted\"> 150 </span>\n                </a>\n\n                <a href=\"javascript:void(0)\">\n                  <i class=\"ni ni-chat-round\"> </i>\n\n                  <span class=\"text-muted\"> 36 </span>\n                </a>\n\n                <a href=\"javascript:void(0)\">\n                  <i class=\"ni ni-curved-next\"> </i>\n\n                  <span class=\"text-muted\"> 12 </span>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-1\">\n            <div class=\"media media-comment\">\n              <img\n                alt=\"Image placeholder\"\n                class=\"avatar avatar-lg media-comment-avatar rounded-circle\"\n                src=\"assets/img/theme/team-1.jpg\"\n              />\n\n              <div class=\"media-body\">\n                <div class=\"media-comment-text\">\n                  <h6 class=\"h5 mt-0\">Michael Lewis</h6>\n\n                  <p class=\"text-sm lh-160\">Comment #1</p>\n\n                  <div class=\"icon-actions\">\n                    <a class=\"like active\" href=\"javascript:void(0)\">\n                      <i class=\"ni ni-like-2\"> </i>\n\n                      <span class=\"text-muted\"> 3 likes </span>\n                    </a>\n\n                    <a href=\"javascript:void(0)\">\n                      <i class=\"ni ni-curved-next\"> </i>\n\n                      <span class=\"text-muted\"> 2 shares </span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"media media-comment\">\n              <img\n                alt=\"Image placeholder\"\n                class=\"avatar avatar-lg media-comment-avatar rounded-circle\"\n                src=\"assets/img/theme/team-2.jpg\"\n              />\n\n              <div class=\"media-body\">\n                <div class=\"media-comment-text\">\n                  <h6 class=\"h5 mt-0\">Jessica Stones</h6>\n\n                  <p class=\"text-sm lh-160\">Comment #2</p>\n\n                  <div class=\"icon-actions\">\n                    <a class=\"like active\" href=\"javascript:void(0)\">\n                      <i class=\"ni ni-like-2\"> </i>\n\n                      <span class=\"text-muted\"> 10 likes </span>\n                    </a>\n\n                    <a href=\"javascript:void(0)\">\n                      <i class=\"ni ni-curved-next\"> </i>\n\n                      <span class=\"text-muted\"> 1 share </span>\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <hr />\n\n            <div class=\"media align-items-center\">\n              <img\n                alt=\"Image placeholder\"\n                class=\"avatar avatar-lg rounded-circle mr-4\"\n                src=\"assets/img/default/avatar.png\"\n              />\n\n              <div class=\"media-body\">\n                <form>\n                  <textarea\n                    class=\"form-control\"\n                    placeholder=\"Write your comment\"\n                    rows=\"1\"\n                  ></textarea>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Community</h5>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-group list-group-flush list my--3\">\n            <li class=\"list-group-item px-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-auto\">\n                  <a class=\"avatar rounded-circle\" href=\"javascript:void(0)\">\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-1.jpg\"\n                    />\n                  </a>\n                </div>\n\n                <div class=\"col ml--2\">\n                  <h4 class=\"mb-0\">\n                    <a href=\"javascript:void(0)\"> John Michael </a>\n                  </h4>\n\n                  <span class=\"text-success\"> ● </span>\n\n                  <small> Online </small>\n                </div>\n              </div>\n            </li>\n\n            <li class=\"list-group-item px-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-auto\">\n                  <a class=\"avatar rounded-circle\" href=\"javascript:void(0)\">\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-2.jpg\"\n                    />\n                  </a>\n                </div>\n\n                <div class=\"col ml--2\">\n                  <h4 class=\"mb-0\">\n                    <a href=\"javascript:void(0)\"> Alex Smith </a>\n                  </h4>\n\n                  <span class=\"text-warning\"> ● </span>\n\n                  <small> In a meeting </small>\n                </div>\n              </div>\n            </li>\n\n            <li class=\"list-group-item px-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-auto\">\n                  <a class=\"avatar rounded-circle\" href=\"javascript:void(0)\">\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-3.jpg\"\n                    />\n                  </a>\n                </div>\n\n                <div class=\"col ml--2\">\n                  <h4 class=\"mb-0\">\n                    <a href=\"javascript:void(0)\"> Samantha Ivy </a>\n                  </h4>\n\n                  <span class=\"text-danger\"> ● </span>\n\n                  <small> Offline </small>\n                </div>\n              </div>\n            </li>\n\n            <li class=\"list-group-item px-0\">\n              <div class=\"row align-items-center\">\n                <div class=\"col-auto\">\n                  <a class=\"avatar rounded-circle\" href=\"javascript:void(0)\">\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-4.jpg\"\n                    />\n                  </a>\n                </div>\n\n                <div class=\"col ml--2\">\n                  <h4 class=\"mb-0\">\n                    <a href=\"javascript:void(0)\"> John Michael </a>\n                  </h4>\n\n                  <span class=\"text-success\"> ● </span>\n\n                  <small> Online </small>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-list/exam-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-list/exam-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">List</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-scroll text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Examination </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">List</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-12\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-header bg-success\">\n              <p class=\"text-white text-center mb-0\">\n                <b>Warning!</b> This is examination's page. Becareful with your\n                actions.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-12 d-flex align-items-stretch\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h5 class=\"h3 mb-0\">Javascript Programming</h5>\n            </div>\n            <div class=\"card-body\">\n              <p class=\"text-muted\">\n                JavaScript, often abbreviated as JS, is a programming language\n                that conforms to the ECMAScript specification.\n              </p>\n            </div>\n            <div class=\"card-footer d-flex justify-content-center\">\n              <button\n                class=\"btn btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('exam-question')\"\n              >\n                Take exam\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-12 d-flex align-items-stretch\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                  <h5 class=\"h3 mb-0\">Machine Learning</h5>\n                </div>\n                <div class=\"card-body\">\n                  <p class=\"text-muted\">\n                    Machine learning is the study of computer algorithms that\n                    improve automatically through experience and by the use of\n                    data.\n                  </p>\n                </div>\n                <div class=\"card-footer d-flex justify-content-center\">\n                  <button\n                    class=\"btn btn-primary\"\n                    type=\"button\"\n                    (click)=\"navigatePage('exam-question')\"\n                  >\n                    Take exam\n                  </button>\n                </div>\n              </div>\n        </div>\n        <div class=\"col-lg-4 col-md-12 d-flex align-items-stretch\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                  <h5 class=\"h3 mb-0\">Web Technology</h5>\n                </div>\n                <div class=\"card-body\">\n                  <p class=\"text-muted\">\n                    Web technology refers to the means by which computers\n                    communicate with each other using markup languages and\n                    multimedia packages. It gives us a way to interact with\n                    hosted information, like websites. Web technology involves\n                    the use of hypertext markup language (HTML) and cascading\n                    style sheets (CSS).\n                  </p>\n                </div>\n                <div class=\"card-footer\">\n                  <h5 class=\"text-muted text-center\">Available at 2 Dec 2021</h5>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h5 class=\"h3 mb-0\">Reminders</h5>\n                    </div>\n                    <div class=\"card-body\">\n                        <h5 class=\"text-info\">Examinations will expired at 10 Dec 2021</h5>\n                        <h5 class=\"text-info\">Grading will start at 15 Dec 2021</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h5 class=\"h3 mb-0\">Upcoming</h5>\n                    </div>\n                    <div class=\"card-body\">\n                        <h5 class=\"text-muted\">Web Technology at 2 Dec 2021</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-question/exam-question.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-question/exam-question.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Course Name</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-book-open text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Examination </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                Question\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Question 1</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <p class=\"text-muted\">\n                Solutions Grouping About This site will make an attempt to group\n                similar solutions together so that they may be voted on and\n                discussed as a group, if you have any feedback on how this\n                process can be improved, this is the place to talk about it.\n              </p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <form>\n                <div class=\"form-group mb-2\">\n                  <textarea\n                    class=\"form-control\"\n                    id=\"exampleFormControlTextarea3\"\n                    rows=\"5\"\n                    placeholder=\"your solution...\"\n                  ></textarea>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-auto\">\n              <button class=\"btn btn-sm btn-primary\" type=\"button\">\n                Submit\n              </button>\n            </div>\n            <div class=\"col-auto px-0\">\n              <button class=\"btn btn-sm btn-primary\" type=\"button\">\n                Save for later\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h2>\n                Your examination already start.\n              </h2>\n            </div>\n          </div>\n          <div class=\"row my-3\">\n            <div class=\"col\">\n              <h5 class=\"h3 text-muted mb-0\">{{ timeLeft }} Seconds left....</h5>\n            </div>\n          </div>\n          <div class=\"row\">\n            <button class=\"btn btn-block btn-primary\" type=\"button\" (click)=\"confirm()\">\n              Finish answer\n            </button>\n          </div>\n          <div class=\"row\">\n            <button class=\"btn btn-block btn-outline-primary my-2\" type=\"button\" (click)=\"confirm()\">\n              back\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-registration/exam-registration.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-registration/exam-registration.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Overview</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-scroll text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Examination </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                Registration\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Examination list</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"dataTables_wrapper\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6\">\n                <div class=\"dataTables_length\" id=\"datatable_length\">\n                  <label>\n                    Show\n                    <select\n                      name=\"datatable_length\"\n                      aria-controls=\"datatable\"\n                      class=\"form-control form-control-sm\"\n                      (change)=\"entriesChange($event)\"\n                    >\n                      <option value=\"10\" [selected]=\"entries == 10\">5</option>\n                      <option value=\"25\" [selected]=\"entries == 25\">10</option>\n                      <option value=\"50\" [selected]=\"entries == 50\">15</option>\n                      <option value=\"-1\" [selected]=\"entries == -1\">20</option>\n                    </select>\n                    entries\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6\">\n                <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                  <label>\n                    <input\n                      type=\"search\"\n                      class=\"form-control form-control-sm\"\n                      placeholder=\"Search records\"\n                      aria-controls=\"datatable\"\n                      (keyup)=\"filterTable($event)\"\n                    />\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <ngx-datatable\n              class=\"bootstrap selection-cell\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"'auto'\"\n              [limit]=\"entries != -1 ? entries : undefined\"\n              [rows]=\"temp\"\n              (activate)=\"onActivate($event)\"\n            >\n              <ngx-datatable-column name=\"Age\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Exam Code</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Position\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Title</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Start\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Start date</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Start\">\n                <ng-template ngx-datatable-header-template>\n                  <span>End date</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column>\n                <ng-template ngx-datatable-header-template>\n                  <span>Action</span>\n                </ng-template>\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <a class=\"btn btn-sm btn-primary\" (click)=\"confirm()\">\n                    <h5 class=\"text-white mb-0\"><span>Apply</span></h5>\n                  </a>\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/online-course-class/online-course-class.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/online-course-class/online-course-class.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Online Courses</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-globe-asia text-dark\"> </i>\n                </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">Class</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Course</h5>\n        </div>\n        <div class=\"card-body\">\n          <accordion [isAnimated]=\"true\">\n            <accordion-group>\n              <h5 class=\"mb-0\" accordion-heading>Title #1</h5>\n              <p>\n                So here will be the description, the learning, and all about the\n                things in title #1 session. The process of learning by the\n                teachers are here and the student can study by this opportunity.\n                The studies process will also help by the video content, for\n                example YouTube video as shown below.\n              </p>\n              <iframe\n                width=\"560\"\n                height=\"315\"\n                src=\"https://www.youtube.com/embed/c8RZ59zBS2s\"\n                title=\"YouTube video player\"\n                frameborder=\"0\"\n                allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n                allowfullscreen\n              ></iframe>\n            </accordion-group>\n            <accordion-group>\n              <h5 class=\"mb-0\" accordion-heading>Title #2</h5>\n              <p>Some content</p>\n            </accordion-group>\n            <accordion-group>\n              <h5 class=\"mb-0\" accordion-heading>Title #3</h5>\n              <p>Some content</p>\n            </accordion-group>\n            <accordion-group>\n              <h5 class=\"mb-0\" accordion-heading>Title #4</h5>\n              <p>Some content</p>\n            </accordion-group>\n          </accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/online-course-main/online-course-main.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/online-course-main/online-course-main.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Online Courses</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-globe-asia text-dark\"> </i>\n                </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                Overview\n              </li>\n            </ol>\n          </nav>\n        </div>\n        <!-- <div class=\"col-lg-6 col-5 text-right\">\n                    <a \n                        *ngIf=\"!editEnabled\"\n                        class=\"btn btn-default btn-sm text-white btn-icon btn-3\" \n                        (click)=\"toggleEdit()\"\n                    > \n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-user-edit\"></i></span>\n                        <span class=\"btn-inner--text\">Edit profile</span>\n                    </a>\n                    <a\n                        *ngIf=\"editEnabled\"\n                        class=\"btn btn-danger btn-sm text-white btn-icon btn-3\" \n                        (click)=\"toggleEdit()\"\n                    > \n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-arrow-left\"></i></span>\n                        <span class=\"btn-inner--text\">Back</span>\n                    </a>\n                    <a \n                        *ngIf=\"editEnabled\"\n                        class=\"btn btn-success btn-sm text-white btn-icon btn-3\" \n                        (click)=\"confirm()\"\n                    > \n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-save\"></i></span>\n                        <span class=\"btn-inner--text\">Save</span>\n                    </a>\n\t\t\t\t</div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-xl-5 order-xl-2\">\n      <div class=\"card card-profile\">\n        <img\n          alt=\"Image placeholder\"\n          class=\"card-img-top\"\n          src=\"assets/img/theme/img-1-1000x600.jpg\"\n        />\n\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-3 order-lg-2\">\n            <div class=\"card-profile-image\">\n              <a>\n                <img\n                  class=\"rounded-circle\"\n                  src=\"assets/img/default/avatar.png\"\n                />\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n          <div class=\"d-flex justify-content-between\">\n            <a class=\"btn btn-sm btn-info mr-4\" href=\"javascript:void(0)\">\n              Connect\n            </a>\n\n            <a\n              class=\"btn btn-sm btn-default float-right\"\n              href=\"javascript:void(0)\"\n            >\n              Message\n            </a>\n          </div>\n        </div>\n\n        <div class=\"card-body pt-0\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card-profile-stats d-flex justify-content-center\">\n                <div>\n                  <span class=\"heading\"> 22 </span>\n\n                  <span class=\"description\"> Courses Taken </span>\n                </div>\n\n                <div>\n                  <span class=\"heading\"> 10 </span>\n\n                  <span class=\"description\"> Course Completed </span>\n                </div>\n\n                <div>\n                  <span class=\"heading\"> 89 </span>\n\n                  <span class=\"description\"> Course Pending </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"text-center\">\n            <h5 class=\"h3\">Badges</h5>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-4 text-center\">\n              <a\n                class=\"avatar rounded-circle bg-success\"\n                href=\"javascript:void(0)\"\n              >\n                <img\n                  alt=\"Image placeholder\"\n                  src=\"assets/img/theme/famous.png\"\n                />\n              </a>\n            </div>\n            <div class=\"col-4 text-center\">\n              <a\n                class=\"avatar rounded-circle bg-success\"\n                href=\"javascript:void(0)\"\n              >\n                <img\n                  alt=\"Image placeholder\"\n                  src=\"assets/img/theme/trophy.png\"\n                />\n              </a>\n            </div>\n            <div class=\"col-4 text-center\">\n              <a\n                class=\"avatar rounded-circle bg-success\"\n                href=\"javascript:void(0)\"\n              >\n                <img alt=\"Image placeholder\" src=\"assets/img/theme/medal.png\" />\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-xl-7 order-xl-1\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h5 class=\"h3 mb-0\">Current Courses</h5>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table align-items-center table-flush\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\">Title</th>\n\n                    <th scope=\"col\">Status</th>\n\n                    <th scope=\"col\"></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Financial Analysis</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"mr-2\"> 60% </span>\n\n                        <div>\n                          <div class=\"progress\">\n                            <div\n                              class=\"progress-bar bg-gradient-danger\"\n                              role=\"progressbar\"\n                              aria-valuenow=\"60\"\n                              aria-valuemin=\"0\"\n                              aria-valuemax=\"100\"\n                              style=\"width: 60%\"\n                            ></div>\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n\n                    <td>\n                      <a class=\"btn btn-sm btn-info\" (click)=\"navigatePage('class')\">\n                        <h5 class=\"text-white mb-0\"><span>view</span></h5>\n                      </a>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <th scope=\"row\">Probability & Statistic</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"mr-2\">70%</span>\n                        <div>\n                          <div class=\"progress\">\n                            <div\n                              class=\"progress-bar bg-gradient-success\"\n                              role=\"progressbar\"\n                              aria-valuenow=\"70\"\n                              aria-valuemin=\"0\"\n                              aria-valuemax=\"100\"\n                              style=\"width: 70%\"\n                            ></div>\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n\n                    <td>\n                      <a class=\"btn btn-sm btn-info\" (click)=\"navigatePage('class')\">\n                        <h5 class=\"text-white mb-0\"><span>View</span></h5>\n                      </a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">SEO Tricks & Hacks</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"mr-2\">80%</span>\n                        <div>\n                          <div class=\"progress\">\n                            <div\n                              class=\"progress-bar bg-gradient-primary\"\n                              role=\"progressbar\"\n                              aria-valuenow=\"80\"\n                              aria-valuemin=\"0\"\n                              aria-valuemax=\"100\"\n                              style=\"width: 80%\"\n                            ></div>\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n\n                    <td>\n                      <a class=\"btn btn-sm btn-info\" (click)=\"navigatePage('class')\">\n                        <h5 class=\"text-white mb-0\"><span>View</span></h5>\n                      </a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Python For Beginners</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"mr-2\">75%</span>\n                        <div>\n                          <div class=\"progress\">\n                            <div\n                              class=\"progress-bar bg-gradient-info\"\n                              role=\"progressbar\"\n                              aria-valuenow=\"75\"\n                              aria-valuemin=\"0\"\n                              aria-valuemax=\"100\"\n                              style=\"width: 75%\"\n                            ></div>\n                          </div>\n                        </div>\n                      </div>\n                    </td>\n\n                    <td>\n                      <a class=\"btn btn-sm btn-info\" (click)=\"navigatePage('class')\">\n                        <h5 class=\"text-white mb-0\"><span>View</span></h5>\n                      </a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h5 class=\"h3 mb-0\">Current Courses</h5>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table align-items-center table-flush\">\n                <thead class=\"thead-light\">\n                  <tr>\n                    <th scope=\"col\">Title</th>\n\n                    <th scope=\"col\"></th>\n                  </tr>\n                </thead>\n\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Financial Analysis</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"badge badge-pill badge-warning\"\n                          >30 minutes left</span\n                        >\n                      </div>\n                    </td>\n                  </tr>\n\n                  <tr>\n                    <th scope=\"row\">Probability & Statistic</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"badge badge-pill badge-warning\"\n                          >127 minutes left</span\n                        >\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">SEO Tricks & Hacks</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"badge badge-pill badge-warning\"\n                          >214 minutes left</span\n                        >\n                      </div>\n                    </td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Python For Beginners</th>\n\n                    <td>\n                      <div class=\"d-flex align-items-center\">\n                        <span class=\"badge badge-pill badge-warning\"\n                          >325 minutes left</span\n                        >\n                      </div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/survey/survey.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/survey/survey.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Survey</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-poll text-dark\"> </i>\n                </a>\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h5 class=\"h3 mb-0\">Survey</h5>\n            </div>\n            <div class=\"col-auto\">\n              <button class=\"btn bg-primary text-white\" (click)=\"register()\">Send</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr>\n                  <th scope=\"col\"></th>\n\n                  <th scope=\"col\">Question</th>\n\n                  <th scope=\"col\">Low</th>\n\n                  <th scope=\"col\">Moderate</th>\n\n                  <th scope=\"col\">High</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1.</td>\n                  <td>\n                    <h5 class=\"text-muted mb-0\">Are you familiar with Microsoft Office?</h5>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r1\"\n                        name=\"q1\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r1\"></label>\n                    </div>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r2\"\n                        name=\"q1\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r2\"></label>\n                    </div>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r3\"\n                        name=\"q1\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r3\"></label>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>2.</td>\n                  <td>\n                    <h5 class=\"text-muted mb-0\">Do you have any soft skill?</h5>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r11\"\n                        name=\"q2\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r11\"></label>\n                    </div>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r22\"\n                        name=\"q2\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r22\"></label>\n                    </div>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r33\"\n                        name=\"q2\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r33\"></label>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>3.</td>\n                  <td>\n                    <h5 class=\"text-muted mb-0\">What is your time management score?</h5>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r111\"\n                        name=\"q3\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r111\"></label>\n                    </div>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r222\"\n                        name=\"q3\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r222\"></label>\n                    </div>\n                  </td>\n                  <td>\n                    <div\n                      class=\"custom-control custom-radio custom-control-inline\"\n                    >\n                      <input\n                        type=\"radio\"\n                        id=\"r333\"\n                        name=\"q3\"\n                        class=\"custom-control-input\"\n                      />\n                      <label class=\"custom-control-label\" for=\"r333\"></label>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-exercise/training-exercise.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-exercise/training-exercise.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Exercise</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-book-open text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Training </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">Task</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Course Summary</h5>\n        </div>\n        <div class=\"card-body\">\n          <p>\n            This is where the summary of the course will be present. This only a\n            prototype. So, the actual product will show the course summary.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-8 col-md-12\">\n      <h5 class=\"h3 mb-3\">Couse levels</h5>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 1: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 2: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 3: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 4: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 5: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 6: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card mb-3\">\n        <div class=\"card-body py-2\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h4 class=\"mb-0\">Level 7: Title</h4>\n            </div>\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('training-question')\"\n              >\n                Questions\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-list/training-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-list/training-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">List</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-book-open text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Training </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">Course</li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <ul class=\"list-group list-group-flush list my--3\">\n            <li class=\"list-group-item px-0\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h3>Javascript Programming</h3>\n                </div>\n                <div class=\"col-auto\">\n                  <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"navigatePage('training-exercise')\">\n                    Continue\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <p>\n                    JavaScript, often abbreviated as JS, is a programming\n                    language that conforms to the ECMAScript specification.\n                  </p>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item px-0\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h3>Machine Learning</h3>\n                </div>\n                <div class=\"col-auto\">\n                  <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"navigatePage('training-exercise')\">\n                    Continue\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <p>\n                    Machine learning is the study of computer algorithms that\n                    improve automatically through experience and by the use of\n                    data.\n                  </p>\n                </div>\n              </div>\n            </li>\n            <li class=\"list-group-item px-0\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h3>Web Technology</h3>\n                </div>\n                <div class=\"col-auto\">\n                  <button class=\"btn btn-sm btn-primary\" type=\"button\" (click)=\"navigatePage('training-exercise')\">\n                    Continue\n                  </button>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <p>\n                    Web technology refers to the means by which computers\n                    communicate with each other using markup languages and\n                    multimedia packages. It gives us a way to interact with\n                    hosted information, like websites. Web technology involves\n                    the use of hypertext markup language (HTML) and cascading\n                    style sheets (CSS).\n                  </p>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <ul class=\"list-group list-group-flush list my--3\">\n                    <li class=\"list-group-item px-0\">\n                        <h5 class=\" text-primary mb-0\">\n                            <a href=\"javascript:void(0)\" (click)=\"navigatePage('training-exercise')\"> Javascript Programming </a>\n                        </h5>\n                    </li>\n                    <li class=\"list-group-item px-0\">\n                        <h5 class=\" text-primary mb-0\">\n                            <a href=\"javascript:void(0)\" (click)=\"navigatePage('training-exercise')\"> Machine Learning </a>\n                        </h5>\n                    </li>\n                    <li class=\"list-group-item px-0\">\n                        <h5 class=\" text-primary mb-0\">\n                            <a href=\"javascript:void(0)\" (click)=\"navigatePage('training-exercise')\"> Web Technology </a>\n                        </h5>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-question/training-question.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-question/training-question.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Title</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-book-open text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Level # </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                Question\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Question 1</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <p class=\"text-muted\">\n                Solutions Grouping About This site will make an attempt to group\n                similar solutions together so that they may be voted on and\n                discussed as a group, if you have any feedback on how this\n                process can be improved, this is the place to talk about it.\n              </p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col\">\n              <form>\n                <div class=\" form-group mb-2\">\n                  <textarea\n                    class=\" form-control\"\n                    id=\"exampleFormControlTextarea3\"\n                    rows=\"5\"\n                    placeholder=\"your solution...\"\n                  ></textarea>\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-auto\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n              >\n                Submit\n              </button>\n            </div>\n            <div class=\"col-auto px-0\">\n              <button\n                class=\"btn btn-sm btn-primary\"\n                type=\"button\"\n              >\n                Save for later\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <h2>\n                Looking for help? Don't hesitate to discuss with the community.\n              </h2>\n            </div>\n          </div>\n          <div class=\"row mt-3\">\n            <div class=\"col\">\n              <button\n                class=\"btn btn-lg btn-block btn-primary\"\n                type=\"button\"\n                (click)=\"navigatePage('discussion')\"\n              >\n                Discussion\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-registration/training-registration.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-registration/training-registration.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <div class=\"row align-items-center py-4\">\n        <div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Overview</h6>\n\n          <nav aria-label=\"breadcrumb\" class=\"d-none d-md-inline-block ml-md-4\">\n            <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\">\n                  <i class=\"fas fa-book-open text-dark\"> </i>\n                </a>\n              </li>\n              <li class=\"breadcrumb-item\">\n                <a href=\"javascript:void(0)\" class=\"text-dark\"> Training </a>\n              </li>\n              <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                Registration\n              </li>\n            </ol>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5 class=\"h3 mb-0\">Training list</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"dataTables_wrapper\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6\">\n                <div class=\"dataTables_length\" id=\"datatable_length\">\n                  <label>\n                    Show\n                    <select\n                      name=\"datatable_length\"\n                      aria-controls=\"datatable\"\n                      class=\"form-control form-control-sm\"\n                      (change)=\"entriesChange($event)\"\n                    >\n                      <option value=\"10\" [selected]=\"entries == 10\">5</option>\n                      <option value=\"25\" [selected]=\"entries == 25\">10</option>\n                      <option value=\"50\" [selected]=\"entries == 50\">15</option>\n                      <option value=\"-1\" [selected]=\"entries == -1\">20</option>\n                    </select>\n                    entries\n                  </label>\n                </div>\n              </div>\n              <div class=\"col-sm-12 col-md-6\">\n                <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                  <label>\n                    <input\n                      type=\"search\"\n                      class=\"form-control form-control-sm\"\n                      placeholder=\"Search records\"\n                      aria-controls=\"datatable\"\n                      (keyup)=\"filterTable($event)\"\n                    />\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <ngx-datatable\n              class=\"bootstrap selection-cell\"\n              [columnMode]=\"'force'\"\n              [headerHeight]=\"50\"\n              [footerHeight]=\"50\"\n              [rowHeight]=\"'auto'\"\n              [limit]=\"entries != -1 ? entries : undefined\"\n              [rows]=\"temp\"\n              (activate)=\"onActivate($event)\"\n            >\n              <ngx-datatable-column name=\"Age\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Training Code</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Position\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Title</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Start\">\n                <ng-template ngx-datatable-header-template>\n                  <span>Start date</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column name=\"Start\">\n                <ng-template ngx-datatable-header-template>\n                  <span>End date</span>\n                </ng-template>\n              </ngx-datatable-column>\n              <ngx-datatable-column>\n                <ng-template ngx-datatable-header-template>\n                  <span>Action</span>\n                </ng-template>\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                  <a class=\"btn btn-sm btn-primary\" (click)=\"confirm()\">\n                    <h5 class=\"text-white mb-0\"><span>Apply</span></h5>\n                  </a>\n                </ng-template>\n              </ngx-datatable-column>\n            </ngx-datatable>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/core/user/assessment/assessment.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/user/assessment/assessment.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/user/assessment/assessment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/user/assessment/assessment.component.ts ***!
  \**************************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_kelly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/kelly */ "./node_modules/@amcharts/amcharts4/themes/kelly.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");






var AssessmentComponent = /** @class */ (function () {
    function AssessmentComponent(zone) {
        this.zone = zone;
    }
    AssessmentComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    AssessmentComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart2) {
                console.log("Chart disposed");
                _this.chart2.dispose();
            }
            if (_this.chart1) {
                console.log("Chart disposed");
                _this.chart1.dispose();
            }
            if (_this.chart3) {
                console.log("Chart disposed");
                _this.chart3.dispose();
            }
        });
    };
    AssessmentComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChart2();
            _this.getChart1();
            _this.getChart3();
        });
    };
    AssessmentComponent.prototype.getChart1 = function () {
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_kelly__WEBPACK_IMPORTED_MODULE_4__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("as1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = [
            {
                category: "One",
                value1: 1,
                value2: 5,
                value3: 3,
            },
            {
                category: "Two",
                value1: 2,
                value2: 5,
                value3: 3,
            },
            {
                category: "Three",
                value1: 3,
                value2: 5,
                value3: 4,
            },
            {
                category: "Four",
                value1: 4,
                value2: 5,
                value3: 6,
            },
            {
                category: "Five",
                value1: 3,
                value2: 5,
                value3: 4,
            },
            {
                category: "Six",
                value1: 2,
                value2: 13,
                value3: 1,
            },
        ];
        chart.colors.step = 2;
        chart.padding(30, 30, 10, 30);
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        valueAxis.calculateTotals = true;
        valueAxis.renderer.minWidth = 50;
        var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series1.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](80);
        series1.columns.template.tooltipText =
            "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
        series1.name = "Series 1";
        series1.dataFields.categoryX = "category";
        series1.dataFields.valueY = "value1";
        series1.dataFields.valueYShow = "totalPercent";
        series1.dataItems.template.locations.categoryX = 0.5;
        series1.stacked = true;
        series1.tooltip.pointerOrientation = "vertical";
        var bullet1 = series1.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        bullet1.interactionsEnabled = false;
        bullet1.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
        bullet1.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#ffffff");
        bullet1.locationY = 0.5;
        var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series2.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](80);
        series2.columns.template.tooltipText =
            "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
        series2.name = "Series 2";
        series2.dataFields.categoryX = "category";
        series2.dataFields.valueY = "value2";
        series2.dataFields.valueYShow = "totalPercent";
        series2.dataItems.template.locations.categoryX = 0.5;
        series2.stacked = true;
        series2.tooltip.pointerOrientation = "vertical";
        var bullet2 = series2.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        bullet2.interactionsEnabled = false;
        bullet2.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
        bullet2.locationY = 0.5;
        bullet2.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#ffffff");
        var series3 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series3.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](80);
        series3.columns.template.tooltipText =
            "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
        series3.name = "Series 3";
        series3.dataFields.categoryX = "category";
        series3.dataFields.valueY = "value3";
        series3.dataFields.valueYShow = "totalPercent";
        series3.dataItems.template.locations.categoryX = 0.5;
        series3.stacked = true;
        series3.tooltip.pointerOrientation = "vertical";
        var bullet3 = series3.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]());
        bullet3.interactionsEnabled = false;
        bullet3.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
        bullet3.locationY = 0.5;
        bullet3.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#ffffff");
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
    };
    AssessmentComponent.prototype.getChart2 = function () {
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_kelly__WEBPACK_IMPORTED_MODULE_4__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("as2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarChart"]);
        // Add data
        chart.data = [
            {
                category: "Research",
                value: 80,
                full: 100,
            },
            {
                category: "Marketing",
                value: 35,
                full: 100,
            },
            {
                category: "Distribution",
                value: 92,
                full: 100,
            },
            {
                category: "Human Resources",
                value: 68,
                full: 100,
            },
        ];
        // Make chart not full circle
        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](20);
        // Set number format
        chart.numberFormatter.numberFormat = "#.#'%'";
        // Create axes
        var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        // categoryAxis.renderer.labels.template.fontWeight = 500;
        categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            return target.dataItem.index >= 0
                ? chart.colors.getIndex(target.dataItem.index)
                : fill;
        });
        categoryAxis.renderer.minGridDistance = 10;
        var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        // Create series
        var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]().getFor("alternativeBackground");
        series1.columns.template.fillOpacity = 0.08;
        // series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;
        var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
        series2.columns.template.radarColumn.cornerRadius = 20;
        series2.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        // Add cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarCursor"]();
    };
    AssessmentComponent.prototype.getChart3 = function () {
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_kelly__WEBPACK_IMPORTED_MODULE_4__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("as3", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        // Add data
        chart.data = [
            {
                year: "1950",
                value: -0.307,
            },
            {
                year: "1951",
                value: -0.168,
            },
            {
                year: "1952",
                value: -0.073,
            },
            {
                year: "1953",
                value: -0.027,
            },
            {
                year: "1954",
                value: -0.251,
            },
            {
                year: "1955",
                value: -0.281,
            },
            {
                year: "1956",
                value: -0.348,
            },
            {
                year: "1957",
                value: -0.074,
            },
            {
                year: "1958",
                value: -0.011,
            },
            {
                year: "1959",
                value: -0.074,
            },
            {
                year: "1960",
                value: -0.124,
            },
            {
                year: "1961",
                value: -0.024,
            },
            {
                year: "1962",
                value: -0.022,
            },
            {
                year: "1963",
                value: 0,
            },
            {
                year: "1964",
                value: -0.296,
            },
            {
                year: "1965",
                value: -0.217,
            },
            {
                year: "1966",
                value: -0.147,
            },
            {
                year: "1967",
                value: -0.15,
            },
            {
                year: "1968",
                value: -0.16,
            },
            {
                year: "1969",
                value: -0.011,
            },
            {
                year: "1970",
                value: -0.068,
            },
            {
                year: "1971",
                value: -0.19,
            },
            {
                year: "1972",
                value: -0.056,
            },
            {
                year: "1973",
                value: 0.077,
            },
            {
                year: "1974",
                value: -0.213,
            },
            {
                year: "1975",
                value: -0.17,
            },
            {
                year: "1976",
                value: -0.254,
            },
            {
                year: "1977",
                value: 0.019,
            },
            {
                year: "1978",
                value: -0.063,
            },
            {
                year: "1979",
                value: 0.05,
            },
            {
                year: "1980",
                value: 0.077,
            },
            {
                year: "1981",
                value: 0.12,
            },
            {
                year: "1982",
                value: 0.011,
            },
            {
                year: "1983",
                value: 0.177,
            },
            {
                year: "1984",
                value: -0.021,
            },
            {
                year: "1985",
                value: -0.037,
            },
            {
                year: "1986",
                value: 0.03,
            },
            {
                year: "1987",
                value: 0.179,
            },
            {
                year: "1988",
                value: 0.18,
            },
            {
                year: "1989",
                value: 0.104,
            },
            {
                year: "1990",
                value: 0.255,
            },
            {
                year: "1991",
                value: 0.21,
            },
            {
                year: "1992",
                value: 0.065,
            },
            {
                year: "1993",
                value: 0.11,
            },
            {
                year: "1994",
                value: 0.172,
            },
            {
                year: "1995",
                value: 0.269,
            },
            {
                year: "1996",
                value: 0.141,
            },
            {
                year: "1997",
                value: 0.353,
            },
            {
                year: "1998",
                value: 0.548,
            },
            {
                year: "1999",
                value: 0.298,
            },
            {
                year: "2000",
                value: 0.267,
            },
            {
                year: "2001",
                value: 0.411,
            },
            {
                year: "2002",
                value: 0.462,
            },
            {
                year: "2003",
                value: 0.47,
            },
            {
                year: "2004",
                value: 0.445,
            },
            {
                year: "2005",
                value: 0.47,
            },
        ];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.minGridDistance = 50;
        categoryAxis.renderer.grid.template.location = 0.5;
        categoryAxis.startLocation = 0.5;
        categoryAxis.endLocation = 0.5;
        // Create value axis
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.baseValue = 0;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "year";
        series.strokeWidth = 2;
        series.tensionX = 0.77;
        // bullet is added because we add tooltip to a bullet for it to change color
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Bullet"]());
        bullet.tooltipText = "{valueY}";
        bullet.adapter.add("fill", function (fill, target) {
            return fill;
        });
        var range = valueAxis.createSeriesRange(series);
        range.value = 0;
        range.endValue = -1000;
        range.contents.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FF0000");
        range.contents.fill = range.contents.stroke;
        // Add scrollbar
        var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
    };
    AssessmentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    AssessmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-assessment",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/assessment/assessment.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assessment.component.scss */ "./src/app/core/user/assessment/assessment.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], AssessmentComponent);
    return AssessmentComponent;
}());



/***/ }),

/***/ "./src/app/core/user/calendar/calendar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/core/user/calendar/calendar.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/user/calendar/calendar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/user/calendar/calendar.component.ts ***!
  \**********************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(modalService) {
        this.modalService = modalService;
        this.default = {
            keyboard: true,
            class: "modal-dialog-centered modal-secondary"
        };
        this.radios = "bg-danger";
        this.eventTitle = undefined;
        this.today = new Date();
        this.y = this.today.getFullYear();
        this.m = this.today.getMonth();
        this.d = this.today.getDate();
        this.events = [
            {
                id: 0,
                title: "Lunch meeting",
                start: "2018-11-21",
                end: "2018-11-22",
                className: "bg-orange"
            },
            {
                id: 1,
                title: "Call with Dave",
                start: new Date(this.y, this.m, 1),
                allDay: true,
                className: "bg-red",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 2,
                title: "Lunch meeting",
                start: new Date(this.y, this.m, this.d - 1, 10, 30),
                allDay: true,
                className: "bg-orange",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 3,
                title: "All day conference",
                start: new Date(this.y, this.m, this.d + 7, 12, 0),
                allDay: true,
                className: "bg-green",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 4,
                title: "Meeting with Mary",
                start: new Date(this.y, this.m, this.d - 2),
                allDay: true,
                className: "bg-blue",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 5,
                title: "Winter Hackaton",
                start: new Date(this.y, this.m, this.d + 1, 19, 0),
                allDay: true,
                className: "bg-red",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 6,
                title: "Digital event",
                start: new Date(this.y, this.m, 21),
                allDay: true,
                className: "bg-warning",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 7,
                title: "Marketing event",
                start: new Date(this.y, this.m, 21),
                allDay: true,
                className: "bg-purple",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 8,
                title: "Dinner with Family",
                start: new Date(this.y, this.m, 19),
                allDay: true,
                className: "bg-red",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 9,
                title: "Black Friday",
                start: new Date(this.y, this.m, 23),
                allDay: true,
                className: "bg-blue",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            },
            {
                id: 10,
                title: "Cyber Week",
                start: new Date(this.y, this.m, 2),
                allDay: true,
                className: "bg-yellow",
                description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
            }
        ];
    }
    CalendarComponent.prototype.changeView = function (newView) {
        this.calendar.changeView(newView);
        currentDate: this.calendar.view.title;
    };
    CalendarComponent.prototype.ngOnInit = function () {
        this.initCalendar();
        var mYear = moment__WEBPACK_IMPORTED_MODULE_7__().format("YYYY");
        var mDay = moment__WEBPACK_IMPORTED_MODULE_7__().format("dddd, MMM D");
        document.getElementsByClassName("widget-calendar-year")[0].innerHTML = mYear;
        document.getElementsByClassName("widget-calendar-day")[0].innerHTML = mDay;
    };
    CalendarComponent.prototype.initCalendar = function () {
        var _this = this;
        this.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_4__["Calendar"](document.getElementById("calendar"), {
            plugins: [_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__["default"], _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"]],
            defaultView: "dayGridMonth",
            selectable: true,
            editable: true,
            events: this.events,
            views: {
                month: {
                    titleFormat: { month: "long", year: "numeric" }
                },
                agendaWeek: {
                    titleFormat: { month: "long", year: "numeric", day: "numeric" }
                },
                agendaDay: {
                    titleFormat: { month: "short", year: "numeric", day: "numeric" }
                }
            },
            // Add new event
            select: function (info) {
                _this.addModal = _this.modalService.show(_this.modalAdd, _this.default);
                _this.startDate = info.startStr;
                _this.endDate = info.endStr;
            },
            // Edit calendar event action
            eventClick: function (_a) {
                var event = _a.event;
                _this.eventId = event.id;
                _this.eventTitle = event.title;
                _this.eventDescription = event.extendedProps.description;
                _this.radios = "bg-danger";
                _this.event = event;
                _this.editModal = _this.modalService.show(_this.modalEdit, _this.default);
            }
        });
        this.calendar.render();
    };
    CalendarComponent.prototype.getNewEventTitle = function (e) {
        this.eventTitle = e.target.value;
    };
    CalendarComponent.prototype.getNewEventDescription = function (e) {
        this.eventDescription = e.target.value;
    };
    CalendarComponent.prototype.addNewEvent = function () {
        this.events.push({
            title: this.eventTitle,
            start: this.startDate,
            end: this.endDate,
            className: this.radios,
            id: this.events.length
        });
        this.calendar.addEvent({
            title: this.eventTitle,
            start: this.startDate,
            end: this.endDate,
            className: this.radios,
            id: this.events.length
        });
        this.addModal.hide();
        this.radios = "bg-danger";
        (this.eventTitle = undefined),
            (this.eventDescription = undefined),
            (this.eventId = undefined),
            (this.event = undefined);
    };
    CalendarComponent.prototype.deleteEventSweetAlert = function () {
        var _this = this;
        this.editModal.hide();
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a
            .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn btn-danger",
            cancelButtonClass: "btn btn-secondary",
            confirmButtonText: "Yes, delete it!",
            buttonsStyling: false
        })
            .then(function (result) {
            if (result.value) {
                _this.events = _this.events.filter(function (prop) { return prop.id + "" !== _this.eventId; });
                _this.initCalendar();
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    type: "success",
                    confirmButtonClass: "btn btn-primary",
                    buttonsStyling: false
                });
            }
        });
        this.radios = "bg-danger";
        (this.eventTitle = undefined),
            (this.eventDescription = undefined),
            (this.eventId = undefined),
            (this.event = undefined);
    };
    CalendarComponent.prototype.updateEvent = function () {
        var _this = this;
        this.events = this.events.map(function (prop, key) {
            if (prop.id + "" === _this.eventId + "") {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { title: _this.eventTitle, className: _this.radios, description: _this.eventDescription });
            }
            else {
                return prop;
            }
        });
        this.radios = "bg-danger";
        (this.eventTitle = undefined),
            (this.eventDescription = undefined),
            (this.eventId = undefined),
            (this.event = undefined);
        this.initCalendar();
        this.editModal.hide();
    };
    CalendarComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalAdd"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CalendarComponent.prototype, "modalAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalEdit"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CalendarComponent.prototype, "modalEdit", void 0);
    CalendarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-calendar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/calendar/calendar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendar.component.scss */ "./src/app/core/user/calendar/calendar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/core/user/class-registration/class-registration.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/user/class-registration/class-registration.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9jbGFzcy1yZWdpc3RyYXRpb24vY2xhc3MtcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/class-registration/class-registration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/user/class-registration/class-registration.component.ts ***!
  \******************************************************************************/
/*! exports provided: SelectionType, ClassRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRegistrationComponent", function() { return ClassRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var ClassRegistrationComponent = /** @class */ (function () {
    function ClassRegistrationComponent(modalService, formBuilder, zone) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.modalConfig = {
            keyboard: true,
            class: "modal-dialog-centered"
        };
        // table
        this.entries = 5;
        this.selected = [];
        this.temp = [];
        this.rows = [
            {
                name: "Tiger Nixon",
                position: "System Architect",
                office: "Edinburgh",
                age: "61",
                start: "2011/04/25",
                salary: "$320,800",
            },
            {
                name: "Garrett Winters",
                position: "Accountant",
                office: "Tokyo",
                age: "63",
                start: "2011/07/25",
                salary: "$170,750",
            },
            {
                name: "Ashton Cox",
                position: "Junior Technical Author",
                office: "San Francisco",
                age: "66",
                start: "2009/01/12",
                salary: "$86,000",
            },
            {
                name: "Cedric Kelly",
                position: "Senior Javascript Developer",
                office: "Edinburgh",
                age: "22",
                start: "2012/03/29",
                salary: "$433,060",
            },
            {
                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                start: "2008/11/28",
                salary: "$162,700",
            },
            {
                name: "Brielle Williamson",
                position: "Integration Specialist",
                office: "New York",
                age: "61",
                start: "2012/12/02",
                salary: "$372,000",
            },
            {
                name: "Herrod Chandler",
                position: "Sales Assistant",
                office: "San Francisco",
                age: "59",
                start: "2012/08/06",
                salary: "$137,500",
            },
            {
                name: "Rhona Davidson",
                position: "Integration Specialist",
                office: "Tokyo",
                age: "55",
                start: "2010/10/14",
                salary: "$327,900",
            },
            {
                name: "Colleen Hurst",
                position: "Javascript Developer",
                office: "San Francisco",
                age: "39",
                start: "2009/09/15",
                salary: "$205,500",
            },
            {
                name: "Sonya Frost",
                position: "Software Engineer",
                office: "Edinburgh",
                age: "23",
                start: "2008/12/13",
                salary: "$103,600",
            },
            {
                name: "Jena Gaines",
                position: "Office Manager",
                office: "London",
                age: "30",
                start: "2008/12/19",
                salary: "$90,560",
            },
            {
                name: "Quinn Flynn",
                position: "Support Lead",
                office: "Edinburgh",
                age: "22",
                start: "2013/03/03",
                salary: "$342,000",
            },
            {
                name: "Charde Marshall",
                position: "Regional Director",
                office: "San Francisco",
                age: "36",
                start: "2008/10/16",
                salary: "$470,600",
            },
            {
                name: "Haley Kennedy",
                position: "Senior Marketing Designer",
                office: "London",
                age: "43",
                start: "2012/12/18",
                salary: "$313,500",
            },
            {
                name: "Tatyana Fitzpatrick",
                position: "Regional Director",
                office: "London",
                age: "19",
                start: "2010/03/17",
                salary: "$385,750",
            },
            {
                name: "Michael Silva",
                position: "Marketing Designer",
                office: "London",
                age: "66",
                start: "2012/11/27",
                salary: "$198,500",
            },
            {
                name: "Paul Byrd",
                position: "Chief Financial Officer (CFO)",
                office: "New York",
                age: "64",
                start: "2010/06/09",
                salary: "$725,000",
            },
            {
                name: "Gloria Little",
                position: "Systems Administrator",
                office: "New York",
                age: "59",
                start: "2009/04/10",
                salary: "$237,500",
            },
            {
                name: "Bradley Greer",
                position: "Software Engineer",
                office: "London",
                age: "41",
                start: "2012/10/13",
                salary: "$132,000",
            },
            {
                name: "Dai Rios",
                position: "Personnel Lead",
                office: "Edinburgh",
                age: "35",
                start: "2012/09/26",
                salary: "$217,500",
            },
            {
                name: "Jenette Caldwell",
                position: "Development Lead",
                office: "New York",
                age: "30",
                start: "2011/09/03",
                salary: "$345,000",
            },
            {
                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "40",
                start: "2009/06/25",
                salary: "$675,000",
            },
            {
                name: "Caesar Vance",
                position: "Pre-Sales Support",
                office: "New York",
                age: "21",
                start: "2011/12/12",
                salary: "$106,450",
            },
            {
                name: "Doris Wilder",
                position: "Sales Assistant",
                office: "Sidney",
                age: "23",
                start: "2010/09/20",
                salary: "$85,600",
            },
            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "London",
                age: "47",
                start: "2009/10/09",
                salary: "$1,200,000",
            },
            {
                name: "Gavin Joyce",
                position: "Developer",
                office: "Edinburgh",
                age: "42",
                start: "2010/12/22",
                salary: "$92,575",
            },
            {
                name: "Jennifer Chang",
                position: "Regional Director",
                office: "Singapore",
                age: "28",
                start: "2010/11/14",
                salary: "$357,650",
            },
            {
                name: "Brenden Wagner",
                position: "Software Engineer",
                office: "San Francisco",
                age: "28",
                start: "2011/06/07",
                salary: "$206,850",
            },
            {
                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "48",
                start: "2010/03/11",
                salary: "$850,000",
            },
            {
                name: "Shou Itou",
                position: "Regional Marketing",
                office: "Tokyo",
                age: "20",
                start: "2011/08/14",
                salary: "$163,000",
            },
            {
                name: "Michelle House",
                position: "Integration Specialist",
                office: "Sidney",
                age: "37",
                start: "2011/06/02",
                salary: "$95,400",
            },
            {
                name: "Suki Burks",
                position: "Developer",
                office: "London",
                age: "53",
                start: "2009/10/22",
                salary: "$114,500",
            },
            {
                name: "Prescott Bartlett",
                position: "Technical Author",
                office: "London",
                age: "27",
                start: "2011/05/07",
                salary: "$145,000",
            },
            {
                name: "Gavin Cortez",
                position: "Team Leader",
                office: "San Francisco",
                age: "22",
                start: "2008/10/26",
                salary: "$235,500",
            },
            {
                name: "Martena Mccray",
                position: "Post-Sales support",
                office: "Edinburgh",
                age: "46",
                start: "2011/03/09",
                salary: "$324,050",
            },
            {
                name: "Unity Butler",
                position: "Marketing Designer",
                office: "San Francisco",
                age: "47",
                start: "2009/12/09",
                salary: "$85,675",
            },
            {
                name: "Howard Hatfield",
                position: "Office Manager",
                office: "San Francisco",
                age: "51",
                start: "2008/12/16",
                salary: "$164,500",
            },
            {
                name: "Hope Fuentes",
                position: "Secretary",
                office: "San Francisco",
                age: "41",
                start: "2010/02/12",
                salary: "$109,850",
            },
            {
                name: "Vivian Harrell",
                position: "Financial Controller",
                office: "San Francisco",
                age: "62",
                start: "2009/02/14",
                salary: "$452,500",
            },
            {
                name: "Timothy Mooney",
                position: "Office Manager",
                office: "London",
                age: "37",
                start: "2008/12/11",
                salary: "$136,200",
            },
            {
                name: "Jackson Bradshaw",
                position: "Director",
                office: "New York",
                age: "65",
                start: "2008/09/26",
                salary: "$645,750",
            },
            {
                name: "Olivia Liang",
                position: "Support Engineer",
                office: "Singapore",
                age: "64",
                start: "2011/02/03",
                salary: "$234,500",
            },
            {
                name: "Bruno Nash",
                position: "Software Engineer",
                office: "London",
                age: "38",
                start: "2011/05/03",
                salary: "$163,500",
            },
            {
                name: "Sakura Yamamoto",
                position: "Support Engineer",
                office: "Tokyo",
                age: "37",
                start: "2009/08/19",
                salary: "$139,575",
            },
            {
                name: "Thor Walton",
                position: "Developer",
                office: "New York",
                age: "61",
                start: "2013/08/11",
                salary: "$98,540",
            },
            {
                name: "Finn Camacho",
                position: "Support Engineer",
                office: "San Francisco",
                age: "47",
                start: "2009/07/07",
                salary: "$87,500",
            },
            {
                name: "Serge Baldwin",
                position: "Data Coordinator",
                office: "Singapore",
                age: "64",
                start: "2012/04/09",
                salary: "$138,575",
            },
            {
                name: "Zenaida Frank",
                position: "Software Engineer",
                office: "New York",
                age: "63",
                start: "2010/01/04",
                salary: "$125,250",
            },
            {
                name: "Zorita Serrano",
                position: "Software Engineer",
                office: "San Francisco",
                age: "56",
                start: "2012/06/01",
                salary: "$115,000",
            },
            {
                name: "Jennifer Acosta",
                position: "Junior Javascript Developer",
                office: "Edinburgh",
                age: "43",
                start: "2013/02/01",
                salary: "$75,650",
            },
            {
                name: "Cara Stevens",
                position: "Sales Assistant",
                office: "New York",
                age: "46",
                start: "2011/12/06",
                salary: "$145,600",
            },
            {
                name: "Hermione Butler",
                position: "Regional Director",
                office: "London",
                age: "47",
                start: "2011/03/21",
                salary: "$356,250",
            },
            {
                name: "Lael Greer",
                position: "Systems Administrator",
                office: "London",
                age: "21",
                start: "2009/02/27",
                salary: "$103,500",
            },
            {
                name: "Jonas Alexander",
                position: "Developer",
                office: "San Francisco",
                age: "30",
                start: "2010/07/14",
                salary: "$86,500",
            },
            {
                name: "Shad Decker",
                position: "Regional Director",
                office: "Edinburgh",
                age: "51",
                start: "2008/11/13",
                salary: "$183,000",
            },
            {
                name: "Michael Bruce",
                position: "Javascript Developer",
                office: "Singapore",
                age: "29",
                start: "2011/06/27",
                salary: "$183,000",
            },
            {
                name: "Donna Snider",
                position: "Customer Support",
                office: "New York",
                age: "27",
                start: "2011/01/25",
                salary: "$112,000",
            },
        ];
        this.SelectionType = SelectionType;
        this.temp = this.rows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    ClassRegistrationComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    ClassRegistrationComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    ClassRegistrationComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        this.selected.push(selected);
    };
    ClassRegistrationComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    ClassRegistrationComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    ClassRegistrationComponent.prototype.closeModal = function () {
        this.modal.hide();
        this.registerForm.reset();
    };
    ClassRegistrationComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Confirmation",
            text: "Are you sure to proceed the registration?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonClass: "btn btn-danger",
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result.value) {
                _this.register();
            }
        });
    };
    ClassRegistrationComponent.prototype.register = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Success",
            text: "Your registration has been confirmed!",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close"
        }).then(function (result) {
            if (result.value) {
                _this.modal.hide();
                _this.registerForm.reset();
            }
        });
    };
    ClassRegistrationComponent.prototype.ngOnInit = function () { };
    ClassRegistrationComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ClassRegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-class-registration",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./class-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/class-registration/class-registration.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./class-registration.component.scss */ "./src/app/core/user/class-registration/class-registration.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ClassRegistrationComponent);
    return ClassRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/core/user/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/user/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/material */ "./node_modules/@amcharts/amcharts4/themes/material.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(zone) {
        this.zone = zone;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart1) {
                console.log("Chart disposed");
                _this.chart1.dispose();
            }
        });
    };
    DashboardComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChart1();
        });
    };
    DashboardComponent.prototype.getChart1 = function () {
        // Themes begin
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_material__WEBPACK_IMPORTED_MODULE_4__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("dash1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarChart"]);
        // Add data
        chart.data = [
            {
                category: "Research",
                value: 80,
                full: 100,
            },
            {
                category: "Marketing",
                value: 35,
                full: 100,
            },
            {
                category: "Distribution",
                value: 92,
                full: 100,
            },
            {
                category: "Human Resources",
                value: 68,
                full: 100,
            },
        ];
        // Make chart not full circle
        chart.startAngle = -90;
        chart.endAngle = 180;
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](20);
        // Set number format
        chart.numberFormatter.numberFormat = "#.#'%'";
        // Create axes
        var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.grid.template.strokeOpacity = 0;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        // categoryAxis.renderer.labels.template.fontWeight = 500;
        categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            return target.dataItem.index >= 0
                ? chart.colors.getIndex(target.dataItem.index)
                : fill;
        });
        categoryAxis.renderer.minGridDistance = 10;
        var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.grid.template.strokeOpacity = 0;
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        // Create series
        var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series1.dataFields.valueX = "full";
        series1.dataFields.categoryY = "category";
        series1.clustered = false;
        series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]().getFor("alternativeBackground");
        series1.columns.template.fillOpacity = 0.08;
        // series1.columns.template.cornerRadiusTopLeft = 20;
        series1.columns.template.strokeWidth = 0;
        series1.columns.template.radarColumn.cornerRadius = 20;
        var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarColumnSeries"]());
        series2.dataFields.valueX = "value";
        series2.dataFields.categoryY = "category";
        series2.clustered = false;
        series2.columns.template.strokeWidth = 0;
        series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
        series2.columns.template.radarColumn.cornerRadius = 20;
        series2.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        // Add cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["RadarCursor"]();
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/core/user/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core/user/discussion/discussion.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/core/user/discussion/discussion.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9kaXNjdXNzaW9uL2Rpc2N1c3Npb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/user/discussion/discussion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/user/discussion/discussion.component.ts ***!
  \**************************************************************/
/*! exports provided: DiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionComponent", function() { return DiscussionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DiscussionComponent = /** @class */ (function () {
    function DiscussionComponent() {
    }
    DiscussionComponent.prototype.ngOnInit = function () {
    };
    DiscussionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./discussion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/discussion/discussion.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./discussion.component.scss */ "./src/app/core/user/discussion/discussion.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DiscussionComponent);
    return DiscussionComponent;
}());



/***/ }),

/***/ "./src/app/core/user/exam-list/exam-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/user/exam-list/exam-list.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9leGFtLWxpc3QvZXhhbS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/exam-list/exam-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/user/exam-list/exam-list.component.ts ***!
  \************************************************************/
/*! exports provided: ExamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamListComponent", function() { return ExamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ExamListComponent = /** @class */ (function () {
    function ExamListComponent(router) {
        this.router = router;
    }
    ExamListComponent.prototype.navigatePage = function (path) {
        if (path == 'exam-question') {
            return this.router.navigate(['/user/exam/question']);
        }
    };
    ExamListComponent.prototype.ngOnInit = function () {
    };
    ExamListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ExamListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exam-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-list/exam-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exam-list.component.scss */ "./src/app/core/user/exam-list/exam-list.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExamListComponent);
    return ExamListComponent;
}());



/***/ }),

/***/ "./src/app/core/user/exam-question/exam-question.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core/user/exam-question/exam-question.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9leGFtLXF1ZXN0aW9uL2V4YW0tcXVlc3Rpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/user/exam-question/exam-question.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/user/exam-question/exam-question.component.ts ***!
  \********************************************************************/
/*! exports provided: ExamQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamQuestionComponent", function() { return ExamQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var ExamQuestionComponent = /** @class */ (function () {
    function ExamQuestionComponent(zone, router) {
        this.zone = zone;
        this.router = router;
        this.timeLeft = 60;
    }
    ExamQuestionComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    ExamQuestionComponent.prototype.navigatePage = function (path) {
        if (path == "exam-list") {
            return this.router.navigate(["/user/exam/list"]);
        }
    };
    ExamQuestionComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Confirmation",
            text: "Are you sure to proceed this action?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonClass: "btn btn-danger",
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result.value) {
                _this.register();
            }
        });
    };
    ExamQuestionComponent.prototype.register = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Success",
            text: "Now you heading back to List of examination.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close"
        }).then(function (result) {
            if (result.value) {
                return _this.router.navigate(["/user/exam/list"]);
            }
        });
    };
    ExamQuestionComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 60;
            }
        }, 1000);
    };
    ExamQuestionComponent.prototype.pauseTimer = function () {
        clearInterval(this.interval);
    };
    ExamQuestionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ExamQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-exam-question",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exam-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-question/exam-question.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exam-question.component.scss */ "./src/app/core/user/exam-question/exam-question.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExamQuestionComponent);
    return ExamQuestionComponent;
}());



/***/ }),

/***/ "./src/app/core/user/exam-registration/exam-registration.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/user/exam-registration/exam-registration.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9leGFtLXJlZ2lzdHJhdGlvbi9leGFtLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/user/exam-registration/exam-registration.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/user/exam-registration/exam-registration.component.ts ***!
  \****************************************************************************/
/*! exports provided: SelectionType, ExamRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamRegistrationComponent", function() { return ExamRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var ExamRegistrationComponent = /** @class */ (function () {
    function ExamRegistrationComponent(modalService) {
        this.modalService = modalService;
        this.entries = 5;
        this.selected = [];
        this.temp = [];
        this.rows = [
            {
                name: "Tiger Nixon",
                position: "System Architect",
                office: "Edinburgh",
                age: "61",
                start: "2011/04/25",
                salary: "$320,800",
            },
            {
                name: "Garrett Winters",
                position: "Accountant",
                office: "Tokyo",
                age: "63",
                start: "2011/07/25",
                salary: "$170,750",
            },
            {
                name: "Ashton Cox",
                position: "Junior Technical Author",
                office: "San Francisco",
                age: "66",
                start: "2009/01/12",
                salary: "$86,000",
            },
            {
                name: "Cedric Kelly",
                position: "Senior Javascript Developer",
                office: "Edinburgh",
                age: "22",
                start: "2012/03/29",
                salary: "$433,060",
            },
            {
                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                start: "2008/11/28",
                salary: "$162,700",
            },
            {
                name: "Brielle Williamson",
                position: "Integration Specialist",
                office: "New York",
                age: "61",
                start: "2012/12/02",
                salary: "$372,000",
            },
            {
                name: "Herrod Chandler",
                position: "Sales Assistant",
                office: "San Francisco",
                age: "59",
                start: "2012/08/06",
                salary: "$137,500",
            },
            {
                name: "Rhona Davidson",
                position: "Integration Specialist",
                office: "Tokyo",
                age: "55",
                start: "2010/10/14",
                salary: "$327,900",
            },
            {
                name: "Colleen Hurst",
                position: "Javascript Developer",
                office: "San Francisco",
                age: "39",
                start: "2009/09/15",
                salary: "$205,500",
            },
            {
                name: "Sonya Frost",
                position: "Software Engineer",
                office: "Edinburgh",
                age: "23",
                start: "2008/12/13",
                salary: "$103,600",
            },
            {
                name: "Jena Gaines",
                position: "Office Manager",
                office: "London",
                age: "30",
                start: "2008/12/19",
                salary: "$90,560",
            },
            {
                name: "Quinn Flynn",
                position: "Support Lead",
                office: "Edinburgh",
                age: "22",
                start: "2013/03/03",
                salary: "$342,000",
            },
            {
                name: "Charde Marshall",
                position: "Regional Director",
                office: "San Francisco",
                age: "36",
                start: "2008/10/16",
                salary: "$470,600",
            },
            {
                name: "Haley Kennedy",
                position: "Senior Marketing Designer",
                office: "London",
                age: "43",
                start: "2012/12/18",
                salary: "$313,500",
            },
            {
                name: "Tatyana Fitzpatrick",
                position: "Regional Director",
                office: "London",
                age: "19",
                start: "2010/03/17",
                salary: "$385,750",
            },
            {
                name: "Michael Silva",
                position: "Marketing Designer",
                office: "London",
                age: "66",
                start: "2012/11/27",
                salary: "$198,500",
            },
            {
                name: "Paul Byrd",
                position: "Chief Financial Officer (CFO)",
                office: "New York",
                age: "64",
                start: "2010/06/09",
                salary: "$725,000",
            },
            {
                name: "Gloria Little",
                position: "Systems Administrator",
                office: "New York",
                age: "59",
                start: "2009/04/10",
                salary: "$237,500",
            },
            {
                name: "Bradley Greer",
                position: "Software Engineer",
                office: "London",
                age: "41",
                start: "2012/10/13",
                salary: "$132,000",
            },
            {
                name: "Dai Rios",
                position: "Personnel Lead",
                office: "Edinburgh",
                age: "35",
                start: "2012/09/26",
                salary: "$217,500",
            },
            {
                name: "Jenette Caldwell",
                position: "Development Lead",
                office: "New York",
                age: "30",
                start: "2011/09/03",
                salary: "$345,000",
            },
            {
                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "40",
                start: "2009/06/25",
                salary: "$675,000",
            },
            {
                name: "Caesar Vance",
                position: "Pre-Sales Support",
                office: "New York",
                age: "21",
                start: "2011/12/12",
                salary: "$106,450",
            },
            {
                name: "Doris Wilder",
                position: "Sales Assistant",
                office: "Sidney",
                age: "23",
                start: "2010/09/20",
                salary: "$85,600",
            },
            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "London",
                age: "47",
                start: "2009/10/09",
                salary: "$1,200,000",
            },
            {
                name: "Gavin Joyce",
                position: "Developer",
                office: "Edinburgh",
                age: "42",
                start: "2010/12/22",
                salary: "$92,575",
            },
            {
                name: "Jennifer Chang",
                position: "Regional Director",
                office: "Singapore",
                age: "28",
                start: "2010/11/14",
                salary: "$357,650",
            },
            {
                name: "Brenden Wagner",
                position: "Software Engineer",
                office: "San Francisco",
                age: "28",
                start: "2011/06/07",
                salary: "$206,850",
            },
            {
                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "48",
                start: "2010/03/11",
                salary: "$850,000",
            },
            {
                name: "Shou Itou",
                position: "Regional Marketing",
                office: "Tokyo",
                age: "20",
                start: "2011/08/14",
                salary: "$163,000",
            },
            {
                name: "Michelle House",
                position: "Integration Specialist",
                office: "Sidney",
                age: "37",
                start: "2011/06/02",
                salary: "$95,400",
            },
            {
                name: "Suki Burks",
                position: "Developer",
                office: "London",
                age: "53",
                start: "2009/10/22",
                salary: "$114,500",
            },
            {
                name: "Prescott Bartlett",
                position: "Technical Author",
                office: "London",
                age: "27",
                start: "2011/05/07",
                salary: "$145,000",
            },
            {
                name: "Gavin Cortez",
                position: "Team Leader",
                office: "San Francisco",
                age: "22",
                start: "2008/10/26",
                salary: "$235,500",
            },
            {
                name: "Martena Mccray",
                position: "Post-Sales support",
                office: "Edinburgh",
                age: "46",
                start: "2011/03/09",
                salary: "$324,050",
            },
            {
                name: "Unity Butler",
                position: "Marketing Designer",
                office: "San Francisco",
                age: "47",
                start: "2009/12/09",
                salary: "$85,675",
            },
            {
                name: "Howard Hatfield",
                position: "Office Manager",
                office: "San Francisco",
                age: "51",
                start: "2008/12/16",
                salary: "$164,500",
            },
            {
                name: "Hope Fuentes",
                position: "Secretary",
                office: "San Francisco",
                age: "41",
                start: "2010/02/12",
                salary: "$109,850",
            },
            {
                name: "Vivian Harrell",
                position: "Financial Controller",
                office: "San Francisco",
                age: "62",
                start: "2009/02/14",
                salary: "$452,500",
            },
            {
                name: "Timothy Mooney",
                position: "Office Manager",
                office: "London",
                age: "37",
                start: "2008/12/11",
                salary: "$136,200",
            },
            {
                name: "Jackson Bradshaw",
                position: "Director",
                office: "New York",
                age: "65",
                start: "2008/09/26",
                salary: "$645,750",
            },
            {
                name: "Olivia Liang",
                position: "Support Engineer",
                office: "Singapore",
                age: "64",
                start: "2011/02/03",
                salary: "$234,500",
            },
            {
                name: "Bruno Nash",
                position: "Software Engineer",
                office: "London",
                age: "38",
                start: "2011/05/03",
                salary: "$163,500",
            },
            {
                name: "Sakura Yamamoto",
                position: "Support Engineer",
                office: "Tokyo",
                age: "37",
                start: "2009/08/19",
                salary: "$139,575",
            },
            {
                name: "Thor Walton",
                position: "Developer",
                office: "New York",
                age: "61",
                start: "2013/08/11",
                salary: "$98,540",
            },
            {
                name: "Finn Camacho",
                position: "Support Engineer",
                office: "San Francisco",
                age: "47",
                start: "2009/07/07",
                salary: "$87,500",
            },
            {
                name: "Serge Baldwin",
                position: "Data Coordinator",
                office: "Singapore",
                age: "64",
                start: "2012/04/09",
                salary: "$138,575",
            },
            {
                name: "Zenaida Frank",
                position: "Software Engineer",
                office: "New York",
                age: "63",
                start: "2010/01/04",
                salary: "$125,250",
            },
            {
                name: "Zorita Serrano",
                position: "Software Engineer",
                office: "San Francisco",
                age: "56",
                start: "2012/06/01",
                salary: "$115,000",
            },
            {
                name: "Jennifer Acosta",
                position: "Junior Javascript Developer",
                office: "Edinburgh",
                age: "43",
                start: "2013/02/01",
                salary: "$75,650",
            },
            {
                name: "Cara Stevens",
                position: "Sales Assistant",
                office: "New York",
                age: "46",
                start: "2011/12/06",
                salary: "$145,600",
            },
            {
                name: "Hermione Butler",
                position: "Regional Director",
                office: "London",
                age: "47",
                start: "2011/03/21",
                salary: "$356,250",
            },
            {
                name: "Lael Greer",
                position: "Systems Administrator",
                office: "London",
                age: "21",
                start: "2009/02/27",
                salary: "$103,500",
            },
            {
                name: "Jonas Alexander",
                position: "Developer",
                office: "San Francisco",
                age: "30",
                start: "2010/07/14",
                salary: "$86,500",
            },
            {
                name: "Shad Decker",
                position: "Regional Director",
                office: "Edinburgh",
                age: "51",
                start: "2008/11/13",
                salary: "$183,000",
            },
            {
                name: "Michael Bruce",
                position: "Javascript Developer",
                office: "Singapore",
                age: "29",
                start: "2011/06/27",
                salary: "$183,000",
            },
            {
                name: "Donna Snider",
                position: "Customer Support",
                office: "New York",
                age: "27",
                start: "2011/01/25",
                salary: "$112,000",
            },
        ];
        this.SelectionType = SelectionType;
        this.modalConfig = {
            keyboard: true,
            class: "modal-dialog-centered",
        };
        this.temp = this.rows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    ExamRegistrationComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    ExamRegistrationComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    ExamRegistrationComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        this.selected.push(selected);
    };
    ExamRegistrationComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    ExamRegistrationComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    ExamRegistrationComponent.prototype.closeModal = function () {
        this.modal.hide();
        this.registerForm.reset();
    };
    ExamRegistrationComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a
            .fire({
            title: "Confirmation",
            text: "Are you sure to proceed the registration?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonClass: "btn btn-danger",
            cancelButtonText: "Cancel",
        })
            .then(function (result) {
            if (result.value) {
                _this.register();
            }
        });
    };
    ExamRegistrationComponent.prototype.register = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a
            .fire({
            title: "Success",
            text: "Your registration has been confirmed!",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close",
        })
            .then(function (result) {
            if (result.value) {
                _this.modal.hide();
                _this.registerForm.reset();
            }
        });
    };
    ExamRegistrationComponent.prototype.ngOnInit = function () { };
    ExamRegistrationComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    ExamRegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-exam-registration",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exam-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/exam-registration/exam-registration.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exam-registration.component.scss */ "./src/app/core/user/exam-registration/exam-registration.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], ExamRegistrationComponent);
    return ExamRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/core/user/online-course-class/online-course-class.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/core/user/online-course-class/online-course-class.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9vbmxpbmUtY291cnNlLWNsYXNzL29ubGluZS1jb3Vyc2UtY2xhc3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/user/online-course-class/online-course-class.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/core/user/online-course-class/online-course-class.component.ts ***!
  \********************************************************************************/
/*! exports provided: OnlineCourseClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineCourseClassComponent", function() { return OnlineCourseClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnlineCourseClassComponent = /** @class */ (function () {
    function OnlineCourseClassComponent() {
    }
    OnlineCourseClassComponent.prototype.ngOnInit = function () {
    };
    OnlineCourseClassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-course-class',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./online-course-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/online-course-class/online-course-class.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./online-course-class.component.scss */ "./src/app/core/user/online-course-class/online-course-class.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OnlineCourseClassComponent);
    return OnlineCourseClassComponent;
}());



/***/ }),

/***/ "./src/app/core/user/online-course-main/online-course-main.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/core/user/online-course-main/online-course-main.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9vbmxpbmUtY291cnNlLW1haW4vb25saW5lLWNvdXJzZS1tYWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/online-course-main/online-course-main.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/user/online-course-main/online-course-main.component.ts ***!
  \******************************************************************************/
/*! exports provided: OnlineCourseMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineCourseMainComponent", function() { return OnlineCourseMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var OnlineCourseMainComponent = /** @class */ (function () {
    function OnlineCourseMainComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        // Toggle
        this.editEnabled = false;
        this.editFormMessages = {
            'name': [
                { type: 'required', message: 'Name is required' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'A valid email is required' }
            ]
        };
    }
    OnlineCourseMainComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ]))
        });
    };
    OnlineCourseMainComponent.prototype.toggleEdit = function () {
        this.editEnabled = !this.editEnabled;
    };
    OnlineCourseMainComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Confirmation",
            text: "Are you sure to save this edit?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-info",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonClass: "btn btn-danger",
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result.value) {
                _this.edit();
            }
        });
    };
    OnlineCourseMainComponent.prototype.navigatePage = function (path) {
        if (path == 'class') {
            return this.router.navigate(['/user/online-course/class']);
        }
    };
    OnlineCourseMainComponent.prototype.edit = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Success",
            text: "Update has been saved",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close"
        }).then(function (result) {
            if (result.value) {
                _this.editForm.reset();
            }
        });
    };
    OnlineCourseMainComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    OnlineCourseMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-online-course-main',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./online-course-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/online-course-main/online-course-main.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./online-course-main.component.scss */ "./src/app/core/user/online-course-main/online-course-main.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], OnlineCourseMainComponent);
    return OnlineCourseMainComponent;
}());



/***/ }),

/***/ "./src/app/core/user/survey/survey.component.scss":
/*!********************************************************!*\
  !*** ./src/app/core/user/survey/survey.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci9zdXJ2ZXkvc3VydmV5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/survey/survey.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/user/survey/survey.component.ts ***!
  \******************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var SurveyComponent = /** @class */ (function () {
    function SurveyComponent() {
    }
    SurveyComponent.prototype.register = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Success",
            text: "Your survey has been sent.",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close"
        });
    };
    SurveyComponent.prototype.ngOnInit = function () {
    };
    SurveyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./survey.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/survey/survey.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./survey.component.scss */ "./src/app/core/user/survey/survey.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/core/user/training-exercise/training-exercise.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/user/training-exercise/training-exercise.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci90cmFpbmluZy1leGVyY2lzZS90cmFpbmluZy1leGVyY2lzZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/user/training-exercise/training-exercise.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/user/training-exercise/training-exercise.component.ts ***!
  \****************************************************************************/
/*! exports provided: TrainingExerciseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingExerciseComponent", function() { return TrainingExerciseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TrainingExerciseComponent = /** @class */ (function () {
    function TrainingExerciseComponent(router) {
        this.router = router;
    }
    TrainingExerciseComponent.prototype.navigatePage = function (path) {
        if (path == 'training-question') {
            return this.router.navigate(['/user/training/question']);
        }
    };
    TrainingExerciseComponent.prototype.ngOnInit = function () {
    };
    TrainingExerciseComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TrainingExerciseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-exercise',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./training-exercise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-exercise/training-exercise.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./training-exercise.component.scss */ "./src/app/core/user/training-exercise/training-exercise.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TrainingExerciseComponent);
    return TrainingExerciseComponent;
}());



/***/ }),

/***/ "./src/app/core/user/training-list/training-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/core/user/training-list/training-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci90cmFpbmluZy1saXN0L3RyYWluaW5nLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/user/training-list/training-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/user/training-list/training-list.component.ts ***!
  \********************************************************************/
/*! exports provided: TrainingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingListComponent", function() { return TrainingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TrainingListComponent = /** @class */ (function () {
    function TrainingListComponent(router) {
        this.router = router;
    }
    TrainingListComponent.prototype.navigatePage = function (path) {
        if (path == 'training-exercise') {
            return this.router.navigate(['/user/training/exercise']);
        }
    };
    TrainingListComponent.prototype.ngOnInit = function () {
    };
    TrainingListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TrainingListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./training-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-list/training-list.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./training-list.component.scss */ "./src/app/core/user/training-list/training-list.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TrainingListComponent);
    return TrainingListComponent;
}());



/***/ }),

/***/ "./src/app/core/user/training-question/training-question.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/core/user/training-question/training-question.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci90cmFpbmluZy1xdWVzdGlvbi90cmFpbmluZy1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/user/training-question/training-question.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/user/training-question/training-question.component.ts ***!
  \****************************************************************************/
/*! exports provided: TrainingQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingQuestionComponent", function() { return TrainingQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TrainingQuestionComponent = /** @class */ (function () {
    function TrainingQuestionComponent(router) {
        this.router = router;
    }
    TrainingQuestionComponent.prototype.navigatePage = function (path) {
        if (path == 'discussion') {
            return this.router.navigate(['/user/discussion']);
        }
    };
    TrainingQuestionComponent.prototype.ngOnInit = function () {
    };
    TrainingQuestionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TrainingQuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-question',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./training-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-question/training-question.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./training-question.component.scss */ "./src/app/core/user/training-question/training-question.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TrainingQuestionComponent);
    return TrainingQuestionComponent;
}());



/***/ }),

/***/ "./src/app/core/user/training-registration/training-registration.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/core/user/training-registration/training-registration.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci90cmFpbmluZy1yZWdpc3RyYXRpb24vdHJhaW5pbmctcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/user/training-registration/training-registration.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/core/user/training-registration/training-registration.component.ts ***!
  \************************************************************************************/
/*! exports provided: SelectionType, TrainingRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingRegistrationComponent", function() { return TrainingRegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var TrainingRegistrationComponent = /** @class */ (function () {
    function TrainingRegistrationComponent(modalService) {
        this.modalService = modalService;
        this.entries = 5;
        this.selected = [];
        this.temp = [];
        this.rows = [
            {
                name: "Tiger Nixon",
                position: "System Architect",
                office: "Edinburgh",
                age: "61",
                start: "2011/04/25",
                salary: "$320,800",
            },
            {
                name: "Garrett Winters",
                position: "Accountant",
                office: "Tokyo",
                age: "63",
                start: "2011/07/25",
                salary: "$170,750",
            },
            {
                name: "Ashton Cox",
                position: "Junior Technical Author",
                office: "San Francisco",
                age: "66",
                start: "2009/01/12",
                salary: "$86,000",
            },
            {
                name: "Cedric Kelly",
                position: "Senior Javascript Developer",
                office: "Edinburgh",
                age: "22",
                start: "2012/03/29",
                salary: "$433,060",
            },
            {
                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                start: "2008/11/28",
                salary: "$162,700",
            },
            {
                name: "Brielle Williamson",
                position: "Integration Specialist",
                office: "New York",
                age: "61",
                start: "2012/12/02",
                salary: "$372,000",
            },
            {
                name: "Herrod Chandler",
                position: "Sales Assistant",
                office: "San Francisco",
                age: "59",
                start: "2012/08/06",
                salary: "$137,500",
            },
            {
                name: "Rhona Davidson",
                position: "Integration Specialist",
                office: "Tokyo",
                age: "55",
                start: "2010/10/14",
                salary: "$327,900",
            },
            {
                name: "Colleen Hurst",
                position: "Javascript Developer",
                office: "San Francisco",
                age: "39",
                start: "2009/09/15",
                salary: "$205,500",
            },
            {
                name: "Sonya Frost",
                position: "Software Engineer",
                office: "Edinburgh",
                age: "23",
                start: "2008/12/13",
                salary: "$103,600",
            },
            {
                name: "Jena Gaines",
                position: "Office Manager",
                office: "London",
                age: "30",
                start: "2008/12/19",
                salary: "$90,560",
            },
            {
                name: "Quinn Flynn",
                position: "Support Lead",
                office: "Edinburgh",
                age: "22",
                start: "2013/03/03",
                salary: "$342,000",
            },
            {
                name: "Charde Marshall",
                position: "Regional Director",
                office: "San Francisco",
                age: "36",
                start: "2008/10/16",
                salary: "$470,600",
            },
            {
                name: "Haley Kennedy",
                position: "Senior Marketing Designer",
                office: "London",
                age: "43",
                start: "2012/12/18",
                salary: "$313,500",
            },
            {
                name: "Tatyana Fitzpatrick",
                position: "Regional Director",
                office: "London",
                age: "19",
                start: "2010/03/17",
                salary: "$385,750",
            },
            {
                name: "Michael Silva",
                position: "Marketing Designer",
                office: "London",
                age: "66",
                start: "2012/11/27",
                salary: "$198,500",
            },
            {
                name: "Paul Byrd",
                position: "Chief Financial Officer (CFO)",
                office: "New York",
                age: "64",
                start: "2010/06/09",
                salary: "$725,000",
            },
            {
                name: "Gloria Little",
                position: "Systems Administrator",
                office: "New York",
                age: "59",
                start: "2009/04/10",
                salary: "$237,500",
            },
            {
                name: "Bradley Greer",
                position: "Software Engineer",
                office: "London",
                age: "41",
                start: "2012/10/13",
                salary: "$132,000",
            },
            {
                name: "Dai Rios",
                position: "Personnel Lead",
                office: "Edinburgh",
                age: "35",
                start: "2012/09/26",
                salary: "$217,500",
            },
            {
                name: "Jenette Caldwell",
                position: "Development Lead",
                office: "New York",
                age: "30",
                start: "2011/09/03",
                salary: "$345,000",
            },
            {
                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "40",
                start: "2009/06/25",
                salary: "$675,000",
            },
            {
                name: "Caesar Vance",
                position: "Pre-Sales Support",
                office: "New York",
                age: "21",
                start: "2011/12/12",
                salary: "$106,450",
            },
            {
                name: "Doris Wilder",
                position: "Sales Assistant",
                office: "Sidney",
                age: "23",
                start: "2010/09/20",
                salary: "$85,600",
            },
            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "London",
                age: "47",
                start: "2009/10/09",
                salary: "$1,200,000",
            },
            {
                name: "Gavin Joyce",
                position: "Developer",
                office: "Edinburgh",
                age: "42",
                start: "2010/12/22",
                salary: "$92,575",
            },
            {
                name: "Jennifer Chang",
                position: "Regional Director",
                office: "Singapore",
                age: "28",
                start: "2010/11/14",
                salary: "$357,650",
            },
            {
                name: "Brenden Wagner",
                position: "Software Engineer",
                office: "San Francisco",
                age: "28",
                start: "2011/06/07",
                salary: "$206,850",
            },
            {
                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "48",
                start: "2010/03/11",
                salary: "$850,000",
            },
            {
                name: "Shou Itou",
                position: "Regional Marketing",
                office: "Tokyo",
                age: "20",
                start: "2011/08/14",
                salary: "$163,000",
            },
            {
                name: "Michelle House",
                position: "Integration Specialist",
                office: "Sidney",
                age: "37",
                start: "2011/06/02",
                salary: "$95,400",
            },
            {
                name: "Suki Burks",
                position: "Developer",
                office: "London",
                age: "53",
                start: "2009/10/22",
                salary: "$114,500",
            },
            {
                name: "Prescott Bartlett",
                position: "Technical Author",
                office: "London",
                age: "27",
                start: "2011/05/07",
                salary: "$145,000",
            },
            {
                name: "Gavin Cortez",
                position: "Team Leader",
                office: "San Francisco",
                age: "22",
                start: "2008/10/26",
                salary: "$235,500",
            },
            {
                name: "Martena Mccray",
                position: "Post-Sales support",
                office: "Edinburgh",
                age: "46",
                start: "2011/03/09",
                salary: "$324,050",
            },
            {
                name: "Unity Butler",
                position: "Marketing Designer",
                office: "San Francisco",
                age: "47",
                start: "2009/12/09",
                salary: "$85,675",
            },
            {
                name: "Howard Hatfield",
                position: "Office Manager",
                office: "San Francisco",
                age: "51",
                start: "2008/12/16",
                salary: "$164,500",
            },
            {
                name: "Hope Fuentes",
                position: "Secretary",
                office: "San Francisco",
                age: "41",
                start: "2010/02/12",
                salary: "$109,850",
            },
            {
                name: "Vivian Harrell",
                position: "Financial Controller",
                office: "San Francisco",
                age: "62",
                start: "2009/02/14",
                salary: "$452,500",
            },
            {
                name: "Timothy Mooney",
                position: "Office Manager",
                office: "London",
                age: "37",
                start: "2008/12/11",
                salary: "$136,200",
            },
            {
                name: "Jackson Bradshaw",
                position: "Director",
                office: "New York",
                age: "65",
                start: "2008/09/26",
                salary: "$645,750",
            },
            {
                name: "Olivia Liang",
                position: "Support Engineer",
                office: "Singapore",
                age: "64",
                start: "2011/02/03",
                salary: "$234,500",
            },
            {
                name: "Bruno Nash",
                position: "Software Engineer",
                office: "London",
                age: "38",
                start: "2011/05/03",
                salary: "$163,500",
            },
            {
                name: "Sakura Yamamoto",
                position: "Support Engineer",
                office: "Tokyo",
                age: "37",
                start: "2009/08/19",
                salary: "$139,575",
            },
            {
                name: "Thor Walton",
                position: "Developer",
                office: "New York",
                age: "61",
                start: "2013/08/11",
                salary: "$98,540",
            },
            {
                name: "Finn Camacho",
                position: "Support Engineer",
                office: "San Francisco",
                age: "47",
                start: "2009/07/07",
                salary: "$87,500",
            },
            {
                name: "Serge Baldwin",
                position: "Data Coordinator",
                office: "Singapore",
                age: "64",
                start: "2012/04/09",
                salary: "$138,575",
            },
            {
                name: "Zenaida Frank",
                position: "Software Engineer",
                office: "New York",
                age: "63",
                start: "2010/01/04",
                salary: "$125,250",
            },
            {
                name: "Zorita Serrano",
                position: "Software Engineer",
                office: "San Francisco",
                age: "56",
                start: "2012/06/01",
                salary: "$115,000",
            },
            {
                name: "Jennifer Acosta",
                position: "Junior Javascript Developer",
                office: "Edinburgh",
                age: "43",
                start: "2013/02/01",
                salary: "$75,650",
            },
            {
                name: "Cara Stevens",
                position: "Sales Assistant",
                office: "New York",
                age: "46",
                start: "2011/12/06",
                salary: "$145,600",
            },
            {
                name: "Hermione Butler",
                position: "Regional Director",
                office: "London",
                age: "47",
                start: "2011/03/21",
                salary: "$356,250",
            },
            {
                name: "Lael Greer",
                position: "Systems Administrator",
                office: "London",
                age: "21",
                start: "2009/02/27",
                salary: "$103,500",
            },
            {
                name: "Jonas Alexander",
                position: "Developer",
                office: "San Francisco",
                age: "30",
                start: "2010/07/14",
                salary: "$86,500",
            },
            {
                name: "Shad Decker",
                position: "Regional Director",
                office: "Edinburgh",
                age: "51",
                start: "2008/11/13",
                salary: "$183,000",
            },
            {
                name: "Michael Bruce",
                position: "Javascript Developer",
                office: "Singapore",
                age: "29",
                start: "2011/06/27",
                salary: "$183,000",
            },
            {
                name: "Donna Snider",
                position: "Customer Support",
                office: "New York",
                age: "27",
                start: "2011/01/25",
                salary: "$112,000",
            },
        ];
        this.SelectionType = SelectionType;
        this.modalConfig = {
            keyboard: true,
            class: "modal-dialog-centered"
        };
        this.temp = this.rows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    TrainingRegistrationComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    TrainingRegistrationComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    TrainingRegistrationComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        this.selected.push(selected);
    };
    TrainingRegistrationComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    TrainingRegistrationComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    TrainingRegistrationComponent.prototype.closeModal = function () {
        this.modal.hide();
        this.registerForm.reset();
    };
    TrainingRegistrationComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Confirmation",
            text: "Are you sure to proceed the registration?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Confirm",
            showCancelButton: true,
            cancelButtonClass: "btn btn-danger",
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result.value) {
                _this.register();
            }
        });
    };
    TrainingRegistrationComponent.prototype.register = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Success",
            text: "Your registration has been confirmed!",
            type: "success",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-success",
            confirmButtonText: "Close"
        }).then(function (result) {
            if (result.value) {
                _this.modal.hide();
                _this.registerForm.reset();
            }
        });
    };
    TrainingRegistrationComponent.prototype.ngOnInit = function () { };
    TrainingRegistrationComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    TrainingRegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-training-registration",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./training-registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user/training-registration/training-registration.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./training-registration.component.scss */ "./src/app/core/user/training-registration/training-registration.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], TrainingRegistrationComponent);
    return TrainingRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/core/user/user.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/user/user.module.ts ***!
  \******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.routing */ "./src/app/core/user/user.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/user/dashboard/dashboard.component.ts");
/* harmony import */ var _class_registration_class_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./class-registration/class-registration.component */ "./src/app/core/user/class-registration/class-registration.component.ts");
/* harmony import */ var _training_registration_training_registration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./training-registration/training-registration.component */ "./src/app/core/user/training-registration/training-registration.component.ts");
/* harmony import */ var _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./training-list/training-list.component */ "./src/app/core/user/training-list/training-list.component.ts");
/* harmony import */ var _training_exercise_training_exercise_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./training-exercise/training-exercise.component */ "./src/app/core/user/training-exercise/training-exercise.component.ts");
/* harmony import */ var _exam_registration_exam_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./exam-registration/exam-registration.component */ "./src/app/core/user/exam-registration/exam-registration.component.ts");
/* harmony import */ var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./exam-list/exam-list.component */ "./src/app/core/user/exam-list/exam-list.component.ts");
/* harmony import */ var _exam_question_exam_question_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./exam-question/exam-question.component */ "./src/app/core/user/exam-question/exam-question.component.ts");
/* harmony import */ var _online_course_main_online_course_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./online-course-main/online-course-main.component */ "./src/app/core/user/online-course-main/online-course-main.component.ts");
/* harmony import */ var _online_course_class_online_course_class_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./online-course-class/online-course-class.component */ "./src/app/core/user/online-course-class/online-course-class.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/core/user/survey/survey.component.ts");
/* harmony import */ var _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./discussion/discussion.component */ "./src/app/core/user/discussion/discussion.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/core/user/calendar/calendar.component.ts");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assessment/assessment.component */ "./src/app/core/user/assessment/assessment.component.ts");
/* harmony import */ var _training_question_training_question_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./training-question/training-question.component */ "./src/app/core/user/training-question/training-question.component.ts");

























var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _class_registration_class_registration_component__WEBPACK_IMPORTED_MODULE_11__["ClassRegistrationComponent"], _training_registration_training_registration_component__WEBPACK_IMPORTED_MODULE_12__["TrainingRegistrationComponent"], _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_13__["TrainingListComponent"], _training_exercise_training_exercise_component__WEBPACK_IMPORTED_MODULE_14__["TrainingExerciseComponent"], _exam_registration_exam_registration_component__WEBPACK_IMPORTED_MODULE_15__["ExamRegistrationComponent"], _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_16__["ExamListComponent"], _exam_question_exam_question_component__WEBPACK_IMPORTED_MODULE_17__["ExamQuestionComponent"], _online_course_main_online_course_main_component__WEBPACK_IMPORTED_MODULE_18__["OnlineCourseMainComponent"], _online_course_class_online_course_class_component__WEBPACK_IMPORTED_MODULE_19__["OnlineCourseClassComponent"], _survey_survey_component__WEBPACK_IMPORTED_MODULE_20__["SurveyComponent"], _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_21__["DiscussionComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_22__["CalendarComponent"], _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_23__["AssessmentComponent"], _training_question_training_question_component__WEBPACK_IMPORTED_MODULE_24__["TrainingQuestionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__["LoadingBarModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_9__["UserRoutes"])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/core/user/user.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/user.routing.ts ***!
  \*******************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/user/dashboard/dashboard.component.ts");
/* harmony import */ var _class_registration_class_registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-registration/class-registration.component */ "./src/app/core/user/class-registration/class-registration.component.ts");
/* harmony import */ var _training_registration_training_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training-registration/training-registration.component */ "./src/app/core/user/training-registration/training-registration.component.ts");
/* harmony import */ var _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./training-list/training-list.component */ "./src/app/core/user/training-list/training-list.component.ts");
/* harmony import */ var _training_exercise_training_exercise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-exercise/training-exercise.component */ "./src/app/core/user/training-exercise/training-exercise.component.ts");
/* harmony import */ var _exam_registration_exam_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exam-registration/exam-registration.component */ "./src/app/core/user/exam-registration/exam-registration.component.ts");
/* harmony import */ var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exam-list/exam-list.component */ "./src/app/core/user/exam-list/exam-list.component.ts");
/* harmony import */ var _exam_question_exam_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exam-question/exam-question.component */ "./src/app/core/user/exam-question/exam-question.component.ts");
/* harmony import */ var _online_course_main_online_course_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./online-course-main/online-course-main.component */ "./src/app/core/user/online-course-main/online-course-main.component.ts");
/* harmony import */ var _online_course_class_online_course_class_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./online-course-class/online-course-class.component */ "./src/app/core/user/online-course-class/online-course-class.component.ts");
/* harmony import */ var _survey_survey_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./survey/survey.component */ "./src/app/core/user/survey/survey.component.ts");
/* harmony import */ var _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discussion/discussion.component */ "./src/app/core/user/discussion/discussion.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/core/user/calendar/calendar.component.ts");
/* harmony import */ var _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assessment/assessment.component */ "./src/app/core/user/assessment/assessment.component.ts");
/* harmony import */ var _training_question_training_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./training-question/training-question.component */ "./src/app/core/user/training-question/training-question.component.ts");
















var UserRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
            },
            {
                path: 'class-registration',
                component: _class_registration_class_registration_component__WEBPACK_IMPORTED_MODULE_2__["ClassRegistrationComponent"]
            },
            {
                path: 'training',
                children: [
                    {
                        path: 'registration',
                        component: _training_registration_training_registration_component__WEBPACK_IMPORTED_MODULE_3__["TrainingRegistrationComponent"]
                    },
                    {
                        path: 'list',
                        component: _training_list_training_list_component__WEBPACK_IMPORTED_MODULE_4__["TrainingListComponent"]
                    },
                    {
                        path: 'exercise',
                        component: _training_exercise_training_exercise_component__WEBPACK_IMPORTED_MODULE_5__["TrainingExerciseComponent"]
                    },
                    {
                        path: 'question',
                        component: _training_question_training_question_component__WEBPACK_IMPORTED_MODULE_15__["TrainingQuestionComponent"]
                    }
                ]
            },
            {
                path: 'exam',
                children: [
                    {
                        path: 'registration',
                        component: _exam_registration_exam_registration_component__WEBPACK_IMPORTED_MODULE_6__["ExamRegistrationComponent"]
                    },
                    {
                        path: 'list',
                        component: _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_7__["ExamListComponent"]
                    },
                    {
                        path: 'question',
                        component: _exam_question_exam_question_component__WEBPACK_IMPORTED_MODULE_8__["ExamQuestionComponent"]
                    }
                ]
            },
            {
                path: 'online-course',
                children: [
                    {
                        path: 'main',
                        component: _online_course_main_online_course_main_component__WEBPACK_IMPORTED_MODULE_9__["OnlineCourseMainComponent"]
                    },
                    {
                        path: 'class',
                        component: _online_course_class_online_course_class_component__WEBPACK_IMPORTED_MODULE_10__["OnlineCourseClassComponent"]
                    }
                ]
            },
            {
                path: 'survey',
                component: _survey_survey_component__WEBPACK_IMPORTED_MODULE_11__["SurveyComponent"]
            },
            {
                path: 'discussion',
                component: _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_12__["DiscussionComponent"]
            },
            {
                path: 'calendar',
                component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_13__["CalendarComponent"]
            },
            {
                path: 'assessment',
                component: _assessment_assessment_component__WEBPACK_IMPORTED_MODULE_14__["AssessmentComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=core-user-user-module.js.map