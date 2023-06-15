(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+V0h":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin/sidebar/sidebar.component.ts ***!
  \**********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class SidebarComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
    logout() {
        this.login.logout();
        window.location.reload();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 24, vars: 0, consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/admin/puntos-atencion"], ["mat-list-icon", ""], ["mat-list-item", "", "routerLink", "/admin/usuarios-punto-atencion"], ["mat-list-item", "", "routerLink", "/admin/admin-usuarios"], ["mat-list-item", "", "routerLink", "/admin/tipo-quejas"], ["mat-list-item", "", 3, "click"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Puntos de Atencion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Usuarios de puntos de atencion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "supervised_user_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Administraci\u00F3n de usuarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "format_shapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tipo de Queja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_20_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "+vpJ":
/*!********************************************************************************!*\
  !*** ./src/app/pages/admin/asignacion-rechazo/asignacion-rechazo.component.ts ***!
  \********************************************************************************/
/*! exports provided: AsignacionRechazoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignacionRechazoComponent", function() { return AsignacionRechazoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AsignacionRechazoComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsignacionRechazoComponent.ɵfac = function AsignacionRechazoComponent_Factory(t) { return new (t || AsignacionRechazoComponent)(); };
AsignacionRechazoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignacionRechazoComponent, selectors: [["app-asignacion-rechazo"]], decls: 2, vars: 0, template: function AsignacionRechazoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "asignacion-rechazo works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lnbmFjaW9uLXJlY2hhem8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Sistema Quejas\FrontEnd Quejas\sistema-quejas-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0UbS":
/*!******************************************************************************!*\
  !*** ./src/app/pages/centralizador/centralizador/centralizador.component.ts ***!
  \******************************************************************************/
/*! exports provided: CentralizadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralizadorComponent", function() { return CentralizadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/uploadFileService.service */ "8D/r");
/* harmony import */ var src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/reglas-negocio.service */ "5Hqp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");


















function CentralizadorComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Correlativo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CentralizadorComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r10.correlativo, " ");
} }
function CentralizadorComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha y Hora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CentralizadorComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, row_r11.fechaHora, "dd/MM/yyyy HH:mm:ss"), " ");
} }
function CentralizadorComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Administrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CentralizadorComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CentralizadorComponent_td_20_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const evento_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.obtenerQuejaById(evento_r12.codigoQueja); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CentralizadorComponent_td_20_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const evento_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.obtenerQuejaById(evento_r12.codigoQueja); })("click", function CentralizadorComponent_td_20_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.asignacion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CentralizadorComponent_td_20_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const evento_r12 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.obtenerQuejaById(evento_r12.codigoQueja); })("click", function CentralizadorComponent_td_20_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.rechazar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CentralizadorComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 39);
} }
function CentralizadorComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 40);
} }
function CentralizadorComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class CentralizadorComponent {
    constructor(service, spinner, loginService, uploadFileService, reglasNegocio) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.uploadFileService = uploadFileService;
        this.reglasNegocio = reglasNegocio;
        this.user = null;
        this.isLoggedIn = false;
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.eventoColumns = [
            'correlativo',
            'fechaHora',
            'accion'
        ];
    }
    ngOnInit() {
        this.spinner.show();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
        });
        this.obtenerEventos();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    obtenerEventos() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'queja/centralizador').toPromise().then(data => {
            console.log(data);
            this.dataSourceEventos.sort = this.sort;
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSourceEventos.paginator = this.paginator;
        });
    }
    obtenerQuejaById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.service.getData(this.service.BASE_URL_QUEJAS, `queja/byId/${id}`).toPromise().then(data => {
                this.detalleQueja = data;
            });
        });
    }
    asignacion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //console.log('??',this.detalleQueja.codigoQueja);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                showCloseButton: true,
                title: '¿Está seguro de asignar la queja?',
                text: 'Esta seguro de asignar la solicitud de queja',
                showDenyButton: true,
                denyButtonText: "Cancelar",
                confirmButtonText: "Aprobar",
                allowEscapeKey: false,
                allowOutsideClick: false
            }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result.isConfirmed) {
                    /* await this.obtenerQuejaById(this.idQueja); */
                    this.asignar = {
                        solicitud: [this.detalleQueja.codigoQueja],
                        complemento: 1
                    };
                    console.log(this.asignar);
                    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/asignar', this.asignar).toPromise().then(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Asignada!',
                            text: 'La queja ha sido asignada',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.obtenerEventos();
                            this.detalleQueja = null;
                        });
                    });
                }
            }));
        });
    }
    rechazar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                showCloseButton: true,
                title: '¿Está seguro de rechazar la queja?',
                text: 'Esta seguro de rechazar la solicitud de queja',
                showDenyButton: true,
                denyButtonText: "Cancelar",
                confirmButtonText: "Rechazar",
                allowEscapeKey: false,
                allowOutsideClick: false,
                input: 'text',
                inputPlaceholder: 'Ingrese el motivo de rechazo',
                inputValidator(validarJustifiacion) {
                    return !validarJustifiacion && 'Debe ingresar el motivo de rechazo';
                },
            }).then((validarJustifiacion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (validarJustifiacion.isConfirmed) {
                    const justificacion = validarJustifiacion.value;
                    this.asignar = {
                        solicitud: [this.detalleQueja.codigoQueja],
                        complemento: 2,
                        justificacion: justificacion
                    };
                    console.log(this.asignar);
                    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/asignar', this.asignar).toPromise().then(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Rechazada!',
                            text: 'La queja ha sido rechazada',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.obtenerEventos();
                            this.detalleQueja = null;
                        });
                    });
                }
            }));
        });
    }
}
CentralizadorComponent.ɵfac = function CentralizadorComponent_Factory(t) { return new (t || CentralizadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_10__["ReglasNegocioService"])); };
CentralizadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CentralizadorComponent, selectors: [["app-centralizador"]], viewQuery: function CentralizadorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 93, vars: 19, consts: [[1, "card-body"], [1, "titulo"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "correlativo"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fechaHora"], ["matColumnDef", "accion"], ["mat-header-cell", "", "class", "headerTable", "class", "headerTable", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "accion", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], [1, "row"], [1, "col-6"], [1, "col"], ["matInput", "", "disabled", "", 3, "value"], ["target", "_blank", "download", "", 3, "href"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headerTable"], ["mat-cell", "", 1, "accion"], ["title", "Ver m\u00E1s", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["title", "Asignar", "data-toggle", "modal", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["title", "No aplica", "data-toggle", "modal", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function CentralizadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Ingreso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function CentralizadorComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CentralizadorComponent_th_13_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CentralizadorComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, CentralizadorComponent_th_16_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CentralizadorComponent_td_17_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CentralizadorComponent_th_19_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CentralizadorComponent_td_20_Template, 7, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, CentralizadorComponent_tr_21_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CentralizadorComponent_tr_22_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CentralizadorComponent_tr_23_Template, 3, 1, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Correlativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Fecha Solicitud");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](44, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Descargar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Correlativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](72, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Fecha Solicitud");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](78, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "mat-form-field", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Descargar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.correlativo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](44, 12, ctx.detalleQueja == null ? null : ctx.detalleQueja.fechaAgrega, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.detalleQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx.detalleQueja == null ? null : ctx.detalleQueja.documentoSoporte, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.correlativo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](78, 15, ctx.detalleQueja == null ? null : ctx.detalleQueja.fechaAgrega, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.detalleQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx.detalleQueja == null ? null : ctx.detalleQueja.documentoSoporte, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"]], styles: [".titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    font-family: normal normal medium 18px/22px Arial;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 18px 18px 0px 0px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n}\r\n\r\n  .cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n\r\n.btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.btnGuardar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #0615a0 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNlbnRyYWxpemFkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtFQUMxQjs7QUFFQTtNQUNJLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsWUFBWTtNQUNaLFlBQVk7TUFDWixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixzQkFBc0I7TUFDdEIsaURBQWlEO01BQ2pELGlDQUFpQztNQUNqQyxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjs7QUFFQTtNQUNJLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsK0NBQStDO01BQy9DLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsVUFBVTtNQUNWLG1CQUFtQjtFQUN2Qjs7QUFFQTtNQUNJLFdBQVc7SUFDYjs7QUFFQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7O0FBRUE7TUFDRSxVQUFVO0lBQ1o7O0FBRUE7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWU7RUFDbkI7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjs7RUFFckI7O0FBR0E7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjs7RUFFckI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2VudHJhbGl6YWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtZmFtaWx5OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxOHB4LzIycHggQXJpYWw7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4IDE4cHggMHB4IDBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB6LWluZGV4OiAxMjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXR1bG8ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmb250LWZhbWlseTogbm9ybWFsIG5vcm1hbCBtZWRpdW0gMThweC8yMnB4IEFyaWFsO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAwcHggMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuYm90b25lcyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGQsIHRoIHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bkNhbmNlbGFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgICB0b3A6IDczNHB4O1xyXG4gICAgbGVmdDogMTI1MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2I4MTUxNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcblxyXG4gIC5idG5HdWFyZGFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgICB0b3A6IDczNHB4O1xyXG4gICAgbGVmdDogMTI1MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgYmFja2dyb3VuZDogIzA2MTVhMCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "boostrap-wrapper"], [1, "container"], [1, "row", "mt20"], [1, "col-md-6", "offset-md-3", "text-center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenido al banco pistio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sistema de Quejas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "El sistema de quejas sirve para recibir quejas, realizar quejas, comentarios y sugerencias de los usuarios al banco el pistio y asi poder mejorar la calidad de servicio y la experiencia de los usuarios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "3XQO":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/centralizador/centralizador-sidebar/centralizador-sidebar.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CentralizadorSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralizadorSidebarComponent", function() { return CentralizadorSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class CentralizadorSidebarComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
    logout() {
        this.login.logout();
        window.location.reload();
    }
}
CentralizadorSidebarComponent.ɵfac = function CentralizadorSidebarComponent_Factory(t) { return new (t || CentralizadorSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
CentralizadorSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentralizadorSidebarComponent, selectors: [["app-centralizador-sidebar"]], decls: 16, vars: 0, consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/centralizador-dashboard/centralizador"], ["mat-list-icon", ""], ["mat-list-item", "", "routerLink", "/centralizador-dashboard/analizador"], ["mat-list-item", "", 3, "click"]], template: function CentralizadorSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Centralizador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quejas Ingresadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "find_in_page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quejas Asignadas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CentralizadorSidebarComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"]], encapsulation: 2 });


/***/ }),

/***/ "5Hqp":
/*!****************************************************!*\
  !*** ./src/app/services/reglas-negocio.service.ts ***!
  \****************************************************/
/*! exports provided: ReglasNegocioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReglasNegocioService", function() { return ReglasNegocioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ReglasNegocioService {
    constructor() { }
    /* Metodo para validar numeros
    @e evento ejecutado desde la vista */
    soloNumeros(e) {
        const key = e.keyCode || e.which;
        const teclado = String.fromCharCode(key);
        const especiales = '8';
        const numero = '0123456789';
        let teclado_especial = false;
        for (const i in especiales) {
            if (key === especiales[i]) {
                teclado_especial = true;
            }
        }
        if (numero.indexOf(teclado) === -1 && !teclado_especial) {
            return false;
        }
    }
}
ReglasNegocioService.ɵfac = function ReglasNegocioService_Factory(t) { return new (t || ReglasNegocioService)(); };
ReglasNegocioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReglasNegocioService, factory: ReglasNegocioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "7G6C":
/*!******************************************!*\
  !*** ./src/app/utils/material.module.ts ***!
  \******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _spanish_paginator__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./spanish-paginator */ "KI0Q");
