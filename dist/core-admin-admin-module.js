(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/calender/calender.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/calender/calender.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\" header header-dark bg-default pb-6 content__title content__title--calendar\"\n>\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6\">\n          <h6 class=\" fullcalendar-title h2 text-white d-inline-block mb-0\">\n            Full Calendar\n          </h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-lg-inline-block ml-lg-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" far fa-calendar-alt\"> </i> </a>\n              </li>\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Calendar\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 mt-3 mt-lg-0 text-lg-right\">\n          <a\n            class=\" fullcalendar-btn-prev btn btn-sm btn-neutral\"\n            href=\"javascript:void(0)\"\n            (click)=\"calendar.next()\"\n          >\n            <i class=\" fas fa-angle-left\"> </i>\n          </a>\n\n          <a\n            class=\" fullcalendar-btn-next btn btn-sm btn-neutral\"\n            href=\"javascript:void(0)\"\n            (click)=\"calendar.prev()\"\n          >\n            <i class=\" fas fa-angle-right\"> </i>\n          </a>\n\n          <a\n            class=\" btn btn-sm btn-neutral\"\n            data-calendar-view=\"month\"\n            href=\"javascript:void(0)\"\n            (click)=\"changeView('dayGridMonth')\"\n          >\n            Month\n          </a>\n\n          <a\n            class=\" btn btn-sm btn-neutral\"\n            data-calendar-view=\"basicWeek\"\n            href=\"javascript:void(0)\"\n            (click)=\"changeView('dayGridWeek')\"\n          >\n            Week\n          </a>\n\n          <a\n            class=\" btn btn-sm btn-neutral\"\n            data-calendar-view=\"basicDay\"\n            href=\"javascript:void(0)\"\n            (click)=\"changeView('dayGridDay')\"\n          >\n            Day\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card card-calendar\">\n        <div class=\" card-header\"><h5 class=\" h3 mb-0\">Calendar</h5></div>\n\n        <div class=\" card-body p-0\">\n          <div class=\" calendar\" data-toggle=\"calendar\" id=\"calendar\"></div>\n        </div>\n      </div>\n\n      <div\n        aria-hidden=\"true\"\n        aria-labelledby=\"new-event-label\"\n        class=\" modal fade\"\n        id=\"new-event\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n      >\n        <div\n          class=\" modal-dialog modal-dialog-centered modal-secondary\"\n          role=\"document\"\n        >\n          <ng-template #modalAdd>\n            <div class=\" modal-body\">\n              <form class=\" new-event--form\">\n                <div class=\" form-group\">\n                  <label class=\" form-control-label\"> Event title </label>\n\n                  <input\n                    class=\" form-control form-control-alternative new-event--title\"\n                    id=\"new-event--title\"\n                    placeholder=\"Event Title\"\n                    type=\"text\"\n                    (change)=\"getNewEventTitle($event)\"\n                  />\n                </div>\n\n                <div class=\" form-group mb-0\">\n                  <label class=\" form-control-label d-block mb-3\">\n                    Status color\n                  </label>\n\n                  <div\n                    class=\" btn-group btn-group-toggle btn-group-colors event-tag\"\n                    data-toggle=\"buttons\"\n                  >\n                    <label\n                      class=\" btn bg-info\"\n                      [ngClass]=\"{ active: radios === 'bg-info' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        checked=\"checked\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-info\"\n                        (click)=\"radios = 'bg-info'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-warning\"\n                      [ngClass]=\"{ active: radios === 'bg-warning' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-warning\"\n                        (click)=\"radios = 'bg-warning'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-danger\"\n                      [ngClass]=\"{ active: radios === 'bg-danger' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-danger\"\n                        (click)=\"radios = 'bg-danger'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-success\"\n                      [ngClass]=\"{ active: radios === 'bg-success' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-success\"\n                        (click)=\"radios = 'bg-success'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-default\"\n                      [ngClass]=\"{ active: radios === 'bg-default' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-default\"\n                        (click)=\"radios = 'bg-default'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-primary\"\n                      [ngClass]=\"{ active: radios === 'bg-primary' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-primary\"\n                        (click)=\"radios = 'bg-primary'\"\n                      />\n                    </label>\n                  </div>\n                </div>\n\n                <input class=\" new-event--start\" type=\"hidden\" />\n\n                <input class=\" new-event--end\" type=\"hidden\" />\n              </form>\n            </div>\n\n            <div class=\" modal-footer\">\n              <button\n                class=\" btn btn-primary new-event--add\"\n                type=\"submit\"\n                (click)=\"addNewEvent()\"\n              >\n                Add event\n              </button>\n\n              <button\n                (click)=\"addModal.hide()\"\n                class=\" btn btn-link ml-auto\"\n                data-dismiss=\"modal\"\n                type=\"button\"\n              >\n                Close\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n\n      <div\n        aria-hidden=\"true\"\n        aria-labelledby=\"edit-event-label\"\n        class=\" modal fade\"\n        id=\"edit-event\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n      >\n        <div\n          class=\" modal-dialog modal-dialog-centered modal-secondary\"\n          role=\"document\"\n        >\n          <ng-template #modalEdit>\n            <div class=\" modal-body\">\n              <form class=\" edit-event--form\">\n                <div class=\" form-group\">\n                  <label class=\" form-control-label\"> Event title </label>\n\n                  <input\n                    class=\" form-control form-control-alternative edit-event--title\"\n                    placeholder=\"Event Title\"\n                    type=\"text\"\n                    value=\"{{ eventTitle }}\"\n                    (change)=\"getNewEventTitle($event)\"\n                  />\n                </div>\n\n                <div class=\" form-group\">\n                  <label class=\" form-control-label d-block mb-3\">\n                    Status color\n                  </label>\n\n                  <div\n                    class=\" btn-group btn-group-toggle btn-group-colors event-tag mb-0\"\n                    data-toggle=\"buttons\"\n                  >\n                    <label\n                      class=\" btn bg-info\"\n                      [ngClass]=\"{ active: radios === 'bg-info' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        checked=\"checked\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-info\"\n                        (click)=\"radios = 'bg-info'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-warning\"\n                      [ngClass]=\"{ active: radios === 'bg-warning' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-warning\"\n                        (click)=\"radios = 'bg-warning'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-danger\"\n                      [ngClass]=\"{ active: radios === 'bg-danger' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-danger\"\n                        (click)=\"radios = 'bg-danger'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-success\"\n                      [ngClass]=\"{ active: radios === 'bg-success' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-success\"\n                        (click)=\"radios = 'bg-success'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-default\"\n                      [ngClass]=\"{ active: radios === 'bg-default' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-default\"\n                        (click)=\"radios = 'bg-default'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-primary\"\n                      [ngClass]=\"{ active: radios === 'bg-primary' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-primary\"\n                        (click)=\"radios = 'bg-primary'\"\n                      />\n                    </label>\n                  </div>\n                </div>\n\n                <div class=\" form-group\">\n                  <label class=\" form-control-label\"> Description </label>\n\n                  <textarea\n                    class=\" form-control form-control-alternative edit-event--description textarea-autosize\"\n                    placeholder=\"Event Desctiption\"\n                    value=\"{{ eventDescription }}\"\n                    (change)=\"getNewEventDescription($event)\"\n                  ></textarea>\n\n                  <i class=\" form-group--bar\"> </i>\n                </div>\n\n                <input class=\" edit-event--id\" type=\"hidden\" />\n              </form>\n            </div>\n\n            <div class=\" modal-footer\">\n              <button\n                class=\" btn btn-primary\"\n                data-calendar=\"update\"\n                (click)=\"updateEvent()\"\n              >\n                Update\n              </button>\n\n              <button\n                class=\" btn btn-danger\"\n                data-calendar=\"delete\"\n                (click)=\"deleteEventSweetAlert()\"\n              >\n                Delete\n              </button>\n\n              <button\n                class=\" btn btn-link ml-auto\"\n                data-dismiss=\"modal\"\n                (click)=\"editModal.hide()\"\n              >\n                Close\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/dashboard/dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/dashboard/dashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"header-body\">\n\t\t\t<div class=\"row align-items-center py-4\">\n\t\t\t\t<div class=\"col-lg-6 col-7\">\n\t\t\t\t\t<h6 class=\"h2 text-dark d-inline-block mb-0\">Dashboard</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-home text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xl-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card card-stats\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\tTotal Exam\n\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t<span class=\"h2 font-weight-bold mb-0\"> 350,897 </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon icon-shape bg-gradient-red text-white rounded-circle shadow\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-envelope-open-text\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-xl-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card card-stats\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\tOnline Courses\n\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t<span class=\"h2 font-weight-bold mb-0\"> 2,356 </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon icon-shape bg-gradient-orange text-white rounded-circle shadow\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-laptop-house\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-xl-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card card-stats\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\tPerformance\n\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t<span class=\"h2 font-weight-bold mb-0\"> 924 </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon icon-shape bg-gradient-green text-white rounded-circle shadow\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-chart-line\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n\t<div class=\"row\">\n\t\t<div class=\"col-xl-8\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header bg-secondary\">\n\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<h6 class=\"text-muted text-uppercase ls-1 mb-1\">Chart</h6>\n\n\t\t\t\t\t\t\t<h5 class=\"h3 mb-0\">Department</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartdiv\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xl-4\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header bg-secondary\">\n\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t<h6 class=\"text-uppercase text-muted ls-1 mb-1\">Chart</h6>\n\n\t\t\t\t\t\t\t<h5 class=\"h3 mb-0\">Trend</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"chart\">\n\t\t\t\t\t\t<div class=\"amchart\" id=\"chartdiv1\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-class/depo-class.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-class/depo-class.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Depository</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-archive text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Class Specific </a>\n                            </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Add New Class</h3>\n                </div>\n                <div class=\"card-body\">\n                    <tabset class=\"tab-container tabbable-line\" #staticTabs>\n                        <tab heading=\"Class Information\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Class ID</label>\n                                        <input class=\"form-control\" placeholder=\"Course ID\"\n                                            formControlName=\"courseid\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Course Name</label>\n                                        <input class=\"form-control\" placeholder=\"Course Name\"\n                                            formControlName=\"courseName\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Class Number</label>\n                                        <input class=\"form-control\" placeholder=\"Class Number\"\n                                            formControlName=\"desc\" type=\"text\">\n                                    </div>\n                                </div>\n                            \n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Start Date</label>\n                                        <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">End Date</label>\n                                        <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab heading=\"Class Detail\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Min. Participant</label>\n                                        <input class=\"form-control\" placeholder=\"Min. Participant\"\n                                            formControlName=\"course\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Max. Participant</label>\n                                        <input class=\"form-control\" placeholder=\"Max. Participant\"\n                                            formControlName=\"stat\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Duration</label>\n                                        <input class=\"form-control\" placeholder=\"Duration\"\n                                            formControlName=\"dur\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Time</label>\n                                        <input class=\"form-control\" placeholder=\"Time\"\n                                            formControlName=\"lang\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Venue</label>\n                                        <input class=\"form-control\" placeholder=\"Venue\"\n                                            formControlName=\"loc\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Select Trainer</label>\n                                        <select class=\"mr-1\">\n                                            <option>Trainer</option>\n                                            <option>Trainer1</option>\n                                            <option>Trainer2</option>\n                                            <option>Trainer3</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab heading=\"Upload\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <label class=\"form-control-label\">Media</label>\n                                    <div class=\" custom-file\">\n                                        <input class=\" custom-file-input\" id=\"customFileLang\" lang=\"en\" type=\"file\" />\n                                        <label class=\" custom-file-label\" for=\"customFileLang\">\n                                            Select File\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <label class=\"form-control-label\">Document</label>\n                                    <div class=\" custom-file\">\n                                        <input class=\" custom-file-input\" id=\"customFileLang\" lang=\"en\" type=\"file\" />\n                                        <label class=\" custom-file-label\" for=\"customFileLang\">\n                                            Select File\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Status</label>\n                                        <select class=\"mr-1\">\n                                            <option>Status</option>\n                                            <option>In-House</option>\n                                            <option>Public</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                    </tabset>\n                </div>\n                <div class=\"card-footer\">\n                    <button\n                        class=\"btn btn-outline-success ml-auto\"\n                        type=\"button\"\n                    >\n                        Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-8\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Course List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"trainid\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Class Number</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Class Name</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainSdate\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Time</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainVenue\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Venue</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainDur\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Duration</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Action</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-info\">\n                                    <i class=\"fas fa-eye text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-success\">\n                                    <i class=\"fas fa-edit text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-warning\">\n                                    <i class=\"fas fa-trash text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-dark\">\n                                    <i class=\"fas fa-archive text-white\"></i>\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-course/depo-course.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-course/depo-course.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Depository</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-archive text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Course Specific </a>\n                            </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col col-sm-4\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Add New Course</h3>\n                </div>\n                <div class=\"card-body\">\n                    <tabset class=\"tab-container tabbable-line\" #staticTabs>\n                        <tab heading=\"Course Information\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Course ID</label>\n                                        <input class=\"form-control\" placeholder=\"Course ID\"\n                                            formControlName=\"courseid\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Course Name</label>\n                                        <input class=\"form-control\" placeholder=\"Course Name\"\n                                            formControlName=\"courseName\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Description</label>\n                                        <input class=\"form-control\" placeholder=\"Description\"\n                                            formControlName=\"desc\" type=\"text\">\n                                    </div>\n                                </div>\n                            \n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Start Date</label>\n                                        <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">End Date</label>\n                                        <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab heading=\"Organization Detail\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Course</label>\n                                        <input class=\"form-control\" placeholder=\"Course\"\n                                            formControlName=\"course\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Status</label>\n                                        <input class=\"form-control\" placeholder=\"Status\"\n                                            formControlName=\"stat\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Duration</label>\n                                        <input class=\"form-control\" placeholder=\"Duration\"\n                                            formControlName=\"dur\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Language</label>\n                                        <input class=\"form-control\" placeholder=\"Language\"\n                                            formControlName=\"lang\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Location</label>\n                                        <input class=\"form-control\" placeholder=\"Location\"\n                                            formControlName=\"loc\" type=\"text\">\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <div class=\"form-group\">\n                                        <label class=\"form-control-label\">Select Trainer</label>\n                                        <select class=\"mr-1\">\n                                            <option>Trainer</option>\n                                            <option>Trainer1</option>\n                                            <option>Trainer2</option>\n                                            <option>Trainer3</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                        <tab heading=\"Upload\">\n                            <div class=\"row\">\n                                <div class=\"col-12\">\n                                    <label class=\"form-control-label\">Media</label>\n                                    <div class=\" custom-file\">\n                                        <input class=\" custom-file-input\" id=\"customFileLang\" lang=\"en\" type=\"file\" />\n                                        <label class=\" custom-file-label\" for=\"customFileLang\">\n                                            Select File\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-12\">\n                                    <label class=\"form-control-label\">Document</label>\n                                    <div class=\" custom-file\">\n                                        <input class=\" custom-file-input\" id=\"customFileLang\" lang=\"en\" type=\"file\" />\n                                        <label class=\" custom-file-label\" for=\"customFileLang\">\n                                            Select File\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                        </tab>\n                    </tabset>\n                </div>\n                <div class=\"card-footer\">\n                    <button\n                        class=\"btn btn-outline-success ml-auto\"\n                        type=\"button\"\n                    >\n                        Add\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-8\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Course List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"trainid\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Course Name</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>name of Training</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainPart\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Description</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainSdate\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Start Date</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainEdate\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>End Date</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainDur\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Duration</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainStat\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Status</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.trainStat == 1\" class=\"badge badge-pill badge-info\">Publish</span>\n                                <span *ngIf=\"row.trainStat == 2\" class=\"badge badge-pill badge-danger\">Publish</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Action</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-info text-white\">\n                                   Edit\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-train-prov/depo-train-prov.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-train-prov/depo-train-prov.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Depository</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-archive text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Training Provider </a>\n                            </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Training Provider</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartTrainProv\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Trainer Provider List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"name\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Course Name</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"dept\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Department</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"date\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Date</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"stat\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Status</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.stat == 1\" class=\"badge badge-pill badge-success\">active</span>\n                                <span *ngIf=\"row.stat == 2\" class=\"badge badge-pill badge-warning\">inactive</span>\n                                <span *ngIf=\"row.stat == 3\" class=\"badge badge-pill badge-info\">pending</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Action</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-danger text-white mb-1\">\n                                    <i class=\"fas fa-upload text-white\"></i>Attach Document\n                                </a><br>\n                                <a class=\"btn btn-sm btn-info\">\n                                    <i class=\"fas fa-eye text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-success\">\n                                    <i class=\"fas fa-edit text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-warning\">\n                                    <i class=\"fas fa-trash text-white\"></i>\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class= \"row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Trainer List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange1($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                            <div class=\"row\">\n                                <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                    <label>\n                                        <input \n                                            type=\"search\"\n                                            class=\"form-control form-control-sm\"\n                                            placeholder=\"Search records\"\n                                            aria-controls=\"datatable\"\n                                            (keyup)=\"filterTable1($event)\" \n                                        />\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tEntries != -1 ? tEntries:undefined\"\n                        [rows]=\"tTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n                        <ngx-datatable-column name=\"name\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Name</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"mail\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Email</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"num\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Contact Num</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"cert\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>TTT Cert</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"stat\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Accredit Status</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.stat == 1\" class=\"badge badge-pill badge-success\">{{row.stat}}</span>\n                                <span *ngIf=\"row.stat == 2\" class=\"badge badge-pill badge-warning\">{{row.stat}}</span>\n                                <span *ngIf=\"row.stat == 3\" class=\"badge badge-pill badge-info\">{{row.stat}}</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"summ\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Profile Summary</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depository/depository.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depository/depository.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>depository works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/doc-dontrol/doc-dontrol.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/doc-dontrol/doc-dontrol.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Document Control Management</h6>\n\n                    <nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n                        <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n                            <li class=\" breadcrumb-item\">\n                                <a href=\"javascript:void(0)\"> <i class=\"far fa-file-alt text-dark\"> </i> </a>\n                            </li>\n                            <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                                Document Control Management\n                            </li>\n                        </ol>\n                    </nav>\n                </div>\n                <div class=\"col-5 mr-0\">\n                    <a class=\"btn btn-info ml-auto text-white\">\n                        <i class=\"fas fa-file-import\"></i>New Document\n                    </a>\n                    <a class=\"btn btn-success ml-1 text-white\">\n                        <i class=\"fas fa-cloud-upload-alt text-white\"></i>Upload Document\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Input Groups</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 col-lg-5\">\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\">Keyword</label>\n                                <input class=\"form-control\" formControlName=\"keyword\" type=\"text\" placeholder=\"Keyword\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-5\">\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\">Department</label>\n                                <input class=\"form-control\" formControlName=\"department\" type=\"text\" placeholder=\"Department\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-2 d-flex align-items-center\">\n                            <button class=\"btn btn-default\" type=\"button\">Search</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 col-lg-5\">\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\">Type</label>\n                                <select class=\"form-control custom-select\">\n                                    <option hidden selected>Please pick</option>\n                                    <option>Type 1</option>\n                                    <option>Type 2</option>\n                                    <option>Type 3</option>\n                                    <option>Type 4</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-5\">\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\">Date range</label>\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                                    </div>\n                                    <input \n                                        type=\"date\"\n                                        class=\"form-control\"\n                                        required=\"\"\n                                        placeholder=\"Date range\"\n                                    >\n                                  </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-2 d-flex align-items-center\">\n                            <button class=\"btn btn-default\" type=\"button\">Filter</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <h3 class=\"m-0\">Document</h3>\n                            <h6 class=\"mb-0\">List of all document available</h6>\n                        </div>\n                        <label class=\"btn btn-default text-white ml-auto\">Copy</label>\n                        <label class=\"btn btn-default text-white ml-1\">Print</label>\n                    </div>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4 ml-auto\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"docName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Name</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"docType\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Type</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"department\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Department</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"views\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Views</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"lastModi\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Last Modified</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>View/Edit</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-info text-white\">\n                                    Edit\n                                </a>\n                                <a class=\"btn btn-sm btn-dark text-white\">\n                                    View\n                                </a>\n                                <a class=\"btn btn-sm btn-warning text-white\">\n                                    Delete\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/exam/exam.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/exam/exam.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Overview</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-diagnoses text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Exam </a>\n                              </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n                <div class=\"col-lg-6 col-5 text-right text-white\">\n\t\t\t\t\t<a class=\"btn btn-sm btn-primary\" (click)=\"openModal(newExam)\">\n\t\t\t\t\t\tNew Exam\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Exam List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"examid\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Exam ID</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"examName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Title</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"examDate\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Date</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"examTime\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Time</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #newExam>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"compInfo\">\n            Create New Exam\n        </h6>\n\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\">&times; </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Title</label>\n                    <input class=\"form-control\" placeholder=\"Training Title\"\n                        formControlName=\"regDate\" type=\"text\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Start Date</label>\n                    <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Expected End Date</label>\n                    <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button\n            class=\"btn btn-outline-success ml-1\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Register\n        </button>\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Close\n        </button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/management-audit/management-audit.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/management-audit/management-audit.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"header-body\">\n\t\t\t<div class=\"row align-items-center py-4\">\n\t\t\t\t<div class=\"col-lg-6 col-7\">\n          <h6 class=\"h2 text-dark d-inline-block mb-0\">Audit Trails</h6>\n          <nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n              <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n                  <li class=\" breadcrumb-item\">\n                      <a href=\"javascript:void(0)\"> <i class=\"fas fa-shoe-prints text-dark\"> </i> </a>\n                  </li>\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"javascript:void(0)\" class=\"text-dark\"> Audit Trails </a>\n                  </li>\n              </ol>\n          </nav>\n        </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Action Types</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartdiv\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Audit Trails</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-12 col-md-6\">\n                        <div class=\"dataTables_length\" id=\"datatable_length\">\n                          <label>\n                            Show\n                            <select\n                              name=\"datatable_length\"\n                              aria-controls=\"datatable\"\n                              class=\"form-control form-control-sm\"\n                              (change)=\"entriesChange($event)\"\n                            >\n                              <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                              <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                              <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                              <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                            </select>\n                            records\n                            </label>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-12 col-md-6\">\n                        <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                          <label>\n                            <input\n                              type=\"search\"\n                              class=\"form-control form-control-sm\"\n                              placeholder=\"Search records\"\n                              aria-controls=\"datatable\"\n                              (keyup)=\"filterTable($event)\"\n                            />\n                          </label>\n                        </div>\n                      </div>\n                    </div>\n                \n                    <ngx-datatable\n                      class=\"bootstrap selection-cell\"\n                      [columnMode]=\"'force'\"\n                      [headerHeight]=\"50\"\n                      [footerHeight]=\"50\"\n                      [rowHeight]=\"'auto'\"\n                      [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                      [rows]=\"tableTemp\"\n                      (activate)=\"onActivate($event)\"\n                    >\n                \n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>ID</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                {{row.staff_id}}\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Username\"></ngx-datatable-column>\n                        <ngx-datatable-column name=\"Email\"></ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                              <span>Created At</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                              {{row.created_at}}\n                            </ng-template>\n                          </ngx-datatable-column>\n                          <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                              <span>Action</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.action == 'POST'\" class=\"badge badge-pill badge-default\">POST</span>\n                                <span *ngIf=\"row.action == 'GET'\" class=\"badge badge-pill badge-success\">GET</span>\n                                <span *ngIf=\"row.action == 'UPDATE'\" class=\"badge badge-pill badge-info\">UPDATE</span>\n                                <span *ngIf=\"row.action == 'DELETE'\" class=\"badge badge-pill badge-warning\">DELETE</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"Description\"></ngx-datatable-column>\n                    </ngx-datatable>\n                  </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/management-user/management-user.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/management-user/management-user.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">User Management</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-user text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> User </a>\n                              </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n\n                <div class=\"col-lg-6 col-5 text-right text-white\">\n\t\t\t\t\t<a class=\"btn btn-sm btn-primary\" (click)=\"openModal(createUser)\">\n\t\t\t\t\t\tCreate\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Registered User by Month</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartRegUser\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">User List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"name\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Name</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"mail\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>E-Mail</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"userName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Username</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"userType\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>User Type</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.userType == 1\" class=\"badge badge-pill badge-danger\">admin</span>\n                                <span *ngIf=\"row.userType > 1\" class=\"badge badge-pill badge-info\">user</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Edit</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-success\" (click)=\"openModal(editUser)\">\n                                    <i class=\"fas fa-edit text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-warning\">\n                                    <i class=\"fas fa-trash text-white\"></i>\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #createUser>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"modal-title-default\">\n            Create New User\n        </h6>\n\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\"> × </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <form [formGroup]=\"registerForm\">\n            <div class=\"form-group\">\n                <label class=\"form-control-label\">Name</label>\n                <input \n                  class=\"form-control\"\n                  placeholder=\"Enter name\"\n                  formControlName=\"name\"\n                  type=\"text\"\n                >\n                <ng-container *ngFor=\"let message of registerFormMessages.name\">\n                    <div *ngIf=\"registerForm.get('name').hasError(message.type) && (registerForm.get('name').dirty || registerForm.get('name').touched)\">\n                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"form-group\">\n                <label class=\"form-control-label\">Email</label>\n                <input \n                  class=\"form-control\"\n                  placeholder=\"Enter email\"\n                  formControlName=\"email\"\n                  type=\"text\"\n                >\n                <ng-container *ngFor=\"let message of registerFormMessages.email\">\n                    <div *ngIf=\"registerForm.get('email').hasError(message.type) && (registerForm.get('email').dirty || registerForm.get('email').touched)\">\n                        <p class=\"error-message\"><span>{{ message.message }}</span></p>\n                    </div>\n                </ng-container>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button \n            class=\"btn btn-success\"\n            type=\"button\"\n            (click)=\"confirm()\"\n            [disabled]=\"!registerForm.valid\"\n        >\n            Create\n        </button>\n\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Close\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #updateUser>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"modal-title-default\">\n            Update\n        </h6>\n\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\"> × </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <form [formGroup]=\"registerForm\">\n            <div class=\"form-group\">\n                <label class=\"form-control-label\">Name</label>\n                <input \n                  class=\"form-control\"\n                  placeholder=\"PlaceholderName\"\n                  formControlName=\"name\"\n                  type=\"text\" disabled\n                >\n            </div>\n            <div class=\"form-group\">\n                <label class=\"form-control-label\">Email</label>\n                <input \n                  class=\"form-control\"\n                  placeholder=\"PlaceholderMail\"\n                  formControlName=\"email\"\n                  type=\"text\" disabled\n                >\n            </div>\n            <div class=\"form-group\">\n                <label class=\"form-control-label\">Land Status</label>\n                <div class=\" custom-control custom-radio mb-3\">\n                    <input class=\" custom-control-input\" id=\"customRadio51\"\n                        name=\"custom-radio-11\" type=\"radio\" />\n                    <label class=\" custom-control-label\" for=\"customRadio51\">\n                        Active\n                    </label>\n                </div>\n                <div class=\" custom-control custom-radio mb-3\">\n                    <input class=\" custom-control-input\" id=\"customRadio61\"\n                        name=\"custom-radio-11\" type=\"radio\" />\n                    <label class=\" custom-control-label\" for=\"customRadio61\">\n                        Inactive\n                    </label>\n                </div>\n            </div>\n        </form>\n\n    </div>\n\n    <div class=\"modal-footer\">\n        <button \n            class=\"btn btn-success\"\n            type=\"button\"\n            (click)=\"confirm()\"\n        >\n            Create\n        </button>\n\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Close\n        </button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/payment/payment.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/payment/payment.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"header-body\">\n\t\t\t<div class=\"row align-items-center py-4\">\n\t\t\t\t<div class=\"col-lg-6 col-7\">\n\t\t\t\t\t<h6 class=\"h2 text-dark d-inline-block mb-0\">Payment</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-cash-register text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Payment </a>\n                            </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Bill Presentment</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartBill0\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Bill Presentment</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartBill1\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Bill Presentment</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-5\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-5\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                        <div class= \"col-sm-12 col-md-1 pb-4\">\n                            <a class=\"btn btn-success text-white\">Register</a>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"num\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Number</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"lang\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Language</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"val\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Currentcy</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"accNum\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Acc. Num.</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"totDue\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Tot. Due</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"date\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Created</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Export</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-info text-white\">\n                                    CSV\n                                </a>\n                                <a class=\"btn btn-sm btn-success text-white\">\n                                    PDF\n                                </a>\n                                <a class=\"btn btn-sm btn-warning text-white\">\n                                    HTML\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Action</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-info\">\n                                    <i class=\"fas fa-eye text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-success\">\n                                    <i class=\"fas fa-edit text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-warning\">\n                                    <i class=\"fas fa-trash text-white\"></i>\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col-lg-6 col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-blue\">\n                    <h3 class=\"m-0 text-white\">Credit Card<img class=\"logo\" [src]=\"imgLogo\"></h3>\n                </div>\n                <div class=\"card-body bg-blue\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-user\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name on Card\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fas fa-credit-card\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Card Number\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon3\"><i class=\"fas fa-calendar-alt\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"DD/MM/YYYY\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon4\"><i class=\"fas fa-unlock\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"CCV\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12\">\n                            <a class=\"button btn btn-info text-white justify-content-center\">Pay</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-lg-6 col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-blue\">\n                    <h3 class=\"m-0 pt-2 pb-3 text-white\">Online banking</h3>\n                </div>\n                <div class=\"card-body bg-blue\">\n                    <div class=\"row\">\n                        <div class=\"col-12\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fas fa-user\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name on Card\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fas fa-credit-card\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Card Number\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon3\"><i class=\"fas fa-calendar-alt\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"DD/MM/YYYY\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                        <span class=\"input-group-text\" id=\"basic-addon4\"><i class=\"fas fa-unlock\"></i></span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"CCV\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-12\">\n                            <a class=\"button btn btn-info text-white justify-content-center\">Pay</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/report/report.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/report/report.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-6\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Reporting</h6>\n\n                    <nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n                        <ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n                            <li class=\" breadcrumb-item\">\n                                <a href=\"javascript:void(0)\"> <i class=\"fas fa-chart-bar text-dark\"> </i> </a>\n                            </li>\n                            <li aria-current=\"page\" class=\"breadcrumb-item active\">\n                                Reporting\n                            </li>\n                        </ol>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid mt--6\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Reporting Tool</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12 col-lg-5\">\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\">Report type</label>\n                                <select class=\"form-control custom-select\">\n                                    <option hidden selected>Please pick</option>\n                                    <option>Report 1</option>\n                                    <option>Report 2</option>\n                                    <option>Report 3</option>\n                                    <option>Report 4</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-5\">\n                            <div class=\"form-group\">\n                                <label class=\"form-control-label\">Date range</label>\n                                <div class=\"input-group\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\"><i class=\"far fa-calendar-alt\"></i></span>\n                                    </div>\n                                    <input \n                                        type=\"text\"\n                                        class=\"form-control\"\n                                        bsDaterangepicker\n                                        [bsConfig]=\"bsDPConfig\"\n                                        placeholder=\"Date range\"\n                                        name=\"bsDaterangepicker\"\n                                    >\n                                  </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-12 col-lg-2 d-flex align-items-center\">\n                            <button class=\"btn btn-default\" type=\"button\">Search</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Report 1</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartdiv\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Report 2</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartdiv1\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Report 3</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartdiv2\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-12 col-lg-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Report 4</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartdiv3\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/roles/roles.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/roles/roles.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Roles</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-user-tag text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Roles </a>\n                              </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n\n                <div class=\"col-lg-6 col-5 text-right text-white\">\n\t\t\t\t\t<a class=\"btn btn-sm btn-primary\" (click)=\"openModal(regRoles)\">\n\t\t\t\t\t\tAdd New Roles\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n            </div>\n\n            <div class=\"row\">\n\t\t\t\t<div class=\"col-xl-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card card-stats\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\tTotal Roles\n\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t<span class=\"h2 font-weight-bold mb-0\"> 2 </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon icon-shape bg-gradient-red text-white rounded-circle shadow\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-user-tag\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-xl-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card card-stats\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\tPerformance\n\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t<span class=\"h2 font-weight-bold mb-0\"> 2,356 </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon icon-shape bg-gradient-orange text-white rounded-circle shadow\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-star-half-alt\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-xl-4 col-sm-12\">\n\t\t\t\t\t<div class=\"card card-stats\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h5 class=\"card-title text-uppercase text-muted mb-0\">\n\t\t\t\t\t\t\t\t\t\tTotal Traffic\n\t\t\t\t\t\t\t\t\t</h5>\n\n\t\t\t\t\t\t\t\t\t<span class=\"h2 font-weight-bold mb-0\"> 924 </span>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-auto\">\n\t\t\t\t\t\t\t\t\t<div class=\"icon icon-shape bg-gradient-green text-white rounded-circle shadow\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fas fa-traffic-light\"></i>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <div class=\"row\">\n                        <h3 class=\"m-0\">List of Users' Roles</h3>\n                    </div>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n                        <ngx-datatable-column name=\"num\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>No.</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"userName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Username</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"crud\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Permission</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.crud == '1111'\">\n                                    Create <i class=\"far fa-check-circle text-success\"></i><br>\n                                    Read <i class=\"far fa-check-circle text-success\"></i><br>\n                                    Update <i class=\"far fa-check-circle text-success\"></i><br>\n                                    Delete <i class=\"far fa-check-circle text-success\"></i>\n                                </span>\n                                <span *ngIf=\"row.crud == '0110'\">\n                                    Create <i class=\"far fa-times-circle text-warning\"></i><br>\n                                    Read <i class=\"far fa-check-circle text-success\"></i><br>\n                                    Update <i class=\"far fa-check-circle text-success\"></i><br>\n                                    Delete <i class=\"far fa-times-circle text-warning\"></i>\n                                </span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"date\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Created</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Edit</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-success\" (click)=\"openModal(editRoles)\">\n                                    <i class=\"fas fa-edit text-white\"></i>\n                                </a>\n                                <a class=\"btn btn-sm btn-warning\">\n                                    <i class=\"fas fa-trash text-white\"></i>\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #regRoles>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"compInfo\">\n            Register New Roles\n        </h6>\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\">&times; </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Role Name</label>\n                    <input class=\"form-control\" placeholder=\"Role Name\" formControlName=\"rolename\" type=\"text\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Cancel\n        </button>\n\n        <button \n            class=\"btn btn-success\"\n            type=\"button\"\n        >\n            Submit\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #editRoles>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"compInfo\">\n            Edit User\n        </h6>\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\">&times; </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Name</label>\n                    <input class=\"form-control\" placeholder=\"Admin\" formControlName=\"username\" type=\"text\" disabled>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-3\">\n                            <label class=\"custom-toggle custom-toggle-default\">\n                                <input type=\"checkbox\" checked=\"\">\n                                <span class=\"custom-toggle-slider rounded-circle\" data-label-off=\"OFF\" data-label-on=\"ON\"></span>\n                            </label>\n                        </div>\n                        <div class=\"ml-3\">Create</div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-3\">\n                            <label class=\"custom-toggle custom-toggle-default\">\n                                <input type=\"checkbox\" checked=\"\">\n                                <span class=\"custom-toggle-slider rounded-circle\" data-label-off=\"OFF\" data-label-on=\"ON\"></span>\n                            </label>\n                        </div>\n                        <div class=\"ml-3\">Update</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-3\">\n                            <label class=\"custom-toggle custom-toggle-default\">\n                                <input type=\"checkbox\" checked=\"\">\n                                <span class=\"custom-toggle-slider rounded-circle\" data-label-off=\"OFF\" data-label-on=\"ON\"></span>\n                            </label>\n                        </div>\n                        <div class=\"ml-3\">Read</div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-3\">\n                            <label class=\"custom-toggle custom-toggle-default\">\n                                <input type=\"checkbox\" checked=\"\">\n                                <span class=\"custom-toggle-slider rounded-circle\" data-label-off=\"OFF\" data-label-on=\"ON\"></span>\n                            </label>\n                        </div>\n                        <div class=\"ml-3\">Delete</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Cancel\n        </button>\n\n        <button \n            class=\"btn btn-success\"\n            type=\"button\"\n        >\n            Submit\n        </button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/training-needs/training-needs.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/training-needs/training-needs.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Requirement</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fas fa-th-list text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Training </a>\n                              </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Weekly Traffic</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartWeekTraf\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col col-sm-6\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Monthly Traffic</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartMonthTraf\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Training Analysis</h3>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartNeedAnalyze\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/training-overview/training-overview.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/training-overview/training-overview.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n    <div class=\"container-fluid\">\n        <div class=\"header-body\">\n            <div class=\"row align-items-center py-4\">\n                <div class=\"col-lg-6 col-7\">\n                    <h6 class=\"h2 text-dark d-inline-block mb-0\">Overview</h6>\n\n\t\t\t\t\t<nav aria-label=\"breadcrumb\" class=\" d-none d-md-inline-block ml-md-4\">\n\t\t\t\t\t\t<ol class=\"breadcrumb breadcrumb-links breadcrumb-dark\">\n\t\t\t\t\t\t\t<li class=\" breadcrumb-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"> <i class=\"fab fa-leanpub text-dark\"> </i> </a>\n\t\t\t\t\t\t\t</li>\n                            <li class=\"breadcrumb-item\">\n                                <a href=\"javascript:void(0)\" class=\"text-dark\"> Training </a>\n                              </li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t</nav>\n                </div>\n                <div class=\"col-lg-6 col-5 text-right text-white\">\n\t\t\t\t\t<a class=\"btn btn-sm btn-primary\" (click)=\"openModal(newTraining)\">\n\t\t\t\t\t\tNew Training\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container-fluid\">\n    <div class=\"row row\">\n        <div class=\"col col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Training Analysis</h3>\n                </div>\n                <div class=\"card-body\">\n                    <h4 class=\"m-0\">Training Objective Achievement</h4>\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartObjAchieve\"></div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <h4 class=\"m-0\">Relation With Daily Task</h4>\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartRelDaily\"></div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <h4 class=\"m-0\">Facilities and Food</h4>\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartFacFood\"></div>\n                    </div>\n                </div>\n                <div class=\"card-body\">\n                    <h4 class=\"m-0\">Instructor Evaluation</h4>\n                    <div class=\"chart\">\n                        <div class=\"amchart\" id=\"chartInsEva\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row row\">\n        <div class=\"col\">\n            <div class=\"card\">\n                <div class=\"card-header bg-secondary\">\n                    <h3 class=\"m-0\">Training List</h3>\n                </div>\n                <div class=\"dataTables_wrapper py-4\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-8\">\n                            <div class=\"dataTables_length\" id=\"datatable_length\">\n                                <label>\n                                    Show\n                                    <select \n                                        name=\"datatable_length\"\n                                        aria-controls=\"datatable\"\n                                        class=\"form-control form-control-sm\"\n                                        (change)=\"entriesChange($event)\"\n                                    >\n                                        <option value=\"5\" [selected]=\"tableEntries==5\">5</option>\n                                        <option value=\"10\" [selected]=\"tableEntries==10\">10</option>\n                                        <option value=\"15\" [selected]=\"tableEntries==15\">15</option>\n                                        <option value=\"-1\" [selected]=\"tableEntries==-1\">All</option>\n                                    </select>\n                                    records\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                                <label>\n                                    <input \n                                        type=\"search\"\n                                        class=\"form-control form-control-sm\"\n                                        placeholder=\"Search records\"\n                                        aria-controls=\"datatable\"\n                                        (keyup)=\"filterTable($event)\" \n                                    />\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\"><div class=\"col\">\n                    <ngx-datatable \n                        class=\"bootstrap selection-cell\"\n                        [columnMode]=\"'force'\"\n                        [headerHeight]=\"50\"\n                        [footerHeight]=\"50\" \n                        [rowHeight]=\"'auto'\"\n                        [selected]=\"tableSelected\"\n                        [selectionType]=\"'multiClick'\"\n                        [limit]=\"tableEntries != -1 ? tableEntries:undefined\"\n                        [rows]=\"tableTemp\" \n                        (activate)=\"onActivate($event)\"\n                    >\n\n                        <ngx-datatable-column name=\"trainid\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Training ID</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainName\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Training Title</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainPart\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Participant</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainSdate\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Start Date</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainEdate\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>End Date</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column name=\"trainStat\">\n                            <ng-template ngx-datatable-header-template>\n                                <span>Status</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <span *ngIf=\"row.trainStat == 1\" class=\"badge badge-pill badge-info\">open</span>\n                                <span *ngIf=\"row.trainStat == 2\" class=\"badge badge-pill badge-danger\">closed</span>\n                            </ng-template>\n                        </ngx-datatable-column>\n                        <ngx-datatable-column>\n                            <ng-template ngx-datatable-header-template>\n                                <span>Views</span>\n                            </ng-template>\n                            <ng-template let-row=\"row\" ngx-datatable-cell-template>\n                                <a class=\"btn btn-sm btn-primary text-white\" (click)=\"openModal(viewTraining)\">\n                                   View\n                                </a>\n                            </ng-template>\n                        </ngx-datatable-column>\n                    </ngx-datatable>\n                    </div></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #viewTraining>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"compInfo\">\n            Training Details\n        </h6>\n\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\">&times; </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Title</label>\n                    <input class=\"form-control\" placeholder=\"Training Title\"\n                        formControlName=\"regDate\" type=\"text\" disabled>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Description</label>\n                    <input class=\"form-control\" placeholder=\"Description\"\n                        formControlName=\"regDate\" type=\"text\" disabled>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Start Date</label>\n                    <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"11/06/2020\" disabled>\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Expected End Date</label>\n                    <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"12/06/2020\" disabled>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"card\">\n                    <div class=\"card-header\">\n                        <h4>Participant</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <table class=\"table\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">No.</th>\n                                    <th scope=\"col\">Participant Name</th>\n                                    <th scope=\"col\">Email</th>\n                                    <th scope=\"col\">Contact</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">1</th>\n                                    <td>Hafizi Imran</td>\n                                    <td>hafiziimran@gmail.com</td>\n                                    <td>xxx-xxx xxxx</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">2</th>\n                                    <td>Alif Aiman</td>\n                                    <td>alifaiman@gmail.com</td>\n                                    <td>xxx-xxx xxxx</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">3</th>\n                                    <td>Anis Rahman</td>\n                                    <td>anisrahman@gmail.com</td>\n                                    <td>xxx-xxx xxxx</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Close\n        </button>\n    </div>\n</ng-template>\n\n<ng-template #newTraining>\n    <div class=\"modal-header bg-default\">\n        <h6 class=\"modal-title text-white my-auto\" id=\"compInfo\">\n            Create New Trainings\n        </h6>\n\n        <button\n            aria-label=\"Close\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            <span aria-hidden=\"true\" class=\"text-white my-auto\">&times; </span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Title</label>\n                    <input class=\"form-control\" placeholder=\"Training Title\"\n                        formControlName=\"regDate\" type=\"text\">\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Description</label>\n                    <input class=\"form-control\" placeholder=\"Description\"\n                        formControlName=\"regDate\" type=\"text\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Start Date</label>\n                    <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                </div>\n            </div>\n            <div class=\"col-6\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label\">Expected End Date</label>\n                    <input type=\"date\" class=\"form-control\" required=\"\" placeholder=\"1/1/2020\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button\n            class=\"btn btn-outline-success ml-1\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Register\n        </button>\n        <button\n            class=\"btn btn-outline-danger ml-auto\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"closeModal()\"\n        >\n            Close\n        </button>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./src/app/core/admin/admin.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/admin/admin.module.ts ***!
  \********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin.routing */ "./src/app/core/admin/admin.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _management_audit_management_audit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./management-audit/management-audit.component */ "./src/app/core/admin/management-audit/management-audit.component.ts");
/* harmony import */ var _management_user_management_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./management-user/management-user.component */ "./src/app/core/admin/management-user/management-user.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report/report.component */ "./src/app/core/admin/report/report.component.ts");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./calender/calender.component */ "./src/app/core/admin/calender/calender.component.ts");
/* harmony import */ var _depo_class_depo_class_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./depo-class/depo-class.component */ "./src/app/core/admin/depo-class/depo-class.component.ts");
/* harmony import */ var _depo_course_depo_course_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./depo-course/depo-course.component */ "./src/app/core/admin/depo-course/depo-course.component.ts");
/* harmony import */ var _depo_train_prov_depo_train_prov_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./depo-train-prov/depo-train-prov.component */ "./src/app/core/admin/depo-train-prov/depo-train-prov.component.ts");
/* harmony import */ var _depository_depository_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./depository/depository.component */ "./src/app/core/admin/depository/depository.component.ts");
/* harmony import */ var _doc_dontrol_doc_dontrol_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./doc-dontrol/doc-dontrol.component */ "./src/app/core/admin/doc-dontrol/doc-dontrol.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/core/admin/exam/exam.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/core/admin/payment/payment.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/core/admin/roles/roles.component.ts");
/* harmony import */ var _training_needs_training_needs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./training-needs/training-needs.component */ "./src/app/core/admin/training-needs/training-needs.component.ts");
/* harmony import */ var _training_overview_training_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./training-overview/training-overview.component */ "./src/app/core/admin/training-overview/training-overview.component.ts");

























