(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/calendar/calendar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/calendar/calendar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\" header header-dark bg-danger pb-6 content__title content__title--calendar\"\n>\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6\">\n          <h6 class=\" fullcalendar-title h2 text-white d-inline-block mb-0\">\n            Full calendar\n          </h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-lg-inline-block ml-lg-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Dashboard </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Calendar\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 mt-3 mt-lg-0 text-lg-right\">\n          <a\n            class=\" fullcalendar-btn-prev btn btn-sm btn-neutral\"\n            href=\"javascript:void(0)\"\n            (click)=\"calendar.next()\"\n          >\n            <i class=\" fas fa-angle-left\"> </i>\n          </a>\n\n          <a\n            class=\" fullcalendar-btn-next btn btn-sm btn-neutral\"\n            href=\"javascript:void(0)\"\n            (click)=\"calendar.prev()\"\n          >\n            <i class=\" fas fa-angle-right\"> </i>\n          </a>\n\n          <a\n            class=\" btn btn-sm btn-neutral\"\n            data-calendar-view=\"month\"\n            href=\"javascript:void(0)\"\n            (click)=\"changeView('dayGridMonth')\"\n          >\n            Month\n          </a>\n\n          <a\n            class=\" btn btn-sm btn-neutral\"\n            data-calendar-view=\"basicWeek\"\n            href=\"javascript:void(0)\"\n            (click)=\"changeView('dayGridWeek')\"\n          >\n            Week\n          </a>\n\n          <a\n            class=\" btn btn-sm btn-neutral\"\n            data-calendar-view=\"basicDay\"\n            href=\"javascript:void(0)\"\n            (click)=\"changeView('dayGridDay')\"\n          >\n            Day\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card card-calendar\">\n        <div class=\" card-header\"><h5 class=\" h3 mb-0\">Calendar</h5></div>\n\n        <div class=\" card-body p-0\">\n          <div class=\" calendar\" data-toggle=\"calendar\" id=\"calendar\"></div>\n        </div>\n      </div>\n\n      <div\n        aria-hidden=\"true\"\n        aria-labelledby=\"new-event-label\"\n        class=\" modal fade\"\n        id=\"new-event\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n      >\n        <div\n          class=\" modal-dialog modal-dialog-centered modal-secondary\"\n          role=\"document\"\n        >\n          <ng-template #modalAdd>\n            <div class=\" modal-body\">\n              <form class=\" new-event--form\">\n                <div class=\" form-group\">\n                  <label class=\" form-control-label\"> Event title </label>\n\n                  <input\n                    class=\" form-control form-control-alternative new-event--title\"\n                    id=\"new-event--title\"\n                    placeholder=\"Event Title\"\n                    type=\"text\"\n                    (change)=\"getNewEventTitle($event)\"\n                  />\n                </div>\n\n                <div class=\" form-group mb-0\">\n                  <label class=\" form-control-label d-block mb-3\">\n                    Status color\n                  </label>\n\n                  <div\n                    class=\" btn-group btn-group-toggle btn-group-colors event-tag\"\n                    data-toggle=\"buttons\"\n                  >\n                    <label\n                      class=\" btn bg-info\"\n                      [ngClass]=\"{ active: radios === 'bg-info' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        checked=\"checked\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-info\"\n                        (click)=\"radios = 'bg-info'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-warning\"\n                      [ngClass]=\"{ active: radios === 'bg-warning' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-warning\"\n                        (click)=\"radios = 'bg-warning'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-danger\"\n                      [ngClass]=\"{ active: radios === 'bg-danger' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-danger\"\n                        (click)=\"radios = 'bg-danger'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-success\"\n                      [ngClass]=\"{ active: radios === 'bg-success' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-success\"\n                        (click)=\"radios = 'bg-success'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-default\"\n                      [ngClass]=\"{ active: radios === 'bg-default' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-default\"\n                        (click)=\"radios = 'bg-default'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-primary\"\n                      [ngClass]=\"{ active: radios === 'bg-primary' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-primary\"\n                        (click)=\"radios = 'bg-primary'\"\n                      />\n                    </label>\n                  </div>\n                </div>\n\n                <input class=\" new-event--start\" type=\"hidden\" />\n\n                <input class=\" new-event--end\" type=\"hidden\" />\n              </form>\n            </div>\n\n            <div class=\" modal-footer\">\n              <button\n                class=\" btn btn-primary new-event--add\"\n                type=\"submit\"\n                (click)=\"addNewEvent()\"\n              >\n                Add event\n              </button>\n\n              <button\n                (click)=\"addModal.hide()\"\n                class=\" btn btn-link ml-auto\"\n                data-dismiss=\"modal\"\n                type=\"button\"\n              >\n                Close\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n\n      <div\n        aria-hidden=\"true\"\n        aria-labelledby=\"edit-event-label\"\n        class=\" modal fade\"\n        id=\"edit-event\"\n        role=\"dialog\"\n        tabindex=\"-1\"\n      >\n        <div\n          class=\" modal-dialog modal-dialog-centered modal-secondary\"\n          role=\"document\"\n        >\n          <ng-template #modalEdit>\n            <div class=\" modal-body\">\n              <form class=\" edit-event--form\">\n                <div class=\" form-group\">\n                  <label class=\" form-control-label\"> Event title </label>\n\n                  <input\n                    class=\" form-control form-control-alternative edit-event--title\"\n                    placeholder=\"Event Title\"\n                    type=\"text\"\n                    value=\"{{ eventTitle }}\"\n                    (change)=\"getNewEventTitle($event)\"\n                  />\n                </div>\n\n                <div class=\" form-group\">\n                  <label class=\" form-control-label d-block mb-3\">\n                    Status color\n                  </label>\n\n                  <div\n                    class=\" btn-group btn-group-toggle btn-group-colors event-tag mb-0\"\n                    data-toggle=\"buttons\"\n                  >\n                    <label\n                      class=\" btn bg-info\"\n                      [ngClass]=\"{ active: radios === 'bg-info' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        checked=\"checked\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-info\"\n                        (click)=\"radios = 'bg-info'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-warning\"\n                      [ngClass]=\"{ active: radios === 'bg-warning' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-warning\"\n                        (click)=\"radios = 'bg-warning'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-danger\"\n                      [ngClass]=\"{ active: radios === 'bg-danger' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-danger\"\n                        (click)=\"radios = 'bg-danger'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-success\"\n                      [ngClass]=\"{ active: radios === 'bg-success' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-success\"\n                        (click)=\"radios = 'bg-success'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-default\"\n                      [ngClass]=\"{ active: radios === 'bg-default' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-default\"\n                        (click)=\"radios = 'bg-default'\"\n                      />\n                    </label>\n\n                    <label\n                      class=\" btn bg-primary\"\n                      [ngClass]=\"{ active: radios === 'bg-primary' }\"\n                    >\n                      <input\n                        autocomplete=\"off\"\n                        name=\"event-tag\"\n                        type=\"radio\"\n                        value=\"bg-primary\"\n                        (click)=\"radios = 'bg-primary'\"\n                      />\n                    </label>\n                  </div>\n                </div>\n\n                <div class=\" form-group\">\n                  <label class=\" form-control-label\"> Description </label>\n\n                  <textarea\n                    class=\" form-control form-control-alternative edit-event--description textarea-autosize\"\n                    placeholder=\"Event Desctiption\"\n                    value=\"{{ eventDescription }}\"\n                    (change)=\"getNewEventDescription($event)\"\n                  ></textarea>\n\n                  <i class=\" form-group--bar\"> </i>\n                </div>\n\n                <input class=\" edit-event--id\" type=\"hidden\" />\n              </form>\n            </div>\n\n            <div class=\" modal-footer\">\n              <button\n                class=\" btn btn-primary\"\n                data-calendar=\"update\"\n                (click)=\"updateEvent()\"\n              >\n                Update\n              </button>\n\n              <button\n                class=\" btn btn-danger\"\n                data-calendar=\"delete\"\n                (click)=\"deleteEventSweetAlert()\"\n              >\n                Delete\n              </button>\n\n              <button\n                class=\" btn btn-link ml-auto\"\n                data-dismiss=\"modal\"\n                (click)=\"editModal.hide()\"\n              >\n                Close\n              </button>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/examples/calendar/calendar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/examples/calendar/calendar.component.ts ***!
  \*********************************************************/
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
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/calendar/calendar.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/examples/calendar/calendar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/examples/calendar/calendar.module.ts ***!
  \******************************************************/
/*! exports provided: CalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.component */ "./src/app/examples/calendar/calendar.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calendar_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.routing */ "./src/app/examples/calendar/calendar.routing.ts");







var CalendarModule = /** @class */ (function () {
    function CalendarModule() {
    }
    CalendarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_3__["CalendarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_calendar_routing__WEBPACK_IMPORTED_MODULE_6__["CalendarRoutes"]),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ]
        })
    ], CalendarModule);
    return CalendarModule;
}());



/***/ }),

/***/ "./src/app/examples/calendar/calendar.routing.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/calendar/calendar.routing.ts ***!
  \*******************************************************/
/*! exports provided: CalendarRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutes", function() { return CalendarRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.component */ "./src/app/examples/calendar/calendar.component.ts");


var CalendarRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                component: _calendar_component__WEBPACK_IMPORTED_MODULE_1__["CalendarComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=examples-calendar-calendar-module.js.map