/* harmony import */ var mat_timepicker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! mat-timepicker */ "djeY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/core */ "fXoL");






















































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MAT_RADIO_DEFAULT_OPTIONS"], useValue: { color: 'accent' } },
        { provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorIntl"], useValue: Object(_spanish_paginator__WEBPACK_IMPORTED_MODULE_49__["CustomPaginator"])() },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MAT_DATE_LOCALE"], useValue: 'es' },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_47__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MAT_DATE_LOCALE"]] },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_47__["MAT_MOMENT_DATE_FORMATS"] }
    ], imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__["BrowserAnimationsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_48__["NgxSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__["MatFormFieldModule"],
        mat_timepicker__WEBPACK_IMPORTED_MODULE_50__["MatTimepickerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_51__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_44__["BrowserAnimationsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_48__["NgxSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_46__["MatFormFieldModule"],
        mat_timepicker__WEBPACK_IMPORTED_MODULE_50__["MatTimepickerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_51__["HttpClientModule"]] }); })();


/***/ }),

/***/ "7hli":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/puntos-atencion/puntos-atencion.component.ts ***!
  \**************************************************************************/
/*! exports provided: PuntosAtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntosAtencionComponent", function() { return PuntosAtencionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























function PuntosAtencionComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r18.codigoAtencionId, " ");
} }
function PuntosAtencionComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Regi\u00F3n de Atenci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r19.regionPatencion, "");
} }
function PuntosAtencionComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Nombre punto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "de Atenci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r20.nombrePatencion, " ");
} }
function PuntosAtencionComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Acci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PuntosAtencionComponent_td_27_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const evento_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.obtenerDetalleEvento(evento_r21.codigoAtencionId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 54);
} }
function PuntosAtencionComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 55);
} }
function PuntosAtencionComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
function PuntosAtencionComponent_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const regiones_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", regiones_r25.codigoRegionalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", regiones_r25.nombreRegion, " ");
} }
function PuntosAtencionComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " La regi\u00F3n de atenci\u00F3n es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " El nombre del punto de atenci\u00F3n es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function PuntosAtencionComponent_mat_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", region_r26.codigoRegionalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", region_r26.nombreRegion, " ");
} }
function PuntosAtencionComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " La regi\u00F3n de atenci\u00F3n es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class PuntosAtencionComponent {
    constructor(service, spinner, loginService) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.solicitud = [];
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.eventoColumns = [
            'codigoAtencionId',
            'regionPatencion',
            'nombrePatencion',
            'accion'
        ];
        this.user = null;
        this.isLoggedIn = false;
        this.regiones = [];
        this.habilitarEdicion = true;
        this.estadoPatencion = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.PatencionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombreAtencion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            regionAtencion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            estadoAtencion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.spinner.show();
        this.obtenerRegion();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
            console.log(res);
        });
        this.obtenerPuntosAtencion();
        this.spinner.hide();
    }
    obtenerPuntosAtencion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'patencion/listar').toPromise().then(data => {
            this.atencion = data;
            this.estadoatencion = this.atencion.estado == 1 ? 'Activo' : 'Inactivo';
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            this.dataSourceEventos.paginator = this.paginator;
            this.dataSourceEventos.sort = this.sort;
            console.log(data);
            this.spinner.hide();
        });
    }
    obtenerRegion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'catalogos/regiones').toPromise().then(data => {
            this.regiones = data;
            console.log(data);
            this.spinner.hide();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    guardarPuntoAtencion(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            const guardarAtencion = {
                nombrePatencion: data.nombreAtencion,
                regionPatencion: data.regionAtencion,
                estado: 1,
                usuarioAgrega: this.user.username,
                ipUsuarioAgrega: this.ipUsuario,
                fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
            };
            console.log(guardarAtencion);
            yield this.service.postData(this.service.BASE_URL_QUEJAS, 'patencion/crear', guardarAtencion).toPromise().then(data => {
                this.obtenerPuntosAtencion();
                this.spinner.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    titleText: `Se guardaron correctamente los datos del punto de
        atención`,
                    icon: 'success',
                    showCloseButton: true,
                    showConfirmButton: false,
                    position: 'top'
                });
                return data;
            }).catch(err => {
                console.error(err);
                this.spinner.hide();
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                    icon: 'error',
                    showCloseButton: true,
                    showConfirmButton: false,
                    position: 'top'
                });
            });
        });
    }
    obtenerDetalleEvento(id) {
        this.spinner.show();
        this.service.getData(this.service.BASE_URL_QUEJAS, `patencion/${id}`).toPromise().then(data => {
            var _a, _b, _c;
            this.detalleEvento = data;
            (_a = this.PatencionForm.get('nombreAtencion')) === null || _a === void 0 ? void 0 : _a.setValue(this.detalleEvento.nombrePatencion);
            (_b = this.PatencionForm.get('regionAtencion')) === null || _b === void 0 ? void 0 : _b.setValue(this.detalleEvento.regionPatencion);
            (_c = this.PatencionForm.get('estadoAtencion')) === null || _c === void 0 ? void 0 : _c.setValue(this.detalleEvento.estado);
            this.detalleEvento.estado == 1 ? true : false;
            if (this.detalleEvento.regionPatencion == 1) {
                this.region = 'Región Central';
            }
            else if (this.detalleEvento.regionPatencion == 2) {
                this.region = 'Región Sur';
            }
            else if (this.detalleEvento.regionPatencion == 3) {
                this.region = 'Región Nororiente';
            }
            else if (this.detalleEvento.regionPatencion == 4) {
                this.region = 'Región Occidente';
            }
            //console.log('estado', this.detalleEvento.estado);
            console.log(data);
            this.spinner.hide();
        });
    }
    obtenerEstadoPatencion(event) {
        console.log('region1', this.detalleEvento.regionPatencion);
        let region = this.detalleEvento.codigoAtencionId;
        console.log('region2', this.region);
        console.log('region3', region);
        let estado = event.checked == true ? 1 : 2;
        console.log('estado', estado);
        if (estado == 2) {
            this.service.getData(this.service.BASE_URL_QUEJAS, `upatencion/cantidad/${region}`).toPromise().then(data => {
                this.eliminacion = data;
                this.cantidad = this.eliminacion.cantidad;
                console.log('eliminacion', this.cantidad);
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Esta seguro de la eliminación?',
                    text: `Se eliminará la cantidad de ${this.cantidad} usuario${this.cantidad != 1 ? "s" : ""} asociado${this.cantidad != 1 ? "s" : ""} a la ${this.region}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminar!',
                    allowOutsideClick: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.service.getData(this.service.BASE_URL_QUEJAS, `upatencion/solicitud/${this.detalleEvento.codigoAtencionId}`).toPromise().then(data => {
                            this.solicitudes = data;
                            console.log(this.solicitudes);
                            this.solicitudes.forEach((element) => {
                                return this.solicitud.push(element === null || element === void 0 ? void 0 : element.codigoUsuarioPunto);
                            });
                            console.log('solicitud', this.solicitud.toString());
                            const solicitudesEliminar = {
                                pCodigo: this.solicitud
                            };
                            console.log('solicitudesEliminar', solicitudesEliminar);
                            this.service.postData(this.service.BASE_URL_QUEJAS, 'upatencion/estadosm', (solicitudesEliminar)).toPromise().then(data => {
                            });
                            this.spinner.hide();
                        });
                    }
                });
            });
        }
    }
    limpiarFormulario() {
        this.PatencionForm.reset();
    }
    modificarPatencion() {
        var _a, _b, _c;
        this.spinner.show();
        const modificarPatencion = {
            codigoAtencionId: this.detalleEvento.codigoAtencionId,
            nombrePatencion: (_a = this.PatencionForm.get('nombreAtencion')) === null || _a === void 0 ? void 0 : _a.value,
            regionPatencion: (_b = this.PatencionForm.get('regionAtencion')) === null || _b === void 0 ? void 0 : _b.value,
            estado: ((_c = this.PatencionForm.get('estadoAtencion')) === null || _c === void 0 ? void 0 : _c.value) ? 1 : 2,
            usuarioAgrega: this.user.username,
            ipUsuarioAgrega: this.ipUsuario,
            fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
        };
        console.log('modificar', modificarPatencion);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'patencion/modificar/pa', modificarPatencion).toPromise().then(data => {
            this.obtenerPuntosAtencion();
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                titleText: `Datos actualizados`,
                icon: 'success',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
            return data;
        }).catch(err => {
            console.error(err);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                icon: 'error',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        });
    }
    esEmailValido(email) {
        let mailValido = false;
        'use strict';
        var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(EMAIL_REGEX)) {
            mailValido = true;
        }
        return mailValido;
    }
}
PuntosAtencionComponent.ɵfac = function PuntosAtencionComponent_Factory(t) { return new (t || PuntosAtencionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"])); };
PuntosAtencionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: PuntosAtencionComponent, selectors: [["app-puntos-atencion"]], viewQuery: function PuntosAtencionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 95, vars: 16, consts: [[1, "card-body"], [1, "titulo"], ["mat-raised-button", "", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticAgregar", 1, "botones", "mt-4", "mb-4"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "codigoAtencionId"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "regionPatencion"], ["matColumnDef", "nombrePatencion"], ["matColumnDef", "accion"], ["mat-header-cell", "", "class", "headerTable", "class", "headerTable", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "accion", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticAgregar", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "outline"], ["formControlName", "regionAtencion"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "nombreAtencion", "matInput", "", "placeholder", "Nombre del punto de atenci\u00F3n", "maxlength", "100", "autocomplete", "off"], ["align", "end"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btnCancelar", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "staticDetalleEventos", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["id", "staticBackdropLabel", 1, "modal-title", "fs-5"], ["disabled", "true", 3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "nombreAtencion", "matInput", "", "placeholder", "Nombre del punto de atenci\u00F3n", "maxlength", "100", "autocomplete", "off", 3, "value"], [1, "col-sm-10"], ["color", "primary", "formControlName", "estadoAtencion", 3, "change"], ["estado", ""], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headerTable"], ["mat-cell", "", 1, "accion"], ["title", "Ver m\u00E1s", "data-bs-toggle", "modal", "data-bs-target", "#staticDetalleEventos", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [3, "value"], ["disabled", "true", 3, "value"]], template: function PuntosAtencionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Puntos de Atencion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Punto atencion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function PuntosAtencionComponent_Template_input_keyup_12_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, PuntosAtencionComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PuntosAtencionComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PuntosAtencionComponent_th_20_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, PuntosAtencionComponent_td_21_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, PuntosAtencionComponent_th_23_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, PuntosAtencionComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, PuntosAtencionComponent_th_26_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, PuntosAtencionComponent_td_27_Template, 3, 0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, PuntosAtencionComponent_tr_28_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, PuntosAtencionComponent_tr_29_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, PuntosAtencionComponent_tr_30_Template, 3, 1, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Agregar Punto de Atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Regiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, PuntosAtencionComponent_mat_option_46_Template, 2, 2, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, PuntosAtencionComponent_mat_error_47_Template, 2, 0, "mat-error", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Nombre punto de atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-hint", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, PuntosAtencionComponent_mat_error_55_Template, 2, 0, "mat-error", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PuntosAtencionComponent_Template_button_click_57_listener() { return ctx.limpiarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PuntosAtencionComponent_Template_button_click_59_listener() { ctx.guardarPuntoAtencion(ctx.PatencionForm.value); return ctx.limpiarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "h1", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Modificar Punto de Atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "Regiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, PuntosAtencionComponent_mat_option_75_Template, 2, 2, "mat-option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, PuntosAtencionComponent_mat_error_76_Template, 2, 0, "mat-error", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Nombre punto de atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "mat-slide-toggle", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function PuntosAtencionComponent_Template_mat_slide_toggle_change_87_listener($event) { return ctx.obtenerEstadoPatencion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PuntosAtencionComponent_Template_button_click_91_listener() { return ctx.limpiarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PuntosAtencionComponent_Template_button_click_93_listener() { return ctx.modificarPatencion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.PatencionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.regiones);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.PatencionForm.controls.regionAtencion.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.PatencionForm.controls.nombreAtencion.value == null ? null : ctx.PatencionForm.controls.nombreAtencion.value.length) || 0, "/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.PatencionForm.controls.nombreAtencion.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.PatencionForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.PatencionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.regiones);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.PatencionForm.controls.regionAtencion.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.detalleEvento == null ? null : ctx.detalleEvento.nombrePatencion);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_r17.checked ? "Activo" : "Inactivo");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"]], styles: [".cdk-overlay-container {\r\n  z-index: 1200 !important;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    font-family: normal normal medium 18px/22px Arial;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 18px 18px 0px 0px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n}\r\n\r\n.botones[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    background: #3f51b5 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n  }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n}\r\n\r\n.btnCancelar[_ngcontent-%COMP%] {\r\n  margin-left: 2%;\r\n  \r\n  top: 734px;\r\n  left: 1252px;\r\n  width: 150px;\r\n  height: 40px;\r\n  \r\n  background: #b81515 0% 0% no-repeat padding-box;\r\n  opacity: 1;\r\n  \r\n  text-align: center;\r\n  letter-spacing: 0px;\r\n  color: #FFFFFF;\r\n  opacity: 1;\r\n  border-radius: 20px;\r\n  \r\n}\r\n\r\n.btnGuardar[_ngcontent-%COMP%] {\r\n  \r\n  top: 734px;\r\n  left: 1252px;\r\n  width: 150px;\r\n  height: 40px;\r\n  \r\n  background: #DCDCDC 0% 0% no-repeat padding-box;\r\n  opacity: 1;\r\n  \r\n  text-align: center;\r\n  letter-spacing: 0px;\r\n  color: #B2B2B2;\r\n  opacity: 1;\r\n  border-radius: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bnRvcy1hdGVuY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0VBQ1YsbUJBQW1COztBQUVyQjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUI7QUFDckIiLCJmaWxlIjoicHVudG9zLWF0ZW5jaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5ib3RvbmVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5idG5DYW5jZWxhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgdG9wOiA3MzRweDtcclxuICBsZWZ0OiAxMjUycHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgYmFja2dyb3VuZDogI2I4MTUxNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIFxyXG59XHJcblxyXG5cclxuLmJ0bkd1YXJkYXIge1xyXG4gIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgdG9wOiA3MzRweDtcclxuICBsZWZ0OiAxMjUycHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgYmFja2dyb3VuZDogI0RDRENEQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICNCMkIyQjI7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "7n+j":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/operador/operador-dashboard/operador-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OperadorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorDashboardComponent", function() { return OperadorDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _operador_sidebar_operador_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operador-sidebar/operador-sidebar.component */ "bJwL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class OperadorDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
OperadorDashboardComponent.ɵfac = function OperadorDashboardComponent_Factory(t) { return new (t || OperadorDashboardComponent)(); };
OperadorDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperadorDashboardComponent, selectors: [["app-operador-dashboard"]], decls: 7, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"]], template: function OperadorDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-operador-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_operador_sidebar_operador_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["OperadorSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "8D/r":
/*!*******************************************************!*\
  !*** ./src/app/services/uploadFileService.service.ts ***!
  \*******************************************************/
/*! exports provided: UploadFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileService", function() { return UploadFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UploadFileService {
    constructor() { }
    subirArchivo(archivo, carpeta) {
        return new Promise((resolve, reject) => {
            let formData = new FormData();
            let xhr = new XMLHttpRequest();
            formData.append('file', archivo, archivo.name);
            formData.append('folder', carpeta);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            let url = 'https://api.cloudinary.com/v1_1/dwggq6q2f/auto/upload?upload_preset=gaktp4f6';
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}
UploadFileService.ɵfac = function UploadFileService_Factory(t) { return new (t || UploadFileService)(); };
UploadFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadFileService, factory: UploadFileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "A6fv":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "EFyh");



class AuthInterceptor {
    constructor(loginService) {
        this.loginService = loginService;
    }
    intercept(req, next) {
        if (this.loginService.isLoggedIn()) {
            const authToken = this.loginService.getToken();
            const authReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + authToken)
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
const authInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: AuthInterceptor,
        multi: true
    }
];


/***/ }),

/***/ "AytR":
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
    production: false,
    BASE_URL_QUEJAS: 'http://localhost:8080',
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

/***/ "CiE/":
/*!*******************************************!*\
  !*** ./src/app/services/usuario.guard.ts ***!
  \*******************************************/
/*! exports provided: UsuarioGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioGuard", function() { return UsuarioGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UsuarioGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loginService.isLoggedIn() && this.loginService.getUserRol() == 'USUARIO') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
UsuarioGuard.ɵfac = function UsuarioGuard_Factory(t) { return new (t || UsuarioGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsuarioGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioGuard, factory: UsuarioGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ckrt":
/*!*******************************************************************!*\
  !*** ./src/app/pages/user/user-sidebar/user-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSidebarComponent", function() { return UserSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class UserSidebarComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
    logout() {
        this.login.logout();
        window.location.reload();
    }
}
UserSidebarComponent.ɵfac = function UserSidebarComponent_Factory(t) { return new (t || UserSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
UserSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSidebarComponent, selectors: [["app-user-sidebar"]], decls: 16, vars: 0, consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/user-dashboard/usuario"], ["mat-list-icon", ""], ["mat-list-item", "", "routerLink", "/user-dashboard/consulta"], ["mat-list-item", "", 3, "click"]], template: function UserSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quejas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "insert_drive_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Consulta Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSidebarComponent_Template_button_click_12_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class LoginComponent {
    constructor(snack, loginService, router) {
        this.snack = snack;
        this.loginService = loginService;
        this.router = router;
        this.loginData = {
            "username": "",
            "password": ""
        };
    }
    ngOnInit() {
    }
    formSubmit() {
        if (this.loginData.username.trim() == '' || this.loginData.username.trim() == '') {
            this.snack.open("Username is empty", "OK", {
                duration: 3000
            });
            return;
        }
        if (this.loginData.password.trim() == '' || this.loginData.password.trim() == '') {
            this.snack.open("Password is empty", "OK", {
                duration: 3000
            });
            return;
        }
        this.loginService.generateToken(this.loginData).subscribe((data) => {
            //console.log(data);
            this.loginService.login(data.token);
            this.loginService.getCurrentUser().subscribe((user) => {
                console.log(user);
                this.loginService.setUser(user);
                if (this.loginService.getUserRol() == 'ADMIN') {
                    this.router.navigate(['admin']);
                    this.loginService.loginStatusSubjec.next(true);
                }
                else if (this.loginService.getUserRol() == 'USUARIO') {
                    this.router.navigate(['user-dashboard']);
                    this.loginService.loginStatusSubjec.next(true);
                }
                else if (this.loginService.getUserRol() == 'CUENTAHABIENTE') {
                    this.router.navigate(['cuentahabiente-dashboard']);
                    this.loginService.loginStatusSubjec.next(true);
                }
                else if (this.loginService.getUserRol() == 'CENTRALIZADOR') {
                    this.router.navigate(['centralizador-dashboard']);
                    this.loginService.loginStatusSubjec.next(true);
                }
                else if (this.loginService.getUserRol() == 'OPERADOR') {
                    this.router.navigate(['operador-dashboard']);
                    this.loginService.loginStatusSubjec.next(true);
                }
                else {
                    this.snack.open("Usario no encontrado", "OK", {
                        duration: 3000
                    });
                    this.loginService.logout();
                }
            });
        }, (error) => {
            console.log(error);
            this.snack.open("Datos invalidos, vuelva a intentar", "OK", {
                duration: 3000
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 2, consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row", "mt20"], [1, "col-md-6", "offset-md-3"], [1, "container", "text-center"], ["src", "../../../assets/sesion.png", "width", "100", "height", "100"], [1, "text-center"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Digite su nombre de usuario", 3, "ngModel", "ngModelChange"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Digite su contrase\u00F1a", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary"], ["type", "reset", "type", "reset", "mat-raised-button", "", "color", "warn", 2, "margin-left", "20px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inicio de sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.formSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.loginData.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "El nombre de usuario debe ser \u00FAnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) { return ctx.loginData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "La contrase\u00F1a debe tener al menos 8 caracteres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginData.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginData.password);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2IiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "DCtm":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/admin/administracion-usuarios/administracion-usuarios.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AdministracionUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministracionUsuariosComponent", function() { return AdministracionUsuariosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class AdministracionUsuariosComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdministracionUsuariosComponent.ɵfac = function AdministracionUsuariosComponent_Factory(t) { return new (t || AdministracionUsuariosComponent)(); };
AdministracionUsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdministracionUsuariosComponent, selectors: [["app-administracion-usuarios"]], decls: 7, vars: 0, consts: [[1, "card-body"], [1, "titulo"], ["mat-raised-button", "", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticAgregar", 1, "botones", "mt-4", "mb-4"]], template: function AdministracionUsuariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Administraci\u00F3n de Usuarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Punto atencion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n  \r\n  .titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n  \r\n  .botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  \r\n  .mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n  \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n  \r\n  .modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n  \r\n  .btnGuardar[_ngcontent-%COMP%] {\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #DCDCDC 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #B2B2B2;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluaXN0cmFjaW9uLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7RUFDMUI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztFQUdBO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJhZG1pbmlzdHJhY2lvbi11c3Vhcmlvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGl0dWxvIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4IDE4cHggMHB4IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uZXMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgYmFja2dyb3VuZDogIzNmNTFiNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DYW5jZWxhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAvKiBMYXlvdXQgUHJvcGVydGllcyAqL1xyXG4gICAgdG9wOiA3MzRweDtcclxuICAgIGxlZnQ6IDEyNTJweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIGJhY2tncm91bmQ6ICNiODE1MTUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5idG5HdWFyZGFyIHtcclxuICAgIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgICB0b3A6IDczNHB4O1xyXG4gICAgbGVmdDogMTI1MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgYmFja2dyb3VuZDogI0RDRENEQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "EFyh":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "nYYN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class LoginService {
    constructor(http) {
        this.http = http;
        this.loginStatusSubjec = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    //generar el token
    generateToken(loginData) {
        return this.http.post(`${_helper__WEBPACK_IMPORTED_MODULE_1__["default"]}/generate-token`, loginData);
    }
    //Iniciar sesión y establecer el token en el localStorage
    login(token) {
        localStorage.setItem('token', token);
        return true;
    }
    isLoggedIn() {
        let tokenStr = localStorage.getItem('token');
        if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
            return false;
        }
        else {
            return true;
        }
    }
    //cerrar sesión y eliminar el token del localStorage
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return true;
    }
    //obtener el token del localStorage
    getToken() {
        return localStorage.getItem('token');
    }
    //obtener el usuario del localStorage
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
        return true;
    }
    getUser() {
        let userStr = localStorage.getItem('user');
        if (userStr != null) {
            return JSON.parse(userStr);
        }
        else {
            this.logout();
            return null;
        }
    }
    getUserRol() {
        let user = this.getUser();
        return user.authorities[0].authority;
    }
    getCurrentUser() {
        return this.http.get(`${_helper__WEBPACK_IMPORTED_MODULE_1__["default"]}/actual-usuario`);
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "HBDD":
/*!*************************************************!*\
  !*** ./src/app/services/centralizador.guard.ts ***!
  \*************************************************/
/*! exports provided: CentralizadorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralizadorGuard", function() { return CentralizadorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CentralizadorGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loginService.isLoggedIn() && this.loginService.getUserRol() == 'CENTRALIZADOR') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
CentralizadorGuard.ɵfac = function CentralizadorGuard_Factory(t) { return new (t || CentralizadorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CentralizadorGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CentralizadorGuard, factory: CentralizadorGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "KI0Q":
/*!********************************************!*\
  !*** ./src/app/utils/spanish-paginator.ts ***!
  \********************************************/
/*! exports provided: CustomPaginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomPaginator", function() { return CustomPaginator; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");

const spanishRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
        return `0 de ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
};
function CustomPaginator() {
    const paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]();
    paginatorIntl.itemsPerPageLabel = 'Registros por página';
    paginatorIntl.firstPageLabel = 'Primera página';
    paginatorIntl.lastPageLabel = 'Última página';
    paginatorIntl.nextPageLabel = 'Siguiente página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.getRangeLabel = spanishRangeLabel;
    return paginatorIntl;
}


/***/ }),