var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _management_audit_management_audit_component__WEBPACK_IMPORTED_MODULE_11__["ManagementAuditComponent"],
                _management_user_management_user_component__WEBPACK_IMPORTED_MODULE_12__["ManagementUserComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"],
                _calender_calender_component__WEBPACK_IMPORTED_MODULE_14__["CalenderComponent"],
                _depo_class_depo_class_component__WEBPACK_IMPORTED_MODULE_15__["DepoClassComponent"],
                _depo_course_depo_course_component__WEBPACK_IMPORTED_MODULE_16__["DepoCourseComponent"],
                _depo_train_prov_depo_train_prov_component__WEBPACK_IMPORTED_MODULE_17__["DepoTrainProvComponent"],
                _depository_depository_component__WEBPACK_IMPORTED_MODULE_18__["DepositoryComponent"],
                _doc_dontrol_doc_dontrol_component__WEBPACK_IMPORTED_MODULE_19__["DocDontrolComponent"],
                _exam_exam_component__WEBPACK_IMPORTED_MODULE_20__["ExamComponent"],
                _payment_payment_component__WEBPACK_IMPORTED_MODULE_21__["PaymentComponent"],
                _roles_roles_component__WEBPACK_IMPORTED_MODULE_22__["RolesComponent"],
                _training_needs_training_needs_component__WEBPACK_IMPORTED_MODULE_23__["TrainingNeedsComponent"],
                _training_overview_training_overview_component__WEBPACK_IMPORTED_MODULE_24__["TrainingOverviewComponent"]
            ],
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
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(_admin_routing__WEBPACK_IMPORTED_MODULE_9__["AdminRoutes"])
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/core/admin/admin.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/core/admin/admin.routing.ts ***!
  \*********************************************/