/***/ "QudR":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/cuentahabiente/cuentahabiente-dashboard/cuentahabiente-dashboard.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CuentahabienteDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentahabienteDashboardComponent", function() { return CuentahabienteDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cuentahabiente_sidebar_cuentahabiente_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cuentahabiente-sidebar/cuentahabiente-sidebar.component */ "WCDv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CuentahabienteDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CuentahabienteDashboardComponent.ɵfac = function CuentahabienteDashboardComponent_Factory(t) { return new (t || CuentahabienteDashboardComponent)(); };
CuentahabienteDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CuentahabienteDashboardComponent, selectors: [["app-cuentahabiente-dashboard"]], decls: 7, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"]], template: function CuentahabienteDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cuentahabiente-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cuentahabiente_sidebar_cuentahabiente_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["CuentahabienteSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdWVudGFoYWJpZW50ZS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'sistema-quejas-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Tfp0":
/*!********************************************************************!*\
  !*** ./src/app/pages/centralizador/analisis/analisis.component.ts ***!
  \********************************************************************/
/*! exports provided: AnalisisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalisisComponent", function() { return AnalisisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/uploadFileService.service */ "8D/r");
/* harmony import */ var src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/reglas-negocio.service */ "5Hqp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");

















function AnalisisComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Correlativo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AnalisisComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r12.correlativo, " ");
} }
function AnalisisComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Etapa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AnalisisComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r13.codigoEtapa, " ");
} }
function AnalisisComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AnalisisComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r14.detalleQueja, " ");
} }
function AnalisisComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Administrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AnalisisComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AnalisisComponent_td_23_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const evento_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.obtenerQuejaById(evento_r15.codigoQueja); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AnalisisComponent_td_23_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const evento_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.obtenerQuejaById(evento_r15.codigoQueja); })("click", function AnalisisComponent_td_23_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.resolver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AnalisisComponent_td_23_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const evento_r15 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.obtenerQuejaById(evento_r15.codigoQueja); })("click", function AnalisisComponent_td_23_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.rechazar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AnalisisComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 40);
} }
function AnalisisComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 41);
} }
function AnalisisComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class AnalisisComponent {
    constructor(service, spinner, loginService, uploadFileService, reglasNegocio) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.uploadFileService = uploadFileService;
        this.reglasNegocio = reglasNegocio;
        this.user = null;
        this.isLoggedIn = false;
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.eventoColumns = [
            'correlativo',
            'codigoEtapa',
            'detalleQueja',
            'accion'
        ];
    }
    ngOnInit() {
        this.spinner.show();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
        });
        this.obtenerEventos();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    obtenerEventos() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'queja/asignadas').toPromise().then(data => {
            console.log(data);
            data.forEach(element => {
                element.codigoEtapa = element.codigoEtapa == 2 ? 'Analisis' : '';
            });
            this.dataSourceEventos.sort = this.sort;
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSourceEventos.paginator = this.paginator;
        });
    }
    obtenerQuejaById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.service.getData(this.service.BASE_URL_QUEJAS, `queja/byId/${id}`).toPromise().then(data => {
                this.detalleQueja = data;
                console.log(this.detalleQueja);
                /* this.detalleQueja.forEach(element => {
                  element.codigoEtapa = element?.codigoEtapa == 2 ? 'Analisis' : '';
                }); */
            });
        });
    }
    resolver() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                showCloseButton: true,
                title: '¿Está seguro de resolver la queja?',
                text: 'Esta seguro de resolver la solicitud de queja',
                showDenyButton: true,
                denyButtonText: "Cancelar",
                confirmButtonText: "Resolver",
                allowEscapeKey: false,
                allowOutsideClick: false,
                input: 'text',
                inputPlaceholder: 'Ingrese el motivo de resolución',
                inputValidator(validarJustifiacion) {
                    return !validarJustifiacion && 'Debe ingresar el motivo de resolución';
                },
            }).then((validarJustifiacion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (validarJustifiacion.isConfirmed) {
                    const justificacion = validarJustifiacion.value;
                    this.asignar = {
                        solicitud: [this.detalleQueja.codigoQueja],
                        complemento: 3,
                        justificacion: justificacion
                    };
                    console.log(this.asignar);
                    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/asignar', this.asignar).toPromise().then(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Rechazada!',
                            text: 'La queja ha sido rechazada',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.obtenerEventos();
                            this.detalleQueja = null;
                        });
                    });
                }
            }));
        });
    }
    rechazar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                showCloseButton: true,
                title: '¿Está seguro de rechazar la queja?',
                text: 'Esta seguro de rechazar la solicitud de queja',
                showDenyButton: true,
                denyButtonText: "Cancelar",
                confirmButtonText: "Rechazar",
                allowEscapeKey: false,
                allowOutsideClick: false,
                input: 'text',
                inputPlaceholder: 'Ingrese el motivo de rechazo',
                inputValidator(validarJustifiacion) {
                    return !validarJustifiacion && 'Debe ingresar el motivo de rechazo';
                },
            }).then((validarJustifiacion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (validarJustifiacion.isConfirmed) {
                    const justificacion = validarJustifiacion.value;
                    this.asignar = {
                        solicitud: [this.detalleQueja.codigoQueja],
                        complemento: 4,
                        justificacion: justificacion
                    };
                    console.log(this.asignar);
                    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/asignar', this.asignar).toPromise().then(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Rechazada!',
                            text: 'La queja ha sido rechazada',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.obtenerEventos();
                            this.detalleQueja = null;
                        });
                    });
                }
            }));
        });
    }
}
AnalisisComponent.ɵfac = function AnalisisComponent_Factory(t) { return new (t || AnalisisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_10__["ReglasNegocioService"])); };
AnalisisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AnalisisComponent, selectors: [["app-analisis"]], viewQuery: function AnalisisComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 72, vars: 11, consts: [[1, "card-body"], [1, "titulo"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "correlativo"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigoEtapa"], ["matColumnDef", "detalleQueja"], ["matColumnDef", "accion"], ["mat-header-cell", "", "class", "headerTable", "class", "headerTable", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "accion", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], [1, "row"], [1, "col-6"], [1, "col"], ["matInput", "", "disabled", "", 3, "value"], ["target", "_blank", "download", "", 3, "href"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headerTable"], ["mat-cell", "", 1, "accion"], ["title", "Ver m\u00E1s", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["title", "Asignar", "data-toggle", "modal", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["title", "No aplica", "data-toggle", "modal", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function AnalisisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " An\u00E1lisis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AnalisisComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AnalisisComponent_th_13_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AnalisisComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AnalisisComponent_th_16_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AnalisisComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AnalisisComponent_th_19_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AnalisisComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AnalisisComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AnalisisComponent_td_23_Template, 7, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AnalisisComponent_tr_24_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AnalisisComponent_tr_25_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AnalisisComponent_tr_26_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "No. Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Justificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Fecha Creacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Usuario de Creaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Descargar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.codigoQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.justificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.fechaAgrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.usuarioAgrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.detalleQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx.detalleQueja == null ? null : ctx.detalleQueja.documentoSoporte, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    font-family: normal normal medium 18px/22px Arial;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 18px 18px 0px 0px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n}\r\n\r\n  .cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n\r\n.btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.btnGuardar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #0615a0 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWxpc2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlEQUFpRDtJQUNqRCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7RUFDMUI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0FBRUE7TUFDSSxXQUFXO0lBQ2I7O0FBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztBQUVBO01BQ0UsVUFBVTtJQUNaOztBQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztBQUdBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25CIiwiZmlsZSI6ImFuYWxpc2lzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsbyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxOHB4LzIycHggQXJpYWw7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDBweCAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZCwgdGgge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuQ2FuY2VsYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjYjgxNTE1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLmJ0bkd1YXJkYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDYxNWEwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "W3qd":
/*!********************************************!*\
  !*** ./src/app/services/operador.guard.ts ***!
  \********************************************/
/*! exports provided: OperadorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorGuard", function() { return OperadorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class OperadorGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loginService.isLoggedIn() && this.loginService.getUserRol() == 'OPERADOR') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
OperadorGuard.ɵfac = function OperadorGuard_Factory(t) { return new (t || OperadorGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OperadorGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OperadorGuard, factory: OperadorGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WCDv":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/cuentahabiente/cuentahabiente-sidebar/cuentahabiente-sidebar.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CuentahabienteSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentahabienteSidebarComponent", function() { return CuentahabienteSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class CuentahabienteSidebarComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
    logout() {
        this.login.logout();
        window.location.reload();
    }
}
CuentahabienteSidebarComponent.ɵfac = function CuentahabienteSidebarComponent_Factory(t) { return new (t || CuentahabienteSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
CuentahabienteSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CuentahabienteSidebarComponent, selectors: [["app-cuentahabiente-sidebar"]], decls: 12, vars: 0, consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/cuentahabiente-dashboard/cuentahabiente"], ["mat-list-icon", ""], ["mat-list-item", "", 3, "click"]], template: function CuentahabienteSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cuentahabiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Quejas Cuentahabiente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CuentahabienteSidebarComponent_Template_button_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin/dashboard/dashboard.component */ "qgmu");
/* harmony import */ var _pages_admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/admin/sidebar/sidebar.component */ "+V0h");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.interceptor */ "A6fv");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _utils_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/material.module */ "7G6C");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _pages_admin_puntos_atencion_puntos_atencion_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/admin/puntos-atencion/puntos-atencion.component */ "7hli");
/* harmony import */ var _pages_admin_usuarios_atencion_usuarios_atencion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin/usuarios-atencion/usuarios-atencion.component */ "tvvM");
/* harmony import */ var _pages_admin_tipo_quejas_tipo_quejas_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/tipo-quejas/tipo-quejas.component */ "xvB6");
/* harmony import */ var _pages_user_quejas_usuario_quejas_usuario_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/user/quejas-usuario/quejas-usuario.component */ "pqw9");
/* harmony import */ var _pages_admin_asignacion_rechazo_asignacion_rechazo_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/admin/asignacion-rechazo/asignacion-rechazo.component */ "+vpJ");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var mat_timepicker__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! mat-timepicker */ "djeY");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_admin_usuarios_punto_atencion_usuarios_punto_atencion_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/admin/usuarios-punto-atencion/usuarios-punto-atencion.component */ "rniY");
/* harmony import */ var _pages_admin_administracion_usuarios_administracion_usuarios_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/admin/administracion-usuarios/administracion-usuarios.component */ "DCtm");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! angular2-text-mask */ "904P");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./pages/user/user-dashboard/user-dashboard.component */ "Zvah");
/* harmony import */ var _pages_cuentahabiente_cuentahabiente_dashboard_cuentahabiente_dashboard_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./pages/cuentahabiente/cuentahabiente-dashboard/cuentahabiente-dashboard.component */ "QudR");
/* harmony import */ var _pages_cuentahabiente_cuentahabiente_sidebar_cuentahabiente_sidebar_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./pages/cuentahabiente/cuentahabiente-sidebar/cuentahabiente-sidebar.component */ "WCDv");
/* harmony import */ var _pages_cuentahabiente_cuentahabiente_queja_cuentahabiente_queja_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./pages/cuentahabiente/cuentahabiente-queja/cuentahabiente-queja.component */ "mWIF");
/* harmony import */ var _pages_centralizador_centralizador_centralizador_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./pages/centralizador/centralizador/centralizador.component */ "0UbS");
/* harmony import */ var _pages_centralizador_centralizador_dashboard_centralizador_dashboard_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./pages/centralizador/centralizador-dashboard/centralizador-dashboard.component */ "wSqz");
/* harmony import */ var _pages_centralizador_centralizador_sidebar_centralizador_sidebar_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./pages/centralizador/centralizador-sidebar/centralizador-sidebar.component */ "3XQO");
/* harmony import */ var _pages_operador_operador_operador_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./pages/operador/operador/operador.component */ "krFM");
/* harmony import */ var _pages_operador_operador_dashboard_operador_dashboard_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./pages/operador/operador-dashboard/operador-dashboard.component */ "7n+j");
/* harmony import */ var _pages_operador_operador_sidebar_operador_sidebar_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./pages/operador/operador-sidebar/operador-sidebar.component */ "bJwL");
/* harmony import */ var _pages_user_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./pages/user/user-sidebar/user-sidebar.component */ "Ckrt");
/* harmony import */ var _pages_user_consulta_usuario_consulta_usuario_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./pages/user/consulta-usuario/consulta-usuario.component */ "ebeS");
/* harmony import */ var _pages_centralizador_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./pages/centralizador/analisis/analisis.component */ "Tfp0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @angular/core */ "fXoL");




















































































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵdefineInjector"]({ providers: [_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["authInterceptorProviders"],
        { provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MAT_RADIO_DEFAULT_OPTIONS"], useValue: { color: 'accent' } },
        //{ provide: MatPaginatorIntl, useValue: CustomPaginator() },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"], useValue: 'es' },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"], useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__["MomentDateAdapter"], deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_LOCALE"]] },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_13__["MAT_MOMENT_DATE_FORMATS"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _utils_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_66__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_69__["TextMaskModule"]
        ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_24__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_26__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_48__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_54__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_59__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_60__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ScrollingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_54__["MatTableModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__["MatSortModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__["MatDatepickerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_48__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__["MatProgressBarModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_63__["NgxSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_64__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        mat_timepicker__WEBPACK_IMPORTED_MODULE_65__["MatTimepickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_83__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _pages_admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
        _pages_admin_puntos_atencion_puntos_atencion_component__WEBPACK_IMPORTED_MODULE_17__["PuntosAtencionComponent"],
        _pages_admin_usuarios_atencion_usuarios_atencion_component__WEBPACK_IMPORTED_MODULE_18__["UsuariosAtencionComponent"],
        _pages_admin_tipo_quejas_tipo_quejas_component__WEBPACK_IMPORTED_MODULE_19__["TipoQuejasComponent"],
        _pages_user_quejas_usuario_quejas_usuario_component__WEBPACK_IMPORTED_MODULE_20__["QuejasUsuarioComponent"],
        _pages_admin_asignacion_rechazo_asignacion_rechazo_component__WEBPACK_IMPORTED_MODULE_21__["AsignacionRechazoComponent"],
        _pages_admin_usuarios_punto_atencion_usuarios_punto_atencion_component__WEBPACK_IMPORTED_MODULE_67__["UsuariosPuntoAtencionComponent"],
        _pages_admin_administracion_usuarios_administracion_usuarios_component__WEBPACK_IMPORTED_MODULE_68__["AdministracionUsuariosComponent"],
        _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_70__["UserDashboardComponent"],
        _pages_cuentahabiente_cuentahabiente_dashboard_cuentahabiente_dashboard_component__WEBPACK_IMPORTED_MODULE_71__["CuentahabienteDashboardComponent"],
        _pages_cuentahabiente_cuentahabiente_sidebar_cuentahabiente_sidebar_component__WEBPACK_IMPORTED_MODULE_72__["CuentahabienteSidebarComponent"],
        _pages_cuentahabiente_cuentahabiente_queja_cuentahabiente_queja_component__WEBPACK_IMPORTED_MODULE_73__["CuentahabienteQuejaComponent"],
        _pages_centralizador_centralizador_centralizador_component__WEBPACK_IMPORTED_MODULE_74__["CentralizadorComponent"],
        _pages_centralizador_centralizador_dashboard_centralizador_dashboard_component__WEBPACK_IMPORTED_MODULE_75__["CentralizadorDashboardComponent"],
        _pages_centralizador_centralizador_sidebar_centralizador_sidebar_component__WEBPACK_IMPORTED_MODULE_76__["CentralizadorSidebarComponent"],
        _pages_operador_operador_operador_component__WEBPACK_IMPORTED_MODULE_77__["OperadorComponent"],
        _pages_operador_operador_dashboard_operador_dashboard_component__WEBPACK_IMPORTED_MODULE_78__["OperadorDashboardComponent"],
        _pages_operador_operador_sidebar_operador_sidebar_component__WEBPACK_IMPORTED_MODULE_79__["OperadorSidebarComponent"],
        _pages_user_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_80__["UserSidebarComponent"],
        _pages_user_consulta_usuario_consulta_usuario_component__WEBPACK_IMPORTED_MODULE_81__["ConsultaUsuarioComponent"],
        _pages_centralizador_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_82__["AnalisisComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _utils_material_module__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_66__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
        angular2_text_mask__WEBPACK_IMPORTED_MODULE_69__["TextMaskModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_24__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_25__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_26__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_27__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_45__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_48__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_50__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_51__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_52__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_54__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_59__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_60__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_61__["ScrollingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_42__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__["ReactiveFormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_54__["MatTableModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_53__["MatSortModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_62__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__["MatDatepickerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__["MatProgressSpinnerModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_57__["MatTooltipModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_56__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_49__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_48__["MatSelectModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__["MatProgressBarModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_63__["NgxSpinnerModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDividerModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_64__["CommonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        mat_timepicker__WEBPACK_IMPORTED_MODULE_65__["MatTimepickerModule"]] }); })();


/***/ }),

/***/ "Zvah":
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/user-dashboard/user-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-sidebar/user-sidebar.component */ "Ckrt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class UserDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserDashboardComponent.ɵfac = function UserDashboardComponent_Factory(t) { return new (t || UserDashboardComponent)(); };
UserDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDashboardComponent, selectors: [["app-user-dashboard"]], decls: 7, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"]], template: function UserDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-user-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["UserSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "bJwL":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/operador/operador-sidebar/operador-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OperadorSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorSidebarComponent", function() { return OperadorSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






class OperadorSidebarComponent {
    constructor(login) {
        this.login = login;
    }
    ngOnInit() {
    }
    logout() {
        this.login.logout();
        window.location.reload();
    }
}
OperadorSidebarComponent.ɵfac = function OperadorSidebarComponent_Factory(t) { return new (t || OperadorSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
OperadorSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperadorSidebarComponent, selectors: [["app-operador-sidebar"]], decls: 12, vars: 0, consts: [["mat-subheader", ""], ["mat-list-item", "", "routerLink", "/operador-dashboard/operador"], ["mat-list-icon", ""], ["mat-list-item", "", 3, "click"]], template: function OperadorSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-action-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Operador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Re-An\u00E1lisis ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperadorSidebarComponent_Template_button_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Salir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"]], encapsulation: 2 });


/***/ }),

/***/ "eSIX":
/*!*****************************************!*\
  !*** ./src/app/services/admin.guard.ts ***!
  \*****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AdminGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loginService.isLoggedIn() && this.loginService.getUserRol() == 'ADMIN') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AdminGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ebeS":
/*!***************************************************************************!*\
  !*** ./src/app/pages/user/consulta-usuario/consulta-usuario.component.ts ***!
  \***************************************************************************/
/*! exports provided: MY_FORMATS, ConsultaUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultaUsuarioComponent", function() { return ConsultaUsuarioComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/uploadFileService.service */ "8D/r");
/* harmony import */ var src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/reglas-negocio.service */ "5Hqp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");

























function ConsultaUsuarioComponent_div_45_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " codigo Queja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ConsultaUsuarioComponent_div_45_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r12.codigoQueja, " ");
} }
function ConsultaUsuarioComponent_div_45_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Correlativo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ConsultaUsuarioComponent_div_45_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r13.correlativo, " ");
} }
function ConsultaUsuarioComponent_div_45_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " A\u00F1o Queja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function ConsultaUsuarioComponent_div_45_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", element_r14.anioQueja, " ");
} }
function ConsultaUsuarioComponent_div_45_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 34);
} }
function ConsultaUsuarioComponent_div_45_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 35);
} }
const _c0 = function () { return [15]; };
function ConsultaUsuarioComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](4, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ConsultaUsuarioComponent_div_45_th_5_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ConsultaUsuarioComponent_div_45_td_6_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](7, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, ConsultaUsuarioComponent_div_45_th_8_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, ConsultaUsuarioComponent_div_45_td_9_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](10, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ConsultaUsuarioComponent_div_45_th_11_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ConsultaUsuarioComponent_div_45_td_12_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ConsultaUsuarioComponent_div_45_tr_13_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, ConsultaUsuarioComponent_div_45_tr_14_Template, 1, 0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "mat-paginator", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r2.dataSourceEventos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.eventoColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r2.eventoColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
} }
const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
    },
};
class ConsultaUsuarioComponent {
    constructor(service, spinner, loginService, uploadFileService, reglasNegocio) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.uploadFileService = uploadFileService;
        this.reglasNegocio = reglasNegocio;
        this.showFilter = true;
        this.qms = [];
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.eventoColumns = [
            'correlativo',
            'anioQueja',
            'codigoQueja'
        ];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            noQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            anioQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_6__()),
            tipoQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
        });
    }
    ngOnInit() {
    }
    obtenerQMS() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'tipoQueja/listar').toPromise().then(data => {
            this.qms = data;
            console.log(data);
        });
    }
    aniFin(normalizedYear, datepicker) {
        const ctrlValue = this.searchForm.get('anioQueja').value;
        ctrlValue.year(normalizedYear.year());
        this.searchForm.get('anioQueja').setValue(ctrlValue);
        this.anio2 = ctrlValue.format('YYYY').toString();
        datepicker.close();
    }
    consultar() {
        this.spinner.show();
        const consulta = {
            codigoQueja: this.searchForm.get('noQueja').value,
            anioQueja: this.anio2,
            correlativo: '%' + this.searchForm.get('tipoQueja').value + '%'
        };
        console.log(consulta);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/obtenerFiltros', consulta).toPromise().then(data => {
            console.log(data);
            this.spinner.hide();
            this.showInfo = false;
            if (data.length === 0) {
                this.showFilter = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    titleText: `No se encontró información en base a los filtros ingresados.`,
                    icon: 'warning',
                    showCloseButton: true,
                    showConfirmButton: false
                });
                this.dataSourceEventos.data = [];
            }
            else {
                this.dataSourceEventos.data = data;
                setTimeout(() => this.dataSourceEventos.paginator = this.paginator);
                this.showInfo = true;
                this.showFilter = false;
            }
        });
    }
}
ConsultaUsuarioComponent.ɵfac = function ConsultaUsuarioComponent_Factory(t) { return new (t || ConsultaUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_11__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_12__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_13__["ReglasNegocioService"])); };
ConsultaUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ConsultaUsuarioComponent, selectors: [["app-consulta-usuario"]], viewQuery: function ConsultaUsuarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MomentDateAdapter"],
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ])], decls: 46, vars: 5, consts: [[1, "card-body"], [1, "titulo"], [1, "container-fluid", "top"], [1, "row"], [1, "col-md-6"], [3, "expanded"], ["panel", ""], [3, "formGroup"], [1, "col-6"], ["appearance", "outline"], ["matInput", "", "formControlName", "tipoQueja"], ["matInput", "", "formControlName", "noQueja"], ["matInput", "", "formControlName", "anioQueja", "readonly", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected"], ["fecFin", ""], ["mat-raised-button", "", "type", "button", 1, "botones", "mt-2", "mb-4", "ml-2", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "botones"], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "mat-elevation-z8"], [1, "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "codigoQueja"], ["mat-header-cell", "", "class", "headerTable", "style", "width: 15%;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "correlativo"], ["matColumnDef", "anioQueja"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["paginatorInicial", ""], ["mat-header-cell", "", 1, "headerTable", 2, "width", "15%"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ConsultaUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Consulta Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-expansion-panel", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, " Filtro de b\u00FAsqueda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Rango de Fechas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Tipo de Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "No. Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "A\u00F1o Queja: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-datepicker", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("yearSelected", function ConsultaUsuarioComponent_Template_mat_datepicker_yearSelected_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](36); return ctx.aniFin($event, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ConsultaUsuarioComponent_Template_button_click_37_listener() { return ctx.consultar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, " Buscar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Limpiar filtro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, ConsultaUsuarioComponent_div_45_Template, 17, 5, "div", 18);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("expanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showInfo == true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelDescription"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: [".titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    font-family: normal normal medium 18px/22px Arial;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 18px 18px 0px 0px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n}\r\n\r\n  .cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n\r\n.btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.btnGuardar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #0615a0 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 20px;\r\n    opacity: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLXVzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsaURBQWlEO0lBQ2pELGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtFQUMxQjs7QUFFQTtNQUNJLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsWUFBWTtNQUNaLFlBQVk7TUFDWixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixzQkFBc0I7TUFDdEIsaURBQWlEO01BQ2pELGlDQUFpQztNQUNqQyxnQ0FBZ0M7TUFDaEMsVUFBVTtNQUNWLGdCQUFnQjtFQUNwQjs7QUFFQTtNQUNJLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsK0NBQStDO01BQy9DLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixjQUFjO01BQ2QsVUFBVTtNQUNWLG1CQUFtQjtFQUN2Qjs7QUFFQTtNQUNJLFdBQVc7SUFDYjs7QUFFQTtNQUNFLGVBQWU7TUFDZixXQUFXO0lBQ2I7O0FBRUE7TUFDRSxVQUFVO0lBQ1o7O0FBRUE7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLGVBQWU7RUFDbkI7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjs7RUFFckI7O0FBR0E7SUFDRSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjs7RUFFckI7O0FBRUE7SUFDRSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZCIsImZpbGUiOiJjb25zdWx0YS11c3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsbyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxOHB4LzIycHggQXJpYWw7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDBweCAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZCwgdGgge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuQ2FuY2VsYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjYjgxNTE1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLmJ0bkd1YXJkYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDYxNWEwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavbarComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Iniciar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/login");
} }
function NavbarComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/signup");
} }
function NavbarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cerrar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.user.username, " ");
} }
class NavbarComponent {
    constructor(login) {
        this.login = login;
        this.isLoggedIn = false;
        this.user = null;
    }
    ngOnInit() {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
        this.login.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.login.isLoggedIn();
            this.user = this.login.getUser();
        });
    }
    logout() {
        this.login.logout();
        window.location.reload();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 5, consts: [["color", "primary"], ["mat-icon-button", "", "arial-label", "Example icon-button with menu icon", 1, "example-icon", 3, "routerLink"], [1, "example-spacer"], ["mat-icon-button", "", "class", "example-icon favorite-icon", "aria-label", "Example icon-button with heart icon", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "class", "example-icon favorite-icon mr20 ml70", "aria-label", "Example icon-button with heart icon", 3, "routerLink", 4, "ngIf"], ["style", "margin-right: 50px", "mat-icon-button", "", "class", "example-icon favorite-icon", "aria-label", "Example icon-button with heart icon", 3, "click", 4, "ngIf"], ["mat-button", "", "style", "margin-right: 10px", "class", "example-icon favorite-icon", "aria-label", "Example icon-button with heart icon", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", "mr20", "ml70", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 2, "margin-right", "50px", 3, "click"], ["mat-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon", 2, "margin-right", "10px"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu_books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sistema de Quejas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_a_7_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_a_8_Template, 2, 1, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_a_9_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_button_10_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.user);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9Il19 */"] });


/***/ }),

/***/ "krFM":
/*!***************************************************************!*\
  !*** ./src/app/pages/operador/operador/operador.component.ts ***!
  \***************************************************************/
/*! exports provided: OperadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadorComponent", function() { return OperadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/uploadFileService.service */ "8D/r");
/* harmony import */ var src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/reglas-negocio.service */ "5Hqp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");

















function OperadorComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Correlativo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OperadorComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r12.correlativo, " ");
} }
function OperadorComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Etapa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OperadorComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r13.codigoEtapa, " ");
} }
function OperadorComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OperadorComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", row_r14.detalleQueja, " ");
} }
function OperadorComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Administrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OperadorComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperadorComponent_td_23_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const evento_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.obtenerQuejaById(evento_r15.codigoQueja); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperadorComponent_td_23_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const evento_r15 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.obtenerQuejaById(evento_r15.codigoQueja); })("click", function OperadorComponent_td_23_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.resolver(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OperadorComponent_td_23_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const evento_r15 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.obtenerQuejaById(evento_r15.codigoQueja); })("click", function OperadorComponent_td_23_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.rechazar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OperadorComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 40);
} }
function OperadorComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 41);
} }
function OperadorComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class OperadorComponent {
    constructor(service, spinner, loginService, uploadFileService, reglasNegocio) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.uploadFileService = uploadFileService;
        this.reglasNegocio = reglasNegocio;
        this.user = null;
        this.isLoggedIn = false;
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.eventoColumns = [
            'correlativo',
            'codigoEtapa',
            'detalleQueja',
            'accion'
        ];
    }
    ngOnInit() {
        this.spinner.show();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
        });
        this.obtenerEventos();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    obtenerEventos() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'queja/operador').toPromise().then(data => {
            console.log(data);
            data.forEach(element => {
                element.codigoEtapa = element.codigoEtapa == 5 ? 'Reanálisis' : '';
            });
            this.dataSourceEventos.sort = this.sort;
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSourceEventos.paginator = this.paginator;
        });
    }
    obtenerQuejaById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.service.getData(this.service.BASE_URL_QUEJAS, `queja/byId/${id}`).toPromise().then(data => {
                this.detalleQueja = data;
                console.log(this.detalleQueja);
                /* this.detalleQueja.forEach(element => {
                  element.codigoEtapa = element?.codigoEtapa == 2 ? 'Analisis' : '';
                }); */
            });
        });
    }
    resolver() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                showCloseButton: true,
                title: '¿Está seguro de resolver la queja?',
                text: 'Esta seguro de resolver la solicitud de queja',
                showDenyButton: true,
                denyButtonText: "Cancelar",
                confirmButtonText: "Resolver",
                allowEscapeKey: false,
                allowOutsideClick: false,
                input: 'text',
                inputPlaceholder: 'Ingrese el motivo de resolución',
                inputValidator(validarJustifiacion) {
                    return !validarJustifiacion && 'Debe ingresar el motivo de resolución';
                },
            }).then((validarJustifiacion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (validarJustifiacion.isConfirmed) {
                    const justificacion = validarJustifiacion.value;
                    this.asignar = {
                        solicitud: [this.detalleQueja.codigoQueja],
                        complemento: 3,
                        justificacion: justificacion
                    };
                    console.log(this.asignar);
                    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/asignar', this.asignar).toPromise().then(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Rechazada!',
                            text: 'La queja ha sido rechazada',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.obtenerEventos();
                            this.detalleQueja = null;
                        });
                    });
                }
            }));
        });
    }
    rechazar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                showCloseButton: true,
                title: '¿Está seguro de rechazar la queja?',
                text: 'Esta seguro de rechazar la solicitud de queja',
                showDenyButton: true,
                denyButtonText: "Cancelar",
                confirmButtonText: "Rechazar",
                allowEscapeKey: false,
                allowOutsideClick: false,
                input: 'text',
                inputPlaceholder: 'Ingrese el motivo de rechazo',
                inputValidator(validarJustifiacion) {
                    return !validarJustifiacion && 'Debe ingresar el motivo de rechazo';
                },
            }).then((validarJustifiacion) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (validarJustifiacion.isConfirmed) {
                    const justificacion = validarJustifiacion.value;
                    this.asignar = {
                        solicitud: [this.detalleQueja.codigoQueja],
                        complemento: 4,
                        justificacion: justificacion
                    };
                    console.log(this.asignar);
                    this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/asignar', this.asignar).toPromise().then(data => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Rechazada!',
                            text: 'La queja ha sido rechazada',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.obtenerEventos();
                            this.detalleQueja = null;
                        });
                    });
                }
            }));
        });
    }
}
OperadorComponent.ɵfac = function OperadorComponent_Factory(t) { return new (t || OperadorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_9__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_10__["ReglasNegocioService"])); };
OperadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OperadorComponent, selectors: [["app-operador"]], viewQuery: function OperadorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 72, vars: 11, consts: [[1, "card-body"], [1, "titulo"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "correlativo"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigoEtapa"], ["matColumnDef", "detalleQueja"], ["matColumnDef", "accion"], ["mat-header-cell", "", "class", "headerTable", "class", "headerTable", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "accion", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title", "fs-5"], [1, "modal-body"], [1, "row"], [1, "col-6"], [1, "col"], ["matInput", "", "disabled", "", 3, "value"], ["target", "_blank", "download", "", 3, "href"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headerTable"], ["mat-cell", "", 1, "accion"], ["title", "Ver m\u00E1s", "data-bs-toggle", "modal", "data-bs-target", "#staticBackdrop", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["title", "Asignar", "data-toggle", "modal", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["title", "No aplica", "data-toggle", "modal", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function OperadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Operador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function OperadorComponent_Template_input_keyup_8_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, OperadorComponent_th_13_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, OperadorComponent_td_14_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, OperadorComponent_th_16_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, OperadorComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, OperadorComponent_th_19_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, OperadorComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, OperadorComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, OperadorComponent_td_23_Template, 7, 0, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, OperadorComponent_tr_24_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, OperadorComponent_tr_25_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, OperadorComponent_tr_26_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "No. Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Justificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Fecha Creacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Usuario de Creaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Descargar PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.codigoQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.justificacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.fechaAgrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.usuarioAgrega);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.detalleQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", ctx.detalleQueja == null ? null : ctx.detalleQueja.documentoSoporte, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: [".titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    font-family: normal normal medium 18px/22px Arial;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 18px 18px 0px 0px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n}\r\n\r\n  .cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n\r\n.btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.btnGuardar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #0615a0 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlEQUFpRDtJQUNqRCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7RUFDMUI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0FBRUE7TUFDSSxXQUFXO0lBQ2I7O0FBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztBQUVBO01BQ0UsVUFBVTtJQUNaOztBQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztBQUdBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCIiwiZmlsZSI6Im9wZXJhZG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsbyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxOHB4LzIycHggQXJpYWw7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDBweCAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZCwgdGgge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuQ2FuY2VsYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjYjgxNTE1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLmJ0bkd1YXJkYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDYxNWEwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuIl19 */"] });


/***/ }),

/***/ "mWIF":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/cuentahabiente/cuentahabiente-queja/cuentahabiente-queja.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CuentahabienteQuejaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentahabienteQuejaComponent", function() { return CuentahabienteQuejaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/uploadFileService.service */ "8D/r");
/* harmony import */ var src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/reglas-negocio.service */ "5Hqp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























function CuentahabienteQuejaComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r24.codigoQueja, " ");
} }
function CuentahabienteQuejaComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r25.nombre, "");
} }
function CuentahabienteQuejaComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Queja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r26.detalleQueja, " ");
} }
function CuentahabienteQuejaComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Medio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Queja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r27.medioIngreso, " ");
} }
function CuentahabienteQuejaComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r28.estado, " ");
} }
function CuentahabienteQuejaComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 49);
} }
function CuentahabienteQuejaComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 50);
} }
function CuentahabienteQuejaComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
function CuentahabienteQuejaComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingreso_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ingreso_r30.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ingreso_r30.viewValue, " ");
} }
function CuentahabienteQuejaComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " El nombre es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " El correo electronico es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Numero de telefono requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Numero de oficina requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_mat_error_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Nombre empleado requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_mat_error_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Detalle de la queja requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function CuentahabienteQuejaComponent_mat_option_111_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CuentahabienteQuejaComponent_mat_option_111_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.numeroQueja(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qms_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", qms_r31.codigoTipoQueja);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", qms_r31.siglas, " ");
} }
function CuentahabienteQuejaComponent_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " La regi\u00F3n de atenci\u00F3n es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class CuentahabienteQuejaComponent {
    constructor(service, spinner, loginService, uploadFileService, reglasNegocio) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.uploadFileService = uploadFileService;
        this.reglasNegocio = reglasNegocio;
        this.file = null;
        this.anioActual = new Date().getFullYear();
        this.user = null;
        this.isLoggedIn = false;
        this.ingresos = [
            { value: '1', viewValue: 'Telefono' },
            { value: '2', viewValue: 'Correo' },
            { value: '3', viewValue: 'Chat' },
            { value: '4', viewValue: 'Correo' },
            { value: '5', viewValue: 'Presencial' },
        ];
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.eventoColumns = [
            'codigoQueja',
            'nombre',
            'detalleQueja',
            'medioIngreso',
            'estado'
        ];
        this.qms = [];
        this.cuentaHabienteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            medioIngreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            correoElectronico: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            oficina: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            nombreEmpleado: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            detalleQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            documento: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            tipoQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
    }
    ngOnInit() {
        this.spinner.show();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        console.log('usuario', this.user);
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
            console.log('isLoggedIn', this.isLoggedIn);
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
        });
        this.obtenerQuejas();
        this.obtenerQMS();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    obtenerQMS() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'tipoQueja/listar').toPromise().then(data => {
            this.qms = data;
            console.log(data);
        });
    }
    numeroQueja() {
        console.log(this.cuentaHabienteForm.get('tipoQueja').value);
        this.numero = this.cuentaHabienteForm.get('tipoQueja').value;
        this.obtenerQMS();
        this.qms.forEach(element => {
            if (element.codigoTipoQueja == this.numero) {
                this.sigl = element.siglas;
            }
        });
    }
    obtenerQuejas() {
        this.service.getData(this.service.BASE_URL_QUEJAS, `queja/listar/${this.user.id}`).toPromise().then(data => {
            this.quejas = data;
            this.medio = this.quejas.codigoMedioIngreso;
            data.forEach(element => {
                element.medioIngreso = this.ingresos[element.codigoMedioIngreso - 1].viewValue;
                element.estado = element.codigoEstadoInterno == 1 ? 'Presentada' : '';
            });
            console.log(data);
            this.dataSourceEventos.sort = this.sort;
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.quejas);
            this.dataSourceEventos.paginator = this.paginator;
        });
    }
    guardarQueja(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.url = res.secure_url;
                yield this.service.getData(this.service.BASE_URL_QUEJAS, `queja/queja/${this.numero}`).toPromise().then(data => {
                    this.cantidad = (data);
                    this.numerito = +this.cantidad.queja;
                    this.corr = this.numerito + 1;
                });
                const queja = {
                    codigoEtapa: 1,
                    codigoRegion: 1,
                    codigoTipoCreador: this.user.id,
                    codigoMedioIngreso: 5,
                    codigoEstadoExterno: 1,
                    codigoEstadoInterno: 1,
                    codigoTipoQueja: data.tipoQueja,
                    codigoPuntoAtencion: 8,
                    dpiUsuario: 1,
                    nombre: data.nombre,
                    correoElectronico: data.correoElectronico,
                    nombreEmpleado: data.nombreEmpleado,
                    detalleQueja: data.detalleQueja,
                    correlativo: `${this.sigl}-${this.numerito + 1}-${this.anioActual}`,
                    documentoSoporte: this.url ? this.url : '',
                    justificacion: 1,
                    anioQueja: this.anioActual,
                    usuarioAgrega: this.user.username,
                    ipUsuarioAgrega: this.ipUsuario,
                    fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_2__()),
                };
                console.log(queja);
                this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/crear', queja).toPromise().then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.obtenerQuejas();
                    this.enviarNotificacion();
                    this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        titleText: `Su solicitud se ha creado con éxito`,
                        icon: 'success',
                        showCloseButton: true,
                        showConfirmButton: false,
                        position: 'top'
                    });
                    this.cuentaHabienteForm.reset();
                })).catch(error => {
                    console.error(error);
                    this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                        titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                        icon: 'error',
                        showCloseButton: true,
                        showConfirmButton: false,
                        position: 'top'
                    });
                });
            })).catch(err => {
                this.url = '';
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    titleText: 'Datos incorrectos',
                    text: 'Verifique que los datos ingresados sean correctos',
                    icon: 'error',
                });
            });
        });
    }
    uploadFile() {
        this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
            .then((res) => {
            this.url = res.secure_url;
            this.cadena = this.url;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                titleText: 'Archivo cargado',
                text: 'El archivo se ha cargado con exito',
                icon: 'success',
            });
        }).catch(err => {
            console.error(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                titleText: 'Error al cargar archivo',
                text: 'El archivo no se ha cargado con exito',
                icon: 'error',
            });
        });
    }
    seleccionArchivo(archivo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let documento = archivo.target.files[0];
            //console.log(documento);
            if (!documento) {
                this.file = null;
                //console.log(this.file)
                return;
            }
            if (documento.type.indexOf('pdf') < 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    titleText: 'Error al seleccionar archivo',
                    text: 'El archivo debe ser del tipo pdf',
                    icon: 'info',
                    showCloseButton: true,
                    showConfirmButton: false,
                    position: 'top'
                });
                this.file = null;
                return;
            }
            this.file = documento;
            let reader = new FileReader();
            let urlImagenTemp = reader.readAsDataURL(documento);
            reader.onloadend = () => this.strImage = reader.result;
        });
    }
    evento(event) {
        this.documento = event.target.files[0];
        console.log(this.documento);
    }
    enviarNotificacion() {
        this.spinner.show();
        const notificacion = {
            destinatario: this.cuentaHabienteForm.value.correoElectronico,
            destino: "bancoprestamito@gmail.com",
            asunto: "Notificación de queja",
            cuerpo: `Señor usuario, agredecemos su comunicación, le informamos que su queja ha sido recibida exitosamente. Para el seguimiento o cualquier consulta relacionada, no olvide que el numero de su queja es: ${this.sigl}-${this.numerito + 1}-${this.anioActual}`
        };
        this.service.postData(this.service.BASE_URL_QUEJAS, 'correo/send', notificacion).toPromise().then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { })).catch(error => {
            console.error(error);
            this.spinner.hide();
        });
    }
}
CuentahabienteQuejaComponent.ɵfac = function CuentahabienteQuejaComponent_Factory(t) { return new (t || CuentahabienteQuejaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_11__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_12__["ReglasNegocioService"])); };
CuentahabienteQuejaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CuentahabienteQuejaComponent, selectors: [["app-cuentahabiente-queja"]], viewQuery: function CuentahabienteQuejaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 118, vars: 22, consts: [[1, "card-body"], [1, "titulo"], ["mat-raised-button", "", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticAgregar", 1, "botones", "mt-4", "mb-4"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "codigoQueja"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "detalleQueja"], ["matColumnDef", "medioIngreso"], ["matColumnDef", "estado"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticAgregar", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "outline"], ["formControlName", "medioIngreso", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "nombre", "matInput", "", "placeholder", "Nombre", "maxlength", "100", "autocomplete", "off"], ["align", "end"], [4, "ngIf"], ["matInput", "", "type", "email", "id", "correo", "formControlName", "correoElectronico", "placeholder", "Correo Electronico", "maxlength", "50", "autocomplete", "off"], ["correo", ""], ["matInput", "", "formControlName", "telefono", "matInput", "", "placeholder", "Telefono", "maxlength", "8", "autocomplete", "off", 3, "keypress"], ["matInput", "", "formControlName", "oficina", "matInput", "", "placeholder", "Oficina", "maxlength", "16", "autocomplete", "off"], ["matInput", "", "formControlName", "nombreEmpleado", "matInput", "", "placeholder", "Oficina", "maxlength", "50", "autocomplete", "off"], ["matInput", "", "formControlName", "detalleQueja", "matInput", "", "placeholder", "Detalle Queja", "maxlength", "250", "autocomplete", "off"], [1, "col-ms-6", "col-md-6", "col-lg-6", "margenArriba"], ["type", "file", "formControlName", "documento", "id", "documento", 1, "full", "mt-2", 3, "change"], ["formControlName", "tipoQueja"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btnCancelar"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [3, "value"], [3, "value", "click"]], template: function CuentahabienteQuejaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Quejas Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Queja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function CuentahabienteQuejaComponent_Template_input_keyup_12_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CuentahabienteQuejaComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CuentahabienteQuejaComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CuentahabienteQuejaComponent_th_20_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, CuentahabienteQuejaComponent_td_21_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CuentahabienteQuejaComponent_th_23_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CuentahabienteQuejaComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CuentahabienteQuejaComponent_th_26_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, CuentahabienteQuejaComponent_td_27_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, CuentahabienteQuejaComponent_th_29_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CuentahabienteQuejaComponent_td_30_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, CuentahabienteQuejaComponent_tr_31_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CuentahabienteQuejaComponent_tr_32_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, CuentahabienteQuejaComponent_tr_33_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Agregar Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Ingreso Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, CuentahabienteQuejaComponent_mat_option_49_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, CuentahabienteQuejaComponent_mat_error_57_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, CuentahabienteQuejaComponent_mat_error_67_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function CuentahabienteQuejaComponent_Template_input_keypress_72_listener($event) { return ctx.reglasNegocio.soloNumeros($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, CuentahabienteQuejaComponent_mat_error_75_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Oficina");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, CuentahabienteQuejaComponent_mat_error_84_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Nombre Empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, CuentahabienteQuejaComponent_mat_error_92_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, CuentahabienteQuejaComponent_mat_error_101_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CuentahabienteQuejaComponent_Template_input_change_104_listener($event) { return ctx.seleccionArchivo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Tipo de Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, CuentahabienteQuejaComponent_mat_option_111_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, CuentahabienteQuejaComponent_mat_error_112_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CuentahabienteQuejaComponent_Template_button_click_116_listener() { return ctx.guardarQueja(ctx.cuentaHabienteForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.cuentaHabienteForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.ingresos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.cuentaHabienteForm.controls.nombre.value == null ? null : ctx.cuentaHabienteForm.controls.nombre.value.length) || 0, "/100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.nombre.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.cuentaHabienteForm.controls.correoElectronico.value == null ? null : ctx.cuentaHabienteForm.controls.correoElectronico.value.length) || 0, "/50");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.correoElectronico.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.cuentaHabienteForm.controls.telefono.value == null ? null : ctx.cuentaHabienteForm.controls.telefono.value.length) || 0, "/8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.telefono.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.cuentaHabienteForm.controls.oficina.value == null ? null : ctx.cuentaHabienteForm.controls.oficina.value.length) || 0, "/16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.oficina.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.cuentaHabienteForm.controls.oficina.value == null ? null : ctx.cuentaHabienteForm.controls.oficina.value.length) || 0, "/50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.nombreEmpleado.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.cuentaHabienteForm.controls.detalleQueja.value == null ? null : ctx.cuentaHabienteForm.controls.detalleQueja.value.length) || 0, "/250 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.detalleQueja.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.qms);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cuentaHabienteForm.controls.tipoQueja.hasError("required"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"]], styles: [".cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n  \r\n  .titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n  \r\n  .botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  \r\n  .mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n  \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n  \r\n  .modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 20px;\r\n    opacity: 1;\r\n}\r\n  \r\n  .btnGuardar[_ngcontent-%COMP%] {\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #DCDCDC 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #B2B2B2;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  .margenArriba[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n}\r\n  \r\n  .tipoDocumento[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YWhhYmllbnRlLXF1ZWphLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7RUFDMUI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztFQUdBO0lBQ0UsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0VBRUU7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUdBO0lBQ0UsY0FBYztBQUNsQjs7RUFFQTtFQUNFLFdBQVc7RUFDWCIsImZpbGUiOiJjdWVudGFoYWJpZW50ZS1xdWVqYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGl0dWxvIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4IDE4cHggMHB4IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uZXMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgYmFja2dyb3VuZDogIzNmNTFiNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DYW5jZWxhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAvKiBMYXlvdXQgUHJvcGVydGllcyAqL1xyXG4gICAgdG9wOiA3MzRweDtcclxuICAgIGxlZnQ6IDEyNTJweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIGJhY2tncm91bmQ6ICNiODE1MTUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4gIFxyXG4gIC5idG5HdWFyZGFyIHtcclxuICAgIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgICB0b3A6IDczNHB4O1xyXG4gICAgbGVmdDogMTI1MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgYmFja2dyb3VuZDogI0RDRENEQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hcmdlbkFycmliYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLnRpcG9Eb2N1bWVudG97XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "nYYN":
/*!************************************!*\
  !*** ./src/app/services/helper.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let baserUrl = 'http://localhost:8080';
/* harmony default export */ __webpack_exports__["default"] = (baserUrl);


/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function SignupComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tusuario_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tusuario_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tusuario_r1.viewValue, " ");
} }
class SignupComponent {
    constructor(userService, snack) {
        this.userService = userService;
        this.snack = snack;
        this.tusuarios = [
            { value: 5, viewValue: 'USUARIO' },
            { value: 6, viewValue: 'CUENTAHABIENTE' },
        ];
        this.user = {
            username: '',
            password: '',
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            enabled: true,
            tipo_usuario: ''
        };
    }
    ngOnInit() {
    }
    formSubmit() {
        console.log(this.user);
        if (this.user.username == '' || this.user.username == null) {
            this.snack.open('El nombre de usuario es obligatorio !!', 'Aceptar', {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
            return;
        }
        this.userService.anadirUsuario(this.user).subscribe((data) => {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire('Usuario guardado', 'Usuario registrado con exito en el sistema', 'success');
        }, (error) => {
            console.log(error);
            this.snack.open('Ha ocurrido un error en el sistema !!', 'Aceptar', {
                duration: 3000
            });
        });
    }
    esEmailValido(email) {
        let mailValido = false;
        'use strict';
        var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(EMAIL_REGEX)) {
            mailValido = true;
        }
        return mailValido;
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 48, vars: 8, consts: [[1, "bootstrap-wrapper"], [1, "container"], [1, "row", 2, "margin-top", "20px"], [1, "col-md-6", "offset-md-3"], [1, "container", "text-center"], ["src", "../../../assets/login.png", "width", "100", "height", "100", "alt", ""], [1, "text-center"], [3, "ngSubmit"], ["appearance", "outline", 1, "full-width"], ["required", "", "name", "username", "matInput", "", "placeholder", "Digite su nombre de usuario", 3, "ngModel", "ngModelChange"], ["required", "", "name", "password", "type", "password", "matInput", "", "placeholder", "Digite su contrase\u00F1a", 3, "ngModel", "ngModelChange"], ["required", "", "name", "nombre", "matInput", "", "placeholder", "Digite su nombre", 3, "ngModel", "ngModelChange"], ["required", "", "name", "apellido", "matInput", "", "placeholder", "Digite su apellido", 3, "ngModel", "ngModelChange"], ["required", "", "name", "email", "type", "email", "matInput", "", "placeholder", "Digite su email", 3, "ngModel", "ngModelChange"], ["required", "", "name", "telefono", "matInput", "", "placeholder", "Digite su telefono", 3, "ngModel", "ngModelChange"], ["name", "tipo_usuario", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary"], ["type", "reset", "type", "reset", "mat-raised-button", "", "color", "accent", 2, "margin-left", "20px"], [3, "value"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Registrate aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_8_listener() { return ctx.formSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "El nombre de usuario debe ser \u00FAnico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_18_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_22_listener($event) { return ctx.user.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) { return ctx.user.apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_30_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_34_listener($event) { return ctx.user.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Tipo de usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_mat_select_ngModelChange_38_listener($event) { return ctx.user.tipo_usuario = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SignupComponent_mat_option_39_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Limpiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.apellido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.telefono);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.tipo_usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tusuarios);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "pd3B":
/*!**************************************************!*\
  !*** ./src/app/services/cuentahabiente.guard.ts ***!
  \**************************************************/
/*! exports provided: CuentahabienteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentahabienteGuard", function() { return CuentahabienteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "EFyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CuentahabienteGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.loginService.isLoggedIn() && this.loginService.getUserRol() == 'CUENTAHABIENTE') {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
CuentahabienteGuard.ɵfac = function CuentahabienteGuard_Factory(t) { return new (t || CuentahabienteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CuentahabienteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CuentahabienteGuard, factory: CuentahabienteGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pqw9":
/*!***********************************************************************!*\
  !*** ./src/app/pages/user/quejas-usuario/quejas-usuario.component.ts ***!
  \***********************************************************************/
/*! exports provided: QuejasUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuejasUsuarioComponent", function() { return QuejasUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/uploadFileService.service */ "8D/r");
/* harmony import */ var src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/reglas-negocio.service */ "5Hqp");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























function QuejasUsuarioComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r24.codigoQueja, " ");
} }
function QuejasUsuarioComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r25.nombre, "");
} }
function QuejasUsuarioComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Queja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r26.detalleQueja, " ");
} }
function QuejasUsuarioComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Medio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Queja ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r27.medioIngreso, " ");
} }
function QuejasUsuarioComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r28.estado, " ");
} }
function QuejasUsuarioComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 49);
} }
function QuejasUsuarioComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 50);
} }
function QuejasUsuarioComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
function QuejasUsuarioComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingreso_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ingreso_r30.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ingreso_r30.viewValue, " ");
} }
function QuejasUsuarioComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " El nombre es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " El correo electronico es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_mat_error_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Numero de telefono requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Numero de oficina requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_mat_error_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Nombre empleado requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_mat_error_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Detalle de la queja requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function QuejasUsuarioComponent_mat_option_111_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuejasUsuarioComponent_mat_option_111_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.numeroQueja(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qms_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", qms_r31.codigoTipoQueja);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", qms_r31.siglas, " ");
} }
function QuejasUsuarioComponent_mat_error_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " La regi\u00F3n de atenci\u00F3n es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class QuejasUsuarioComponent {
    constructor(service, spinner, loginService, uploadFileService, reglasNegocio) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.uploadFileService = uploadFileService;
        this.reglasNegocio = reglasNegocio;
        this.file = null;
        this.anioActual = new Date().getFullYear();
        this.user = null;
        this.isLoggedIn = false;
        this.ingresos = [
            { value: '1', viewValue: 'Telefono' },
            { value: '2', viewValue: 'Correo' },
            { value: '3', viewValue: 'Chat' },
            { value: '4', viewValue: 'Correo' },
            { value: '5', viewValue: 'Presencial' },
        ];
        this.qms = [];
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.eventoColumns = [
            'codigoQueja',
            'nombre',
            'detalleQueja',
            'medioIngreso',
            'estado'
        ];
        this.QuejasForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            medioIngreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('5'),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            correoElectronico: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            oficina: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nombreEmpleado: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            detalleQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            documento: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            tipoQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
        this.spinner.show();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        console.log('user', this.user.id);
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
            console.log('user', this.user);
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
            console.log('my ip' + this.ipUsuario);
        });
        this.obtenerQMS();
        this.obtenerQuejas();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    obtenerQMS() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'tipoQueja/listar').toPromise().then(data => {
            this.qms = data;
            console.log(data);
        });
    }
    obtenerQuejas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.service.getData(this.service.BASE_URL_QUEJAS, `queja/listar/${this.user.id}`).toPromise().then(data => {
                this.quejas = data;
                this.medio = this.quejas.codigoMedioIngreso;
                data.forEach(element => {
                    element.medioIngreso = this.ingresos[element.codigoMedioIngreso - 1].viewValue;
                    element.estado = element.codigoEstadoInterno == 1 ? 'Presentada' : '';
                });
                console.log('queja??', this.quejas);
                this.dataSourceEventos.sort = this.sort;
                this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.quejas);
                this.dataSourceEventos.paginator = this.paginator;
            });
        });
    }
    obtenerNumero(event) {
        this.numero = event;
        console.log(this.numero);
    }
    /* async obtenerCantidadQuejas() {
      await this.service.getData<any[]>(this.service.BASE_URL_QUEJAS, `queja/queja/${this.numero}`).toPromise().then(data => {
        this.cantidad = data;
        console.log(data);
      });
    } */
    numeroQueja() {
        console.log(this.QuejasForm.get('tipoQueja').value);
        this.numero = this.QuejasForm.get('tipoQueja').value;
        this.obtenerQMS();
        this.qms.forEach(element => {
            if (element.codigoTipoQueja == this.numero) {
                this.sigl = element.siglas;
            }
        });
    }
    guardarQueja(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.url = res.secure_url;
                yield this.service.getData(this.service.BASE_URL_QUEJAS, `queja/queja/${this.numero}`).toPromise().then(data => {
                    this.cantidad = (data);
                    this.numerito = +this.cantidad.queja;
                    this.corr = this.numerito + 1;
                });
                const queja = {
                    codigoEtapa: 1,
                    codigoRegion: 1,
                    codigoTipoCreador: this.user.id,
                    codigoMedioIngreso: 5,
                    codigoEstadoExterno: 1,
                    codigoEstadoInterno: 1,
                    codigoTipoQueja: data.tipoQueja,
                    codigoPuntoAtencion: 8,
                    dpiUsuario: 1,
                    nombre: data.nombre,
                    correoElectronico: data.correoElectronico,
                    nombreEmpleado: data.nombreEmpleado,
                    detalleQueja: data.detalleQueja,
                    correlativo: `${this.sigl}-${this.numerito + 1}-${this.anioActual}`,
                    documentoSoporte: this.url ? this.url : '',
                    justificacion: 1,
                    anioQueja: this.anioActual,
                    usuarioAgrega: this.user.username,
                    ipUsuarioAgrega: this.ipUsuario,
                    fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_6__())
                };
                console.log(queja.correlativo);
                this.service.postData(this.service.BASE_URL_QUEJAS, 'queja/crear', queja).toPromise().then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    this.obtenerQuejas();
                    this.enviarNotificacion();
                    this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        titleText: `Su solicitud se ha creado con éxito`,
                        icon: 'success',
                        showCloseButton: true,
                        showConfirmButton: false,
                        position: 'top'
                    });
                    this.QuejasForm.reset();
                })).catch(error => {
                    console.error(error);
                    this.spinner.hide();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                        icon: 'error',
                        showCloseButton: true,
                        showConfirmButton: false,
                        position: 'top'
                    });
                });
            })).catch(err => {
                this.url = '';
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    titleText: 'Datos incorrectos',
                    text: 'Verifique que los datos ingresados sean correctos',
                    icon: 'error',
                });
            });
        });
    }
    uploadFile() {
        this.uploadFileService.subirArchivo(this.file, 'CARPETA/SUBCARPETA')
            .then((res) => {
            this.url = res.secure_url;
            this.cadena = this.url;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                titleText: 'Archivo cargado',
                text: 'El archivo se ha cargado con exito',
                icon: 'success',
            });
        }).catch(err => {
            console.error(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                titleText: 'Error al cargar archivo',
                text: 'El archivo no se ha cargado con exito',
                icon: 'error',
            });
        });
    }
    seleccionArchivo(archivo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let documento = archivo.target.files[0];
            //console.log(documento);
            if (!documento) {
                this.file = null;
                //console.log(this.file)
                return;
            }
            if (documento.type.indexOf('pdf') < 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    titleText: 'Error al seleccionar archivo',
                    text: 'El archivo debe ser del tipo pdf',
                    icon: 'info',
                    showCloseButton: true,
                    showConfirmButton: false,
                    position: 'top'
                });
                this.file = null;
                return;
            }
            this.file = documento;
            let reader = new FileReader();
            let urlImagenTemp = reader.readAsDataURL(documento);
            reader.onloadend = () => this.strImage = reader.result;
        });
    }
    evento(event) {
        this.documento = event.target.files[0];
        console.log(this.documento);
    }
    enviarNotificacion() {
        this.spinner.show();
        const notificacion = {
            destinatario: this.QuejasForm.value.correoElectronico,
            destino: "bancoprestamito@gmail.com",
            asunto: "Notificación de queja",
            cuerpo: `Señor cuentahabiente, agredecemos su comunicación, le informamos que su queja ha sido recibida exitosamente. Para el seguimiento o cualquier consulta relacionada, no olvide que el numero de su queja es: ${this.sigl}-${this.numerito + 1}-${this.anioActual}`
        };
        this.service.postData(this.service.BASE_URL_QUEJAS, 'correo/send', notificacion).toPromise().then((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { })).catch(error => {
            console.error(error);
            this.spinner.hide();
        });
    }
}
QuejasUsuarioComponent.ɵfac = function QuejasUsuarioComponent_Factory(t) { return new (t || QuejasUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_uploadFileService_service__WEBPACK_IMPORTED_MODULE_11__["UploadFileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_reglas_negocio_service__WEBPACK_IMPORTED_MODULE_12__["ReglasNegocioService"])); };
QuejasUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: QuejasUsuarioComponent, selectors: [["app-quejas-usuario"]], viewQuery: function QuejasUsuarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 118, vars: 22, consts: [[1, "card-body"], [1, "titulo"], ["mat-raised-button", "", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticAgregar", 1, "botones", "mt-4", "mb-4"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "codigoQueja"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nombre"], ["matColumnDef", "detalleQueja"], ["matColumnDef", "medioIngreso"], ["matColumnDef", "estado"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticAgregar", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "outline"], ["formControlName", "medioIngreso", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "nombre", "matInput", "", "placeholder", "Nombre", "maxlength", "100", "autocomplete", "off"], ["align", "end"], [4, "ngIf"], ["matInput", "", "type", "email", "id", "correo", "formControlName", "correoElectronico", "placeholder", "Correo Electronico", "maxlength", "50", "autocomplete", "off"], ["correo", ""], ["matInput", "", "formControlName", "telefono", "matInput", "", "placeholder", "Telefono", "maxlength", "8", "autocomplete", "off", 3, "keypress"], ["matInput", "", "formControlName", "oficina", "matInput", "", "placeholder", "Oficina", "maxlength", "16", "autocomplete", "off"], ["matInput", "", "formControlName", "nombreEmpleado", "matInput", "", "placeholder", "Oficina", "maxlength", "50", "autocomplete", "off"], ["matInput", "", "formControlName", "detalleQueja", "matInput", "", "placeholder", "Detalle Queja", "maxlength", "250", "autocomplete", "off"], [1, "col-ms-6", "col-md-6", "col-lg-6", "margenArriba"], ["type", "file", "formControlName", "documento", "id", "documento", 1, "full", "mt-2", 3, "change"], ["formControlName", "tipoQueja"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btnCancelar"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [3, "value"], [3, "value", "click"]], template: function QuejasUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Quejas Usuario ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Queja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function QuejasUsuarioComponent_Template_input_keyup_12_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, QuejasUsuarioComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, QuejasUsuarioComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, QuejasUsuarioComponent_th_20_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, QuejasUsuarioComponent_td_21_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, QuejasUsuarioComponent_th_23_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, QuejasUsuarioComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, QuejasUsuarioComponent_th_26_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, QuejasUsuarioComponent_td_27_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, QuejasUsuarioComponent_th_29_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, QuejasUsuarioComponent_td_30_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, QuejasUsuarioComponent_tr_31_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, QuejasUsuarioComponent_tr_32_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, QuejasUsuarioComponent_tr_33_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Agregar Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Ingreso Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, QuejasUsuarioComponent_mat_option_49_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, QuejasUsuarioComponent_mat_error_57_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, QuejasUsuarioComponent_mat_error_67_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function QuejasUsuarioComponent_Template_input_keypress_72_listener($event) { return ctx.reglasNegocio.soloNumeros($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, QuejasUsuarioComponent_mat_error_75_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Oficina");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](84, QuejasUsuarioComponent_mat_error_84_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Nombre Empleado");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, QuejasUsuarioComponent_mat_error_92_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](93, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Detalle Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "textarea", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "mat-hint", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](101, QuejasUsuarioComponent_mat_error_101_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](102, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](104, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function QuejasUsuarioComponent_Template_input_change_104_listener($event) { return ctx.seleccionArchivo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109, "Tipo de Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](110, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](111, QuejasUsuarioComponent_mat_option_111_Template, 2, 2, "mat-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](112, QuejasUsuarioComponent_mat_error_112_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](114, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function QuejasUsuarioComponent_Template_button_click_116_listener() { return ctx.guardarQueja(ctx.QuejasForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.QuejasForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.ingresos);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.QuejasForm.controls.nombre.value == null ? null : ctx.QuejasForm.controls.nombre.value.length) || 0, "/100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.nombre.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.QuejasForm.controls.correoElectronico.value == null ? null : ctx.QuejasForm.controls.correoElectronico.value.length) || 0, "/50");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.correoElectronico.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.QuejasForm.controls.telefono.value == null ? null : ctx.QuejasForm.controls.telefono.value.length) || 0, "/8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.telefono.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.QuejasForm.controls.oficina.value == null ? null : ctx.QuejasForm.controls.oficina.value.length) || 0, "/16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.oficina.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.QuejasForm.controls.oficina.value == null ? null : ctx.QuejasForm.controls.oficina.value.length) || 0, "/50 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.nombreEmpleado.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", (ctx.QuejasForm.controls.detalleQueja.value == null ? null : ctx.QuejasForm.controls.detalleQueja.value.length) || 0, "/250 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.detalleQueja.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.qms);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.QuejasForm.controls.tipoQueja.hasError("required"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatError"]], styles: [".cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n  \r\n  .titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n  \r\n  .botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  \r\n  .mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n  \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n  \r\n  .modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 20px;\r\n    opacity: 1;\r\n}\r\n  \r\n  .btnGuardar[_ngcontent-%COMP%] {\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #DCDCDC 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #B2B2B2;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n  }\r\n  \r\n  .margenArriba[_ngcontent-%COMP%] {\r\n    margin-top: 1%;\r\n}\r\n  \r\n  .tipoDocumento[_ngcontent-%COMP%]{\r\n  width: 15px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZWphcy11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7RUFDMUI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztFQUdBO0lBQ0UsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0VBRUU7SUFDRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrQ0FBK0M7SUFDL0MsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCOztFQUdBO0lBQ0UsY0FBYztBQUNsQjs7RUFFQTtFQUNFLFdBQVc7RUFDWCIsImZpbGUiOiJxdWVqYXMtdXN1YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGl0dWxvIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4IDE4cHggMHB4IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uZXMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgYmFja2dyb3VuZDogIzNmNTFiNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DYW5jZWxhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAvKiBMYXlvdXQgUHJvcGVydGllcyAqL1xyXG4gICAgdG9wOiA3MzRweDtcclxuICAgIGxlZnQ6IDEyNTJweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIGJhY2tncm91bmQ6ICNiODE1MTUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG5cclxuICAubW9kYWwtY29udGVudCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4gIFxyXG4gIC5idG5HdWFyZGFyIHtcclxuICAgIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgICB0b3A6IDczNHB4O1xyXG4gICAgbGVmdDogMTI1MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgYmFja2dyb3VuZDogI0RDRENEQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hcmdlbkFycmliYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxufVxyXG5cclxuLnRpcG9Eb2N1bWVudG97XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "nYYN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    anadirUsuario(user) {
        return this.httpClient.post(`${_helper__WEBPACK_IMPORTED_MODULE_0__["default"]}/usuarios/`, user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qgmu":
/*!**************************************************************!*\
  !*** ./src/app/pages/admin/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "+V0h");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "rRxC":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ServiceService {
    constructor(http) {
        this.http = http;
        this.BASE_URL_QUEJAS = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL_QUEJAS;
    }
    /**
          * Metodo que realiza un get a un microservicio haciendo uso de un solo parametro
          * enviando el valor en la url ejemplo http://host.microservicio/metodoGet/parametro
          * @param pUrl url del microservicio ejemplo http://host.microservicio/metodoGet
          * @param pNombreServicio nombre del servicio a llamar. Puede ser null
          * @param pParametro parametro que se envia al servicio este puede ser null si no se envia parametro
          */
    getData(pUrl, pNombreServicio, pParametro = null, pJSON = false) {
        if (pNombreServicio == null) {
            if (pParametro === null) {
                return this.http.get(`${pUrl}`, this.generateHeaders(pJSON));
            }
            else {
                return this.http.get(`${pUrl}/${pParametro}`, this.generateHeaders(pJSON));
            }
        }
        else {
            if (pParametro === null) {
                return this.http.get(`${pUrl}/${pNombreServicio}`, this.generateHeaders(pJSON));
            }
            else {
                return this.http.get(`${pUrl}/${pNombreServicio}/${pParametro}`, this.generateHeaders(pJSON));
            }
        }
    }
    generateHeaders(json = false) {
        let headers;
        if (json) {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Accept': '*/*',
                'Content-Type': 'application/json'
            });
        }
        else {
            headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Accept': '*/*'
            });
        }
        //console.log('header a enviar:', JSON.stringify(headers));
        let httpOptions = { "headers": headers };
        return httpOptions;
    }
    postData(pUrl, pNombreServicio, pBody, pJSON = true) {
        if (pNombreServicio === null) {
            return this.http.post(pUrl, pBody, this.generateHeaders(pJSON));
        }
        else {
            return this.http.post(`${pUrl}/${pNombreServicio}`, pBody, this.generateHeaders(pJSON));
        }
    }
    putData(pUrl, pParametro, pBody) {
        let body = null;
        if (pBody)
            body = JSON.stringify(pBody);
        if (pParametro === null) {
            return this.http.put(`${pUrl}`, body, this.generateHeaders(true));
        }
        else {
            return this.http.put(`${pUrl}/${pParametro}`, body, this.generateHeaders(true));
        }
    }
    getIp() {
        return this.http.get('https://ipapi.co/json');
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rniY":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/admin/usuarios-punto-atencion/usuarios-punto-atencion.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UsuariosPuntoAtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosPuntoAtencionComponent", function() { return UsuariosPuntoAtencionComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
























function UsuariosPuntoAtencionComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Regi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r27.regionPatencion, " ");
} }
function UsuariosPuntoAtencionComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Dpi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r28.dpiUsuario, " ");
} }
function UsuariosPuntoAtencionComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r29.nombreUsuarioAtencion, "");
} }
function UsuariosPuntoAtencionComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cargo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r30.codigoCargo, " ");
} }
function UsuariosPuntoAtencionComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Acci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuariosPuntoAtencionComponent_td_31_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const evento_r31 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.obtenerDetalleUpatencion(evento_r31.codigoUsuarioPunto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 59);
} }
function UsuariosPuntoAtencionComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 60);
} }
function UsuariosPuntoAtencionComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
function UsuariosPuntoAtencionComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuariosPuntoAtencionComponent_mat_option_50_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r36.obtenerRgion(); return ctx_r36.obtenerPuntoAtencion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const regiones_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", regiones_r35.codigoRegionalId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", regiones_r35.nombreRegion, " ");
} }
function UsuariosPuntoAtencionComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La regi\u00F3n es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const patencionActivas_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", patencionActivas_r38.codigoAtencionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", patencionActivas_r38.nombrePatencion, " ");
} }
function UsuariosPuntoAtencionComponent_mat_error_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " El punto de atenci\u00F3n es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_mat_error_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " El DPI es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " El nombre es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_mat_error_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " El correo electronico es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_mat_option_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catcargo_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catcargo_r39.codigoCargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catcargo_r39.nombreCargo, " ");
} }
function UsuariosPuntoAtencionComponent_mat_error_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " El nombre de cargo es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UsuariosPuntoAtencionComponent_mat_option_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const catcargos_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", catcargos_r40.codigoCargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", catcargos_r40.nombreCargo, " ");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class UsuariosPuntoAtencionComponent {
    constructor(service, spinner, loginService, userService) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.userService = userService;
        this.user = null;
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.regiones = [];
        this.puntosAtencion = [];
        this.catcargos = [];
        this.patencionActivas = [];
        this.usuarioUpatencion = [];
        this.eventoColumns = [
            'regionPatencion',
            'dpiUsuario',
            'nombreUsuarioAtencion',
            'codigoCargo',
            'accion'
        ];
        this.isLoggedIn = false;
        this.usuarioAtencionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            puntoAtencion: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            dpi: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            cargo: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            estadoUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.spinner.show();
        this.obtenerCargos();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
            console.log('my ip' + this.ipUsuario);
        });
        this.obtenerUsuarioPuertoAtencion();
        this.obtenerRegion();
        this.obtenerPuntosAtencion();
        this.obtenerUsuarioPuntoAtencion();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    obtenerUsuarioPuertoAtencion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'upatencion/listar').toPromise().then(data => {
            this.upatencion = data;
            this.dataSourceEventos.sort = this.sort;
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.upatencion);
            this.dataSourceEventos.paginator = this.paginator;
        });
    }
    obtenerRegion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'catalogos/regiones').toPromise().then(data => {
            this.regiones = data;
            console.log(data);
            this.spinner.hide();
        });
    }
    cancelar() {
        this.usuarioAtencionForm.reset();
    }
    obtenerPuntosAtencion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'patencion/listar').toPromise().then(data => {
            this.puntosAtencion = data;
            this.spinner.hide();
        });
    }
    obtenerUsuarioPuntoAtencion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'upatencion/listar').toPromise().then(data => {
            this.usuarioUpatencion = data;
            this.spinner.hide();
        });
    }
    obtenerCargos() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'catalogos/cargo').toPromise().then(data => {
            this.catcargos = data;
            this.spinner.hide();
        });
    }
    validarDpi() {
        this.service.getData(this.service.BASE_URL_QUEJAS, `upatencion/validar/dpi/${this.usuarioAtencionForm.value.dpi}`).toPromise().then(data => {
            var _a;
            console.log('dpi', this.usuarioAtencionForm.value.dpi);
            this.atencion = data;
            console.log(this.atencion);
            if (this.atencion == true) {
                (_a = this.usuarioAtencionForm.get('dpi')) === null || _a === void 0 ? void 0 : _a.setValue('');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El DPI ya se encuentra registrado!',
                });
            }
        });
    }
    guardarUsuarioAtencion(data) {
        this.spinner.show();
        const guardarAtencion = {
            nombreUsuarioAtencion: data.nombre,
            regionPatencion: data.region,
            codigoEstado: 1,
            codigoPuntoAtencion: data.puntoAtencion,
            dpiUsuario: data.dpi,
            codigoCargo: data.cargo,
            correoElectronico: data.correo,
            usuarioAgrega: this.user.username,
            ipUsuarioAgrega: this.ipUsuario,
            fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
        };
        const user = {
            username: data.nombre,
            password: '123456',
            nombre: data.nombre,
            apellido: '',
            email: data.correo,
            telefono: '',
            enabled: true,
            tipo_usuario: data.cargo == 6 ? 4 : data.cargo == 5 ? 3 : data.cargo == 4 ? 7 : 0,
        };
        console.log('user', user);
        console.log('upatencion', guardarAtencion);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'upatencion/crear', guardarAtencion).toPromise().then(data => {
            this.atencion = data;
            this.userService.anadirUsuario(user).subscribe();
            this.spinner.hide();
            console.log(this.atencion);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: `Su solicitud se ha creado con éxito`,
                icon: 'success',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
            this.obtenerUsuarioPuertoAtencion();
            this.usuarioAtencionForm.reset();
        }).catch(error => {
            console.error(error);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                icon: 'error',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        });
    }
    obtenerRgion() {
        var _a;
        this.evaluarRegion = (_a = this.usuarioAtencionForm.get('region')) === null || _a === void 0 ? void 0 : _a.value;
    }
    obtenerPuntoAtencion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, `patencion/activa/${this.evaluarRegion}`).toPromise().then(data => {
            this.patencionActivas = data;
        });
    }
    obtenerDetalleUpatencion(id) {
        this.spinner.show();
        this.service.getData(this.service.BASE_URL_QUEJAS, `upatencion/detalle/${id}`).toPromise().then(data => {
            var _a, _b, _c, _d, _e, _f, _g;
            this.detalleUpatencion = data;
            (_a = this.usuarioAtencionForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.setValue(this.detalleUpatencion.nombreUsuarioAtencion);
            (_b = this.usuarioAtencionForm.get('dpi')) === null || _b === void 0 ? void 0 : _b.setValue(this.detalleUpatencion.dpiUsuario);
            (_c = this.usuarioAtencionForm.get('correo')) === null || _c === void 0 ? void 0 : _c.setValue(this.detalleUpatencion.correoElectronico);
            (_d = this.usuarioAtencionForm.get('cargo')) === null || _d === void 0 ? void 0 : _d.setValue(this.detalleUpatencion.codigoCargo);
            (_e = this.usuarioAtencionForm.get('region')) === null || _e === void 0 ? void 0 : _e.setValue(this.detalleUpatencion.regionPatencion);
            (_f = this.usuarioAtencionForm.get('puntoAtencion')) === null || _f === void 0 ? void 0 : _f.setValue(this.detalleUpatencion.codigoPuntoAtencion);
            (_g = this.usuarioAtencionForm.get('estadoUsuario')) === null || _g === void 0 ? void 0 : _g.setValue(this.detalleUpatencion.codigoEstado);
            if (this.detalleUpatencion.regionPatencion == 1) {
                this.region = 'Región Central';
            }
            else if (this.detalleUpatencion.regionPatencion == 2) {
                this.region = 'Región Sur';
            }
            else if (this.detalleUpatencion.regionPatencion == 3) {
                this.region = 'Región Nororiente';
            }
            else if (this.detalleUpatencion.regionPatencion == 4) {
                this.region = 'Región Occidente';
            }
            this.spinner.hide();
        });
    }
    validarEstado(event) {
        let estado = event.target.value;
    }
    obtenerCargo() {
        var _a;
        this.datocargo = (_a = this.usuarioAtencionForm.get('cargo')) === null || _a === void 0 ? void 0 : _a.value;
        console.log('cargo', this.datocargo);
    }
    consultarCantidadPa() {
        this.spinner.show();
        this.service.getData(this.service.BASE_URL_QUEJAS, `patencion/cantidad/${this.usuarioAtencionForm.value.puntoAtencion}`).toPromise().then(data => {
            var _a;
            this.cantidadPa = data;
            if (this.cantidadPa == 0) {
                (_a = this.usuarioAtencionForm.get('puntoAtencion')) === null || _a === void 0 ? void 0 : _a.setValue('');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El punto de atención no tiene usuarios asignados!',
                });
            }
            this.spinner.hide();
        });
        this.spinner.hide();
    }
    actualizarUsuarioAtencion() {
        var _a, _b, _c;
        this.spinner.show();
        (_a = this.usuarioAtencionForm.get('cargo')) === null || _a === void 0 ? void 0 : _a.updateValueAndValidity();
        const actualizarUpatencion = {
            codigoUsuarioPunto: this.detalleUpatencion.codigoUsuarioPunto,
            codigoCargo: (_b = this.usuarioAtencionForm.get('cargo')) === null || _b === void 0 ? void 0 : _b.value,
            nombreUsuarioAtencion: this.detalleUpatencion.nombreUsuarioAtencion,
            regionPatencion: this.detalleUpatencion.regionPatencion,
            codigoEstado: ((_c = this.usuarioAtencionForm.get('estadoUsuario')) === null || _c === void 0 ? void 0 : _c.value) ? 1 : 2,
            codigoPuntoAtencion: this.detalleUpatencion.codigoPuntoAtencion,
            dpiUsuario: this.detalleUpatencion.dpiUsuario,
            correoElectronico: this.detalleUpatencion.correoElectronico,
            usuarioAgrega: this.user.username,
            ipUsuarioAgrega: this.ipUsuario,
            fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
            fechaModifica: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
        };
        console.log('actualizar', actualizarUpatencion);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'upatencion/modificar/upa', actualizarUpatencion).toPromise().then(data => {
            this.atencion = data;
            this.cancelar();
            this.spinner.hide();
            console.log(this.atencion);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: `Su solicitud se ha actualizado con éxito`,
                icon: 'success',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
            this.obtenerUsuarioPuertoAtencion();
            this.usuarioAtencionForm.reset();
        }).catch(error => {
            console.error(error);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                icon: 'error',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        });
    }
}
UsuariosPuntoAtencionComponent.ɵfac = function UsuariosPuntoAtencionComponent_Factory(t) { return new (t || UsuariosPuntoAtencionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"])); };
UsuariosPuntoAtencionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UsuariosPuntoAtencionComponent, selectors: [["app-usuarios-punto-atencion"]], viewQuery: function UsuariosPuntoAtencionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 142, vars: 25, consts: [[1, "card-body"], [1, "titulo"], ["mat-raised-button", "", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticAgregar", 1, "botones", "mt-4", "mb-4"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "regionPatencion"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dpiUsuario"], ["matColumnDef", "nombreUsuarioAtencion"], ["matColumnDef", "codigoCargo"], ["matColumnDef", "accion"], ["mat-header-cell", "", "class", "headerTable", "class", "headerTable", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "accion", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticAgregar", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "outline"], ["formControlName", "region"], [3, "value", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "puntoAtencion"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "dpi", "matInput", "", "placeholder", "DPI", "maxlength", "16", "autocomplete", "off", 3, "change"], ["align", "end"], ["matInput", "", "formControlName", "nombre", "placeholder", "Nombre usuario", "maxlength", "225", "autocomplete", "off"], ["nombre", ""], ["matInput", "", "type", "email", "id", "correo", "formControlName", "correo", "placeholder", "Correo Electronico", "maxlength", "50", "autocomplete", "off"], ["correo", ""], ["formControlName", "cargo"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btnCancelar", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btnGuardar", 3, "disabled", "click"], ["id", "staticDetalleEventos", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["id", "staticBackdropLabel", 1, "modal-title", "fs-5"], ["matInput", "", "matInput", "", "disabled", "", 3, "value"], [1, "col-sm-10"], ["color", "primary", "formControlName", "estadoUsuario", 3, "blur"], ["estado", ""], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headerTable"], ["mat-cell", "", 1, "accion"], ["title", "Ver m\u00E1s", "data-bs-toggle", "modal", "data-bs-target", "#staticDetalleEventos", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], [3, "value", "click"], [3, "value"]], template: function UsuariosPuntoAtencionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Usuarios Puntos de Atencion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Usuario atenci\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function UsuariosPuntoAtencionComponent_Template_input_keyup_13_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, UsuariosPuntoAtencionComponent_th_18_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UsuariosPuntoAtencionComponent_td_19_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, UsuariosPuntoAtencionComponent_th_21_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, UsuariosPuntoAtencionComponent_td_22_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UsuariosPuntoAtencionComponent_th_24_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UsuariosPuntoAtencionComponent_td_25_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UsuariosPuntoAtencionComponent_th_27_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, UsuariosPuntoAtencionComponent_td_28_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UsuariosPuntoAtencionComponent_th_30_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, UsuariosPuntoAtencionComponent_td_31_Template, 3, 0, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, UsuariosPuntoAtencionComponent_tr_32_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, UsuariosPuntoAtencionComponent_tr_33_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, UsuariosPuntoAtencionComponent_tr_34_Template, 3, 1, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "mat-paginator", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Agregar Usuario de Atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Regi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, UsuariosPuntoAtencionComponent_mat_option_50_Template, 2, 2, "mat-option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, UsuariosPuntoAtencionComponent_mat_error_51_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Punto de atenci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, UsuariosPuntoAtencionComponent_mat_option_57_Template, 2, 2, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, UsuariosPuntoAtencionComponent_mat_error_58_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "DPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UsuariosPuntoAtencionComponent_Template_input_change_64_listener() { return ctx.validarDpi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "mat-hint", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, UsuariosPuntoAtencionComponent_mat_error_67_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "mat-hint", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, UsuariosPuntoAtencionComponent_mat_error_76_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Correo Electronico");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "mat-hint", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, UsuariosPuntoAtencionComponent_mat_error_86_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, UsuariosPuntoAtencionComponent_mat_option_92_Template, 2, 2, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, UsuariosPuntoAtencionComponent_mat_error_93_Template, 2, 0, "mat-error", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuariosPuntoAtencionComponent_Template_button_click_95_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuariosPuntoAtencionComponent_Template_button_click_97_listener() { ctx.guardarUsuarioAtencion(ctx.usuarioAtencionForm.value); return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "h1", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "DPI");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](111, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Nombre Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "Regi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "mat-form-field", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "Cargos");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "mat-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, UsuariosPuntoAtencionComponent_mat_option_128_Template, 2, 2, "mat-option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](132, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "mat-slide-toggle", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("blur", function UsuariosPuntoAtencionComponent_Template_mat_slide_toggle_blur_134_listener($event) { return ctx.validarEstado($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuariosPuntoAtencionComponent_Template_button_click_138_listener() { return ctx.cancelar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UsuariosPuntoAtencionComponent_Template_button_click_140_listener() { return ctx.actualizarUsuarioAtencion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "Guardar Cambios");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.usuarioAtencionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.regiones);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.usuarioAtencionForm.controls.region.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.patencionActivas);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.usuarioAtencionForm.controls.puntoAtencion.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (ctx.usuarioAtencionForm.controls.dpi.value == null ? null : ctx.usuarioAtencionForm.controls.dpi.value.length) || 0, "/16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.usuarioAtencionForm.controls.dpi.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (ctx.usuarioAtencionForm.controls.nombre.value == null ? null : ctx.usuarioAtencionForm.controls.nombre.value.length) || 0, "/225");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.usuarioAtencionForm.controls.nombre.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (ctx.usuarioAtencionForm.controls.correo.value == null ? null : ctx.usuarioAtencionForm.controls.correo.value.length) || 0, "/50");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.usuarioAtencionForm.controls.correo.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.catcargos);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.usuarioAtencionForm.controls.cargo.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.usuarioAtencionForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.usuarioAtencionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.detalleUpatencion == null ? null : ctx.detalleUpatencion.dpiUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.detalleUpatencion == null ? null : ctx.detalleUpatencion.nombreUsuarioAtencion);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.region);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.catcargos);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_r26.checked ? "Activo" : "Inactivo");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"]], styles: [".titulo[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    flex-direction: column;\r\n    font-family: normal normal medium 18px/22px Arial;\r\n    box-shadow: 0px 3px 6px #00000029;\r\n    border-radius: 18px 18px 0px 0px;\r\n    opacity: 1;\r\n    margin-top: 10px;\r\n}\r\n\r\n  .cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n\r\n.botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n\r\ntable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n\r\n.modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n\r\n.btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n\r\n.btnGuardar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #0615a0 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW9zLXB1bnRvLWF0ZW5jaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGlEQUFpRDtJQUNqRCxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7RUFDMUI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0FBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0FBRUE7TUFDSSxXQUFXO0lBQ2I7O0FBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztBQUVBO01BQ0UsVUFBVTtJQUNaOztBQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztBQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztBQUdBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCIiwiZmlsZSI6InVzdWFyaW9zLXB1bnRvLWF0ZW5jaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAwcHggMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHotaW5kZXg6IDEyMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdHVsbyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxOHB4LzIycHggQXJpYWw7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDBweCAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3RvbmVzIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZCwgdGgge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuQ2FuY2VsYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjYjgxNTE1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuXHJcbiAgLmJ0bkd1YXJkYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLyogTGF5b3V0IFByb3BlcnRpZXMgKi9cclxuICAgIHRvcDogNzM0cHg7XHJcbiAgICBsZWZ0OiAxMjUycHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDYxNWEwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBVSSBQcm9wZXJ0aWVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuIl19 */"] });