/*! exports provided: AdminRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutes", function() { return AdminRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _management_audit_management_audit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./management-audit/management-audit.component */ "./src/app/core/admin/management-audit/management-audit.component.ts");
/* harmony import */ var _management_user_management_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management-user/management-user.component */ "./src/app/core/admin/management-user/management-user.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report/report.component */ "./src/app/core/admin/report/report.component.ts");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calender/calender.component */ "./src/app/core/admin/calender/calender.component.ts");
/* harmony import */ var _depo_class_depo_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./depo-class/depo-class.component */ "./src/app/core/admin/depo-class/depo-class.component.ts");
/* harmony import */ var _depo_course_depo_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./depo-course/depo-course.component */ "./src/app/core/admin/depo-course/depo-course.component.ts");
/* harmony import */ var _depo_train_prov_depo_train_prov_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./depo-train-prov/depo-train-prov.component */ "./src/app/core/admin/depo-train-prov/depo-train-prov.component.ts");
/* harmony import */ var _doc_dontrol_doc_dontrol_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doc-dontrol/doc-dontrol.component */ "./src/app/core/admin/doc-dontrol/doc-dontrol.component.ts");
/* harmony import */ var _exam_exam_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./exam/exam.component */ "./src/app/core/admin/exam/exam.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment/payment.component */ "./src/app/core/admin/payment/payment.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/core/admin/roles/roles.component.ts");
/* harmony import */ var _training_needs_training_needs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./training-needs/training-needs.component */ "./src/app/core/admin/training-needs/training-needs.component.ts");
/* harmony import */ var _training_overview_training_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./training-overview/training-overview.component */ "./src/app/core/admin/training-overview/training-overview.component.ts");