/***/ }),

/***/ "tvvM":
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/usuarios-atencion/usuarios-atencion.component.ts ***!
  \******************************************************************************/
/*! exports provided: UsuariosAtencionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosAtencionComponent", function() { return UsuariosAtencionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class UsuariosAtencionComponent {
    constructor(service, spinner) {
        this.service = service;
        this.spinner = spinner;
        this.regiones = [];
    }
    ngOnInit() {
        this.spinner.show();
        this.obtenerRegion();
        this.spinner.hide();
    }
    obtenerRegion() {
        this.service.getData(this.service.BASE_URL_QUEJAS, 'catalogos/regiones').toPromise().then(data => {
            this.regiones = data;
            console.log(data);
        });
    }
}
UsuariosAtencionComponent.ɵfac = function UsuariosAtencionComponent_Factory(t) { return new (t || UsuariosAtencionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
UsuariosAtencionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuariosAtencionComponent, selectors: [["app-usuarios-atencion"]], decls: 2, vars: 0, template: function UsuariosAtencionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "usuarios-atencion works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy1hdGVuY2lvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_admin_administracion_usuarios_administracion_usuarios_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin/administracion-usuarios/administracion-usuarios.component */ "DCtm");
/* harmony import */ var _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin/dashboard/dashboard.component */ "qgmu");
/* harmony import */ var _pages_admin_puntos_atencion_puntos_atencion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin/puntos-atencion/puntos-atencion.component */ "7hli");
/* harmony import */ var _pages_admin_tipo_quejas_tipo_quejas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/admin/tipo-quejas/tipo-quejas.component */ "xvB6");
/* harmony import */ var _pages_admin_usuarios_punto_atencion_usuarios_punto_atencion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/admin/usuarios-punto-atencion/usuarios-punto-atencion.component */ "rniY");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/admin.guard */ "eSIX");
/* harmony import */ var _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user/user-dashboard/user-dashboard.component */ "Zvah");
/* harmony import */ var _services_usuario_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/usuario.guard */ "CiE/");
/* harmony import */ var _pages_user_quejas_usuario_quejas_usuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user/quejas-usuario/quejas-usuario.component */ "pqw9");
/* harmony import */ var _pages_cuentahabiente_cuentahabiente_dashboard_cuentahabiente_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cuentahabiente/cuentahabiente-dashboard/cuentahabiente-dashboard.component */ "QudR");
/* harmony import */ var _services_cuentahabiente_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/cuentahabiente.guard */ "pd3B");
/* harmony import */ var _pages_cuentahabiente_cuentahabiente_queja_cuentahabiente_queja_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/cuentahabiente/cuentahabiente-queja/cuentahabiente-queja.component */ "mWIF");
/* harmony import */ var _pages_user_consulta_usuario_consulta_usuario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/user/consulta-usuario/consulta-usuario.component */ "ebeS");
/* harmony import */ var _pages_centralizador_centralizador_dashboard_centralizador_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/centralizador/centralizador-dashboard/centralizador-dashboard.component */ "wSqz");
/* harmony import */ var _services_centralizador_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/centralizador.guard */ "HBDD");
/* harmony import */ var _pages_centralizador_centralizador_centralizador_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/centralizador/centralizador/centralizador.component */ "0UbS");
/* harmony import */ var _pages_centralizador_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/centralizador/analisis/analisis.component */ "Tfp0");
/* harmony import */ var _pages_operador_operador_dashboard_operador_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/operador/operador-dashboard/operador-dashboard.component */ "7n+j");
/* harmony import */ var _services_operador_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/operador.guard */ "W3qd");
/* harmony import */ var _pages_operador_operador_operador_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/operador/operador/operador.component */ "krFM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");


























const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: _pages_admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]],
        children: [
            {
                path: 'puntos-atencion',
                component: _pages_admin_puntos_atencion_puntos_atencion_component__WEBPACK_IMPORTED_MODULE_3__["PuntosAtencionComponent"]
            },
            {
                path: 'usuarios-punto-atencion',
                component: _pages_admin_usuarios_punto_atencion_usuarios_punto_atencion_component__WEBPACK_IMPORTED_MODULE_5__["UsuariosPuntoAtencionComponent"]
            },
            {
                path: 'tipo-quejas',
                component: _pages_admin_tipo_quejas_tipo_quejas_component__WEBPACK_IMPORTED_MODULE_4__["TipoQuejasComponent"]
            },
            {
                path: 'admin-usuarios',
                component: _pages_admin_administracion_usuarios_administracion_usuarios_component__WEBPACK_IMPORTED_MODULE_1__["AdministracionUsuariosComponent"]
            }
        ]
    },
    {
        path: 'user-dashboard',
        component: _pages_user_user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["UserDashboardComponent"],
        canActivate: [_services_usuario_guard__WEBPACK_IMPORTED_MODULE_11__["UsuarioGuard"]],
        children: [
            {
                path: 'usuario',
                component: _pages_user_quejas_usuario_quejas_usuario_component__WEBPACK_IMPORTED_MODULE_12__["QuejasUsuarioComponent"]
            },
            {
                path: 'consulta',
                component: _pages_user_consulta_usuario_consulta_usuario_component__WEBPACK_IMPORTED_MODULE_16__["ConsultaUsuarioComponent"]
            }
        ]
    },
    {
        path: 'cuentahabiente-dashboard',
        component: _pages_cuentahabiente_cuentahabiente_dashboard_cuentahabiente_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["CuentahabienteDashboardComponent"],
        canActivate: [_services_cuentahabiente_guard__WEBPACK_IMPORTED_MODULE_14__["CuentahabienteGuard"]],
        children: [
            {
                path: 'cuentahabiente',
                component: _pages_cuentahabiente_cuentahabiente_queja_cuentahabiente_queja_component__WEBPACK_IMPORTED_MODULE_15__["CuentahabienteQuejaComponent"]
            }
        ]
    },
    {
        path: 'centralizador-dashboard',
        component: _pages_centralizador_centralizador_dashboard_centralizador_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["CentralizadorDashboardComponent"],
        canActivate: [_services_centralizador_guard__WEBPACK_IMPORTED_MODULE_18__["CentralizadorGuard"]],
        children: [
            {
                path: 'centralizador',
                component: _pages_centralizador_centralizador_centralizador_component__WEBPACK_IMPORTED_MODULE_19__["CentralizadorComponent"]
            }, {
                path: 'analizador',
                component: _pages_centralizador_analisis_analisis_component__WEBPACK_IMPORTED_MODULE_20__["AnalisisComponent"]
            }
        ]
    },
    {
        path: 'operador-dashboard',
        component: _pages_operador_operador_dashboard_operador_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["OperadorDashboardComponent"],
        canActivate: [_services_operador_guard__WEBPACK_IMPORTED_MODULE_22__["OperadorGuard"]],
        children: [
            {
                path: 'operador',
                component: _pages_operador_operador_operador_component__WEBPACK_IMPORTED_MODULE_23__["OperadorComponent"]
            }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wSqz":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/centralizador/centralizador-dashboard/centralizador-dashboard.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CentralizadorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentralizadorDashboardComponent", function() { return CentralizadorDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _centralizador_sidebar_centralizador_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../centralizador-sidebar/centralizador-sidebar.component */ "3XQO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class CentralizadorDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
CentralizadorDashboardComponent.ɵfac = function CentralizadorDashboardComponent_Factory(t) { return new (t || CentralizadorDashboardComponent)(); };
CentralizadorDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CentralizadorDashboardComponent, selectors: [["app-centralizador-dashboard"]], decls: 7, vars: 0, consts: [[1, "bootstrap-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"]], template: function CentralizadorDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-centralizador-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_centralizador_sidebar_centralizador_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["CentralizadorSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "xvB6":
/*!******************************************************************!*\
  !*** ./src/app/pages/admin/tipo-quejas/tipo-quejas.component.ts ***!
  \******************************************************************/
/*! exports provided: TipoQuejasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoQuejasComponent", function() { return TipoQuejasComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/service.service */ "rRxC");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/login.service */ "EFyh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-text-mask */ "904P");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");























function TipoQuejasComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TipoQuejasComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r15.codigoTipoQueja, " ");
} }
function TipoQuejasComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Siglas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TipoQuejasComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r16.siglas, "");
} }
function TipoQuejasComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Nombre punto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "de Atenci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TipoQuejasComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r17.descripcionTipoQueja, " ");
} }
function TipoQuejasComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Acci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TipoQuejasComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TipoQuejasComponent_td_26_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const evento_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.obtenerDetalleTipoQueja(evento_r18.codigoTipoQueja); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TipoQuejasComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 51);
} }
function TipoQuejasComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 52);
} }
function TipoQuejasComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("No hay datos correspondientes a \"", _r0.value, "\"");
} }
function TipoQuejasComponent_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Las siglas de la queja es requerido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TipoQuejasComponent_mat_error_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " La descripci\u00F3n es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class TipoQuejasComponent {
    constructor(service, spinner, loginService, http) {
        this.service = service;
        this.spinner = spinner;
        this.loginService = loginService;
        this.http = http;
        this.isLoggedIn = false;
        this.user = null;
        this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.eventoColumns = [
            'codigoTipoQueja',
            'siglas',
            'descripcionTipoQueja',
            'accion'
        ];
        this.quejasForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            siglasQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            descripcionQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            estadoQueja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.maskconfig = {
            mask: [/\D/, /\D/, /\D/],
            placeholderChar: '\u2000',
            guide: false,
            keepCharPositions: false
        };
    }
    ngOnInit() {
        this.spinner.show();
        this.isLoggedIn = this.loginService.isLoggedIn();
        this.user = this.loginService.getUser();
        this.loginService.loginStatusSubjec.asObservable().subscribe(data => {
            this.isLoggedIn = this.loginService.isLoggedIn();
            this.user = this.loginService.getUser();
        });
        this.service.getIp().toPromise().then((res) => {
            this.ipUsuario = res.ip;
            console.log(res);
        });
        this.obtenerTipoQuejas();
        this.spinner.hide();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSourceEventos.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceEventos.paginator) {
            this.dataSourceEventos.paginator.firstPage();
        }
    }
    limpiarFormulario() {
        this.quejasForm.reset();
    }
    obtenerTipoQuejas() {
        this.spinner.show();
        this.service.getData(this.service.BASE_URL_QUEJAS, 'tipoQueja/listar').toPromise().then(data => {
            this.listaTipoQuejas = data;
            this.codigo = this.listaTipoQuejas.codigoTipoQueja;
            console.log('wut', this.listaTipoQuejas.codigoEstado);
            this.dataSourceEventos = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            this.dataSourceEventos.paginator = this.paginator;
            this.dataSourceEventos.sort = this.sort;
            console.log(this.listaTipoQuejas);
            this.spinner.hide();
        });
    }
    guardarTipoQueja(data) {
        this.spinner.show();
        const queja = {
            codigoEstado: 1,
            descripcionTipoQueja: data.descripcionQueja,
            siglas: data.siglasQueja,
            usuarioAgrega: this.user.username,
            ipUsuarioAgrega: this.ipUsuario,
            fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
        };
        console.log('queja', queja);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'tipoQueja/crear', queja).toPromise().then(data => {
            this.spinner.hide();
            this.obtenerTipoQuejas();
            this.quejasForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: `Su solicitud se ha creado con éxito`,
                icon: 'success',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        }).catch(err => {
            console.error(err);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                icon: 'error',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        });
    }
    obtenerDetalleTipoQueja(id) {
        this.spinner.show();
        this.service.getData(this.service.BASE_URL_QUEJAS, `tipoQueja/${id}`).toPromise().then(data => {
            var _a, _b;
            this.detalleQueja = data;
            console.log(this.detalleQueja);
            (_a = this.quejasForm.get('descripcionQueja')) === null || _a === void 0 ? void 0 : _a.setValue(this.detalleQueja.descripcionTipoQueja);
            (_b = this.quejasForm.get('estadoQueja')) === null || _b === void 0 ? void 0 : _b.setValue(this.detalleQueja.codigoEstado);
            this.spinner.hide();
        });
    }
    actualizarTipoQueja() {
        var _a, _b;
        this.spinner.show();
        const queja = {
            codigoTipoQueja: this.detalleQueja.codigoTipoQueja,
            codigoEstado: ((_a = this.quejasForm.get('estadoQueja')) === null || _a === void 0 ? void 0 : _a.value) ? 1 : 2,
            descripcionTipoQueja: (_b = this.quejasForm.get('descripcionQueja')) === null || _b === void 0 ? void 0 : _b.value,
            siglas: this.detalleQueja.siglas,
            usuarioModifica: this.user.username,
            ipUsuarioModifica: this.ipUsuario,
            fechaModifica: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
            fechaAgrega: Number(moment__WEBPACK_IMPORTED_MODULE_5__()),
        };
        console.log('queja', queja);
        this.service.postData(this.service.BASE_URL_QUEJAS, 'tipoQueja/modificar/queja', queja).toPromise().then(data => {
            this.spinner.hide();
            this.obtenerTipoQuejas();
            this.quejasForm.reset();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: `Su solicitud se ha modificado con éxito`,
                icon: 'success',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        }).catch(err => {
            console.error(err);
            this.spinner.hide();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                titleText: 'Se ha producido un error y no es posible almacenar información, por favor intente más tarde',
                icon: 'error',
                showCloseButton: true,
                showConfirmButton: false,
                position: 'top'
            });
        });
    }
}
TipoQuejasComponent.ɵfac = function TipoQuejasComponent_Factory(t) { return new (t || TipoQuejasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"])); };
TipoQuejasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TipoQuejasComponent, selectors: [["app-tipo-quejas"]], viewQuery: function TipoQuejasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 88, vars: 15, consts: [[1, "card-body"], [1, "titulo"], ["mat-raised-button", "", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#staticAgregar", 1, "botones", "mt-4", "mb-4"], [1, "container-fluid"], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "codigoTipoQueja"], ["mat-header-cell", "", "class", "headerTable", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "siglas"], ["matColumnDef", "descripcionTipoQueja"], ["matColumnDef", "accion"], ["mat-header-cell", "", "class", "headerTable", "class", "headerTable", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "accion", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["id", "staticAgregar", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg", "modal-dialog-centered", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header", "titulo"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-6"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "siglasQueja", "matInput", "", "placeholder", "Siglas de la Queja", "maxlength", "100", "autocomplete", "off", "keepCharPositions", "false", 3, "textMask"], ["align", "end"], [4, "ngIf"], ["matInput", "", "formControlName", "descripcionQueja", "matInput", "", "placeholder", "Descripci\u00F3n de la Queja", "maxlength", "100", "autocomplete", "off"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btnCancelar", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "staticDetalleEventos", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], ["id", "staticBackdropLabel", 1, "modal-title", "fs-5"], ["formControlName", "descripcionQueja", "matInput", "", "placeholder", "Nombre del punto de atenci\u00F3n", "maxlength", "100", "autocomplete", "off", 3, "value"], [1, "col-sm-10"], ["color", "primary", "formControlName", "estadoQueja"], ["estado", ""], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-primary", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "headerTable"], ["mat-cell", ""], ["mat-header-cell", "", 1, "headerTable"], ["mat-cell", "", 1, "accion"], ["title", "Ver m\u00E1s", "data-bs-toggle", "modal", "data-bs-target", "#staticDetalleEventos", 1, "material-icons", 2, "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TipoQuejasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Tipo de Queja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Queja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Busqueda");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function TipoQuejasComponent_Template_input_keyup_11_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](15, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, TipoQuejasComponent_th_16_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, TipoQuejasComponent_td_17_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, TipoQuejasComponent_th_19_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, TipoQuejasComponent_td_20_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](21, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TipoQuejasComponent_th_22_Template, 4, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, TipoQuejasComponent_td_23_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](24, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TipoQuejasComponent_th_25_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, TipoQuejasComponent_td_26_Template, 3, 0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, TipoQuejasComponent_tr_27_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, TipoQuejasComponent_tr_28_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, TipoQuejasComponent_tr_29_Template, 3, 1, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "mat-paginator", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Agregar tipo de queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Siglas de la Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-hint", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, TipoQuejasComponent_mat_error_47_Template, 2, 0, "mat-error", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Descripci\u00F3n de la Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-hint", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, TipoQuejasComponent_mat_error_55_Template, 2, 0, "mat-error", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TipoQuejasComponent_Template_button_click_57_listener() { return ctx.limpiarFormulario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TipoQuejasComponent_Template_button_click_59_listener() { return ctx.guardarTipoQueja(ctx.quejasForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Modificar Tipo de Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Descripci\u00F3n Queja");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "mat-slide-toggle", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TipoQuejasComponent_Template_button_click_86_listener() { return ctx.actualizarTipoQueja(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSourceEventos);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.eventoColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.quejasForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("textMask", ctx.maskconfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (ctx.quejasForm.controls.siglasQueja.value == null ? null : ctx.quejasForm.controls.siglasQueja.value.length) || 0, "/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.quejasForm.controls.siglasQueja.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", (ctx.quejasForm.controls.descripcionQueja.value == null ? null : ctx.quejasForm.controls.descripcionQueja.value.length) || 0, "/100");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.quejasForm.controls.descripcionQueja.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.quejasForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.quejasForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.detalleQueja == null ? null : ctx.detalleQueja.descripcionTipoQueja);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_r14.checked ? "Activo" : "Inactivo");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["MaxLengthValidator"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_16__["MaskedInputDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatError"]], styles: [".cdk-overlay-container {\r\n    z-index: 1200 !important;\r\n  }\r\n  \r\n  .titulo[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      background-color: #3f51b5;\r\n      color: white;\r\n      height: 60px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-content: center;\r\n      flex-direction: column;\r\n      font-family: normal normal medium 18px/22px Arial;\r\n      box-shadow: 0px 3px 6px #00000029;\r\n      border-radius: 18px 18px 0px 0px;\r\n      opacity: 1;\r\n      margin-top: 10px;\r\n  }\r\n  \r\n  .botones[_ngcontent-%COMP%] {\r\n      margin-left: 2%;\r\n      \r\n      background: #3f51b5 0% 0% no-repeat padding-box;\r\n      opacity: 1;\r\n      \r\n      text-align: center;\r\n      letter-spacing: 0px;\r\n      color: #FFFFFF;\r\n      opacity: 1;\r\n      border-radius: 20px;\r\n  }\r\n  \r\n  table[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  \r\n  .mat-mdc-form-field[_ngcontent-%COMP%] {\r\n      font-size: 14px;\r\n      width: 100%;\r\n    }\r\n  \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n      width: 25%;\r\n    }\r\n  \r\n  .modal-title[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      color: #ffffff;\r\n      font-size: 20px;\r\n  }\r\n  \r\n  .btnCancelar[_ngcontent-%COMP%] {\r\n    margin-left: 2%;\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #b81515 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #FFFFFF;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n    \r\n  }\r\n  \r\n  .btnGuardar[_ngcontent-%COMP%] {\r\n    \r\n    top: 734px;\r\n    left: 1252px;\r\n    width: 150px;\r\n    height: 40px;\r\n    \r\n    background: #DCDCDC 0% 0% no-repeat padding-box;\r\n    opacity: 1;\r\n    \r\n    text-align: center;\r\n    letter-spacing: 0px;\r\n    color: #B2B2B2;\r\n    opacity: 1;\r\n    border-radius: 20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcG8tcXVlamFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7RUFDMUI7O0VBRUE7TUFDSSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLGlEQUFpRDtNQUNqRCxpQ0FBaUM7TUFDakMsZ0NBQWdDO01BQ2hDLFVBQVU7TUFDVixnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLCtDQUErQztNQUMvQyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsY0FBYztNQUNkLFVBQVU7TUFDVixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxXQUFXO0lBQ2I7O0VBRUE7TUFDRSxlQUFlO01BQ2YsV0FBVztJQUNiOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxlQUFlO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7SUFDVixtQkFBbUI7O0VBRXJCOztFQUdBO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJ0aXBvLXF1ZWphcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgei1pbmRleDogMTIwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGl0dWxvIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZm9udC1mYW1pbHk6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE4cHgvMjJweCBBcmlhbDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxOHB4IDE4cHggMHB4IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdG9uZXMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgYmFja2dyb3VuZDogIzNmNTFiNSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRkLCB0aCB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubW9kYWwtdGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG5DYW5jZWxhciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAvKiBMYXlvdXQgUHJvcGVydGllcyAqL1xyXG4gICAgdG9wOiA3MzRweDtcclxuICAgIGxlZnQ6IDEyNTJweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIGJhY2tncm91bmQ6ICNiODE1MTUgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIFVJIFByb3BlcnRpZXMgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5idG5HdWFyZGFyIHtcclxuICAgIC8qIExheW91dCBQcm9wZXJ0aWVzICovXHJcbiAgICB0b3A6IDczNHB4O1xyXG4gICAgbGVmdDogMTI1MnB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgYmFja2dyb3VuZDogI0RDRENEQyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLyogVUkgUHJvcGVydGllcyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjQjJCMkIyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map