var AdminRoutes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
            },
            {
                path: 'trainOverview',
                component: _training_overview_training_overview_component__WEBPACK_IMPORTED_MODULE_14__["TrainingOverviewComponent"]
            },
            {
                path: 'exam',
                component: _exam_exam_component__WEBPACK_IMPORTED_MODULE_10__["ExamComponent"]
            },
            {
                path: 'trainNeeds',
                component: _training_needs_training_needs_component__WEBPACK_IMPORTED_MODULE_13__["TrainingNeedsComponent"]
            },
            {
                path: 'calender',
                component: _calender_calender_component__WEBPACK_IMPORTED_MODULE_5__["CalenderComponent"]
            },
            {
                path: 'docControl',
                component: _doc_dontrol_doc_dontrol_component__WEBPACK_IMPORTED_MODULE_9__["DocDontrolComponent"]
            },
            {
                path: 'depository',
                children: [
                    {
                        path: 'depo-course',
                        component: _depo_course_depo_course_component__WEBPACK_IMPORTED_MODULE_7__["DepoCourseComponent"]
                    },
                    {
                        path: 'depo-class',
                        component: _depo_class_depo_class_component__WEBPACK_IMPORTED_MODULE_6__["DepoClassComponent"]
                    },
                    {
                        path: 'depo-train-prov',
                        component: _depo_train_prov_depo_train_prov_component__WEBPACK_IMPORTED_MODULE_8__["DepoTrainProvComponent"]
                    }
                ]
            },
            {
                path: 'user',
                component: _management_user_management_user_component__WEBPACK_IMPORTED_MODULE_3__["ManagementUserComponent"]
            },
            {
                path: 'roles',
                component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_12__["RolesComponent"]
            },
            {
                path: 'payment',
                component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__["PaymentComponent"]
            },
            {
                path: 'report',
                component: _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]
            },
            {
                path: 'audit-trails',
                component: _management_audit_management_audit_component__WEBPACK_IMPORTED_MODULE_2__["ManagementAuditComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/core/admin/calender/calender.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/admin/calender/calender.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vY2FsZW5kZXIvY2FsZW5kZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/admin/calender/calender.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/admin/calender/calender.component.ts ***!
  \***********************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/core */ "./node_modules/@fullcalendar/core/main.esm.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.esm.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.esm.js");







var CalenderComponent = /** @class */ (function () {
    function CalenderComponent(modalService, zone) {
        this.modalService = modalService;
        this.zone = zone;
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
    CalenderComponent.prototype.changeView = function (newView) {
        this.calendar.changeView(newView);
        currentDate: this.calendar.view.title;
    };
    CalenderComponent.prototype.ngOnInit = function () {
        this.initCalendar();
    };
    CalenderComponent.prototype.initCalendar = function () {
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
    CalenderComponent.prototype.getNewEventTitle = function (e) {
        this.eventTitle = e.target.value;
    };
    CalenderComponent.prototype.getNewEventDescription = function (e) {
        this.eventDescription = e.target.value;
    };
    CalenderComponent.prototype.addNewEvent = function () {
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
    CalenderComponent.prototype.deleteEventSweetAlert = function () {
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
    CalenderComponent.prototype.updateEvent = function () {
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
    CalenderComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalAdd"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CalenderComponent.prototype, "modalAdd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("modalEdit"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CalenderComponent.prototype, "modalEdit", void 0);
    CalenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calender',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/calender/calender.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calender.component.scss */ "./src/app/core/admin/calender/calender.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/admin/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/admin/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/admin/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(zone) {
        this.zone = zone;
        this.clicked = true;
        this.clicked1 = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart) {
                console.log('Chart disposed');
                _this.chart.dispose();
            }
            if (_this.chart1) {
                console.log('Chart disposed');
                _this.chart1.dispose();
            }
        });
    };
    DashboardComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChart();
            _this.getChart1();
        });
    };
    DashboardComponent.prototype.getChart = function () {
        var container = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdiv", _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Container"]);
        container.layout = "grid";
        container.fixedWidthGrid = false;
        container.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](100);
        container.height = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](100);
        // Color set
        var colors = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["ColorSet"]();
        // Functions that create various sparklines
        function createLine(title, data, color) {
            var chart = container.createChild(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
            chart.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](45);
            chart.height = 70;
            chart.data = data;
            chart.titles.template.fontSize = 10;
            chart.titles.template.textAlign = "start";
            chart.titles.template.isMeasured = false;
            chart.titles.create().text = title;
            chart.padding(20, 5, 2, 5);
            var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.startLocation = 0.5;
            dateAxis.endLocation = 0.7;
            dateAxis.cursorTooltipEnabled = false;
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.min = 0;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.cursorTooltipEnabled = false;
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
            chart.cursor.lineY.disabled = true;
            chart.cursor.behavior = "none";
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
            series.tooltipText = "{date}: [bold]{value}";
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.tensionX = 0.8;
            series.strokeWidth = 2;
            series.stroke = color;
            // render data points as bullets
            var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
            bullet.circle.opacity = 0;
            bullet.circle.fill = color;
            bullet.circle.propertyFields.opacity = "opacity";
            bullet.circle.radius = 3;
            return chart;
        }
        function createColumn(title, data, color) {
            var chart = container.createChild(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
            chart.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](45);
            chart.height = 70;
            chart.data = data;
            chart.titles.template.fontSize = 10;
            chart.titles.template.textAlign = "start";
            chart.titles.template.isMeasured = false;
            chart.titles.create().text = title;
            chart.padding(20, 5, 2, 5);
            var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["DateAxis"]());
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.cursorTooltipEnabled = false;
            var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
            valueAxis.min = 0;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.cursorTooltipEnabled = false;
            chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
            chart.cursor.lineY.disabled = true;
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.tooltipText = "{date}: [bold]{value}";
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.strokeWidth = 0;
            series.fillOpacity = 0.5;
            series.columns.template.propertyFields.fillOpacity = "opacity";
            series.columns.template.fill = color;
            return chart;
        }
        function createPie(data, color) {
            var chart = container.createChild(_amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
            chart.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](10);
            chart.height = 70;
            chart.padding(20, 0, 2, 0);
            chart.data = data;
            // Add and configure Series
            var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            pieSeries.slices.template.fill = color;
            pieSeries.slices.template.adapter.add("fill", function (fill, target) {
                return fill.lighten(0.1 * target.dataItem.index);
            });
            pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
            // chart.chartContainer.minHeight = 40;
            // chart.chartContainer.minWidth = 40;
            return chart;
        }
        createLine("(Price)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 57 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 27 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 24 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 59 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 33 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 46 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 20 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 42 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 59, "opacity": 1 }
        ], colors.getIndex(0));
        createColumn("(Turnover)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 22 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 25 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 40 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 35 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 1 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 15 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
        ], colors.getIndex(0));
        createPie([
            { "category": "Marketing", "value": 501 },
            { "category": "Research", "value": 301 },
            { "category": "Sales", "value": 201 },
            { "category": "HR", "value": 165 }
        ], colors.getIndex(0));
        createLine("(Price)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 22 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 25 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 40 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 35 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 1 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 15 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
        ], colors.getIndex(1));
        createColumn("(Turnover)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 57 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 27 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 24 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 59 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 33 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 46 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 20 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 42 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 59, "opacity": 1 }
        ], colors.getIndex(1));
        createPie([
            { "category": "Data 1", "value": 130 },
            { "category": "Data 2", "value": 450 },
            { "category": "Data 3", "value": 400 },
            { "category": "Data 4", "value": 200 }
        ], colors.getIndex(1));
        createLine("(Price)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 16 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 62 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 55 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 34 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 28 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 32 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 30, "opacity": 1 }
        ], colors.getIndex(2));
        createColumn("(Turnover)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 50 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 51 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 62 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 60 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 25 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 20 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 70 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 42 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
        ], colors.getIndex(2));
        createPie([
            { "category": "Data 1", "value": 220 },
            { "category": "Data 2", "value": 200 },
            { "category": "Data 3", "value": 150 },
            { "category": "Data 4", "value": 125 }
        ], colors.getIndex(2));
        // FB
        createLine("(Price)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 52 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 55 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 35 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 34 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 39 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 42 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 22 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 15, "opacity": 1 }
        ], colors.getIndex(3));
        createColumn("(Turnover)", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 20 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 20 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 25 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 26 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 27 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 25 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 32 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 30, "opacity": 1 }
        ], colors.getIndex(3));
        createPie([
            { "category": "Data 1", "value": 120 },
            { "category": "Data 2", "value": 150 },
            { "category": "Data 3", "value": 125 },
            { "category": "Data 4", "value": 250 }
        ], colors.getIndex(3));
        this.chart = container;
    };
    DashboardComponent.prototype.getChart1 = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartdiv1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = [
            {
                item: "Lights",
                value: 40
            },
            {
                item: "Fridge",
                value: 30
            },
            {
                item: "TV",
                value: 20
            },
            {
                item: "Washing Machine",
                value: 16
            }
        ];
        chart.radius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](70);
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["percent"](40);
        chart.startAngle = 180;
        chart.endAngle = 360;
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        series.dataFields.value = "value";
        series.dataFields.category = "item";
        series.ticks.template.disabled = true;
        series.labels.template.disabled = true;
        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;
        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;
        //chart.legend = new am4charts.Legend();
        this.chart1 = chart;
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/core/admin/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/depo-class/depo-class.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/admin/depo-class/depo-class.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZGVwby1jbGFzcy9kZXBvLWNsYXNzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/admin/depo-class/depo-class.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/admin/depo-class/depo-class.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectionType, getTabsetConfig, DepoClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabsetConfig", function() { return getTabsetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepoClassComponent", function() { return DepoClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");



var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
function getTabsetConfig() {
    return Object.assign(new ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetConfig"](), { type: 'pills', isKeysAllowed: true });
}
var DepoClassComponent = /** @class */ (function () {
    function DepoClassComponent() {
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                trainid: "1",
                trainName: "Class A73",
                trainSdate: "23/6/2020 2:00 PM",
                trainVenue: "KL",
                trainDur: "5 days",
                trainStat: "1"
            },
            {
                trainid: "2",
                trainName: "Class A97",
                trainSdate: "28/3/2020 2:00 PM",
                trainVenue: "Selangor",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "3",
                trainName: "Class A99",
                trainSdate: "30/6/2020 2:00 PM",
                trainVenue: "Johor",
                trainDur: "5 days",
                trainStat: "1"
            },
            {
                trainid: "4",
                trainName: "Class A34",
                trainSdate: "2/5/2020 2:00 PM",
                trainVenue: "KL",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "5",
                trainName: "Class A22",
                trainSdate: "3/4/2020 2:00 PM",
                trainVenue: "Selangor",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "6",
                trainName: "Class A54",
                trainSdate: "24/2/2020 2:00 PM",
                trainVenue: "Johor",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "7",
                trainName: "Class A88",
                trainSdate: "1/2/2021 2:00 PM",
                trainVenue: "KL",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "8",
                trainName: "Class A14",
                trainSdate: "3/4/2020 2:00 PM",
                trainVenue: "Selangor",
                trainDur: "5 days",
                trainStat: "1"
            },
            {
                trainid: "9",
                trainName: "Class A01",
                trainSdate: "1/1/2021 2:00 PM",
                trainVenue: "Johor",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "10",
                trainName: "Class A62",
                trainSdate: "3/4/2020 2:00 PM",
                trainVenue: "KL",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "11",
                trainName: "Class A51",
                trainSdate: "2/4/2020 2:00 PM",
                trainVenue: "Selangor",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "12",
                trainName: "Class A32",
                trainSdate: "21/5/2021 2:00 PM",
                trainVenue: "Johor",
                trainDur: "5 days",
                trainStat: "2"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    DepoClassComponent.prototype.selectTab = function (tabId) {
        if (this.staticTabs.tabs)
            this.staticTabs.tabs[tabId].active = true;
    };
    DepoClassComponent.prototype.ngOnInit = function () {
    };
    DepoClassComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    DepoClassComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    DepoClassComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('staticTabs', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"])
    ], DepoClassComponent.prototype, "staticTabs", void 0);
    DepoClassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depo-class',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./depo-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-class/depo-class.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./depo-class.component.scss */ "./src/app/core/admin/depo-class/depo-class.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DepoClassComponent);
    return DepoClassComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/depo-course/depo-course.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/admin/depo-course/depo-course.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZGVwby1jb3Vyc2UvZGVwby1jb3Vyc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/admin/depo-course/depo-course.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/admin/depo-course/depo-course.component.ts ***!
  \*****************************************************************/
/*! exports provided: SelectionType, getTabsetConfig, DepoCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTabsetConfig", function() { return getTabsetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepoCourseComponent", function() { return DepoCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");



var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
function getTabsetConfig() {
    return Object.assign(new ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetConfig"](), { type: 'pills', isKeysAllowed: true });
}
var DepoCourseComponent = /** @class */ (function () {
    function DepoCourseComponent() {
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                trainid: "1",
                trainName: "Training A73",
                trainPart: "07",
                trainSdate: "23/6/2020",
                trainEdate: "3/6/2021",
                trainDur: "5 days",
                trainStat: "1"
            },
            {
                trainid: "2",
                trainName: "Training A97",
                trainPart: "67",
                trainSdate: "28/3/2020",
                trainEdate: "28/3/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "3",
                trainName: "Training A99",
                trainPart: "29",
                trainSdate: "30/6/2020",
                trainEdate: "30/6/2021",
                trainDur: "5 days",
                trainStat: "1"
            },
            {
                trainid: "4",
                trainName: "Training A34",
                trainPart: "13",
                trainSdate: "2/5/2020",
                trainEdate: "1/5/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "5",
                trainName: "Training A22",
                trainPart: "35",
                trainSdate: "3/4/2020",
                trainEdate: "3/4/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "6",
                trainName: "Training A54",
                trainPart: "64",
                trainSdate: "24/2/2020",
                trainEdate: "22/1/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "7",
                trainName: "Training A88",
                trainPart: "23",
                trainSdate: "1/2/2021",
                trainEdate: "30/4/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "8",
                trainName: "Training A14",
                trainPart: "98",
                trainSdate: "3/4/2020",
                trainEdate: "5/7/2021",
                trainDur: "5 days",
                trainStat: "1"
            },
            {
                trainid: "9",
                trainName: "Training A01",
                trainPart: "10",
                trainSdate: "1/1/2021",
                trainEdate: "2/1/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "10",
                trainName: "Training A62",
                trainPart: "07",
                trainSdate: "3/4/2020",
                trainEdate: "3/8/2020",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "11",
                trainName: "Training A51",
                trainPart: "55",
                trainSdate: "2/4/2020",
                trainEdate: "14/5/2021",
                trainDur: "5 days",
                trainStat: "2"
            },
            {
                trainid: "12",
                trainName: "Training A32",
                trainPart: "01",
                trainSdate: "21/5/2021",
                trainEdate: "22/5/2021",
                trainDur: "5 days",
                trainStat: "2"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    DepoCourseComponent.prototype.selectTab = function (tabId) {
        if (this.staticTabs.tabs)
            this.staticTabs.tabs[tabId].active = true;
    };
    DepoCourseComponent.prototype.ngOnInit = function () {
    };
    DepoCourseComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    DepoCourseComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    DepoCourseComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('staticTabs', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_2__["TabsetComponent"])
    ], DepoCourseComponent.prototype, "staticTabs", void 0);
    DepoCourseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depo-course',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./depo-course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-course/depo-course.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./depo-course.component.scss */ "./src/app/core/admin/depo-course/depo-course.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DepoCourseComponent);
    return DepoCourseComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/depo-train-prov/depo-train-prov.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/core/admin/depo-train-prov/depo-train-prov.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZGVwby10cmFpbi1wcm92L2RlcG8tdHJhaW4tcHJvdi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/admin/depo-train-prov/depo-train-prov.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/admin/depo-train-prov/depo-train-prov.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectionType, DepoTrainProvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepoTrainProvComponent", function() { return DepoTrainProvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");





var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var DepoTrainProvComponent = /** @class */ (function () {
    function DepoTrainProvComponent(zone) {
        this.zone = zone;
        this.modalConfig = {
            keyboard: true,
            class: "modal-lg modal-dialog-centered"
        };
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                name: "Account Sdn. Bhd.",
                dept: "Accounting",
                date: "1/1/2020",
                stat: "1"
            },
            {
                name: "Account Sdn. Bhd.",
                dept: "Accounting",
                date: "2/2/2020",
                stat: "2"
            },
            {
                name: "Account Sdn. Bhd.",
                dept: "Accounting",
                date: "3/3/2020",
                stat: "3"
            },
            {
                name: "Market Sdn. Bhd.",
                dept: "Marketing",
                date: "1/1/2020",
                stat: "1"
            },
            {
                name: "Market Sdn. Bhd.",
                dept: "AccoMarketingunting",
                date: "2/2/2020",
                stat: "2"
            },
            {
                name: "Market Sdn. Bhd.",
                dept: "Marketing",
                date: "3/3/2020",
                stat: "3"
            },
            {
                name: "Develop Sdn. Bhd.",
                dept: "Developer",
                date: "1/1/2020",
                stat: "1"
            },
            {
                name: "Develop Sdn. Bhd.",
                dept: "Developer",
                date: "2/2/2020",
                stat: "2"
            },
            {
                name: "Develop Sdn. Bhd.",
                dept: "Developer",
                date: "3/3/2020",
                stat: "3"
            },
            {
                name: "HR Sdn. Bhd.",
                dept: "Human Resource",
                date: "1/1/2020",
                stat: "1"
            },
            {
                name: "HR Sdn. Bhd.",
                dept: "Human Resource",
                date: "2/2/2020",
                stat: "2"
            },
            {
                name: "HR Sdn. Bhd.",
                dept: "Human Resource",
                date: "3/3/2020",
                stat: "3"
            }
        ];
        this.SelectionType = SelectionType;
        this.tEntries = 5;
        this.tSelected = [];
        this.tTemp = [];
        this.tRows = [
            {
                name: "Ali",
                mail: "Ali@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Ali etc."
            },
            {
                name: "Alif",
                mail: "Alif@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "2",
                summ: "Alif etc."
            },
            {
                name: "Azli",
                mail: "Azli@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "3",
                summ: "Azli etc."
            },
            {
                name: "Alina",
                mail: "Alina@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Alina etc."
            },
            {
                name: "Alwani",
                mail: "Alwani@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Alwani etc."
            },
            {
                name: "Adli",
                mail: "Adli@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Adli etc."
            },
            {
                name: "Alifah",
                mail: "Alifah@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Alifah etc."
            },
            {
                name: "Aiman",
                mail: "Aiman@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Aiman etc."
            },
            {
                name: "Aina",
                mail: "Aina@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Aina etc."
            },
            {
                name: "Aminah",
                mail: "Aminah@gmail.com",
                num: "xxx-xxx xxxx",
                cert: "1",
                stat: "1",
                summ: "Aminah etc."
            }
        ];
        this.tSelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
        this.tTemp = this.tRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    DepoTrainProvComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    DepoTrainProvComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart0) {
                _this.chart0.dispose();
            }
        });
    };
    DepoTrainProvComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChartTrainProv();
        });
    };
    DepoTrainProvComponent.prototype.getChartTrainProv = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartTrainProv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieChart"]);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.data = [
            {
                country: "Lithuania",
                value: 260
            },
            {
                country: "Czechia",
                value: 230
            },
            {
                country: "Ireland",
                value: 200
            },
            {
                country: "Germany",
                value: 165
            },
            {
                country: "Australia",
                value: 139
            },
            {
                country: "Austria",
                value: 128
            }
        ];
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["PieSeries"]());
        series.dataFields.value = "value";
        series.dataFields.radiusValue = "value";
        series.dataFields.category = "country";
        series.slices.template.cornerRadius = 6;
        series.colors.step = 3;
        series.hiddenState.properties.endAngle = -90;
        //chart.legend = new am4charts.Legend();
        this.chart0 = chart;
    };
    DepoTrainProvComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    DepoTrainProvComponent.prototype.ontActivate = function (event) {
        this.tActiveRow = event.row;
    };
    DepoTrainProvComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    DepoTrainProvComponent.prototype.entriesChange1 = function ($event) {
        this.tEntries = $event.target.value;
    };
    DepoTrainProvComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if ( /*isNaN(d[key]) && */d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    DepoTrainProvComponent.prototype.filterTable1 = function ($event) {
        var val = $event.target.value;
        this.tTemp = this.tRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    DepoTrainProvComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    DepoTrainProvComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depo-train-prov',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./depo-train-prov.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depo-train-prov/depo-train-prov.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./depo-train-prov.component.scss */ "./src/app/core/admin/depo-train-prov/depo-train-prov.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], DepoTrainProvComponent);
    return DepoTrainProvComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/depository/depository.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/admin/depository/depository.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZGVwb3NpdG9yeS9kZXBvc2l0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/admin/depository/depository.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/admin/depository/depository.component.ts ***!
  \***************************************************************/
/*! exports provided: DepositoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositoryComponent", function() { return DepositoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DepositoryComponent = /** @class */ (function () {
    function DepositoryComponent() {
    }
    DepositoryComponent.prototype.ngOnInit = function () {
    };
    DepositoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-depository',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./depository.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/depository/depository.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./depository.component.scss */ "./src/app/core/admin/depository/depository.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DepositoryComponent);
    return DepositoryComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/doc-dontrol/doc-dontrol.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/admin/doc-dontrol/doc-dontrol.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZG9jLWRvbnRyb2wvZG9jLWRvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/admin/doc-dontrol/doc-dontrol.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/admin/doc-dontrol/doc-dontrol.component.ts ***!
  \*****************************************************************/
/*! exports provided: SelectionType, DocDontrolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocDontrolComponent", function() { return DocDontrolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var DocDontrolComponent = /** @class */ (function () {
    function DocDontrolComponent() {
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                docName: "R&D Doc A",
                docType: ".pdf",
                department: "Research and Development",
                views: "353",
                lastModi: "12/2/2020"
            },
            {
                docName: "Marketing Doc A",
                docType: ".xsl",
                department: "Marketing",
                views: "114",
                lastModi: "12/2/2020"
            },
            {
                docName: "HR Doc A",
                docType: ".csv",
                department: "Human Resource Management",
                views: "223",
                lastModi: "12/2/2020"
            },
            {
                docName: "R&D Doc B",
                docType: ".csv",
                department: "Research and Development",
                views: "314",
                lastModi: "12/2/2020"
            },
            {
                docName: "Marketing Doc B",
                docType: ".xsl",
                department: "Marketing",
                views: "87",
                lastModi: "12/2/2020"
            },
            {
                docName: "Marketing Doc C",
                docType: ".pdf",
                department: "Marketing",
                views: "92",
                lastModi: "12/2/2020"
            },
            {
                docName: "AccFin Doc A",
                docType: ".csv",
                department: "Accounting and Finance",
                views: "561",
                lastModi: "12/2/2020"
            },
            {
                docName: "R&D Doc C",
                docType: ".pdf",
                department: "Research and Development",
                views: "293",
                lastModi: "12/2/2020"
            },
            {
                docName: "R&D Doc D",
                docType: ".xsl",
                department: "Research and Development",
                views: "319",
                lastModi: "12/2/2020"
            },
            {
                docName: "HR Doc B",
                docType: ".csv",
                department: "Human Resource Management",
                views: "133",
                lastModi: "12/2/2020"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    DocDontrolComponent.prototype.ngOnInit = function () {
    };
    DocDontrolComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    DocDontrolComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    DocDontrolComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if ( /*isNaN(d[key]) && */d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    DocDontrolComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doc-dontrol',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./doc-dontrol.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/doc-dontrol/doc-dontrol.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./doc-dontrol.component.scss */ "./src/app/core/admin/doc-dontrol/doc-dontrol.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DocDontrolComponent);
    return DocDontrolComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/exam/exam.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/admin/exam/exam.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vZXhhbS9leGFtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/admin/exam/exam.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/admin/exam/exam.component.ts ***!
  \***************************************************/
/*! exports provided: SelectionType, ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var ExamComponent = /** @class */ (function () {
    function ExamComponent(modalService, zone) {
        this.modalService = modalService;
        this.zone = zone;
        this.modalConfig = {
            keyboard: true,
            class: "modal-dialog-centered"
        };
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                examid: "EXAM403",
                examName: "Exam 403",
                examDate: "3/6/2020",
                examTime: "6:30 PM"
            },
            {
                examid: "EXAM234",
                examName: "Exam 234",
                examDate: "1/6/2020",
                examTime: "4:30 PM"
            },
            {
                examid: "EXAM714",
                examName: "Exam 714",
                examDate: "12/2/2020",
                examTime: "11:30 AM"
            },
            {
                examid: "EXAM666",
                examName: "Exam 666",
                examDate: "6/6/2020",
                examTime: "2:00 PM"
            },
            {
                examid: "EXAM216",
                examName: "Exam 216",
                examDate: "13/3/2020",
                examTime: "10:30 AM"
            },
            {
                examid: "EXAM111",
                examName: "Exam 111",
                examDate: "1/1/2021",
                examTime: "1:30 PM"
            },
            {
                examid: "EXAM222",
                examName: "Exam 222",
                examDate: "2/2/2022",
                examTime: "2:20 PM"
            },
            {
                examid: "EXAM777",
                examName: "Exam 777",
                examDate: "7/7/2020",
                examTime: "9:30 AM"
            },
            {
                examid: "EXAM123",
                examName: "Exam 123",
                examDate: "3/2/2021",
                examTime: "4:30 PM"
            },
            {
                examid: "EXAM299",
                examName: "Exam 299",
                examDate: "2/9/2020",
                examTime: "1:30 PM"
            },
            {
                examid: "EXAM824",
                examName: "Exam 824",
                examDate: "2/4/2020",
                examTime: "8:30 AM"
            },
            {
                examid: "EXAM370",
                examName: "Exam 270",
                examDate: "30/7/2020",
                examTime: "7:30 PM"
            },
            {
                examid: "EXAM155",
                examName: "Exam 403",
                examDate: "3/6/2020",
                examTime: "6:30 PM"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    ExamComponent.prototype.ngOnInit = function () {
    };
    ExamComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    ExamComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    ExamComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    ExamComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    ExamComponent.prototype.closeModal = function () {
        this.modal.hide();
        //this.registerForm.reset()
    };
    ExamComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ExamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/exam/exam.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exam.component.scss */ "./src/app/core/admin/exam/exam.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/management-audit/management-audit.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/core/admin/management-audit/management-audit.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vbWFuYWdlbWVudC1hdWRpdC9tYW5hZ2VtZW50LWF1ZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/admin/management-audit/management-audit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/admin/management-audit/management-audit.component.ts ***!
  \***************************************************************************/
/*! exports provided: SelectionType, ManagementAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementAuditComponent", function() { return ManagementAuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_mocks_mocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/mocks/mocks.service */ "./src/app/shared/services/mocks/mocks.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");



// import { AuditData } from 'src/assets/mock/admin-audit/audit.data.json'




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__["default"]);
var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var ManagementAuditComponent = /** @class */ (function () {
    function ManagementAuditComponent(mockService, zone) {
        this.mockService = mockService;
        this.zone = zone;
        this.chartJanPost = 0;
        this.chartJanGet = 0;
        this.chartJanUpdate = 0;
        this.chartJanDelete = 0;
        this.chartFebPost = 0;
        this.chartFebGet = 0;
        this.chartFebUpdate = 0;
        this.chartFebDelete = 0;
        this.chartMarchPost = 0;
        this.chartMarchGet = 0;
        this.chartMarchUpdate = 0;
        this.chartMarchDelete = 0;
        this.chartAprPost = 0;
        this.chartAprGet = 0;
        this.chartAprUpdate = 0;
        this.chartAprDelete = 0;
        this.chartMayPost = 0;
        this.chartMayGet = 0;
        this.chartMayUpdate = 0;
        this.chartMayDelete = 0;
        this.chartJunPost = 0;
        this.chartJunGet = 0;
        this.chartJunUpdate = 0;
        this.chartJunDelete = 0;
        this.chartJulPost = 0;
        this.chartJulGet = 0;
        this.chartJulUpdate = 0;
        this.chartJulDelete = 0;
        this.chartAugPost = 0;
        this.chartAugGet = 0;
        this.chartAugUpdate = 0;
        this.chartAugDelete = 0;
        this.chartSepPost = 0;
        this.chartSepGet = 0;
        this.chartSepUpdate = 0;
        this.chartSepDelete = 0;
        this.chartOctPost = 0;
        this.chartOctGet = 0;
        this.chartOctUpdate = 0;
        this.chartOctDelete = 0;
        this.chartNovPost = 0;
        this.chartNovGet = 0;
        this.chartNovUpdate = 0;
        this.chartNovDelete = 0;
        this.chartDecPost = 0;
        this.chartDecGet = 0;
        this.chartDecUpdate = 0;
        this.chartDecDelete = 0;
        // Table
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [];
        this.SelectionType = SelectionType;
        this.getData();
    }
    ManagementAuditComponent.prototype.ngOnInit = function () {
    };
    ManagementAuditComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
        });
    };
    ManagementAuditComponent.prototype.getData = function () {
        var _this = this;
        this.mockService.getAll('admin-audit/audit.data.json').subscribe(function (res) {
            // Success
            _this.tableRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(res);
            _this.tableTemp = _this.tableRows.map(function (prop, key) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
            });
            console.log('Svc: ', _this.tableTemp);
            _this.resetCharts();
            _this.calculateCharts();
        }, function () {
            // Unsuccess
        }, function () {
            // After
            _this.getChart();
        });
    };
    ManagementAuditComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    ManagementAuditComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    ManagementAuditComponent.prototype.onSelect = function (_a) {
        var _b;
        var selected = _a.selected;
        this.tableSelected.splice(0, this.tableSelected.length);
        (_b = this.tableSelected).push.apply(_b, selected);
    };
    ManagementAuditComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    ManagementAuditComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChart();
        });
    };
    ManagementAuditComponent.prototype.getChart = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]('chartdiv', _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);
        chart.colors.step = 2;
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Legend"]();
        chart.legend.position = 'top';
        chart.legend.paddingBottom = 20;
        chart.legend.labels.template.maxWidth = 95;
        var xAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
        xAxis.dataFields.category = 'category';
        xAxis.renderer.cellStartLocation = 0.1;
        xAxis.renderer.cellEndLocation = 0.9;
        xAxis.renderer.grid.template.location = 0;
        var yAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
        yAxis.min = 0;
        function createSeries(value, name) {
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ColumnSeries"]());
            series.dataFields.valueY = value;
            series.dataFields.categoryX = 'category';
            series.name = name;
            series.events.on("hidden", arrangeColumns);
            series.events.on("shown", arrangeColumns);
            var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LabelBullet"]());
            bullet.interactionsEnabled = false;
            bullet.dy = 30;
            bullet.label.text = '{valueY}';
            bullet.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]('#ffffff');
            return series;
        }
        chart.data = [
            {
                category: 'POST',
                jan: this.chartJanPost,
                feb: this.chartFebPost,
                march: this.chartMarchPost,
                apr: this.chartAprPost,
                may: this.chartMayPost,
                Jun: this.chartJunPost,
                jul: this.chartJulPost,
                aug: this.chartAugPost,
                sep: this.chartSepPost,
                oct: this.chartOctPost,
                nov: this.chartNovPost,
                dec: this.chartDecPost
            },
            {
                category: 'GET',
                jan: this.chartJanGet,
                feb: this.chartFebGet,
                march: this.chartMarchGet,
                apr: this.chartAprGet,
                may: this.chartMayGet,
                Jun: this.chartJunGet,
                jul: this.chartJulGet,
                aug: this.chartAugGet,
                sep: this.chartSepGet,
                oct: this.chartOctGet,
                nov: this.chartNovGet,
                dec: this.chartDecGet
            },
            {
                category: 'UPDATE',
                jan: this.chartJanUpdate,
                feb: this.chartFebUpdate,
                march: this.chartMarchUpdate,
                apr: this.chartAprUpdate,
                may: this.chartMayUpdate,
                Jun: this.chartJunUpdate,
                jul: this.chartJulUpdate,
                aug: this.chartAugUpdate,
                sep: this.chartSepUpdate,
                oct: this.chartOctUpdate,
                nov: this.chartNovUpdate,
                dec: this.chartDecUpdate
            },
            {
                category: 'DELETE',
                jan: this.chartJanDelete,
                feb: this.chartFebDelete,
                march: this.chartMarchDelete,
                apr: this.chartAprDelete,
                may: this.chartMayDelete,
                Jun: this.chartJunDelete,
                jul: this.chartJulDelete,
                aug: this.chartAugDelete,
                sep: this.chartSepDelete,
                oct: this.chartOctDelete,
                nov: this.chartNovDelete,
                dec: this.chartDecDelete
            }
        ];
        createSeries('jan', 'Jan');
        createSeries('feb', 'Feb');
        createSeries('march', 'March');
        createSeries('apr', 'Apr');
        createSeries('may', 'May');
        createSeries('Jun', 'Jun');
        createSeries('jul', 'Jul');
        createSeries('aug', 'Aug');
        createSeries('sep', 'Sep');
        createSeries('octove', 'Oct');
        createSeries('nov', 'Nov');
        createSeries('dec', 'Dec');
        function arrangeColumns() {
            var series = chart.series.getIndex(0);
            var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
            if (series.dataItems.length > 1) {
                var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                var delta_1 = ((x1 - x0) / chart.series.length) * w;
                if (_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["isNumber"](delta_1)) {
                    var middle_1 = chart.series.length / 2;
                    var newIndex_1 = 0;
                    chart.series.each(function (series) {
                        if (!series.isHidden && !series.isHiding) {
                            series.dummyData = newIndex_1;
                            newIndex_1++;
                        }
                        else {
                            series.dummyData = chart.series.indexOf(series);
                        }
                    });
                    var visibleCount = newIndex_1;
                    var newMiddle_1 = visibleCount / 2;
                    chart.series.each(function (series) {
                        var trueIndex = chart.series.indexOf(series);
                        var newIndex = series.dummyData;
                        var dx = (newIndex - trueIndex + middle_1 - newMiddle_1) * delta_1;
                        series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    });
                }
            }
        }
        this.chart = chart;
    };
    ManagementAuditComponent.prototype.resetCharts = function () {
        this.chartJanPost = 0;
        this.chartJanGet = 0;
        this.chartJanUpdate = 0;
        this.chartJanDelete = 0;
        this.chartFebPost = 0;
        this.chartFebGet = 0;
        this.chartFebUpdate = 0;
        this.chartFebDelete = 0;
        this.chartMarchPost = 0;
        this.chartMarchGet = 0;
        this.chartMarchUpdate = 0;
        this.chartMarchDelete = 0;
        this.chartAprPost = 0;
        this.chartAprGet = 0;
        this.chartAprUpdate = 0;
        this.chartAprDelete = 0;
        this.chartMayPost = 0;
        this.chartMayGet = 0;
        this.chartMayUpdate = 0;
        this.chartMayDelete = 0;
        this.chartJunPost = 0;
        this.chartJunGet = 0;
        this.chartJunUpdate = 0;
        this.chartJunDelete = 0;
        this.chartJulPost = 0;
        this.chartJulGet = 0;
        this.chartJulUpdate = 0;
        this.chartJulDelete = 0;
        this.chartAugPost = 0;
        this.chartAugGet = 0;
        this.chartAugUpdate = 0;
        this.chartAugDelete = 0;
        this.chartSepPost = 0;
        this.chartSepGet = 0;
        this.chartSepUpdate = 0;
        this.chartSepDelete = 0;
        this.chartOctPost = 0;
        this.chartOctGet = 0;
        this.chartOctUpdate = 0;
        this.chartOctDelete = 0;
        this.chartNovPost = 0;
        this.chartNovGet = 0;
        this.chartNovUpdate = 0;
        this.chartNovDelete = 0;
        this.chartDecPost = 0;
        this.chartDecGet = 0;
        this.chartDecUpdate = 0;
        this.chartDecDelete = 0;
    };
    ManagementAuditComponent.prototype.calculateCharts = function () {
        var _this = this;
        this.tableRows.forEach(function (row) {
            var checkerType = row.action;
            var checkerDate = moment__WEBPACK_IMPORTED_MODULE_3__(row.created_at);
            var checkerDateMonth = checkerDate.month();
            console.log(checkerDateMonth);
            if (checkerDateMonth == 0) {
                if (checkerType == 'POST') {
                    _this.chartJanPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartJanGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartJanUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartJanDelete += 1;
                }
            }
            else if (checkerDateMonth == 1) {
                if (checkerType == 'POST') {
                    _this.chartFebPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartFebGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartFebUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartFebDelete += 1;
                }
            }
            else if (checkerDateMonth == 2) {
                if (checkerType == 'POST') {
                    _this.chartMarchPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartMarchGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartMarchUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartMarchDelete += 1;
                }
            }
            else if (checkerDateMonth == 3) {
                if (checkerType == 'POST') {
                    _this.chartAprPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartAprGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartAprUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartAprDelete += 1;
                }
            }
            else if (checkerDateMonth == 4) {
                if (checkerType == 'POST') {
                    _this.chartMayPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartMayGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartMayUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartMayDelete += 1;
                }
            }
            else if (checkerDateMonth == 5) {
                if (checkerType == 'POST') {
                    _this.chartJunPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartJunGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartJunUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartJunDelete += 1;
                }
            }
            else if (checkerDateMonth == 6) {
                if (checkerType == 'POST') {
                    _this.chartJulPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartJulGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartJulUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartJulDelete += 1;
                }
            }
            else if (checkerDateMonth == 7) {
                if (checkerType == 'POST') {
                    _this.chartAugPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartAugGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartAugUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartAugDelete += 1;
                }
            }
            else if (checkerDateMonth == 8) {
                if (checkerType == 'POST') {
                    _this.chartSepPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartSepGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartSepUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartSepDelete += 1;
                }
            }
            else if (checkerDateMonth == 9) {
                if (checkerType == 'POST') {
                    _this.chartOctPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartOctGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartOctUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartOctDelete += 1;
                }
            }
            else if (checkerDateMonth == 10) {
                if (checkerType == 'POST') {
                    _this.chartNovPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartNovGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartNovUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartNovDelete += 1;
                }
            }
            else if (checkerDateMonth == 11) {
                if (checkerType == 'POST') {
                    _this.chartDecPost += 1;
                }
                else if (checkerType == 'GET') {
                    _this.chartDecGet += 1;
                }
                else if (checkerType == 'UPDATE') {
                    _this.chartDecUpdate += 1;
                }
                else if (checkerType == 'DELETE') {
                    _this.chartDecDelete += 1;
                }
            }
        });
    };
    ManagementAuditComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_mocks_mocks_service__WEBPACK_IMPORTED_MODULE_2__["MocksService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ManagementAuditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-management-audit',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./management-audit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/management-audit/management-audit.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./management-audit.component.scss */ "./src/app/core/admin/management-audit/management-audit.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_mocks_mocks_service__WEBPACK_IMPORTED_MODULE_2__["MocksService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ManagementAuditComponent);
    return ManagementAuditComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/management-user/management-user.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/core/admin/management-user/management-user.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: #f5365c;\n  text-align: right;\n  font-size: 0.8em;\n  padding-top: 5px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hZG1pbi9tYW5hZ2VtZW50LXVzZXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxIUkRGLVRNb0wvc3JjXFxhcHBcXGNvcmVcXGFkbWluXFxtYW5hZ2VtZW50LXVzZXJcXG1hbmFnZW1lbnQtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hZG1pbi9tYW5hZ2VtZW50LXVzZXIvbWFuYWdlbWVudC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vbWFuYWdlbWVudC11c2VyL21hbmFnZW1lbnQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1tZXNzYWdlIHtcbiAgICBjb2xvcjogI2Y1MzY1YztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iLCIuZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiAjZjUzNjVjO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/admin/management-user/management-user.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/admin/management-user/management-user.component.ts ***!
  \*************************************************************************/
/*! exports provided: SelectionType, ManagementUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementUserComponent", function() { return ManagementUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);


var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var ManagementUserComponent = /** @class */ (function () {
    function ManagementUserComponent(modalService, formBuilder, zone) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.zone = zone;
        // Table
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                name: "Ali",
                mail: "KL1@gmail.com",
                userName: "Eagle1",
                userType: "3"
            },
            {
                name: "Abu",
                mail: "KL2@gmail.com",
                userName: "Eagle3",
                userType: "1"
            },
            {
                name: "Anis",
                mail: "Selangor1@gmail.com",
                userName: "Turtle7",
                userType: "3"
            },
            {
                name: "Aiman",
                mail: "KL3@gmail.com",
                userName: "Eagle9",
                userType: "2"
            },
            {
                name: "Aizat",
                mail: "Perlis@gmail.com",
                userName: "Phoenix8",
                userType: "3"
            },
            {
                name: "Affif",
                mail: "Selangor2@gmail.com",
                userName: "Turtle2",
                userType: "3"
            },
            {
                name: "Azli",
                mail: "Melaka@gmail.com",
                userName: "Lion4",
                userType: "1"
            },
            {
                name: "Azizah",
                mail: "Johor1@gmail.com",
                userName: "Tiger7",
                userType: "3"
            },
            {
                name: "Afiq",
                mail: "Johor2@gmail.com",
                userName: "Tiger3",
                userType: "2"
            },
            {
                name: "Adli",
                mail: "KL4@gmail.com",
                userName: "Eagle3",
                userType: "1"
            }
        ];
        this.SelectionType = SelectionType;
        this.modalConfig = {
            keyboard: true,
            class: "modal-dialog-centered"
        };
        this.registerFormMessages = {
            'name': [
                { type: 'required', message: 'Name is required' }
            ],
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'A valid email is required' }
            ]
        };
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    ManagementUserComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].email
            ]))
        });
        this.getCharts();
    };
    ManagementUserComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
        });
    };
    ManagementUserComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChartRegUser();
        });
    };
    ManagementUserComponent.prototype.getChartRegUser = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartRegUser", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Add data
        chart.data = [{
                "country": "Jan",
                "visits": 2025
            }, {
                "country": "Feb",
                "visits": 1882
            }, {
                "country": "March",
                "visits": 1809
            }, {
                "country": "April",
                "visits": 1322
            }, {
                "country": "May",
                "visits": 1122
            }, {
                "country": "June",
                "visits": 1114
            }, {
                "country": "July",
                "visits": 984
            }, {
                "country": "August",
                "visits": 711
            }, {
                "country": "Sept",
                "visits": 665
            }, {
                "country": "Oct",
                "visits": 580
            }, {
                "country": "Nov",
                "visits": 443
            }, {
                "country": "Dec",
                "visits": 441
            }];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            if (target.dataItem && target.dataItem.index & +true) {
                return dy + 25;
            }
            return dy;
        });
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.name = "Visits";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        this.chart = chart;
    };
    ManagementUserComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    ManagementUserComponent.prototype.closeModal = function () {
        this.modal.hide();
        this.registerForm.reset();
    };
    ManagementUserComponent.prototype.confirm = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Confirmation",
            text: "Are you sure to create this new user?",
            type: "info",
            buttonsStyling: false,
            confirmButtonClass: "btn btn-info",
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
    ManagementUserComponent.prototype.register = function () {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: "Success",
            text: "A new user has been created!",
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
    ManagementUserComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    ManagementUserComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    ManagementUserComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    ManagementUserComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ManagementUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-management-user',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./management-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/management-user/management-user.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./management-user.component.scss */ "./src/app/core/admin/management-user/management-user.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ManagementUserComponent);
    return ManagementUserComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/payment/payment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/admin/payment/payment.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vcGF5bWVudC9wYXltZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/admin/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/admin/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: SelectionType, PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");





var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(zone) {
        this.zone = zone;
        this.imgLogo = 'assets/img/brand/mastercard.png';
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                num: "1",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/4/2020"
            },
            {
                num: "2",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/1/2020"
            },
            {
                num: "3",
                lang: "Bahasa Melayu",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/3/2020"
            },
            {
                num: "4",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/2/2020"
            },
            {
                num: "5",
                lang: "Bahasa Melayu",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/7/2020"
            },
            {
                num: "6",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/4/2020"
            },
            {
                num: "7",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/3/2020"
            },
            {
                num: "8",
                lang: "Bahasa Melayu",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/8/2020"
            },
            {
                num: "9",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/9/2020"
            },
            {
                num: "10",
                lang: "English",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/11/2020"
            },
            {
                num: "11",
                lang: "Bahasa Melayu",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/12/2020"
            },
            {
                num: "12",
                lang: "Bahasa Melayu",
                val: "Ringgit Malaysia (RM)",
                accNum: "xxxxx-xxxxx",
                totDue: "RM200",
                date: "22/1/2021"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    PaymentComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart0) {
                console.log('Chart disposed');
                _this.chart0.dispose();
            }
            if (_this.chart1) {
                console.log('Chart disposed');
                _this.chart1.dispose();
            }
        });
    };
    PaymentComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChartBill0();
            _this.getChartBill1();
        });
    };
    PaymentComponent.prototype.getChartBill0 = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartBill0", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
        // Add data
        chart.data = [{
                "country": "Jan",
                "visits": 3025
            }, {
                "country": "Feb",
                "visits": 1882
            }, {
                "country": "March",
                "visits": 1809
            }, {
                "country": "April",
                "visits": 1322
            }, {
                "country": "May",
                "visits": 1122
            }, {
                "country": "June",
                "visits": 1114
            }, {
                "country": "July",
                "visits": 984
            }, {
                "country": "Aug",
                "visits": 711
            }, {
                "country": "Sept",
                "visits": 665
            }, {
                "country": "Oct",
                "visits": 580
            }, {
                "country": "Nov",
                "visits": 443
            }, {
                "country": "Dec",
                "visits": 441
            }];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "country";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.minWidth = 50;
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "visits";
        series.dataFields.categoryX = "country";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;
        // on hover, make corner radiuses bigger
        var hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;
        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });
        // Cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        this.chart0 = chart;
    };
    PaymentComponent.prototype.getChartBill1 = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartBill1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Add data
        chart.data = [{
                "year": "Jan",
                "active": 1,
                "inactive": 5
            }, {
                "year": "Feb",
                "active": 1,
                "inactive": 2
            }, {
                "year": "March",
                "active": 2,
                "inactive": 3
            }, {
                "year": "April",
                "active": 3,
                "inactive": 4
            }, {
                "year": "May",
                "active": 5,
                "inactive": 1
            }, {
                "year": "June",
                "active": 3,
                "inactive": 2
            }, {
                "year": "July",
                "active": 1,
                "inactive": 2
            }, {
                "year": "Aug",
                "active": 2,
                "inactive": 1
            }, {
                "year": "Sept",
                "active": 3,
                "inactive": 5
            }, {
                "year": "Oct",
                "active": 4,
                "inactive": 3
            }, {
                "year": "Nov",
                "active": 1,
                "inactive": 2
            }, {
                "year": "Dec",
                "active": 3,
                "inactive": 2
            }];
        // Create category axis
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.opposite = true;
        // Create value axis
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.renderer.inversed = true;
        valueAxis.title.text = "File";
        valueAxis.renderer.minLabelPosition = 0.01;
        // Create series
        var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series1.dataFields.valueY = "active";
        series1.dataFields.categoryX = "year";
        series1.name = "Active";
        series1.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible = false;
        var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        series2.dataFields.valueY = "inactive";
        series2.dataFields.categoryX = "year";
        series2.name = 'Inactive';
        series2.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
        series2.legendSettings.valueText = "{valueY}";
        // Add chart cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.behavior = "zoomY";
        var hs1 = series1.segments.template.states.create("hover");
        hs1.properties.strokeWidth = 5;
        series1.segments.template.strokeWidth = 1;
        var hs2 = series2.segments.template.states.create("hover");
        hs2.properties.strokeWidth = 5;
        series2.segments.template.strokeWidth = 1;
        // Add legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        chart.legend.itemContainers.template.events.on("over", function (event) {
            var segments = event.target.dataItem.dataContext.valueOf.arguments;
            segments.each(function (segment) {
                segment.isHover = true;
            });
        });
        chart.legend.itemContainers.template.events.on("out", function (event) {
            var segments = event.target.dataItem.dataContext.valueOf.arguments;
            segments.each(function (segment) {
                segment.isHover = false;
            });
        });
        this.chart1 = chart;
    };
    PaymentComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    PaymentComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    PaymentComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) != -1) {
                    return d;
                }
            }
            return false;
        });
    };
    PaymentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    PaymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/payment/payment.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.component.scss */ "./src/app/core/admin/payment/payment.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/report/report.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/admin/report/report.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/admin/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/admin/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_mocks_mocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/mocks/mocks.service */ "./src/app/shared/services/mocks/mocks.service.ts");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");






_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
var ReportComponent = /** @class */ (function () {
    function ReportComponent(mockService, zone) {
        this.mockService = mockService;
        this.zone = zone;
        this.dataChart = [];
        this.dataChart2 = [];
        this.dataChart3 = [];
        // Datepicker
        this.bsDPConfig = {
            isAnimated: true,
            containerClass: 'theme-default'
        };
        this.getData();
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart) {
                _this.chart.dispose();
            }
            if (_this.chart1) {
                _this.chart1.dispose();
            }
            if (_this.chart2) {
                _this.chart2.dispose();
            }
            if (_this.chart3) {
                _this.chart3.dispose();
            }
        });
    };
    ReportComponent.prototype.getData = function () {
        var _this = this;
        this.mockService.getAll('admin-report/report-data-1.json').subscribe(function (res) {
            // Success
            _this.dataChart = res;
        }, function () {
            // Unsuccess
        }, function () {
            // After
            _this.mockService.getAll('admin-report/report-data-2.json').subscribe(function (res) {
                // Success
                _this.dataChart2 = res;
            }, function () {
                // Unsuccess
            }, function () {
                // After
                _this.mockService.getAll('admin-report/report-data-3.json').subscribe(function (res) {
                    // Success
                    _this.dataChart3 = res;
                }, function () {
                    // Unsuccess
                }, function () {
                    // After
                    _this.getCharts();
                });
            });
        });
    };
    ReportComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChart();
            _this.getChart1();
            _this.getChart2();
            _this.getChart3();
        });
    };
    ReportComponent.prototype.getChart = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartdiv", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        chart.paddingRight = 20;
        var data = this.dataChart;
        chart.data = data;
        chart.dateFormatter.inputDateFormat = "yyyy";
        var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
        dateAxis.renderer.minGridDistance = 50;
        dateAxis.baseInterval = { timeUnit: "year", count: 2 };
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["StepLineSeries"]());
        series.dataFields.dateX = "year";
        series.dataFields.valueY = "amount";
        series.tooltipText = "{valueY.amount}";
        series.strokeWidth = 3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
        chart.cursor.xAxis = dateAxis;
        chart.cursor.fullWidthLineX = true;
        chart.cursor.lineX.strokeWidth = 0;
        chart.cursor.lineX.fill = chart.colors.getIndex(2);
        chart.cursor.lineX.fillOpacity = 0.1;
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
        this.chart = chart;
    };
    ReportComponent.prototype.getChart1 = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartdiv1", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        var data = [];
        var open = 100;
        var close = 250;
        for (var i = 1; i < 120; i++) {
            open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 4);
            close = Math.round(open + Math.random() * 5 + i / 5 - (Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
            data.push({ date: new Date(2018, 0, i), open: open, close: close });
        }
        chart.data = data;
        var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        series.dataFields.dateX = "date";
        series.dataFields.openValueY = "open";
        series.dataFields.valueY = "close";
        series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
        series.sequencedInterpolation = true;
        series.fillOpacity = 0.3;
        series.defaultState.transitionDuration = 1000;
        series.tensionX = 0.8;
        var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        series2.dataFields.dateX = "date";
        series2.dataFields.valueY = "open";
        series2.sequencedInterpolation = true;
        series2.defaultState.transitionDuration = 1500;
        series2.stroke = chart.colors.getIndex(6);
        series2.tensionX = 0.8;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
        chart.cursor.xAxis = dateAxis;
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
        this.chart1 = chart;
    };
    ReportComponent.prototype.getChart2 = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartdiv2", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        // Add data
        chart.data = this.dataChart2;
        // Create axes
        var valueAxisX = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxisX.title.text = 'X Axis';
        valueAxisX.renderer.minGridDistance = 40;
        // Create value axis
        var valueAxisY = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxisY.title.text = 'Y Axis';
        // Create series
        var lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        lineSeries.dataFields.valueY = "ay";
        lineSeries.dataFields.valueX = "ax";
        lineSeries.strokeOpacity = 0;
        var lineSeries2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        lineSeries2.dataFields.valueY = "by";
        lineSeries2.dataFields.valueX = "bx";
        lineSeries2.strokeOpacity = 0;
        // Add a bullet
        var bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Bullet"]());
        // Add a triangle to act as am arrow
        var arrow = bullet.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Triangle"]);
        arrow.horizontalCenter = "middle";
        arrow.verticalCenter = "middle";
        arrow.strokeWidth = 0;
        arrow.fill = chart.colors.getIndex(0);
        arrow.direction = "top";
        arrow.width = 12;
        arrow.height = 12;
        // Add a bullet
        var bullet2 = lineSeries2.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Bullet"]());
        // Add a triangle to act as am arrow
        var arrow2 = bullet2.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Triangle"]);
        arrow2.horizontalCenter = "middle";
        arrow2.verticalCenter = "middle";
        arrow2.rotation = 180;
        arrow2.strokeWidth = 0;
        arrow2.fill = chart.colors.getIndex(3);
        arrow2.direction = "top";
        arrow2.width = 12;
        arrow2.height = 12;
        //add the trendlines
        var trend = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        trend.dataFields.valueY = "value2";
        trend.dataFields.valueX = "value";
        trend.strokeWidth = 2;
        trend.stroke = chart.colors.getIndex(0);
        trend.strokeOpacity = 0.7;
        trend.data = [
            { "value": 1, "value2": 2 },
            { "value": 12, "value2": 11 }
        ];
        var trend2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        trend2.dataFields.valueY = "value2";
        trend2.dataFields.valueX = "value";
        trend2.strokeWidth = 2;
        trend2.stroke = chart.colors.getIndex(3);
        trend2.strokeOpacity = 0.7;
        trend2.data = [
            { "value": 1, "value2": 1 },
            { "value": 12, "value2": 19 }
        ];
        //scrollbars
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
        chart.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
        this.chart2 = chart;
    };
    ReportComponent.prototype.getChart3 = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartdiv3", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        // Add data
        chart.data = this.dataChart3;
        // Set input format for the dates
        chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
        // Create axes
        var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        // Create series
        var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText = "{value}";
        series.strokeWidth = 2;
        series.minBulletDistance = 15;
        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";
        // Make bullets grow on hover
        var bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CircleBullet"]());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#fff");
        var bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;
        // Make a panning cursor
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
        chart.cursor.behavior = "panXY";
        chart.cursor.xAxis = dateAxis;
        chart.cursor.snapToSeries = series;
        // Create vertical scrollbar and place it before the value axis
        chart.scrollbarY = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Scrollbar"]();
        chart.scrollbarY.parent = chart.leftAxesContainer;
        chart.scrollbarY.toBack();
        // Create a horizontal scrollbar with previe and place it underneath the date axis
        var scrollbarX = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChartScrollbar"]();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
        chart.scrollbarX.parent = chart.bottomAxesContainer;
        dateAxis.start = 0.79;
        dateAxis.keepSelection = true;
        this.chart3 = chart;
    };
    ReportComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_mocks_mocks_service__WEBPACK_IMPORTED_MODULE_2__["MocksService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    ReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/report/report.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report.component.scss */ "./src/app/core/admin/report/report.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_mocks_mocks_service__WEBPACK_IMPORTED_MODULE_2__["MocksService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/roles/roles.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/admin/roles/roles.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/admin/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/admin/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: SelectionType, RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");



var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var RolesComponent = /** @class */ (function () {
    function RolesComponent(modalService) {
        this.modalService = modalService;
        this.modalConfig = {
            keyboard: true,
            class: "modal-dialog-centered"
        };
        // Table
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                num: "1",
                userName: "Admin",
                date: "1/1/2020",
                userType: "1",
                crud: "1111"
            },
            {
                num: "2",
                userName: "User",
                date: "2/2/2020",
                userType: "2",
                crud: "0110"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    RolesComponent.prototype.ngOnInit = function () {
    };
    RolesComponent.prototype.ngOnDestroy = function () {
    };
    RolesComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    RolesComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    RolesComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    RolesComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    RolesComponent.prototype.closeModal = function () {
        this.modal.hide();
        //this.registerForm.reset()
    };
    RolesComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    RolesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/roles/roles.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./roles.component.scss */ "./src/app/core/admin/roles/roles.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/training-needs/training-needs.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/core/admin/training-needs/training-needs.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vdHJhaW5pbmctbmVlZHMvdHJhaW5pbmctbmVlZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/admin/training-needs/training-needs.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/core/admin/training-needs/training-needs.component.ts ***!
  \***********************************************************************/
/*! exports provided: TrainingNeedsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingNeedsComponent", function() { return TrainingNeedsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");





var TrainingNeedsComponent = /** @class */ (function () {
    function TrainingNeedsComponent(zone) {
        this.zone = zone;
    }
    TrainingNeedsComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    TrainingNeedsComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart0) {
                _this.chart0.dispose();
            }
            if (_this.chart1) {
                _this.chart1.dispose();
            }
            if (_this.chart2) {
                _this.chart2.dispose();
            }
        });
    };
    TrainingNeedsComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChartWeekTraf();
            _this.getChartMonthTraf();
            _this.getChartNeedAnalyze();
        });
    };
    TrainingNeedsComponent.prototype.getChartWeekTraf = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartWeekTraf", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        chart.paddingRight = 20;
        // Add data
        chart.data = [{
                "year": "Monday",
                "value": 20
            }, {
                "year": "Tuesday",
                "value": 25
            }, {
                "year": "Wednesday",
                "value": 15
            }, {
                "year": "Thursday",
                "value": 45
            }, {
                "year": "Friday",
                "value": 30
            }];
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
            if (target.dataItem.values.valueY.value < 25) {
                return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#FF0000");
            }
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
        this.chart0 = chart;
    };
    TrainingNeedsComponent.prototype.getChartMonthTraf = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartMonthTraf", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        var data = [];
        chart.data = [{
                "year": "Jan",
                "income": 23.5,
                "expenses": 21.1,
                "lineColor": chart.colors.next()
            }, {
                "year": "Feb",
                "income": 26.2,
                "expenses": 30.5
            }, {
                "year": "March",
                "income": 30.1,
                "expenses": 34.9
            }, {
                "year": "April",
                "income": 20.5,
                "expenses": 23.1
            }, {
                "year": "May",
                "income": 30.6,
                "expenses": 28.2,
                "lineColor": chart.colors.next()
            }, {
                "year": "June",
                "income": 34.1,
                "expenses": 31.9
            }, {
                "year": "July",
                "income": 34.1,
                "expenses": 31.9
            }, {
                "year": "Aug",
                "income": 34.1,
                "expenses": 31.9,
                "lineColor": chart.colors.next()
            }, {
                "year": "Sept",
                "income": 34.1,
                "expenses": 31.9
            }, {
                "year": "oct",
                "income": 34.1,
                "expenses": 31.9
            }, {
                "year": "Nov",
                "income": 34.1,
                "expenses": 31.9
            }, {
                "year": "Dec",
                "income": 34.1,
                "expenses": 31.9
            }];
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.ticks.template.disabled = true;
        categoryAxis.renderer.line.opacity = 0;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.dataFields.category = "year";
        categoryAxis.startLocation = 0.4;
        categoryAxis.endLocation = 0.6;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.line.opacity = 0;
        valueAxis.renderer.ticks.template.disabled = true;
        valueAxis.min = 0;
        var lineSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LineSeries"]());
        lineSeries.dataFields.categoryX = "year";
        lineSeries.dataFields.valueY = "income";
        lineSeries.tooltipText = "income: {valueY.value}";
        lineSeries.fillOpacity = 0.5;
        lineSeries.strokeWidth = 3;
        lineSeries.propertyFields.stroke = "lineColor";
        lineSeries.propertyFields.fill = "lineColor";
        var bullet = lineSeries.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CircleBullet"]());
        bullet.circle.radius = 6;
        bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
        bullet.circle.strokeWidth = 3;
        chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYCursor"]();
        chart.cursor.behavior = "panX";
        chart.cursor.lineX.opacity = 0;
        chart.cursor.lineY.opacity = 0;
        chart.scrollbarX = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Scrollbar"]();
        chart.scrollbarX.parent = chart.bottomAxesContainer;
        this.chart1 = chart;
    };
    TrainingNeedsComponent.prototype.getChartNeedAnalyze = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_4__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["create"]("chartNeedAnalyze", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["XYChart"]);
        // Title
        var title = chart.titles.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["Label"]());
        title.text = "";
        title.fontSize = 25;
        title.marginBottom = 15;
        // Add data
        chart.data = [{
                "category": "Soft Skills",
                "negative1": -0.1,
                "negative2": -0.9,
                "positive1": 5,
                "positive2": 94
            }, {
                "category": "Technology",
                "negative1": -2,
                "negative2": -4,
                "positive1": 19,
                "positive2": 75
            }, {
                "category": "Leadership",
                "negative1": -2,
                "negative2": -10,
                "positive1": 46,
                "positive2": 42
            }, {
                "category": "Teambuiding",
                "negative1": -2,
                "negative2": -13,
                "positive1": 33,
                "positive2": 52
            }, {
                "category": "Microsoft Office",
                "negative1": -6,
                "negative2": -19,
                "positive1": 34,
                "positive2": 41
            }, {
                "category": "Health",
                "negative1": -3,
                "negative2": -23,
                "positive1": 49,
                "positive2": 25
            }, {
                "category": "Environment",
                "negative1": -5,
                "negative2": -28,
                "positive1": 49,
                "positive2": 18
            }, {
                "category": "Social Media",
                "negative1": -14,
                "negative2": -34,
                "positive1": 37,
                "positive2": 16
            }];
        // Create axes
        var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["CategoryAxis"]());
        categoryAxis.dataFields.category = "category";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.axisFills.template.disabled = false;
        categoryAxis.renderer.axisFills.template.fillOpacity = 0.05;
        var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ValueAxis"]());
        valueAxis.min = -100;
        valueAxis.max = 100;
        valueAxis.renderer.minGridDistance = 50;
        valueAxis.renderer.ticks.template.length = 5;
        valueAxis.renderer.ticks.template.disabled = false;
        valueAxis.renderer.ticks.template.strokeOpacity = 0.4;
        valueAxis.renderer.labels.template.adapter.add("text", function (text) {
            return text + "%";
        });
        // Legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["Legend"]();
        chart.legend.position = "right";
        // Use only absolute numbers
        chart.numberFormatter.numberFormat = "#.#s";
        // Create series
        function createSeries(field, name, color) {
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["ColumnSeries"]());
            series.dataFields.valueX = field;
            series.dataFields.categoryY = "category";
            series.stacked = true;
            series.name = name;
            series.stroke = color;
            series.fill = color;
            var label = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_3__["LabelBullet"]);
            label.label.text = "{valueX}%";
            label.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["color"]("#fff");
            label.label.strokeWidth = 0;
            label.label.truncate = false;
            label.label.hideOversized = true;
            label.locationX = 0.5;
            return series;
        }
        var interfaceColors = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_2__["InterfaceColorSet"]();
        var positiveColor = interfaceColors.getFor("positive");
        var negativeColor = interfaceColors.getFor("negative");
        createSeries("negative2", "Mode...", negativeColor.lighten(0.5));
        createSeries("negative1", "Not needed", negativeColor);
        createSeries("positive1", "Needed", positiveColor.lighten(0.5));
        createSeries("positive2", "Highlight", positiveColor);
        chart.legend.events.on("layoutvalidated", function (event) {
            chart.legend.itemContainers.each(function (container) {
                if (container.dataItem.dataContext.valueOf.name == "Not needed") {
                    container.toBack();
                }
            });
        });
        this.chart2 = chart;
    };
    TrainingNeedsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    TrainingNeedsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-needs',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./training-needs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/training-needs/training-needs.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./training-needs.component.scss */ "./src/app/core/admin/training-needs/training-needs.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TrainingNeedsComponent);
    return TrainingNeedsComponent;
}());



/***/ }),

/***/ "./src/app/core/admin/training-overview/training-overview.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/admin/training-overview/training-overview.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWRtaW4vdHJhaW5pbmctb3ZlcnZpZXcvdHJhaW5pbmctb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/core/admin/training-overview/training-overview.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/admin/training-overview/training-overview.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SelectionType, TrainingOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingOverviewComponent", function() { return TrainingOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "./node_modules/@amcharts/amcharts4/charts.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");






var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var TrainingOverviewComponent = /** @class */ (function () {
    function TrainingOverviewComponent(modalService, zone) {
        this.modalService = modalService;
        this.zone = zone;
        this.modalConfig = {
            keyboard: true,
            class: "modal-lg modal-dialog-centered"
        };
        this.tableEntries = 5;
        this.tableSelected = [];
        this.tableTemp = [];
        this.tableRows = [
            {
                trainid: "1",
                trainName: "Training A73",
                trainPart: "07",
                trainSdate: "23/6/2020",
                trainEdate: "3/6/2021",
                trainStat: "1"
            },
            {
                trainid: "2",
                trainName: "Training A97",
                trainPart: "67",
                trainSdate: "28/3/2020",
                trainEdate: "28/3/2021",
                trainStat: "2"
            },
            {
                trainid: "3",
                trainName: "Training A99",
                trainPart: "29",
                trainSdate: "30/6/2020",
                trainEdate: "30/6/2021",
                trainStat: "1"
            },
            {
                trainid: "4",
                trainName: "Training A34",
                trainPart: "13",
                trainSdate: "2/5/2020",
                trainEdate: "1/5/2021",
                trainStat: "2"
            },
            {
                trainid: "5",
                trainName: "Training A22",
                trainPart: "35",
                trainSdate: "3/4/2020",
                trainEdate: "3/4/2021",
                trainStat: "2"
            },
            {
                trainid: "6",
                trainName: "Training A54",
                trainPart: "64",
                trainSdate: "24/2/2020",
                trainEdate: "22/1/2021",
                trainStat: "2"
            },
            {
                trainid: "7",
                trainName: "Training A88",
                trainPart: "23",
                trainSdate: "1/2/2021",
                trainEdate: "30/4/2021",
                trainStat: "2"
            },
            {
                trainid: "8",
                trainName: "Training A14",
                trainPart: "98",
                trainSdate: "3/4/2020",
                trainEdate: "5/7/2021",
                trainStat: "1"
            },
            {
                trainid: "9",
                trainName: "Training A01",
                trainPart: "10",
                trainSdate: "1/1/2021",
                trainEdate: "2/1/2021",
                trainStat: "2"
            },
            {
                trainid: "10",
                trainName: "Training A62",
                trainPart: "07",
                trainSdate: "3/4/2020",
                trainEdate: "3/8/2020",
                trainStat: "2"
            },
            {
                trainid: "11",
                trainName: "Training A51",
                trainPart: "55",
                trainSdate: "2/4/2020",
                trainEdate: "14/5/2021",
                trainStat: "2"
            },
            {
                trainid: "12",
                trainName: "Training A32",
                trainPart: "01",
                trainSdate: "21/5/2021",
                trainEdate: "22/5/2021",
                trainStat: "2"
            }
        ];
        this.SelectionType = SelectionType;
        this.tableTemp = this.tableRows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    TrainingOverviewComponent.prototype.ngOnInit = function () {
        this.getCharts();
    };
    TrainingOverviewComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.chart0) {
                _this.chart0.dispose();
            }
            if (_this.chart1) {
                _this.chart1.dispose();
            }
            if (_this.chart2) {
                _this.chart2.dispose();
            }
            if (_this.chart3) {
                _this.chart3.dispose();
            }
        });
    };
    TrainingOverviewComponent.prototype.getCharts = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.getChartObjAchieve();
            _this.getChartRelDaily();
            _this.getChartFacFood();
            _this.getChartInsEva();
        });
    };
    TrainingOverviewComponent.prototype.getChartObjAchieve = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartObjAchieve", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);
        // Add and configure Series
        var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        // Let's cut a hole in our Pie chart the size of 30% the radius
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](30);
        // Put a thick white border around each Slice
        pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.slices.template
            // change the cursor on hover to make it apparent the object can be interacted with
            .cursorOverStyle = [
            {
                "property": "cursor",
                "value": "pointer"
            }
        ];
        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.radius = 3;
        pieSeries.labels.template.padding(0, 0, 0, 0);
        pieSeries.ticks.template.disabled = true;
        // Create a base filter effect (as if it's not there) for the hover to return to
        var shadow = pieSeries.slices.template.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["DropShadowFilter"]);
        shadow.opacity = 0;
        // Create hover state
        var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists
        // Slightly shift the shadow and make it more prominent on hover
        var hoverShadow = hoverState.filters.push(new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["DropShadowFilter"]);
        hoverShadow.opacity = 0.7;
        hoverShadow.blur = 5;
        // Add a legend // chart.legend = new am4charts.Legend();
        chart.data = [
            {
                "country": "Excellent",
                "litres": 501.9
            },
            {
                "country": "Good",
                "litres": 128.3
            },
            {
                "country": "Satisfy",
                "litres": 99
            },
            {
                "country": "Moderate",
                "litres": 60
            },
            {
                "country": "Low",
                "litres": 60
            }
        ];
        this.chart0 = chart;
    };
    TrainingOverviewComponent.prototype.getChartRelDaily = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartRelDaily", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        // Add data
        chart.data = [{
                "year": "task",
                "Helpful": 70,
                "Relevant": 0,
                "Not-helpful": 30
            }, {
                "year": "positive",
                "Helpful": 45,
                "Relevant": 0,
                "Not-helpful": 55
            }, {
                "year": "negative",
                "Helpful": 80,
                "Relevant": 0,
                "Not-helpful": 20
            }];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.title.text = "Question";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.title.text = "Percentage (%)";
        // Create series
        function createSeries(field, name, stacked) {
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ColumnSeries"]());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
            series.stacked = stacked;
            series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](95);
        }
        createSeries("Helpful", "Helpful", true);
        createSeries("Not-helpful", "Not-helpful", true);
        createSeries("Relevant", "Relevant", false);
        // Add legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
        this.chart1 = chart;
    };
    TrainingOverviewComponent.prototype.getChartFacFood = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartFacFood", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        // Add data
        chart.data = [{
                "year": "task",
                "Helpful": 70,
                "Relevant": 0,
                "Not-helpful": 30
            }, {
                "year": "positive",
                "Helpful": 45,
                "Relevant": 0,
                "Not-helpful": 55
            }, {
                "year": "negative",
                "Helpful": 80,
                "Relevant": 0,
                "Not-helpful": 20
            }];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.title.text = "Question";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.title.text = "Percentage (%)";
        // Create series
        function createSeries(field, name, stacked) {
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ColumnSeries"]());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
            series.stacked = stacked;
            series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](95);
        }
        createSeries("Helpful", "Helpful", true);
        createSeries("Not-helpful", "Not-helpful", true);
        createSeries("Relevant", "Relevant", false);
        // Add legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
        this.chart2 = chart;
    };
    TrainingOverviewComponent.prototype.getChartInsEva = function () {
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);
        // Themes end
        // Create chart instance
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("chartInsEva", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);
        // Add data
        chart.data = [{
                "year": "Accomodation",
                "Excellent": 70,
                "Good": 0,
                "Satisfy": 30,
                "Modeqate": 0,
                "Low": 0
            }, {
                "year": "Hall",
                "Excellent": 70,
                "Good": 0,
                "Satisfy": 30,
                "Modeqate": 0,
                "Low": 0
            }, {
                "year": "Food & Beverage",
                "Excellent": 70,
                "Good": 0,
                "Satisfy": 30,
                "Modeqate": 0,
                "Low": 0
            }];
        // Create axes
        var categoryAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
        categoryAxis.dataFields.category = "year";
        categoryAxis.title.text = "Question";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.title.text = "Percentage (%)";
        // Create series
        function createSeries(field, name, stacked) {
            var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ColumnSeries"]());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "year";
            series.name = name;
            series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
            series.stacked = stacked;
            series.columns.template.width = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](95);
        }
        createSeries("Excellent", "Excellent", true);
        createSeries("Satisfy", "Satisfy", true);
        createSeries("Good", "Good", false);
        createSeries("Moderate", "Moderate", false);
        createSeries("Low", "Low", false);
        // Add legend
        chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
        this.chart3 = chart;
    };
    TrainingOverviewComponent.prototype.onActivate = function (event) {
        this.tableActiveRow = event.row;
    };
    TrainingOverviewComponent.prototype.entriesChange = function ($event) {
        this.tableEntries = $event.target.value;
    };
    TrainingOverviewComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.tableTemp = this.tableRows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    TrainingOverviewComponent.prototype.openModal = function (modalRef) {
        this.modal = this.modalService.show(modalRef, this.modalConfig);
    };
    TrainingOverviewComponent.prototype.closeModal = function () {
        this.modal.hide();
        //this.registerForm.reset()
    };
    TrainingOverviewComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    TrainingOverviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-training-overview',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./training-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/admin/training-overview/training-overview.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./training-overview.component.scss */ "./src/app/core/admin/training-overview/training-overview.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], TrainingOverviewComponent);
    return TrainingOverviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/mocks/mocks.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/mocks/mocks.service.ts ***!
  \********************************************************/
/*! exports provided: MocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MocksService", function() { return MocksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MocksService = /** @class */ (function () {
    function MocksService(http) {
        this.http = http;
        // URL
        this.urlMock = 'assets/mock/';
        // Data
        this.datas = [];
    }
    MocksService.prototype.getAll = function (path) {
        var _this = this;
        var urlPath = this.urlMock + path;
        return this.http.get(urlPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            _this.datas = res;
            console.log('Data: ', _this.datas);
        }));
    };
    MocksService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MocksService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MocksService);
    return MocksService;
}());



/***/ })

}]);
//# sourceMappingURL=core-admin-admin-module.js.map