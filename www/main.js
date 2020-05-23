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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/charts/chart/chart.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charts/chart/chart.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>chart works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/consumption-result/consumption-result.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/consumption-result/consumption-result.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h6 class=\"main_heading\"> Monthly Consumption Result</h6>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 box-body marginTop2\">\n        <div class=col-md-12>\n            <div class=\"form-group padding_align\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <span class=\"span_label\">Building</span>\n                        <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"building_id\" class=\"form-control\">\n                        <option value=\"\" disabled >Select Building</option>\n                        <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of get_building_list\" >{{buildingObj.building_name}}</option>\n                    </select>\n\n                    </div>\n                    <div class=\"col-md-2\">\n                        <span class=\"span_label\">Year</span>\n                        <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" class=\"form-control\">\n                        <option value=\"\"  >Select Year</option>\n                       <option value=\"2019\">2019</option>\n                       <option value=\"2020\">2020</option>\n                       <option value=\"2021\">2021</option>\n                       <option value=\"2022\">2022</option>\n                       <option value=\"2023\">2020</option>\n                       <option value=\"2024\">2021</option>\n                       <option value=\"2025\">2022</option>\n                    </select>\n                    </div>\n\n                    <div class=\"col-md-2\">\n                        <span class=\"span_label\">Month</span>\n                        <select id=\"selectedMonth\" [(ngModel)]=\"selectedMonth\" name=\"select year\" class=\"form-control\">\n                        <option value=\"\" >Select Month</option>\n                       <option value=\"1\">Jan</option>\n                       <option value=\"2\">Feb</option>\n                       <option value=\"3\">Mar</option>\n                       <option value=\"4\">Apr</option>\n                       <option value=\"5\">May</option>\n                       <option value=\"6\">Jun</option>\n                       <option value=\"7\">Jul</option>\n                       <option value=\"8\">Aug</option>\n                       <option value=\"9\">Sep</option>\n                       <option value=\"10\">Oct</option>\n                       <option value=\"11\">Nov</option>\n                       <option value=\"12\">Dec</option>\n                    </select>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_block_building_report(selectedOption, selectedYear, selectedMonth)\">Go</button>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n<section>\n\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 box\">\n            <button class=\"pull-right\" (click)=\"back_to_block()\">Back</button>\n            <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 400px; display: block;\">\n            </highcharts-chart>\n        </div>\n\n    </div>\n</section>\n\n<section>\n    <!-- <div class=\"col-md-12 margin_top_3em\">\n        <h5>Detail View</h5>\n    </div> -->\n    <div class=\"col-md-12 marginTop2 \">\n        <div class=\"col-md-12 box overflow-x-scroll\">\n            <table class=\"table\">\n                <thead>\n                    <th>Slno</th>\n                    <th>Block Name</th>\n                    <th>Flat Name</th>\n                    <th>Flat Consumption</th>\n                    <th>Attached</th>\n                    <th>Common Bathroom</th>\n                    <th>Common</th>\n                    <th>Kitchen</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let buildingDetails of block_flat_response_for_table; let i = index\">\n                        <td>{{i+1}}</td>\n                        <td>\n                            <span (click)=\"getBlockId(buildingDetails)\"> {{buildingDetails.block_name}}</span>\n                        </td>\n                        <td>{{buildingDetails.flat_name}}</td>\n                        <td>{{buildingDetails.flat_consumption}}</td>\n                        <td>{{buildingDetails.attached}}</td>\n                        <td>{{buildingDetails.common_bathroom}}</td>\n                        <td>{{buildingDetails.common}}</td>\n                        <td>{{buildingDetails.kitchen}}</td>\n\n                    </tr>\n\n\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 header\">\n    <span class=\"menu-toggle\" (click)=\"openNav()\">&#9776;</span>\n    <app-left-sidebar></app-left-sidebar>\n    <span class=\"pull-right menu-toggle\"><i class=\"fa fa-sign-out\" (click)=\"signOut()\" aria-hidden=\"true\"></i></span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\"> Water Consumption</h5>\n    </div>\n</div>\n\n<div class=\"col-md-12 box-body marginTop2\">\n    <div class=\"form-group padding_align\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <span class=\"span_label\">Building</span>\n                <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"building\" class=\"form-control\" (change)=\"get_rtu_id(selectedOption)\">\n                        <option selected  value=\"rtu\">Select Building</option>\n                        <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of getBuildingList\" >{{buildingObj.building_name}}</option>\n                    </select>\n\n            </div>\n            <!-- <div class=\"col-md-1\">\n                <div>\n                    <span class=\"span_label\">View</span>\n                </div>\n\n                <label class=\"radio-inline\" for=\"radios-3\">\n                    <input  [(ngModel)]=\"selectedView\"  type=\"radio\" name=\"radios\" id=\"radios-3\" value=\"year\">\n                    Year\n                  </label> &nbsp;\n                <label class=\"radio-inline\" for=\"radios-2\">\n                    <input  [(ngModel)]=\"selectedView\"  type=\"radio\" name=\"radios\" id=\"radios-2\" value=\"month\">\n                    Month\n                  </label> &nbsp;\n                <label class=\"radio-inline\" for=\"radios-1\">\n                <input  [(ngModel)]=\"selectedView\" type=\"radio\"  name=\"radios\" id=\"radios-1\" value=\"day\">\n                Day\n              </label> &nbsp; &nbsp;\n            </div> -->\n\n            <div class=\"col-md-2\">\n                <span class=\"span_label\">Year</span>\n                <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" class=\"form-control\" (change)=\"get_year(selectedYear)\">\n                        <option [value]=\"\" selected >Select Year</option>\n                       <option [value]=\"yearobj\" *ngFor=\"let yearobj of years\">{{yearobj}}</option>\n                    </select>\n            </div>\n            <div class=\"col-md-2\">\n                <span class=\"span_label\">Month</span>\n                <select id=\"selectedMonth\" [(ngModel)]=\"selectedMonth\" name=\"select year\" class=\"form-control\" (change)=\"get_Month(selectedMonth)\">\n                        <option [value]=\"\" >Select Month</option>\n                       <option [value]=\"month.monthnumber\" *ngFor=\"let month of monthList\">{{month.monthname}}</option>\n                    </select>\n            </div>\n            <div class=\"col-md-1\">\n                <button type=\"button\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_block_building_report()\">Go</button>\n            </div>\n\n\n        </div>\n    </div>\n</div>\n\n<div class=\"row marginTop2\">\n\n    <div class=\"col-md-10 parent_box2\">\n        <div class=\"box\">\n\n            <ul class=\"color_level_bullet right_38\">\n\n                <li><span>\n                    <b>Usage: <span>{{RTUreportResponse.value}}</span></b>\n                    </span>\n                </li>\n                <li><span>\n                    <b>Target: <span>{{RTUreportResponse.target}}</span></b>\n                    </span>\n                </li>\n            </ul>\n            <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 190px; display: block;\">\n            </highcharts-chart>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/left-sidebar/left-sidebar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/left-sidebar/left-sidebar.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <img class=\"logo-inside\" src=\"../assets/images/output.png\" alt=\"\">\n    <a href=\"#\" routerLink=\"/home\">Water Consumption</a>\n    <a href=\"#\" routerLink=\"/consumptionresult\">Consumption Result</a>\n    <!-- <a href=\"#\" routerLink=\"/rolematrix\">Roles</a> -->\n    <a href=\"#\" routerLink=\"/reports\">Report</a>\n    <a href=\"#\" routerLink=\"/targetsetting\">Target Settings</a>\n    <a href=\"#\" routerLink=\"/masterlist\">Master Settings</a>\n    <a href=\"#\" routerLink=\"/rolesettings\">Role Settings</a>\n    <!-- <a htef=\"#\" routerLink=\"settings\">Settings</a> -->\n    <a href=\"#\">Log out</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"bar2\" *ngIf=\"loader\"></div>\n    <div class=\"row\">\n        <div class=\"col-md-5 login-box\">\n            <!-- <img class=\"logo\" src=\"../assets/images/output.png\" alt=\"\"> -->\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-8 login_signup_form \">\n\n                <span class=\"login100-form-title p-b-48\">\n               <h6 class=\"sign_in_up\">Sign in</h6>\n               <p>Don't have an account?  <a class=\"txt2\" routerLink=\"/signup\" href=\"#\">Sign Up</a></p>\n               </span>\n                <form action=\"\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                    <span class=\"label_sign\">Email Address</span>\n                    <div class=\"wrap-input100 validate-input\">\n                        <input class=\"input100\" type=\"email\" name=\"email\" formControlName=\"email\">\n                        <span class=\"focus-input100\" placeholder=\"youremailid@company.com\"></span>\n                    </div>\n                    <span class=\"label_sign\">Password</span>\n                    <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n\n                        <input class=\"input100\" type=\"password\" name=\"password\" formControlName=\"password\">\n                        <span class=\"focus-input100\" placeholder=\"****\"></span>\n                    </div>\n                    <div class=\"col-md-12 login_section\">\n                        <button type=\"submit\" class=\"btn login_btn_style\">Sign in</button>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n        <div class=\"col-md-7 padding_0 right_login_section\">\n            <p *ngIf=\"wrong_password\" class=\"pull-right\" id=\"message_box_red\">Wrong Crediantial</p>\n            <div class=\"content-container ng-tns-c156-32 ng-star-inserted\"><svg viewBox=\"0 0 1531 891\" preserveAspectRatio=\"xMidYMax slice\" xmlns=\"http://www.w3.org/2000/svg\" class=\"background ng-tns-c158-31\"><path d=\"M0 182c144.327 47.973 534.462 219.712 440.509 369.87C346.555 702.028 79.877 662.846 0 638V182z\" class=\"ng-tns-c158-31\"></path><path d=\"M1405 848c-424.366 158.009-437-164-437-272s102-425 563-576v769c-21.333 29.333-63.333 55.667-126 79z\" class=\"ng-tns-c158-31\"></path><path d=\"M1531 162c-122.914-17.284-377.96 33.191-543.433 206.414C822.095 541.636 797.342 648.75 835.842 731.622c38.5 82.871 198.243 134.841 400.555 92.053C1438.71 780.886 1492.752 775.894 1531 768V162z\" class=\"ng-tns-c158-31\"></path></svg>\n\n                <div class=\"content ng-tns-c158-31\">\n                    <div class=\"title ng-tns-c158-31\"><span class=\"ng-tns-c158-31\">Several apartment owners in the city now started using the smart meter service,</span><span class=\"ng-tns-c158-31\"></span></div>\n                    <div class=\"description ng-tns-c158-31\"> Ground level water going down day by day and cost of tanker's are increasing like rocket day by day, we help you to reduce the water bill by showing you the usage per day </div><button mat-stroked-button=\"\" class=\"mat-focus-indicator learn-more-button ng-tns-c158-31 mat-stroked-button mat-button-base\"><span class=\"mat-button-wrapper\"> Learn more </span><div matripple=\"\" class=\"mat-ripple mat-button-ripple\"></div><div class=\"mat-button-focus-overlay\"></div></button></div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata-tabs/metadata-tabs.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata-tabs/metadata-tabs.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>metadata-tabs works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/basestation/basestation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/basestation/basestation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Base Station</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\"\n                        aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 master_table_box box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Base Station Id</th>\n                        <th>Block</th>\n                        <th>Mac Detail</th>\n                        <th>IP Address</th>\n                        <th>Base Station Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let baseStationObj of getBasestationList; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!baseStationObj.editRow\">{{baseStationObj.base_station_id}}</span>\n                                <span *ngIf=\"baseStationObj.editRow\"><input [(ngModel)]=\"baseStationObj.base_station_id\" id=\"textinput\" name=\"base_station_id\" type=\"text\" placeholder=\"Base Station Id\"  class=\"form-control input-md\"></span>\n\n                            </td>\n                            <td>\n                                <span *ngIf=\"!baseStationObj.editRow\">{{baseStationObj.block.block_name}}</span>\n                                <span *ngIf=\"baseStationObj.editRow\">\n                                    <select id=\"selectbasic\" name=\"block_id\" [(ngModel)]=\"baseStationObj.block._id\" class=\"form-control\">\n                                        <option selected value=\"\">Select Block</option>\n                                        <option value=\"{{blockdetObj._id}}\" *ngFor=\"let blockdetObj of getBlockServiceDet\">{{blockdetObj.block_name}}</option>\n                                    </select>\n    \n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!baseStationObj.editRow\">{{baseStationObj.mac_id}}</span>\n                                <span *ngIf=\"baseStationObj.editRow\"> <input id=\"textinput\" name=\"mac_id\" type=\"text\" placeholder=\"Mac Id\" [(ngModel)]=\"baseStationObj.mac_id\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!baseStationObj.editRow\">{{baseStationObj.ip_address}}</span>\n                                <span *ngIf=\"baseStationObj.editRow\"><input id=\"textinput\" name=\"ip_address\" type=\"text\" placeholder=\"IP Address\" [(ngModel)]=\"baseStationObj.ip_address\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!baseStationObj.editRow\">{{baseStationObj.base_station_type}}</span>\n                                <span *ngIf=\"baseStationObj.editRow\">\n                                    <select id=\"selectbasic\" name=\"base_station_type\" [(ngModel)]=\"baseStationObj.base_station_type\" class=\"form-control\">\n                                        <option value=\"\">Select Base Station Type</option>\n                                        <option value=\"{{basestationTypeObj}}\" *ngFor=\"let basestationTypeObj of getBasestationTypeList\">{{basestationTypeObj}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!baseStationObj.editRow\" (click)=\"baseStationObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"baseStationObj.editRow\" (click)=\"baseStationObj.editRow = false; editEachBaesstationFunction(baseStationObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\" (click)=\"deleteBasestation(baseStationObj._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Base Station</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createBasestationForm\" (ngSubmit)=\"createBasestation()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"textinput\" name=\"base_station_id\" type=\"text\" placeholder=\"Base Station Id\" formControlName=\"base_station_id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"selectbasic\" name=\"block_id\" formControlName=\"block_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select Block</option>\n                                    <option value=\"{{blockdetObj._id}}\" *ngFor=\"let blockdetObj of getBlockServiceDet\">{{blockdetObj.block_name}}</option>\n                                </select>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"textinput\" name=\"mac_id\" type=\"text\" placeholder=\"Mac Id\" formControlName=\"mac_id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"textinput\" name=\"ip_address\" type=\"text\" placeholder=\"IP Address\" formControlName=\"ip_address\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"selectbasic\" name=\"block_id\" formControlName=\"base_station_type\" class=\"form-control\">\n                                    <option value=\"\">Select Base Station Type</option>\n                                    <option value=\"{{basestationTypeObj}}\" *ngFor=\"let basestationTypeObj of getBasestationTypeList\">{{basestationTypeObj}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <span><b>{{get_create_status}}</b></span>\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/basestationchannel/basestationchannel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/basestationchannel/basestationchannel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Base Station Channel</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Base Station Channel Id</th>\n                        <th>Base Station id</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let getBasestationChannelObj of getBasestationChannelList; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!getBasestationChannelObj.editRow\">{{getBasestationChannelObj.base_station_channel_id}}</span>\n                                <span *ngIf=\"getBasestationChannelObj.editRow\"> <input [(ngModel)]=\"getBasestationChannelObj.base_station_channel_id\" id=\"basestation_channel_id\" name=\"base_station_channel_id\" type=\"text\"  placeholder=\"Base Station Channel Id\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getBasestationChannelObj.editRow\">{{getBasestationChannelObj.base_station.base_station_id}}</span>\n                                <span *ngIf=\"getBasestationChannelObj.editRow\">\n                                    <select [(ngModel)]=\"getBasestationChannelObj.base_station._id\" id=\"base_station_id\" name=\"base_station_id\"  class=\"form-control\">\n                                        <option selected value=\"\">Select Base Station</option>\n                                        <option value=\"{{basestationObj._id}}\" *ngFor=\"let basestationObj of getBasestationList\">{{basestationObj.base_station_id}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!getBasestationChannelObj.editRow\" (click)=\"getBasestationChannelObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"getBasestationChannelObj.editRow\" (click)=\"getBasestationChannelObj.editRow = false; editEachBaesstationChannelFunction(getBasestationChannelObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\" (click)=\"deleteBasestationChannel(getBasestationChannelObj)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Base Station Channel</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createBasestationChannelForm\" (ngSubmit)=\"createBasestationChannels()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"basestation_channel_id\" name=\"base_station_channel_id\" type=\"text\" formControlName=\"base_station_channel_id\" placeholder=\"Base Station Channel Id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"base_station_id\" name=\"base_station_id\" formControlName=\"base_station_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select Base Station</option>\n                                    <option value=\"{{basestationObj._id}}\" *ngFor=\"let basestationObj of getBasestationList\">{{basestationObj.base_station_id}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/basestationtype/basestationtype.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/basestationtype/basestationtype.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Base Station Type</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Base Station Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let basestationTypeObj of getBasestationTypeList; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!basestationTypeObj.editRow\">{{basestationTypeObj}}</span>\n                                <span *ngIf=\"basestationTypeObj.editRow\"> <input [(ngModel)]=\"basestationTypeObj\" id=\"base_station_type\" name=\"base_station_type\" type=\"text\" placeholder=\"Base Station Type\" class=\"form-control input-md\"></span>\n\n                            </td>\n                            <td>\n                                <button *ngIf=\"!basestationTypeObj.editRow\" (click)=\"basestationTypeObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"basestationTypeObj.editRow\" (click)=\"basestationTypeObj.editRow = false \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteBasestationType(basestationTypeObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Base Station Type</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createBasestationTypeForm\" (ngSubmit)=\"createBasestationTypes()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"base_station_type\" name=\"base_station_type\" formControlName=\"base_station_type\" type=\"text\" placeholder=\"Base Station Type\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"type\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/block/block.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/block/block.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Block</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\"\n                    aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Block ID</th>\n                        <th>Block Name</th>\n                        <th>Building Name</th>\n                        <th>Num of Flats</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let getBlockdetailObj of getBlockServiceDet; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!getBlockdetailObj.editRow\">{{getBlockdetailObj.block_id}}</span>\n                                <span *ngIf=\"getBlockdetailObj.editRow\">\n                                    <input [(ngModel)]=\"getBlockdetailObj.block_id\" id=\"block_id\" name=\"block_id\" type=\"text\" placeholder=\"Block Id\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getBlockdetailObj.editRow\">{{getBlockdetailObj.block_name}}</span>\n                                <span *ngIf=\"getBlockdetailObj.editRow\">\n                                    <input [(ngModel)]=\"getBlockdetailObj.block_name\" id=\"block_name\" name=\"block_name\" type=\"text\" placeholder=\"Block Name\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getBlockdetailObj.editRow\">{{getBlockdetailObj.building.building_name}}</span>\n                                <span *ngIf=\"getBlockdetailObj.editRow\">\n                                    <select [(ngModel)]=\"getBlockdetailObj.building_id\" id=\"building_id\" name=\"building_id\"  class=\"form-control\">\n                                        <option value=\"\">Select Building Name</option>\n                                        <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of getBuildingDet\">{{buildingObj.building_name}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getBlockdetailObj.editRow\">{{getBlockdetailObj.num_of_flats}}</span>\n                                <span *ngIf=\"getBlockdetailObj.editRow\">\n                                    <input [(ngModel)]=\"getBlockdetailObj.num_of_flats\" id=\"num_of_flats\" name=\"num_of_flats\"  type=\"text\" placeholder=\"Num of Flats\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!getBlockdetailObj.editRow\" (click)=\"getBlockdetailObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"getBlockdetailObj.editRow\" (click)=\"getBlockdetailObj.editRow = false; editBlockFunction(getBlockdetailObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteBlocks(getBlockdetailObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Block</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createBlockForm\" (ngSubmit)=\"createBlocks()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"block_id\" name=\"block_id\" type=\"text\" formControlName=\"block_id\" placeholder=\"Block Id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"building_id\" name=\"building_id\" formControlName=\"building_id\" class=\"form-control\">\n                                    <option value=\"\">Select Building Name</option>\n                                    <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of getBuildingDet\">{{buildingObj.building_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"block_name\" name=\"block_name\" formControlName=\"block_name\" type=\"text\" placeholder=\"Block Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"num_of_flats\" name=\"num_of_flats\" formControlName=\"num_of_flats\" type=\"text\" placeholder=\"No of Flats\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/building/building.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/building/building.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Building</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Building ID</th>\n                        <th>Building Name</th>\n                        <th>Building Type</th>\n                        <th>Logo</th>\n                        <th>Pipe Type</th>\n                        <th>Pipe Size Horizontal</th>\n                        <th>Pipe Size Vertical</th>\n                        <th>Max Floor</th>\n                        <th>Num of Blocks</th>\n                        <th>No of OHT</th>\n                        <th>No of Ducts</th>\n                        <th>IP Address</th>\n                        <th>Service Provider</th>\n                        <th>No of BHK</th>\n                        <th>No of other types</th>\n                        <th>Muncipal Water Expense</th>\n                        <th>STP Reuse</th>\n                        <th>Website</th>\n                        <th>City ID</th>\n                        <th>Address</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let buildingdetailObj of getBuildingDet; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.building_id}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.building_id\" id=\"building_id\" name=\"building_id\" type=\"text\" placeholder=\"Building Id\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.building_name}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.building_name\" id=\"building_name\" name=\"building_name\" type=\"text\" placeholder=\"Building Name\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.building_type}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\">\n                                    <select [(ngModel)]=\"buildingdetailObj.building_type\" id=\"building_type\" name=\"building_type\" class=\"form-control\">\n                                        <option value=\"\">Select Building Type</option>\n                                        <option value=\"{{buildingTypeObj}}\" *ngFor=\"let buildingTypeObj of getBuildingTypeList\">{{buildingTypeObj}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.logo}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.pipe_type}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\">\n                                    <select [(ngModel)]=\"buildingdetailObj.pipe_type\" id=\"pipe_type\" name=\"pipe_type\" class=\"form-control\">\n                                        <option value=\"\">Select Pipe Type</option>\n                                        <option value=\"{{pipeObj}}\" *ngFor=\"let pipeObj of getPipeData\">{{pipeObj}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.pipe_size_horizontal}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.pipe_size_horizontal\" id=\"pipe_size_horizontal\" name=\"pipe_size_horizontal\" type=\"text\" placeholder=\"Pipe Size Horizontal\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.pipe_size_vertical}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.pipe_size_vertical\" id=\"pipe_size_vertical\" name=\"pipe_size_vertical\" type=\"text\" placeholder=\"Pipe Size Vertical\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.max_floors}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.max_floors\" id=\"max_floors\" name=\"max_floors\" type=\"text\" placeholder=\"Max Floor\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.num_of_blocks}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.num_of_blocks\" id=\"num_of_blocks\" name=\"num_of_blocks\" type=\"text\" placeholder=\"No of Blocks\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.no_of_OHT}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.no_of_OHT\" id=\"no_of_OHT\" name=\"no_of_OHT\" type=\"text\" placeholder=\"No of OHT\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.no_of_ducts}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.no_of_ducts\" id=\"no_of_ducts\" name=\"no_of_ducts\" type=\"text\" placeholder=\"No of Ducts\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.ip_address}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.ip_address\" id=\"ip_address\" name=\"ip_address\" type=\"text\" placeholder=\"IP Address\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.service_provider}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.service_provider\" id=\"service_provider\" name=\"service_provider\" type=\"text\" placeholder=\"Service Provider\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.no_of_bhk}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.no_of_bhk\" id=\"no_of_bhk\" name=\"no_of_bhk\" type=\"text\" placeholder=\"No of BHK\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.no_of_other_types}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.no_of_other_types\" id=\"no_of_other_types\" name=\"no_of_other_types\" type=\"text\" placeholder=\"No of BHK\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.monthly_water_expense}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.monthly_water_expense\" id=\"monthly_water_expense\" name=\"monthly_water_expense\" type=\"text\" placeholder=\"Monthly Water Espense\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.STP_reuse}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.STP_reuse\" id=\"STP_reuse\" name=\"STP_reuse\" type=\"text\" placeholder=\"STP Reuse\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.website}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.website\" id=\"website\" name=\"website\" type=\"text\" placeholder=\"Website\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.city.city_name}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\">\n                                    <select [(ngModel)]=\"buildingdetailObj.city._id\" id=\"city_id\" name=\"city_id\"  class=\"form-control\">\n                                        <option value=\"\">Select City</option>\n                                        <option value=\"{{cityObj._id}}\" *ngFor=\"let cityObj of getCityDetailList\">{{cityObj.city_name}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!buildingdetailObj.editRow\">{{buildingdetailObj.address}}</span>\n                                <span *ngIf=\"buildingdetailObj.editRow\"><input [(ngModel)]=\"buildingdetailObj.address\" id=\"address\" name=\"address\" type=\"text\" placeholder=\"Address\" class=\"form-control input-md\"></span>\n                            </td>\n\n                            <td>\n                                <button *ngIf=\"!buildingdetailObj.editRow\" (click)=\"buildingdetailObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"buildingdetailObj.editRow\" (click)=\"buildingdetailObj.editRow = false; editEachBuildingFunction(buildingdetailObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteBuildings(buildingdetailObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Building</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createBuildingsForms\" (ngSubmit)=\"createBuildings()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"building_id\" formControlName=\"building_id\" name=\"building_id\" type=\"text\" placeholder=\"Building Id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"building_name\" formControlName=\"building_name\" name=\"building_name\" type=\"text\" placeholder=\"Building Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"building_type\" name=\"building_type\" formControlName=\"building_type\" class=\"form-control\">\n                                    <option value=\"\">Select Building Type</option>\n                                    <option value=\"{{buildingTypeObj}}\" *ngFor=\"let buildingTypeObj of getBuildingTypeList\">{{buildingTypeObj}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"logo\" formControlName=\"logo\" name=\"logo\" type=\"text\" placeholder=\"Logo\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"pipe_type\" name=\"pipe_type\" formControlName=\"pipe_type\" class=\"form-control\">\n                                    <option value=\"\">Select Pipe Type</option>\n                                    <option value=\"{{pipeObj}}\" *ngFor=\"let pipeObj of getPipeData\">{{pipeObj}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"pipe_size_horizontal\" formControlName=\"pipe_size_horizontal\" name=\"pipe_size_horizontal\" type=\"text\" placeholder=\"Pipe Type Horizontal\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"pipe_size_vertical\" formControlName=\"pipe_size_vertical\" name=\"pipe_size_vertical\" type=\"text\" placeholder=\"Pipe Type Vertical\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"max_floors\" formControlName=\"max_floors\" name=\"max_floors\" type=\"text\" placeholder=\"Max Floors\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"num_of_blocks\" formControlName=\"num_of_blocks\" name=\"num_of_blocks\" type=\"text\" placeholder=\"No of Blocks\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"no_of_OHT\" formControlName=\"no_of_OHT\" name=\"no_of_OHT\" type=\"text\" placeholder=\"No of OHT\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"no_of_ducts\" formControlName=\"no_of_ducts\" name=\"no_of_ducts\" type=\"text\" placeholder=\"No of Ducts\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"ip_address\" formControlName=\"ip_address\" name=\"ip_address\" type=\"text\" placeholder=\"Ip Address\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"service_provider\" formControlName=\"service_provider\" name=\"service_provider\" type=\"text\" placeholder=\"Service Provider\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"no_of_bhk\" formControlName=\"no_of_bhk\" name=\"no_of_bhk\" type=\"text\" placeholder=\"No of BHK\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"no_of_other_types\" formControlName=\"no_of_other_types\" name=\"no_of_other_types\" type=\"text\" placeholder=\"No of other types\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"muncipal_water\" formControlName=\"muncipal_water\" name=\"muncipal_water\" type=\"text\" placeholder=\"Muncipal Water\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"no_of_bores\" formControlName=\"no_of_bores\" name=\"no_of_bores\" type=\"text\" placeholder=\"No of Bores\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"no_of_sumps\" formControlName=\"no_of_sumps\" name=\"no_of_sumps\" type=\"text\" placeholder=\"No of Sumps\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"consumption_without_metering\" formControlName=\"consumption_without_metering\" name=\"consumption_without_metering\" type=\"text\" placeholder=\"Consumption Without Metring\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"monthly_water_expense\" formControlName=\"monthly_water_expense\" name=\"monthly_water_expense\" type=\"text\" placeholder=\"Monthly Water Expense\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"STP_reuse\" formControlName=\"STP_reuse\" name=\"STP_reuse\" type=\"text\" placeholder=\"STP Reuse\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"website\" formControlName=\"website\" name=\"website\" type=\"text\" placeholder=\"Website\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"city_id\" name=\"city_id\" formControlName=\"city_id\" class=\"form-control\">\n                                    <option value=\"\">Select City</option>\n                                    <option value=\"{{cityObj._id}}\" *ngFor=\"let cityObj of getCityDetailList\">{{cityObj.city_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"address\" formControlName=\"address\" name=\"address\" type=\"text\" placeholder=\"Address\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/buildingtype/buildingtype.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/buildingtype/buildingtype.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Building Type</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Building Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let buildingTypeObj of getBuildingTypeList; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{buildingTypeObj}}</td>\n                            <td>\n                                <button class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteBuildingType(buildingTypeObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Building Type</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createBuildingTypeForm\" (ngSubmit)=\"createBuildingTypes()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"building_type\" name=\"building_type\" type=\"text\" formControlName=\"building_type\" placeholder=\"Building Type\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/city/city.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/city/city.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Cities</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>City Name</th>\n                        <th>Country</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let cityObj of getCityDetailList; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!cityObj.editRow\">{{cityObj.city_name}}</span>\n                                <span *ngIf=\"cityObj.editRow\"><input [(ngModel)]=\"cityObj.city_name\" id=\"city_name\" name=\"city_name\" type=\"text\" placeholder=\"City Name\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span>{{cityObj.country}}</span>\n\n                            </td>\n                            <td>\n                                <button *ngIf=\"!cityObj.editRow\" (click)=\"cityObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"cityObj.editRow\" (click)=\"cityObj.editRow = false; editCityFunction(cityObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteCities(cityObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add City</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createCityForms\" (ngSubmit)=\"createCities()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"city_name\" name=\"city_name\" type=\"text\" placeholder=\"City Name\" formControlName=\"city_name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/consumer/consumer.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/consumer/consumer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Consumer</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Consumer ID</th>\n                        <th>First Name</th>\n                        <th>Last Name</th>\n                        <th>Email</th>\n                        <th>Phone</th>\n                        <th>Mobile</th>\n                        <th>Flat Name</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let consumerObj of getConsumerData; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.consumer_id}}</span>\n                                <span *ngIf=\"consumerObj.editRow\"> <input [(ngModel)]=\"consumerObj.consumer_id\" id=\"consumer_id\"  name=\"consumer_id\" type=\"text\" placeholder=\"Consumer Id\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.first_name}}</span>\n                                <span *ngIf=\"consumerObj.editRow\"> <input [(ngModel)]=\"consumerObj.first_name\" id=\"first_name\"  name=\"first_name\" type=\"text\" placeholder=\"Flat Name\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.last_name}}</span>\n                                <span *ngIf=\"consumerObj.editRow\"> <input [(ngModel)]=\"consumerObj.last_name\" id=\"last_name\"  name=\"last_name\" type=\"text\" placeholder=\"Last Name\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.email_id}}</span>\n                                <span *ngIf=\"consumerObj.editRow\"> <input [(ngModel)]=\"consumerObj.email_id\" id=\"email_id\"  name=\"email_id\" type=\"text\" placeholder=\"Email\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.phone}}</span>\n                                <span *ngIf=\"consumerObj.editRow\"> <input [(ngModel)]=\"consumerObj.phone\" id=\"phone\"  name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.mobile}}</span>\n                                <span *ngIf=\"consumerObj.editRow\"> <input [(ngModel)]=\"consumerObj.mobile\" id=\"mobile\"  name=\"mobile\" type=\"text\" placeholder=\"mobile\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!consumerObj.editRow\">{{consumerObj.flat_details.flat_name}}</span>\n                                <span *ngIf=\"consumerObj.editRow\">\n                                    <select [(ngModel)]=\"consumerObj.flat_id\" id=\"flat_id\" name=\"flat_id\" class=\"form-control\">\n                                        <option value=\"\">Select Flat Name</option>\n                                        <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getallFlatdetails; let i=index\">{{flatObj.flat_name}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!consumerObj.editRow\" (click)=\"consumerObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"consumerObj.editRow\" (click)=\"consumerObj.editRow = false; editConsumerFunction(consumerObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteConsumer(consumerObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Consumer</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <form action=\"\" [formGroup]=\"createConsumerForm\" (ngSubmit)=\"createConsumers(createConsumerForm.value)\">\n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"consumer_id\" formControlName=\"consumer_id\" name=\"consumer_id\" type=\"text\" placeholder=\"Consumer Id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"first_name\" formControlName=\"first_name\" name=\"first_name\" type=\"text\" placeholder=\"First Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"last_name\" formControlName=\"last_name\" name=\"last_name\" type=\"text\" placeholder=\"Last Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"email_id\" formControlName=\"email_id\" name=\"email_id\" type=\"text\" placeholder=\"Email\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"phone\" formControlName=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"mobile\" formControlName=\"mobile\" name=\"mobile\" type=\"text\" placeholder=\"Mobile\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"flat_id\" name=\"flat_id\" formControlName=\"flat_id\" class=\"form-control\">\n                                    <option value=\"\">Select Flat Name</option>\n                                    <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getallFlatdetails; let i=index\">{{flatObj.flat_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/flat/flat.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/flat/flat.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Flat</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Block Name</th>\n                        <th>Flat Name</th>\n                        <th>Flat Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let flatDetailObj of getallFlatdetails; let i=index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!flatDetailObj.editRow\">{{flatDetailObj.block_details.block_name}}</span>\n                                <span *ngIf=\"flatDetailObj.editRow\">\n                                    <select [(ngModel)]=\"flatDetailObj.block_id\" id=\"block_id\" name=\"block_id\" class=\"form-control\">\n                                        <option value=\"\">Select Block</option>\n                                        <option value=\"{{blockObj._id}}\" *ngFor=\"let blockObj of getBlockServiceDet\">{{blockObj.block_name}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!flatDetailObj.editRow\">{{flatDetailObj.flat_name}}</span>\n                                <span *ngIf=\"flatDetailObj.editRow\">\n                                    <input [(ngModel)]=\"flatDetailObj.flat_name\" id=\"flat_name\"  name=\"flat_name\" type=\"text\" placeholder=\"Flat Name\" class=\"form-control input-md\">\n                                </span>\n\n                            </td>\n                            <td>\n                                <span *ngIf=\"!flatDetailObj.editRow\">{{flatDetailObj.flat_type}}</span>\n                                <span *ngIf=\"flatDetailObj.editRow\">\n                                <select [(ngModel)]=\"flatDetailObj.flat_type\" id=\"flat_type\" name=\"flat_type\"  class=\"form-control\">\n                                    <option value=\"\">Select Flat Type</option>\n                                    <option value=\"{{flatTypeObj}}\" *ngFor=\"let flatTypeObj of getFlatTypeList\">{{flatTypeObj}}</option>\n                                </select>\n                               </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!flatDetailObj.editRow\" (click)=\"flatDetailObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"flatDetailObj.editRow\" (click)=\"flatDetailObj.editRow = false; editFlatsFunction(flatDetailObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteFlats(flatDetailObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Flat</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createFlatForm\" (ngSubmit)=\"createFlats(createFlatForm.value)\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"block_id\" name=\"block_id\" formControlName=\"block_id\" class=\"form-control\">\n                                    <option value=\"\">Select Block</option>\n                                    <option value=\"{{blockObj._id}}\" *ngFor=\"let blockObj of getBlockServiceDet\">{{blockObj.block_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"flat_name\" formControlName=\"flat_name\" name=\"flat_name\" type=\"text\" placeholder=\"Flat Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"flat_type\" name=\"flat_type\" formControlName=\"flat_type\" class=\"form-control\">\n                                    <option value=\"\">Select Flat Type</option>\n                                    <option value=\"{{flatTypeObj}}\" *ngFor=\"let flatTypeObj of getFlatTypeList\">{{flatTypeObj}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/flattype/flattype.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/flattype/flattype.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Flat Type</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Flat Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let getFlatTypeObj of getFlatTypeList; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{getFlatTypeObj}}</td>\n                            <td>\n                                <button class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button (click)=\"deleteFlatType(getFlatTypeObj)\" class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Flat</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createFlattypeForm\" (ngSubmit)=\"createFlatypes()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"flat_type\" formControlName=\"flat_type\" name=\"flat_type\" type=\"text\" placeholder=\"Flat Type\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/inlet/inlet.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/inlet/inlet.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Inlet</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Inlet ID</th>\n                        <th>Flat Name</th>\n                        <th>Inlet Name</th>\n                        <th>Inlet Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let getInletObj of getInletList; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span *ngIf=\"!getInletObj.editRow\">{{getInletObj.inlet_id}}</span>\n                                <span *ngIf=\"getInletObj.editRow\">\n                                    <input [(ngModel)]=\"getInletObj.inlet_id\" id=\"inlet_id\"  name=\"inlet_id\" type=\"text\" placeholder=\"Inlet Id\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getInletObj.editRow\">{{getInletObj.flat.flat_name}}</span>\n                                <span *ngIf=\"getInletObj.editRow\">\n                                    <select [(ngModel)]=\"getInletObj.flat._id\" id=\"flat_id\" name=\"flat_id\" class=\"form-control\">\n                                        <option value=\"\">Select Flat</option>\n                                        <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getallFlatdetails\">{{flatObj.flat_name}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getInletObj.editRow\">{{getInletObj.inlet_name}}</span>\n                                <span *ngIf=\"getInletObj.editRow\">\n                                    <input [(ngModel)]=\"getInletObj.inlet_name\" id=\"inlet_name\"  name=\"inlet_name\" type=\"text\" placeholder=\"Inlet Name\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getInletObj.editRow\">{{getInletObj.inlet_type}}</span>\n                                <span *ngIf=\"getInletObj.editRow\">\n                                    <select [(ngModel)]=\"getInletObj.inlet_type\" id=\"inlet_type\" name=\"inlet_type\"  class=\"form-control\">\n                                        <option value=\"\">Select Inlet Type</option>\n                                        <option value=\"{{inlettypeObj}}\" *ngFor=\"let inlettypeObj of getInlettypedetails\">{{inlettypeObj}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!getInletObj.editRow\" (click)=\"getInletObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"getInletObj.editRow\" (click)=\"getInletObj.editRow = false; editInletFunction(getInletObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Inlet</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createInletform\" (ngSubmit)=\"createInlets()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"inlet_id\" formControlName=\"inlet_id\" name=\"inlet_id\" type=\"text\" placeholder=\"Inlet Id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"flat_id\" name=\"flat_id\" formControlName=\"flat_id\" class=\"form-control\">\n                                    <option value=\"\">Select Flat</option>\n                                    <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getallFlatdetails\">{{flatObj.flat_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"inlet_name\" formControlName=\"inlet_name\" name=\"inlet_name\" type=\"text\" placeholder=\"Inlet Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"inlet_type\" name=\"inlet_type\" formControlName=\"inlet_type\" class=\"form-control\">\n                                    <option value=\"\">Select Inlet Type</option>\n                                    <option value=\"{{inlettypeObj}}\" *ngFor=\"let inlettypeObj of getInlettypedetails\">{{inlettypeObj}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/inlettype/inlettype.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/inlettype/inlettype.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Inlet Types</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Inlet Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let inletTypeObj of getInlettypedetails; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{inletTypeObj}}</td>\n                            <td>\n                                <button class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Inlet Type</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createInletTypeForm\" (ngSubmit)=\"createInletTypes()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"inlet_type\" formControlName=\"inlet_type\" name=\"inlet_type\" type=\"text\" placeholder=\"Inlet Type\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/metadata.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/metadata.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Master Dashboard</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 box-body\">\n\n        <div routerLink=\"/basestation\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Base Stations</p>\n        </div>\n        <div routerLink=\"/basestationchannel\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\"> Base Station Channel</p>\n        </div>\n        <div routerLink=\"/basestationtype\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Base Station Type</p>\n\n        </div>\n        <div routerLink=\"/block\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Block</p>\n\n        </div>\n        <div routerLink=\"/building\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Building</p>\n        </div>\n        <div routerLink=\"/buildingtype\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Building Type</p>\n        </div>\n        <div routerLink=\"/city\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">City</p>\n        </div>\n        <div routerLink=\"/consumer\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Consumer</p>\n        </div>\n        <div routerLink=\"/flat\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Flat</p>\n        </div>\n        <div routerLink=\"/flattype\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Flat Type</p>\n        </div>\n        <div routerLink=\"/inlet\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"> </i></p>\n            <p class=\"master_icon_names\">Inlet</p>\n        </div>\n        <div routerLink=\"/inlettype\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\"> Inlet Type</p>\n        </div>\n        <div routerLink=\"/pipetype\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"> </i></p>\n            <p class=\"master_icon_names\">Pipe Type</p>\n\n        </div>\n        <div routerLink=\"/rtu\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"> </i></p>\n            <p class=\"master_icon_names\">RTU</p>\n\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/pipetype/pipetype.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/pipetype/pipetype.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Pipes</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Pipe Type</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let pipeObj of getPipeData; let i =index\">\n                            <td>{{i+1}}</td>\n                            <td>{{pipeObj}}</td>\n                            <td>\n                                <button class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Pipe</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createPipetypeForm\" (ngSubmit)=\"createPipetypes()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"pipe_type\" formControlName=\"pipe_type\" name=\"pipe_type\" type=\"text\" placeholder=\"Pipe Type\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/metadata/rtu/rtu.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/metadata/rtu/rtu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">RTU</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Add</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>RTU Id</th>\n                        <th>Base Station Id</th>\n                        <th>Base Station Channel Id</th>\n                        <th>Tag Name</th>\n                        <th>Flat Name</th>\n                        <th>Inlet Id</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let getRtuObj of getRtuList; let i = index\">\n                            <td>\n                                <span>{{i+1}}</span>\n\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getRtuObj.editRow\">{{getRtuObj.rtu_id}}</span>\n                                <span *ngIf=\"getRtuObj.editRow\"> <input id=\"rtu_id\" [(ngModel)]=\"rtu_id\" name=\"rtu_id\" type=\"text\" placeholder=\"RTU Id\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getRtuObj.editRow\">{{getRtuObj.base_station.base_station_id}}</span>\n                                <span *ngIf=\"getRtuObj.editRow\">\n                                    <select id=\"base_station_id\" name=\"base_station_id\" [(ngModel)]=\"getRtuObj.base_station._id\" class=\"form-control\">\n                                        <option value=\"\">Select Base Station</option>\n                                        <option value=\"{{basestationObj._id}}\" *ngFor=\"let basestationObj of getBasestationList\">{{basestationObj.base_station_id}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getRtuObj.editRow\">{{getRtuObj.base_station_channel.base_station_channel_id}}</span>\n                                <span *ngIf=\"getRtuObj.editRow\">\n                                    <select id=\"base_station_channel_id\" name=\"base_station_channel_id\" [(ngModel)]=\"getRtuObj.base_station_channel._id\" class=\"form-control\">\n                                        <option value=\"\">Select Base Station Channel</option>\n                                        <option value=\"{{basestationchannelObj._id}}\" *ngFor=\"let basestationchannelObj of getBasestationChannelList\">{{basestationchannelObj.base_station_channel_id}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getRtuObj.editRow\">{{getRtuObj.tag_name}}</span>\n                                <span *ngIf=\"getRtuObj.editRow\">  <input id=\"tag_name\" [(ngModel)]=\"getRtuObj.tag_name\" name=\"tag_name\" type=\"text\" placeholder=\"Tag Name\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n\n                                <span *ngIf=\"!getRtuObj.editRow\">{{getRtuObj.flat.flat_name}}</span>\n                                <span *ngIf=\"getRtuObj.editRow\">\n                                    <select id=\"flat_id\" name=\"flat_id\" [(ngModel)]=\"getRtuObj.flat._id\" class=\"form-control\">\n                                        <option value=\"\">Select Flat</option>\n                                        <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getallFlatdetails\">{{flatObj.flat_name}}</option>\n                                    </select>\n                                </span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!getRtuObj.editRow\">{{getRtuObj.inlet.inlet_name}}</span>\n                                <span *ngIf=\"getRtuObj.editRow\">\n\n                                <select id=\"inlet_id\" name=\"inlet_id\" [(ngModel)]=\"getRtuObj.inlet._id\" class=\"form-control\">\n                                    <option value=\"\">Select Inlet</option>\n                                    <option value=\"{{inletObj._id}}\" *ngFor=\"let inletObj of getInletList\">{{inletObj.inlet_name}}</option>\n                                </select>\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!getRtuObj.editRow\" (click)=\"getRtuObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"getRtuObj.editRow\" (click)=\"getRtuObj.editRow = false; editRTUFunction(getRtuObj) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add RTU</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createRtuForm\" (ngSubmit)=\"createRTU()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"rtu_id\" formControlName=\"rtu_id\" name=\"rtu_id\" type=\"text\" placeholder=\"RTU Id\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"base_station_id\" name=\"base_station_id\" formControlName=\"base_station_id\" class=\"form-control\">\n                                    <option value=\"\">Select Base Station</option>\n                                    <option value=\"{{basestationObj._id}}\" *ngFor=\"let basestationObj of getBasestationList\">{{basestationObj.base_station_id}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"base_station_channel_id\" name=\"base_station_channel_id\" formControlName=\"base_station_channel_id\" class=\"form-control\">\n                                    <option value=\"\">Select Base Station Channel</option>\n                                    <option value=\"{{basestationchannelObj._id}}\" *ngFor=\"let basestationchannelObj of getBasestationChannelList\">{{basestationchannelObj.base_station_channel_id}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"tag_name\" formControlName=\"tag_name\" name=\"tag_name\" type=\"text\" placeholder=\"Tag Name\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"flat_id\" name=\"flat_id\" formControlName=\"flat_id\" class=\"form-control\">\n                                    <option value=\"\">Select Flat</option>\n                                    <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getallFlatdetails\">{{flatObj.flat_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n\n                                <select id=\"inlet_id\" name=\"inlet_id\" formControlName=\"inlet_id\" class=\"form-control\">\n                                    <option value=\"\">Select Inlet</option>\n                                    <option value=\"{{inletObj._id}}\" *ngFor=\"let inletObj of getInletList\">{{inletObj.inlet_name}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/blockreport/blockreport.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/blockreport/blockreport.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Block Report</h5>\n    </div>\n</div>\n\n<div class=\"col-md-12 box-body marginTop2\">\n    <div class=\"form-group padding_align\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <span class=\"span_label\">Block</span>\n                <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"block_id\" (change)=\"get_blockReport(selectedOption)\" class=\"form-control\">\n                    <option value=\"\" >Select Block</option>\n                    <option value=\"{{block_list_obj._id}}\" *ngFor=\"let block_list_obj of get_block_list\" >{{block_list_obj.block_name}}</option>\n                    </select>\n\n            </div>\n            <div class=\"col-md-2\">\n                <div>\n                    <span class=\"span_label\">View</span>\n                </div>\n\n                <label class=\"radio-inline\" for=\"radios-3\">\n                    <input  [(ngModel)]=\"selectedView\"  type=\"radio\" name=\"radios\" id=\"radios-3\" value=\"year\">\n                    Year\n                  </label> &nbsp;\n                <label class=\"radio-inline\" for=\"radios-2\">\n                    <input  [(ngModel)]=\"selectedView\"  type=\"radio\" name=\"radios\" id=\"radios-2\" value=\"month\">\n                    Month\n                  </label> &nbsp;\n                <label class=\"radio-inline\" for=\"radios-1\">\n                <input  [(ngModel)]=\"selectedView\" type=\"radio\"  name=\"radios\" id=\"radios-1\" value=\"day\">\n                Day\n              </label> &nbsp; &nbsp;\n            </div>\n\n            <div [hidden]=\"(selectedView == 'year')\" class=\"col-md-2\">\n                <span class=\"span_label\">Year</span>\n                <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" id=\"select_year_id\" class=\"form-control\">\n                        <option [value]=\"\" selected >Select Year</option>\n                       <option [value]=\"yearobj\" *ngFor=\"let yearobj of years\">{{yearobj}}</option>\n                    </select>\n            </div>\n            <div [hidden]=\"(selectedView != 'day')\" class=\"col-md-2\">\n                <span class=\"span_label\">Month</span>\n                <select id=\"selectedMonth\" [(ngModel)]=\"selectedMonth\" name=\"select year\" class=\"form-control\" (change)=\"get_Month(selectedMonth)\">\n                        <option [value]=\"\" >Select Month</option>\n                       <option [value]=\"month.monthnumber\" *ngFor=\"let month of monthList\">{{month.monthname}}</option>\n                    </select>\n            </div>\n            <div class=\"col-md-1\">\n                <button type=\"button\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_block_report()\">Go</button>\n            </div>\n\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 \">\n            <div class=\"col-md-12 box\">\n                <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 400px; display: block;\">\n                </highcharts-chart>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 master_table_box marginTop2 box\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Sl no</th>\n                        <th>Block</th>\n                        <th>Flat</th>\n                        <th>Flat Consumption</th>\n                        <th>Attached</th>\n                        <th>Common</th>\n                        <th>Common Bathroom</th>\n                        <th>Kitchen</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let blockTableObj of get_block_table_report; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{blockTableObj.block_name}}</td>\n                            <td>{{blockTableObj.flat_name}}</td>\n                            <td>{{blockTableObj.flat_consumption}}</td>\n                            <td>{{blockTableObj.attached}}</td>\n                            <td>{{blockTableObj.common}}</td>\n                            <td>{{blockTableObj.common_bathroom}}</td>\n                            <td>{{blockTableObj.kitchen}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/buildingreport/buildingreport.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/buildingreport/buildingreport.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Building Report</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"col-md-12 box-body marginTop2\">\n\n            <div class=\"form-group padding_align\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <span class=\"span_label\">Building</span>\n                        <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"building_id\" class=\"form-control\" (change)=\"get_buildingReport(selectedOption)\">\n                                <option value=\"\" >Select Building</option>\n                                <option value=\"{{building_obj._id}}\" *ngFor=\"let building_obj of get_building_list\" >{{building_obj.building_name}}</option>\n                            </select>\n                    </div>\n\n                    <div class=\"col-md-2\">\n                        <div>\n                            <span class=\"span_label\">View</span>\n                        </div>\n                        <label class=\"radio-inline\" for=\"radios-1\">\n                            <input  type=\"radio\" [(ngModel)]=\"selectedView\" name=\"radios\" id=\"radios-1\" value=\"year\">\n                            Year\n                          </label> &nbsp;\n                        <label class=\"radio-inline\" for=\"radios-2\">\n                            <input type=\"radio\" [(ngModel)]=\"selectedView\" name=\"radios\" id=\"radios-2\" value=\"month\">\n                            Month\n                          </label> &nbsp;\n                        <label class=\"radio-inline\" for=\"radios-3\">\n                            <input type=\"radio\" [(ngModel)]=\"selectedView\" name=\"radios\" id=\"radios-3\" value=\"day\">\n                            Day\n                          </label>\n                    </div>\n\n                    <div [hidden]=\"(selectedView == 'year')\" class=\"col-md-2\">\n                        <span class=\"span_label\">Year</span>\n                        <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" class=\"form-control\" (change)=\"get_year(selectedYear)\">\n                                <option [value]=\"\" selected >Select Year</option>\n                                <option [value]=\"yearobj\" *ngFor=\"let yearobj of years\">{{yearobj}}</option>\n                            </select>\n                    </div>\n\n                    <div [hidden]=\"(selectedView != 'day')\" class=\"col-md-2\">\n                        <span class=\"span_label\">Month</span>\n                        <select id=\"select_month_id\" [(ngModel)]=\"selectedMonth\" name=\"select month\" class=\"form-control\" (change)=\"get_month(selectedMonth)\">\n                                <option [value]=\"\" >Select Month</option>\n                                <option [value]=\"month.monthnumber\" *ngFor=\"let month of monthList\">{{month.monthname}}</option>\n                            </select>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button type=\"button\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_building_report()\">Go</button>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box\">\n                <highcharts-chart [Highcharts]=\"highchartss\" [options]=\"chartOptions\" style=\"width: 100%; height: 400px; display: block;\">\n                </highcharts-chart>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 master_table_box marginTop2\">\n            <table class=\"table\">\n                <thead>\n                    <th>Sl no</th>\n                    <th>Attached</th>\n                    <th>Common</th>\n                    <th>Flat Consumption</th>\n                    <th>Kitchen</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let buildingTableObj of get_building_table_report; let i = index\">\n                        <td>{{i+1}}</td>\n                        <td>{{buildingTableObj.attached}}</td>\n                        <td>{{buildingTableObj.common}}</td>\n                        <td>{{buildingTableObj.flat_consumption}}</td>\n                        <td>{{buildingTableObj.kitchen}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/consumer-report/consumer-report.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/consumer-report/consumer-report.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Cosumer Report</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 \">\n            <div class=\"form-group padding_align  box marginTop2\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <span class=\"span_label\">Flat</span>\n                        <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"block_id\" class=\"form-control\" (change)=\"get_flatReport(selectedOption)\">\n                            <option value=\"\" >Select Flat</option>\n                            <option value=\"{{flat_obj._id}}\" *ngFor=\"let flat_obj of get_flat_list\" >{{flat_obj.flat_name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"col-md-2\">\n                        <div>\n                            <span class=\"span_label\">View</span>\n                        </div>\n                        <label class=\"radio-inline\" for=\"radios-1\">\n                        <input  type=\"radio\" [(ngModel)]=\"selectedView\" name=\"radios\" id=\"radios-1\" value=\"year\">\n                        Year\n                      </label> &nbsp;\n                        <label class=\"radio-inline\" for=\"radios-2\">\n                        <input type=\"radio\" [(ngModel)]=\"selectedView\" name=\"radios\" id=\"radios-2\" value=\"month\">\n                        Month\n                      </label> &nbsp;\n                        <label class=\"radio-inline\" for=\"radios-3\">\n                        <input type=\"radio\" [(ngModel)]=\"selectedView\" name=\"radios\" id=\"radios-3\" value=\"day\">\n                        Day\n                      </label>\n                    </div>\n\n                    <div [hidden]=\"(selectedView == 'year')\" class=\"col-md-2\">\n                        <span class=\"span_label\">Year</span>\n                        <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" class=\"form-control\" (change)=\"get_year(selectedYear)\">\n                            <option [value]=\"\" selected >Select Year</option>\n                            <option [value]=\"yearobj\" *ngFor=\"let yearobj of years\">{{yearobj}}</option>\n                        </select>\n                    </div>\n\n                    <div [hidden]=\"(selectedView != 'day')\" class=\"col-md-2\">\n                        <span class=\"span_label\">Month</span>\n                        <select id=\"select_month_id\" [(ngModel)]=\"selectedMonth\" name=\"select month\" class=\"form-control\" (change)=\"get_month(selectedMonth)\">\n                            <option [value]=\"\" >Select Month</option>\n                            <option [value]=\"month.monthnumber\" *ngFor=\"let month of monthList\">{{month.monthname}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button type=\"button\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_consumer_report_go()\">Go</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"row marginTop2\">\n\n    <div class=\"col-md-10 parent_box2\" *ngIf=\"bullet_chart_data == '200'\">\n        <div class=\"box\">\n\n            <ul class=\"color_level_bullet right_38\">\n\n                <li><span>\n                    <b>Usage: <span>{{get_consumer_chart_report.value}}</span></b>\n                    </span>\n                </li>\n                <li><span>\n                    <b>Target: <span>{{get_consumer_chart_report.target}}</span></b>\n                    </span>\n                </li>\n            </ul>\n            <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 190px; display: block;\">\n            </highcharts-chart>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row marginTop2\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box\" *ngIf=\"flatRportStatus == '200'\">\n                <highcharts-chart [Highcharts]=\"highcharts1\" [options]=\"chartOptions1\" style=\"width: 100%; height: 400px; display: block;\">\n                </highcharts-chart>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/flatreport/flatreport.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/flatreport/flatreport.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\"> Flat Report</h5>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2\">\n        <div class=\"col-md-12 \">\n            <div class=\"form-group padding_align\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        <span class=\"span_label\">Flat</span>\n                        <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"block_id\" class=\"form-control\" (change)=\"get_flatReport(selectedOption)\">\n                            <option value=\"\" >Select Flat</option>\n                            <option value=\"{{flat_obj._id}}\" *ngFor=\"let flat_obj of get_flat_list\" >{{flat_obj.flat_name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"col-md-2 views_chart\">\n                        <div>\n                            <span class=\"span_label\">View</span>\n                        </div>\n                        <label class=\"radio-inline\" for=\"radios-3\">\n                        <input type=\"radio\" name=\"radios\" [(ngModel)]=\"selectedView\" id=\"radios-3\" value=\"year\">\n                        Year\n                      </label>&nbsp;\n                        <label class=\"radio-inline\" for=\"radios-2\">\n                        <input type=\"radio\" name=\"radios\" [(ngModel)]=\"selectedView\" id=\"radios-2\" value=\"month\">\n                        Month\n                      </label> &nbsp;\n                        <label class=\"radio-inline\" for=\"radios-1\">\n                        <input  type=\"radio\" name=\"radios\" [(ngModel)]=\"selectedView\" id=\"radios-1\"  value=\"day\">\n                        Day\n                      </label>\n                    </div>\n\n                    <div [hidden]=\"(selectedView =='year')\" class=\"col-md-2\">\n                        <span class=\"span_label\">Year</span>\n                        <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" class=\"form-control\" (change)=\"get_year(selectedYear)\">\n                            <option value=\"\" >Select Year</option>\n                           <option value=\"2019\">2019</option>\n                           <option value=\"2020\">2020</option>\n                           <option value=\"2021\">2021</option>\n                           <option value=\"2022\">2022</option>\n                           <option value=\"2023\">2020</option>\n                           <option value=\"2024\">2021</option>\n                           <option value=\"2025\">2022</option>\n                        </select>\n                    </div>\n\n                    <div [hidden]=\"(selectedView !='day')\" class=\"col-md-2\">\n                        <span class=\"span_label\">Month</span>\n                        <select id=\"select_month_id\" [(ngModel)]=\"selectedMonth\" name=\"select month\" class=\"form-control\" (change)=\"get_month(selectedMonth)\">\n                                <option [value]=\"\" >Select Month</option>\n                                <option [value]=\"month.monthnumber\" *ngFor=\"let month of monthList\">{{month.monthname}}</option>\n                            </select>\n                    </div>\n                    <div class=\"col-md-1\">\n                        <button type=\"button\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_flat_report()\">Go</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div *ngIf=\"get_flat_chart_report\" class=\"col-md-12 box\">\n                <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 400px; display: block;\">\n                </highcharts-chart>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div *ngIf=\"get_flat_table_report\" class=\"col-md-12 master_table_box box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Flat Name</th>\n                        <th>Flat Consumption</th>\n                        <th>Attached</th>\n                        <th>Common</th>\n                        <th>Common Bathroom</th>\n                        <th>Kitchen</th>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>{{get_flat_table_report.flat_name}}</td>\n                            <td>{{get_flat_table_report.flat_consumption}}</td>\n                            <td>{{get_flat_table_report.attached}}</td>\n                            <td>{{get_flat_table_report.common}}</td>\n                            <td>{{get_flat_table_report.common_bathroom}}</td>\n                            <td>{{get_flat_table_report.kitchen}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/reports.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/reports.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Reports</h5>\n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-md-12 box-body\">\n\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-md-3 multiple_report\">\n                    <div routerLink=\"/flatreport\">\n                        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n                        <p class=\"pull-right report_title\">\n                            Flat\n                        </p><br>\n                        <p class=\"pull-right sub_title\">Detail Report</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 multiple_report\">\n                    <div routerLink=\"/blockreport\">\n                        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n                        <p class=\"pull-right report_title\">\n                            Block\n                        </p><br>\n                        <p class=\"pull-right sub_title\">Detail Report</p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 multiple_report\">\n                    <div routerLink=\"/buildingreport\">\n                        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n                        <p class=\"pull-right report_title\">\n                            Building\n                        </p><br>\n                        <p class=\"pull-right sub_title\">Detail Report</p>\n                    </div>\n                </div>\n                <!-- <div class=\"col-md-3 multiple_report\">\n                    <div routerLink=\"/rtoreport\">\n                        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n                        <p class=\"pull-right report_title\">\n                            RTU\n                        </p><br>\n                        <p class=\"pull-right sub_title\">Detail Report</p>\n                    </div>\n                </div> -->\n                <div class=\"col-md-3 multiple_report\">\n                    <div routerLink=\"/consumerreport\">\n                        <i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>\n                        <p class=\"pull-right report_title\">\n                            Consumer\n                        </p><br>\n                        <p class=\"pull-right sub_title\">Detail Report</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reports/rtoreport/rtoreport.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reports/rtoreport/rtoreport.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">RTU Report</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 marginTop2 box padding_align\">\n                <div class=\"form-group \">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            <span class=\"span_label\">RTU</span>\n                            <select id=\"building_id\" [(ngModel)]=\"selectedOption\" name=\"block_id\" class=\"form-control\" (change)=\"get_rtuReport(selectedOption)\">\n                                <option value=\"\" >Select RTU</option>\n                                <option value=\"{{rtu_obj._id}}\" *ngFor=\"let rtu_obj of getRtuList\" >{{rtu_obj.rtu_id}}</option>\n                            </select>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <div>\n                                <span class=\"span_label\">View</span>\n                            </div>\n                            <label class=\"radio-inline\" for=\"radios-1\">\n                            <input  type=\"radio\" name=\"radios\" [(ngModel)]=\"selectedView\" id=\"radios-1\" value=\"year\">\n                             Year\n                          </label> &nbsp;\n                            <label class=\"radio-inline\" for=\"radios-2\">\n                            <input  type=\"radio\" name=\"radios\" [(ngModel)]=\"selectedView\" id=\"radios-2\" value=\"month\">\n                            Month\n                          </label> &nbsp;\n                            <label class=\"radio-inline\" for=\"radios-3\">\n                            <input  type=\"radio\" name=\"radios\" [(ngModel)]=\"selectedView\" id=\"radios-3\" value=\"day\">\n                            Day\n                          </label>\n                        </div>\n\n\n                        <div class=\"col-md-2\">\n                            <span class=\"span_label\">Year</span>\n                            <select id=\"select_year_id\" [(ngModel)]=\"selectedYear\" name=\"select year\" class=\"form-control\" (change)=\"get_year(selectedYear)\">\n                                <option [value]=\"\" selected >Select Year</option>\n                                <option [value]=\"yearobj\" *ngFor=\"let yearobj of years\">{{yearobj}}</option>\n                            </select>\n                        </div>\n\n                        <div class=\"col-md-2\">\n                            <span class=\"span_label\">Month</span>\n                            <select [disabled]=\"(selectedView != 'day')\" id=\"select_month_id\" [(ngModel)]=\"selectedMonth\" name=\"select month\" class=\"form-control\" (change)=\"get_month(selectedMonth)\">\n                                <option [value]=\"\" >Select Month</option>\n                                <option [value]=\"month.monthnumber\" *ngFor=\"let month of monthList\">{{month.monthname}}</option>\n                            </select>\n                        </div>\n\n\n                        <div class=\"col-md-1\">\n                            <button type=\"button\" id=\"singlebutton\" name=\"singlebutton\" class=\"btn btn-primary margin_top_24\" (click)=\"get_rtu_report()\">Go</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 marginTop2 box\">\n                <highcharts-chart [Highcharts]=\"highcharts\" [options]=\"chartOptions\" style=\"width: 100%; height: 190px; display: block;\">\n                </highcharts-chart>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rolematrix/rolematrix.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rolematrix/rolematrix.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Roles</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n\n        <div class=\"col-md-12 \">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Role</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let getRoles of getRoleLists; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{getRoles}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rolesettings/rolebyusers/rolebyusers.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rolesettings/rolebyusers/rolebyusers.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Role by Users</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 padding_align  box marginTop2\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\"\n                    aria-hidden=\"true\"></i>Assign Role</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <div class=\"col-md-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <th>Slno</th>\n                            <th>Users</th>\n                            <th>Action</th>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let rolebyuserLst of rolebyuserList; let i = index\">\n                                <td>{{i+1}}</td>\n                                <td>{{rolebyuserLst.email}}</td>\n                                <td>\n                                    <button class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                    <button class=\"btn btna btn-danger\" (click)=\"deleteBasestation(baseStationObj._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Assign Role to User</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"assignRoletoUserForm\" (ngSubmit)=\"assignRoleToUser()\">\n                <div class=\"modal-body\">\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"user_id\" name=\"user_id\" formControlName=\"user_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select User</option>\n                                    <option value=\"{{userLst._id}}\" *ngFor=\"let userLst of userList\">{{userLst.email}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"building_id\" name=\"building_id\" formControlName=\"building_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select Building</option>\n                                    <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of buildingList\">{{buildingObj.building_name}}</option>\n                                </select>\n\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"role\" name=\"role\" formControlName=\"role\" class=\"form-control\">\n                                    <option value=\"\">Select Role</option>\n                                    <option value=\"{{roleObj}}\" *ngFor=\"let roleObj of roleList\">{{roleObj}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <span><b>{{get_create_status}}</b></span>\n                    <button type=\"button\" class=\"btn btn-danger1\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rolesettings/rolesettings.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rolesettings/rolesettings.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Role Settings</h5>\n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-md-12 box-body\">\n\n\n        <div routerLink=\"/roles\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Roles</p>\n        </div>\n        <div routerLink=\"/users\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Users</p>\n        </div>\n        <div routerLink=\"/rolebyuser\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Role by User</p>\n        </div>\n        <div routerLink=\"/activeusers\" class=\"multiple_report\">\n            <p class=\"master_icons\"> <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Active Users</p>\n        </div>\n\n\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/rolesettings/users/users.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rolesettings/users/users.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Users</h5>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12\">\n            <div class=\"col-md-12 box master_table_box overflow-x-scroll\">\n                <div class=\"col-md-12\">\n                    <table class=\"table\">\n                        <thead>\n                            <th>Slno</th>\n                            <th>Users</th>\n                            <th>Action</th>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let userLst of userList; let i = index\">\n                                <td>{{i+1}}</td>\n                                <td>{{userLst.email}}</td>\n                                <td>\n                                    <button class=\"btn btna btn-danger\" (click)=\"deleteBasestation(baseStationObj._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"bar2\" *ngIf=\"loader\"></div>\n    <div class=\"row\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4 login-box\">\n            <img class=\"logo\" src=\"../assets/images/output.png\" alt=\"\">\n\n\n            <span class=\"login100-form-title p-b-48\">\n               \n            </span>\n            <form action=\"\" [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n                <div class=\"wrap-input100 validate-input\">\n                    <input class=\"input100\" type=\"text\" name=\"email\" formControlName=\"email\">\n                    <span class=\"focus-input100\" data-placeholder=\"email\"></span>\n                </div>\n\n                <div class=\"wrap-input100 validate-input\" data-validate=\"Enter password\">\n                    <span class=\"btn-show-pass\">\n                        <i class=\"zmdi zmdi-eye\"></i>\n                    </span>\n                    <input class=\"input100\" type=\"password\" name=\"password\" formControlName=\"password\">\n                    <span class=\"focus-input100\" data-placeholder=\"Password\"></span>\n                </div>\n                <div class=\"col-md-12 login_section\">\n                    <button type=\"submit\" class=\"btn\">Sign up</button>\n                </div>\n            </form>\n\n            <div class=\"text-center p-t-115\">\n                <span class=\"txt1\">\n                     Have already account?\n                </span>\n\n                <a class=\"txt2\" routerLink=\"/signup\" href=\"#\">\n                    Login\n                </a>\n            </div>\n\n        </div>\n        <div class=\"col-md-4\">\n            <p *ngIf=\"wrong_password\" class=\"pull-right\" id=\"message_box_red\">Wrong Crediantial</p>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target-setting/target-by-building/target-by-building.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target-setting/target-by-building/target-by-building.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new \">\n        <div class=\"col-md-12\">\n            <h5 class=\"main_heading\">Target by Building</h5>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"col-md-12 box-body marginTop2\">\n    <div class=\"form-group padding_align\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <button type=\"button\" class=\"btn btn-primary margin_top_24\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\"\n                        aria-hidden=\"true\"></i> Add</button>\n\n            </div>\n            <div class=\"col-md-3 padding-right-28\">\n                <span class=\"span_label\">Building</span>\n                <select id=\"selectBuilding\" [(ngModel)]=\"selectBuilding\" name=\"select building\" class=\"form-control\" (change)=\"getTargetbuBuildingIdFunction(selectBuilding)\">\n                    <option value=\"\" >Select Building</option>\n                    <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of getBuildingList\">{{buildingObj.building_name}}</option>\n                  \n                </select>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 \">\n            <div class=\"overflow-x-scroll box\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Building</th>\n                        <th>Type</th>\n                        <th>Target</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody *ngIf=\"!loopTable\">\n                        <tr *ngFor=\"let targetObj of getlistofBuildingtarget; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span>{{targetObj.building_name}}</span>\n                            </td>\n                            <td>\n                                <span>{{targetObj.type}}</span>\n\n                            </td>\n                            <td>\n                                <span *ngIf=\"!targetObj.editRow\">{{targetObj.target_value}}</span>\n                                <span *ngIf=\"targetObj.editRow\"> \n                                    <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" [(ngModel)]=\"targetObj.target_value\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!targetObj.editRow\" (click)=\"targetObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"targetObj.editRow\" (click)=\"targetObj.editRow = false; editTargetbyBuildingFunction(targetObj,true) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                    <tbody *ngIf=\"loopTable\">\n                        <tr>\n                            <td>1</td>\n                            <td>\n                                <span>{{eachlistofBuildingtarget.building_name}}</span>\n\n                            </td>\n                            <td>\n                                <span>{{eachlistofBuildingtarget.type}}</span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!editRow\">{{eachlistofBuildingtarget.target_value}}</span>\n                                <span *ngIf=\"editRow\"> <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" [(ngModel)]=\"eachlistofBuildingtarget.target_value\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!editRow\" (click)=\"editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"editRow\" (click)=\"editRow = false; editTargetbyBuildingFunction(eachlistofBuildingtarget,false) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Target by Building</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createTargetForm\" (ngSubmit)=\"setTargetByBuilding()\">\n                <div class=\"modal-body\">\n\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"block_id\" name=\"block_id\" formControlName=\"building_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select Building</option>\n                                    <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of getBuildingList\">{{buildingObj.building_name}}</option>\n                                </select>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" formControlName=\"target_value\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <span *ngIf=\"addedResponseMsg\"><b>Successfully Added</b></span>\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target-setting/target-by-flat/target-by-flat.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target-setting/target-by-flat/target-by-flat.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new \">\n        <div class=\"col-md-12\">\n            <h5 class=\"main_heading\">Target by Flat</h5>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"col-md-12 box-body marginTop2\">\n    <div class=\"form-group padding_align\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <button type=\"button\" class=\"btn btn-primary margin_top_24\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\"\n                        aria-hidden=\"true\"></i> Add</button>\n\n            </div>\n            <div class=\"col-md-3 padding-right-28\">\n                <span class=\"span_label\">Flat</span>\n                <select id=\"selectFlat\" [(ngModel)]=\"selectFlat\" name=\"select Flat\" class=\"form-control\" (change)=\"getTargetbuFlatIdFunction(selectFlat)\">\n                    <option value=\"\" >Select Flat</option>\n                    <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getFlatList\">{{flatObj.flat_name}}</option>\n                  \n                </select>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 \">\n            <div class=\"overflow-x-scroll box\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Building</th>\n                        <th>Type</th>\n                        <th>Target</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody *ngIf=\"!loopTable\">\n                        <tr *ngFor=\"let targetObj of getlistofFlattarget; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>\n                                <span>{{targetObj.flat_name}}</span>\n                            </td>\n                            <td>\n                                <span>{{targetObj.type}}</span>\n\n                            </td>\n                            <td>\n                                <span *ngIf=\"!targetObj.editRow\">{{targetObj.target_value}}</span>\n                                <span *ngIf=\"targetObj.editRow\"> \n                                    <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" [(ngModel)]=\"targetObj.target_value\" class=\"form-control input-md\">\n                                </span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!targetObj.editRow\" (click)=\"targetObj.editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"targetObj.editRow\" (click)=\"targetObj.editRow = false; editTargetbyBuildingFunction(targetObj,true) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                    <tbody *ngIf=\"loopTable\">\n                        <tr>\n                            <td>1</td>\n                            <td>\n                                <span>{{eachlistofBuildingtarget.flat_name}}</span>\n\n                            </td>\n                            <td>\n                                <span>{{eachlistofBuildingtarget.type}}</span>\n                            </td>\n                            <td>\n                                <span *ngIf=\"!editRow\">{{eachlistofBuildingtarget.target_value}}</span>\n                                <span *ngIf=\"editRow\"> <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" [(ngModel)]=\"eachlistofBuildingtarget.target_value\" class=\"form-control input-md\"></span>\n                            </td>\n                            <td>\n                                <button *ngIf=\"!editRow\" (click)=\"editRow = true\" class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button *ngIf=\"editRow\" (click)=\"editRow = false; editTargetbyBuildingFunction(eachlistofBuildingtarget,false) \" class=\"btn btna btn-brown\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></button>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Target by Flat</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createTargetForm\" (ngSubmit)=\"setTargetByFlat()\">\n                <div class=\"modal-body\">\n\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"flat_id\" name=\"flat_id\" formControlName=\"flat_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select Flat</option>\n                                    <option value=\"{{flatObj._id}}\" *ngFor=\"let flatObj of getFlatList\">{{flatObj.flat_name}}</option>\n                                </select>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" formControlName=\"target_value\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <span *ngIf=\"addedResponseMsg\"><b>Successfully Added</b></span>\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target-setting/target-setting.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target-setting/target-setting.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new\">\n        <h5 class=\"main_heading\">Target Settings</h5>\n    </div>\n</div>\n<div class=\"row\">\n\n    <div class=\"col-md-12 box-body\">\n\n\n        <div routerLink=\"/targetbybuilding\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Target by Building</p>\n        </div>\n        <div routerLink=\"/targetbyflat\" class=\"multiple_report\">\n            <p class=\"master_icons\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></p>\n            <p class=\"master_icon_names\">Target by Flat</p>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/target/target.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/target/target.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bar2\" *ngIf=\"loader1\"></div>\n<div class=\"row\">\n    <div class=\"col-md-12 marginTop2 padding_new \">\n        <div class=\"col-md-12\">\n            <h5 class=\"main_heading\">Target</h5>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"col-md-12 box-body marginTop2\">\n    <div class=\"form-group padding_align\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <button type=\"button\" class=\"btn btn-primary margin_top_24\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-pencil\"\n                        aria-hidden=\"true\"></i> Add</button>\n\n            </div>\n            <div class=\"col-md-3 padding-right-28\">\n                <span class=\"span_label\">Building</span>\n                <select id=\"selectBuilding\" [(ngModel)]=\"selectBuilding\" name=\"select building\" class=\"form-control\" (change)=\"select_building(selectBuilding)\">\n                    <option value=\"\" >Select Building</option>\n                   <option value=\"{{buildingObj._id}}\" *ngFor=\"let buildingObj of building_list\">{{buildingObj.building_name}}</option>\n                  \n                </select>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"col-md-12 \">\n            <div class=\"overflow-x-scroll box\">\n                <table class=\"table\">\n                    <thead>\n                        <th>Slno</th>\n                        <th>Block Name</th>\n                        <th>Type</th>\n                        <th>Target</th>\n                        <th>Action</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let targetObj of get_targetlist_for_table; let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{targetObj.block_name}}</td>\n                            <td>{{targetObj.type}}</td>\n                            <td>{{targetObj.target_value}}</td>\n                            <td>\n                                <button class=\"btn btna btn-brown\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n                                <button class=\"btn btna btn-danger\" (click)=\"deleteBasestation(baseStationObj._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Target</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <form action=\"\" [formGroup]=\"createTargetForm\" (ngSubmit)=\"setTargetByBLOCKID()\">\n                <div class=\"modal-body\">\n\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <select id=\"block_id\" name=\"block_id\" formControlName=\"block_id\" class=\"form-control\">\n                                    <option selected value=\"\">Select Block</option>\n                                    <option value=\"{{blockObj._id}}\" *ngFor=\"let blockObj of blockList\">{{blockObj.block_name}}</option>\n                                </select>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <input id=\"target\" name=\"target\" type=\"number\" placeholder=\"Target\" formControlName=\"target\" class=\"form-control input-md\">\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <!-- <span><b>{{get_create_status}}</b></span> -->\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Add</button>\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_src_app_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _src_app_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _src_app_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/left-sidebar/left-sidebar.component */ "./src/app/left-sidebar/left-sidebar.component.ts");
/* harmony import */ var _src_app_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/metadata/metadata.component */ "./src/app/metadata/metadata.component.ts");
/* harmony import */ var _src_app_metadata_basestationtype_basestationtype_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/metadata/basestationtype/basestationtype.component */ "./src/app/metadata/basestationtype/basestationtype.component.ts");
/* harmony import */ var _src_app_metadata_buildingtype_buildingtype_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/metadata/buildingtype/buildingtype.component */ "./src/app/metadata/buildingtype/buildingtype.component.ts");
/* harmony import */ var _src_app_metadata_city_city_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/metadata/city/city.component */ "./src/app/metadata/city/city.component.ts");
/* harmony import */ var _src_app_metadata_flattype_flattype_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/metadata/flattype/flattype.component */ "./src/app/metadata/flattype/flattype.component.ts");
/* harmony import */ var _src_app_metadata_inlettype_inlettype_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @src/app/metadata/inlettype/inlettype.component */ "./src/app/metadata/inlettype/inlettype.component.ts");
/* harmony import */ var _src_app_metadata_pipetype_pipetype_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @src/app/metadata/pipetype/pipetype.component */ "./src/app/metadata/pipetype/pipetype.component.ts");
/* harmony import */ var _src_app_metadata_tabs_metadata_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @src/app/metadata-tabs/metadata-tabs.component */ "./src/app/metadata-tabs/metadata-tabs.component.ts");
/* harmony import */ var _src_app_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @src/app/reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _src_app_reports_flatreport_flatreport_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @src/app/reports/flatreport/flatreport.component */ "./src/app/reports/flatreport/flatreport.component.ts");
/* harmony import */ var _src_app_reports_blockreport_blockreport_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @src/app/reports/blockreport/blockreport.component */ "./src/app/reports/blockreport/blockreport.component.ts");
/* harmony import */ var _src_app_reports_buildingreport_buildingreport_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @src/app/reports/buildingreport/buildingreport.component */ "./src/app/reports/buildingreport/buildingreport.component.ts");
/* harmony import */ var _src_app_reports_rtoreport_rtoreport_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @src/app/reports/rtoreport/rtoreport.component */ "./src/app/reports/rtoreport/rtoreport.component.ts");
/* harmony import */ var _src_app_charts_chart_chart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @src/app/charts/chart/chart.component */ "./src/app/charts/chart/chart.component.ts");
/* harmony import */ var _src_app_metadata_basestationchannel_basestationchannel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @src/app/metadata/basestationchannel/basestationchannel.component */ "./src/app/metadata/basestationchannel/basestationchannel.component.ts");
/* harmony import */ var _src_app_metadata_block_block_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @src/app/metadata/block/block.component */ "./src/app/metadata/block/block.component.ts");
/* harmony import */ var _src_app_metadata_consumer_consumer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @src/app/metadata/consumer/consumer.component */ "./src/app/metadata/consumer/consumer.component.ts");
/* harmony import */ var _src_app_metadata_basestation_basestation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @src/app/metadata/basestation/basestation.component */ "./src/app/metadata/basestation/basestation.component.ts");
/* harmony import */ var _src_app_metadata_building_building_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @src/app/metadata/building/building.component */ "./src/app/metadata/building/building.component.ts");
/* harmony import */ var _src_app_metadata_flat_flat_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @src/app/metadata/flat/flat.component */ "./src/app/metadata/flat/flat.component.ts");
/* harmony import */ var _src_app_metadata_inlet_inlet_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @src/app/metadata/inlet/inlet.component */ "./src/app/metadata/inlet/inlet.component.ts");
/* harmony import */ var _src_app_metadata_rtu_rtu_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @src/app/metadata/rtu/rtu.component */ "./src/app/metadata/rtu/rtu.component.ts");
/* harmony import */ var _src_app_reports_consumer_report_consumer_report_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @src/app/reports/consumer-report/consumer-report.component */ "./src/app/reports/consumer-report/consumer-report.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _src_app_consumption_result_consumption_result_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @src/app/consumption-result/consumption-result.component */ "./src/app/consumption-result/consumption-result.component.ts");
/* harmony import */ var _src_app_target_target_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @src/app/target/target.component */ "./src/app/target/target.component.ts");
/* harmony import */ var _src_app_rolematrix_rolematrix_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @src/app/rolematrix/rolematrix.component */ "./src/app/rolematrix/rolematrix.component.ts");
/* harmony import */ var _src_app_rolesettings_rolesettings_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @src/app/rolesettings/rolesettings.component */ "./src/app/rolesettings/rolesettings.component.ts");
/* harmony import */ var _src_app_rolesettings_rolesetting_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @src/app/rolesettings/rolesetting.module */ "./src/app/rolesettings/rolesetting.module.ts");
/* harmony import */ var _src_app_rolesettings_users_users_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @src/app/rolesettings/users/users.component */ "./src/app/rolesettings/users/users.component.ts");
/* harmony import */ var _src_app_rolesettings_rolebyusers_rolebyusers_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @src/app/rolesettings/rolebyusers/rolebyusers.component */ "./src/app/rolesettings/rolebyusers/rolebyusers.component.ts");
/* harmony import */ var _src_app_signup_signup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @src/app/signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _src_app_target_setting_target_setting_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @src/app/target-setting/target-setting.component */ "./src/app/target-setting/target-setting.component.ts");
/* harmony import */ var _src_app_target_setting_target_by_building_target_by_building_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @src/app/target-setting/target-by-building/target-by-building.component */ "./src/app/target-setting/target-by-building/target-by-building.component.ts");
/* harmony import */ var _src_app_target_setting_target_by_flat_target_by_flat_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @src/app/target-setting/target-by-flat/target-by-flat.component */ "./src/app/target-setting/target-by-flat/target-by-flat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { SweetAlertService } from 'angular-sweetalert-service';

// import { HighchartModule } from './highchart.module';

// import { FormsModule } from '@angular/forms';


//import { ChartsComponent } from '@src/app/charts/charts/charts.component';






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                // HighchartsChartComponent,
                _src_app_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _src_app_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                //ChartsComponent,
                _src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _src_app_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _src_app_left_sidebar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["LeftSidebarComponent"],
                _src_app_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_12__["MetadataComponent"],
                _src_app_metadata_basestationtype_basestationtype_component__WEBPACK_IMPORTED_MODULE_13__["BasestationtypeComponent"],
                _src_app_metadata_buildingtype_buildingtype_component__WEBPACK_IMPORTED_MODULE_14__["BuildingtypeComponent"],
                _src_app_metadata_city_city_component__WEBPACK_IMPORTED_MODULE_15__["CityComponent"],
                _src_app_metadata_flattype_flattype_component__WEBPACK_IMPORTED_MODULE_16__["FlattypeComponent"],
                _src_app_metadata_inlettype_inlettype_component__WEBPACK_IMPORTED_MODULE_17__["InlettypeComponent"],
                _src_app_metadata_pipetype_pipetype_component__WEBPACK_IMPORTED_MODULE_18__["PipetypeComponent"],
                _src_app_metadata_tabs_metadata_tabs_component__WEBPACK_IMPORTED_MODULE_19__["MetadataTabsComponent"],
                _src_app_reports_reports_component__WEBPACK_IMPORTED_MODULE_20__["ReportsComponent"],
                _src_app_reports_flatreport_flatreport_component__WEBPACK_IMPORTED_MODULE_21__["FlatreportComponent"],
                _src_app_reports_blockreport_blockreport_component__WEBPACK_IMPORTED_MODULE_22__["BlockreportComponent"],
                _src_app_reports_buildingreport_buildingreport_component__WEBPACK_IMPORTED_MODULE_23__["BuildingreportComponent"],
                _src_app_reports_rtoreport_rtoreport_component__WEBPACK_IMPORTED_MODULE_24__["RtoreportComponent"],
                _src_app_charts_chart_chart_component__WEBPACK_IMPORTED_MODULE_25__["ChartComponent"],
                _src_app_metadata_basestationchannel_basestationchannel_component__WEBPACK_IMPORTED_MODULE_26__["BasestationchannelComponent"],
                _src_app_metadata_block_block_component__WEBPACK_IMPORTED_MODULE_27__["BlockComponent"],
                _src_app_metadata_consumer_consumer_component__WEBPACK_IMPORTED_MODULE_28__["ConsumerComponent"],
                _src_app_metadata_basestation_basestation_component__WEBPACK_IMPORTED_MODULE_29__["BasestationComponent"],
                _src_app_metadata_building_building_component__WEBPACK_IMPORTED_MODULE_30__["BuildingComponent"],
                _src_app_metadata_flat_flat_component__WEBPACK_IMPORTED_MODULE_31__["FlatComponent"],
                _src_app_metadata_inlet_inlet_component__WEBPACK_IMPORTED_MODULE_32__["InletComponent"],
                _src_app_metadata_rtu_rtu_component__WEBPACK_IMPORTED_MODULE_33__["RTUComponent"],
                _src_app_reports_consumer_report_consumer_report_component__WEBPACK_IMPORTED_MODULE_34__["ConsumerReportComponent"],
                _src_app_consumption_result_consumption_result_component__WEBPACK_IMPORTED_MODULE_36__["ConsumptionResultComponent"],
                _src_app_target_target_component__WEBPACK_IMPORTED_MODULE_37__["TargetComponent"],
                _src_app_rolematrix_rolematrix_component__WEBPACK_IMPORTED_MODULE_38__["RolematrixComponent"],
                _src_app_rolesettings_rolesettings_component__WEBPACK_IMPORTED_MODULE_39__["RolesettingsComponent"],
                _src_app_rolesettings_users_users_component__WEBPACK_IMPORTED_MODULE_41__["UsersComponent"],
                _src_app_rolesettings_rolebyusers_rolebyusers_component__WEBPACK_IMPORTED_MODULE_42__["RolebyusersComponent"],
                _src_app_signup_signup_component__WEBPACK_IMPORTED_MODULE_43__["SignupComponent"],
                _src_app_target_setting_target_setting_component__WEBPACK_IMPORTED_MODULE_44__["TargetSettingComponent"],
                _src_app_target_setting_target_by_building_target_by_building_component__WEBPACK_IMPORTED_MODULE_45__["TargetByBuildingComponent"],
                _src_app_target_setting_target_by_flat_target_by_flat_component__WEBPACK_IMPORTED_MODULE_46__["TargetByFlatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _src_app_rolesettings_rolesetting_module__WEBPACK_IMPORTED_MODULE_40__["RolesettingModule"]
            ],
            providers: [],
            bootstrap: [_src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _app_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_reports_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _app_reports_blockreport_blockreport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/reports/blockreport/blockreport.component */ "./src/app/reports/blockreport/blockreport.component.ts");
/* harmony import */ var _app_reports_buildingreport_buildingreport_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/reports/buildingreport/buildingreport.component */ "./src/app/reports/buildingreport/buildingreport.component.ts");
/* harmony import */ var _app_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/metadata/metadata.component */ "./src/app/metadata/metadata.component.ts");
/* harmony import */ var _app_reports_flatreport_flatreport_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/reports/flatreport/flatreport.component */ "./src/app/reports/flatreport/flatreport.component.ts");
/* harmony import */ var _app_reports_rtoreport_rtoreport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/reports/rtoreport/rtoreport.component */ "./src/app/reports/rtoreport/rtoreport.component.ts");
/* harmony import */ var _app_metadata_basestation_basestation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/metadata/basestation/basestation.component */ "./src/app/metadata/basestation/basestation.component.ts");
/* harmony import */ var _app_metadata_basestationchannel_basestationchannel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/metadata/basestationchannel/basestationchannel.component */ "./src/app/metadata/basestationchannel/basestationchannel.component.ts");
/* harmony import */ var _app_metadata_basestationtype_basestationtype_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/metadata/basestationtype/basestationtype.component */ "./src/app/metadata/basestationtype/basestationtype.component.ts");
/* harmony import */ var _app_metadata_buildingtype_buildingtype_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app/metadata/buildingtype/buildingtype.component */ "./src/app/metadata/buildingtype/buildingtype.component.ts");
/* harmony import */ var _app_metadata_block_block_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app/metadata/block/block.component */ "./src/app/metadata/block/block.component.ts");
/* harmony import */ var _app_metadata_building_building_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../app/metadata/building/building.component */ "./src/app/metadata/building/building.component.ts");
/* harmony import */ var _app_metadata_city_city_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/metadata/city/city.component */ "./src/app/metadata/city/city.component.ts");
/* harmony import */ var _app_metadata_consumer_consumer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/metadata/consumer/consumer.component */ "./src/app/metadata/consumer/consumer.component.ts");
/* harmony import */ var _app_metadata_flat_flat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/metadata/flat/flat.component */ "./src/app/metadata/flat/flat.component.ts");
/* harmony import */ var _app_metadata_flattype_flattype_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/metadata/flattype/flattype.component */ "./src/app/metadata/flattype/flattype.component.ts");
/* harmony import */ var _app_metadata_inlet_inlet_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../app/metadata/inlet/inlet.component */ "./src/app/metadata/inlet/inlet.component.ts");
/* harmony import */ var _app_metadata_inlettype_inlettype_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../app/metadata/inlettype/inlettype.component */ "./src/app/metadata/inlettype/inlettype.component.ts");
/* harmony import */ var _app_metadata_pipetype_pipetype_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../app/metadata/pipetype/pipetype.component */ "./src/app/metadata/pipetype/pipetype.component.ts");
/* harmony import */ var _app_metadata_rtu_rtu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../app/metadata/rtu/rtu.component */ "./src/app/metadata/rtu/rtu.component.ts");
/* harmony import */ var _app_reports_consumer_report_consumer_report_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../app/reports/consumer-report/consumer-report.component */ "./src/app/reports/consumer-report/consumer-report.component.ts");
/* harmony import */ var _app_consumption_result_consumption_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../app/consumption-result/consumption-result.component */ "./src/app/consumption-result/consumption-result.component.ts");
/* harmony import */ var _app_target_setting_target_setting_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app/target-setting/target-setting.component */ "./src/app/target-setting/target-setting.component.ts");
/* harmony import */ var _rolematrix_rolematrix_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rolematrix/rolematrix.component */ "./src/app/rolematrix/rolematrix.component.ts");
/* harmony import */ var _rolesettings_rolesettings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rolesettings/rolesettings.component */ "./src/app/rolesettings/rolesettings.component.ts");
/* harmony import */ var _rolesettings_users_users_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rolesettings/users/users.component */ "./src/app/rolesettings/users/users.component.ts");
/* harmony import */ var _rolesettings_rolebyusers_rolebyusers_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rolesettings/rolebyusers/rolebyusers.component */ "./src/app/rolesettings/rolebyusers/rolebyusers.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _target_setting_target_by_building_target_by_building_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./target-setting/target-by-building/target-by-building.component */ "./src/app/target-setting/target-by-building/target-by-building.component.ts");
/* harmony import */ var _target_setting_target_by_flat_target_by_flat_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./target-setting/target-by-flat/target-by-flat.component */ "./src/app/target-setting/target-by-flat/target-by-flat.component.ts");


// dashboards






// masters
























var routes = [
    {
        path: '',
        component: _app_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'home',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'reports',
        component: _app_reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
    },
    {
        path: 'charts',
        component: _app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'blockreport',
        component: _app_reports_blockreport_blockreport_component__WEBPACK_IMPORTED_MODULE_3__["BlockreportComponent"]
    },
    {
        path: 'buildingreport',
        component: _app_reports_buildingreport_buildingreport_component__WEBPACK_IMPORTED_MODULE_4__["BuildingreportComponent"]
    },
    {
        path: 'flatreport',
        component: _app_reports_flatreport_flatreport_component__WEBPACK_IMPORTED_MODULE_6__["FlatreportComponent"]
    },
    {
        path: 'rtoreport',
        component: _app_reports_rtoreport_rtoreport_component__WEBPACK_IMPORTED_MODULE_7__["RtoreportComponent"]
    },
    {
        path: 'masterlist',
        component: _app_metadata_metadata_component__WEBPACK_IMPORTED_MODULE_5__["MetadataComponent"]
    },
    {
        path: 'basestation',
        component: _app_metadata_basestation_basestation_component__WEBPACK_IMPORTED_MODULE_8__["BasestationComponent"]
    },
    {
        path: 'basestationchannel',
        component: _app_metadata_basestationchannel_basestationchannel_component__WEBPACK_IMPORTED_MODULE_9__["BasestationchannelComponent"]
    },
    {
        path: 'basestationtype',
        component: _app_metadata_basestationtype_basestationtype_component__WEBPACK_IMPORTED_MODULE_10__["BasestationtypeComponent"]
    },
    {
        path: 'block',
        component: _app_metadata_block_block_component__WEBPACK_IMPORTED_MODULE_12__["BlockComponent"]
    },
    {
        path: 'building',
        component: _app_metadata_building_building_component__WEBPACK_IMPORTED_MODULE_13__["BuildingComponent"]
    },
    {
        path: 'buildingtype',
        component: _app_metadata_buildingtype_buildingtype_component__WEBPACK_IMPORTED_MODULE_11__["BuildingtypeComponent"]
    },
    {
        path: 'city',
        component: _app_metadata_city_city_component__WEBPACK_IMPORTED_MODULE_14__["CityComponent"]
    },
    {
        path: 'consumer',
        component: _app_metadata_consumer_consumer_component__WEBPACK_IMPORTED_MODULE_15__["ConsumerComponent"]
    },
    {
        path: 'flat',
        component: _app_metadata_flat_flat_component__WEBPACK_IMPORTED_MODULE_16__["FlatComponent"]
    },
    {
        path: 'flattype',
        component: _app_metadata_flattype_flattype_component__WEBPACK_IMPORTED_MODULE_17__["FlattypeComponent"]
    },
    {
        path: 'inlet',
        component: _app_metadata_inlet_inlet_component__WEBPACK_IMPORTED_MODULE_18__["InletComponent"]
    },
    {
        path: 'inlettype',
        component: _app_metadata_inlettype_inlettype_component__WEBPACK_IMPORTED_MODULE_19__["InlettypeComponent"]
    },
    {
        path: 'pipetype',
        component: _app_metadata_pipetype_pipetype_component__WEBPACK_IMPORTED_MODULE_20__["PipetypeComponent"]
    },
    {
        path: 'rtu',
        component: _app_metadata_rtu_rtu_component__WEBPACK_IMPORTED_MODULE_21__["RTUComponent"]
    },
    {
        path: 'consumptionresult',
        component: _app_consumption_result_consumption_result_component__WEBPACK_IMPORTED_MODULE_23__["ConsumptionResultComponent"]
    },
    {
        path: 'consumerreport',
        component: _app_reports_consumer_report_consumer_report_component__WEBPACK_IMPORTED_MODULE_22__["ConsumerReportComponent"]
    },
    {
        path: 'targetsetting',
        component: _app_target_setting_target_setting_component__WEBPACK_IMPORTED_MODULE_24__["TargetSettingComponent"]
    },
    {
        path: 'roles',
        component: _rolematrix_rolematrix_component__WEBPACK_IMPORTED_MODULE_25__["RolematrixComponent"]
    },
    {
        path: 'rolesettings',
        component: _rolesettings_rolesettings_component__WEBPACK_IMPORTED_MODULE_26__["RolesettingsComponent"]
    },
    {
        path: 'users',
        component: _rolesettings_users_users_component__WEBPACK_IMPORTED_MODULE_27__["UsersComponent"]
    },
    {
        path: 'rolebyuser',
        component: _rolesettings_rolebyusers_rolebyusers_component__WEBPACK_IMPORTED_MODULE_28__["RolebyusersComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_29__["SignupComponent"]
    },
    {
        path: 'targetbybuilding',
        component: _target_setting_target_by_building_target_by_building_component__WEBPACK_IMPORTED_MODULE_30__["TargetByBuildingComponent"]
    },
    {
        path: 'targetbyflat',
        component: _target_setting_target_by_flat_target_by_flat_component__WEBPACK_IMPORTED_MODULE_31__["TargetByFlatComponent"]
    }
];


/***/ }),

/***/ "./src/app/authorizepageaccess.service.ts":
/*!************************************************!*\
  !*** ./src/app/authorizepageaccess.service.ts ***!
  \************************************************/
/*! exports provided: AuthorizepageaccessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizepageaccessService", function() { return AuthorizepageaccessService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizepageaccessService = /** @class */ (function () {
    function AuthorizepageaccessService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpoptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    AuthorizepageaccessService.prototype.getAuthrizationListForpageLock = function () {
        return this.http.get(this.urls.urlLink + '/get_authorized_page_by_user', this.httpoptions);
    };
    AuthorizepageaccessService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthorizepageaccessService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthorizepageaccessService);
    return AuthorizepageaccessService;
}());



/***/ }),

/***/ "./src/app/charts/chart/chart.component.css":
/*!**************************************************!*\
  !*** ./src/app/charts/chart/chart.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jaGFydC9jaGFydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/charts/chart/chart.component.ts":
/*!*************************************************!*\
  !*** ./src/app/charts/chart/chart.component.ts ***!
  \*************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/charts/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/charts/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/consumption-result/consumption-result.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/consumption-result/consumption-result.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bXB0aW9uLXJlc3VsdC9jb25zdW1wdGlvbi1yZXN1bHQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/consumption-result/consumption-result.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/consumption-result/consumption-result.component.ts ***!
  \********************************************************************/
/*! exports provided: ConsumptionResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumptionResultComponent", function() { return ConsumptionResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata/building/building.service */ "./src/app/metadata/building/building.service.ts");
/* harmony import */ var _consumption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consumption.service */ "./src/app/consumption-result/consumption.service.ts");
/* harmony import */ var _reports_buildingreport_building_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reports/buildingreport/building-report.service */ "./src/app/reports/buildingreport/building-report.service.ts");
/* harmony import */ var highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js");
/* harmony import */ var highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






highcharts_modules_drilldown__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var ConsumptionResultComponent = /** @class */ (function () {
    function ConsumptionResultComponent(buildingService, consumptionService, buildingReportService) {
        this.buildingService = buildingService;
        this.consumptionService = consumptionService;
        this.buildingReportService = buildingReportService;
        this.selectedYear = '2020';
        this.selectedMonth = '';
        this.data_list = [];
        this.drilldownDatasets = [];
    }
    ConsumptionResultComponent.prototype.getBuildingLIst = function () {
        var _this = this;
        this.buildingService.getBuildingDetails().subscribe(function (res) {
            _this.get_building_list = res.building_details;
            _this.selectedOption = _this.get_building_list[0]._id;
            _this.get_block_building_report(_this.selectedOption, _this.selectedYear, _this.selectedMonth);
        });
    };
    ;
    ConsumptionResultComponent.prototype.get_block_building_report = function (selectedOption, selectedYear, selectedMonth) {
        var _this = this;
        this.loader1 = true;
        var json_obj = {
            'building_id': selectedOption,
            'year': selectedYear,
            'month': selectedMonth
        };
        if (json_obj.month) {
            this.consumptionService.getBuildingconsumptionMonthlysDetails(json_obj).subscribe(function (res) {
                _this.block_flat_response = res.response;
                // if(block_flat_response.response.length !=0){
                _this.chart_render_function();
                // }
            });
            this.getBuildingConsumptionTable(json_obj);
        }
        else {
            this.consumptionService.getBuildingconsumptionYearlysDetails(json_obj).subscribe(function (res) {
                _this.block_flat_response = res.response;
                // if(block_flat_response.response.length !=0){
                _this.chart_render_function();
            });
            this.getBuildingConsumptionTable(json_obj);
        }
    };
    ;
    ConsumptionResultComponent.prototype.getBuildingConsumptionTable = function (json_obj) {
        var _this = this;
        this.buildingReportService.getBuildingReportForCurrentMonth(json_obj).subscribe(function (res) {
            _this.block_flat_response_for_table = res.response;
            _this.loader1 = false;
        });
    };
    ConsumptionResultComponent.prototype.chart_render_function = function () {
        var _this = this;
        this.data_list = [];
        var block_flat_response = this.block_flat_response;
        this.block_flat_response.forEach(function (value) {
            var data_iterate = {
                'name': value.block,
                'y': value.value,
            };
            _this.data_list.push(data_iterate);
        });
        if (this.data_list.length != 0) {
            this.drilldownbar();
        }
    };
    ConsumptionResultComponent.prototype.get_drilldown_flat = function (options) {
        var _this = this;
        var drilldownData = options;
        this.drilldownDatasets = [];
        this.block_flat_response.forEach(function (value) {
            if (drilldownData.name == value.block) {
                var forTableJson = {
                    'building_id': _this.selectedOption,
                    'block_id': value.block_id,
                    'year': _this.selectedYear,
                    'month': _this.selectedMonth
                };
                _this.getBuildingConsumptionTable(forTableJson);
                value.drilldown.forEach(function (val1) {
                    var series_json = {
                        'name': val1.flat,
                        'y': val1.value
                    };
                    _this.drilldownDatasets.push(series_json);
                });
            }
        });
        if (this.drilldownDatasets.length != 0) {
            this.data_list = [];
            this.data_list = this.drilldownDatasets;
            this.drilldownbar();
        }
    };
    ConsumptionResultComponent.prototype.getBlockId = function (building_details) {
        var _this = this;
        var json_obj = {
            'block_id': building_details,
            'year': this.selectedYear,
            'month': this.selectedMonth
        };
        this.buildingReportService.getBuildingReportForSearchDate(json_obj).subscribe(function (res) {
            _this.block_flat_response_for_table = res.response;
            _this.loader1 = false;
        });
    };
    ConsumptionResultComponent.prototype.back_to_block = function () {
        this.chart_render_function();
        var forTableJson = {
            'building_id': this.selectedOption,
            'year': this.selectedYear,
            'month': this.selectedMonth
        };
        this.getBuildingConsumptionTable(forTableJson);
    };
    ConsumptionResultComponent.prototype.drilldownbar = function () {
        var _this = this;
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total Consumption'
            },
            subtitle: {
                text: 'Cosumption Per Block Detail Report'
            },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            colors: ['#074e6f', '#017AEB', '#3DC4EB', '#51EBC8', '#43EB9F', '#EBB854', '#EBD454'],
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total Consumption by each Block'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}'
                    },
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function (e) {
                                _this.get_drilldown_flat(e.point.options);
                            }
                        }
                    }
                },
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
            series: [
                {
                    name: "Block Details",
                    colorByPoint: true,
                    data: this.data_list
                }
            ],
        };
    };
    ConsumptionResultComponent.prototype.ngOnInit = function () {
        this.getBuildingLIst();
    };
    ConsumptionResultComponent.ctorParameters = function () { return [
        { type: _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"] },
        { type: _consumption_service__WEBPACK_IMPORTED_MODULE_3__["ConsumptionService"] },
        { type: _reports_buildingreport_building_report_service__WEBPACK_IMPORTED_MODULE_4__["BuildingReportService"] }
    ]; };
    ConsumptionResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumption-result',
            template: __webpack_require__(/*! raw-loader!./consumption-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/consumption-result/consumption-result.component.html"),
            styles: [__webpack_require__(/*! ./consumption-result.component.css */ "./src/app/consumption-result/consumption-result.component.css")]
        }),
        __metadata("design:paramtypes", [_metadata_building_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"], _consumption_service__WEBPACK_IMPORTED_MODULE_3__["ConsumptionService"], _reports_buildingreport_building_report_service__WEBPACK_IMPORTED_MODULE_4__["BuildingReportService"]])
    ], ConsumptionResultComponent);
    return ConsumptionResultComponent;
}());



/***/ }),

/***/ "./src/app/consumption-result/consumption.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/consumption-result/consumption.service.ts ***!
  \***********************************************************/
/*! exports provided: ConsumptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumptionService", function() { return ConsumptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsumptionService = /** @class */ (function () {
    function ConsumptionService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    ConsumptionService.prototype.getBuildingconsumptionMonthlysDetails = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/get_block_flat_details_by_month', sendSelectedParam, this.httpOptions);
        // year  rtu_id
    };
    ConsumptionService.prototype.getBuildingconsumptionYearlysDetails = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/get_block_flat_details_by_year', sendSelectedParam, this.httpOptions);
        // rtu_id
    };
    ConsumptionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConsumptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsumptionService);
    return ConsumptionService;
}());

// for association
// get_block_flat_details_by_month


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/globaltoken.ts":
/*!********************************!*\
  !*** ./src/app/globaltoken.ts ***!
  \********************************/
/*! exports provided: globalToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalToken", function() { return globalToken; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var globalToken = /** @class */ (function () {
    function globalToken() {
        this.globalUrl = {
            'token': localStorage.getItem('dynamicToken'),
            //  'urlLink':'https://9057007c.ngrok.io'
            'urlLink': 'http://122.166.156.230:30002'
        };
    }
    globalToken.prototype.getGlobalTokenFunction = function (token) {
        var tokens = token;
        localStorage.setItem('dynamicToken', tokens);
    };
    ;
    globalToken = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], globalToken);
    return globalToken;
}());

// "Token 02c959071122421d5e0b085f03f33982fc727e04"


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n    background-color: #ffffff;\n    box-shadow: 1px 1px 4px 1px #c7c7c7;\n    padding: 4px 44px 3px 44px;\n}\n\n.menu-toggle {\n    font-size: 23px;\n    cursor: pointer;\n    color: #424242;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IDFweCAjYzdjN2M3O1xuICAgIHBhZGRpbmc6IDRweCA0NHB4IDNweCA0NHB4O1xufVxuXG4ubWVudS10b2dnbGUge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM0MjQyNDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
    };
    HeaderComponent.prototype.signOut = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home-service.service.ts":
/*!**********************************************!*\
  !*** ./src/app/home/home-service.service.ts ***!
  \**********************************************/
/*! exports provided: HomeServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeServiceService", function() { return HomeServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeServiceService = /** @class */ (function () {
    function HomeServiceService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    HomeServiceService.prototype.getBuildingconsumptionDayDetails = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/GetBuildingAverageConsumptionByDay', sendSelectedParam, this.httpOptions);
        // year  rtu_id
    };
    HomeServiceService.prototype.getBuildingconsumptionMonthlyDetails = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/GetBuildingAverageConsumptionByMonth', sendSelectedParam, this.httpOptions);
        // year month  rtu_id
    };
    HomeServiceService.prototype.getBuildingconsumptionYearlyDetails = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/GetBuildingAverageConsumptionByYear', sendSelectedParam, this.httpOptions);
        // rtu_id
    };
    HomeServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    HomeServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeServiceService);
    return HomeServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple_report {\n    height: 100px;\n    width: 46%;\n    float: left;\n    margin-left: 10px;\n    margin-top: 12px;\n    border: 1px solid #03A9F4;\n    box-shadow: 3px 5px 2px -1px #b7b7b7;\n    background-color: #03A9F4;\n    padding: 25px 6px;\n}\n\n.multiple_report .fa {\n    font-size: 18px;\n    color: white;\n    background-color: #FF9800;\n    border-radius: 50%;\n    padding: 15px 14px;\n}\n\n.report_title {\n    color: white;\n}\n\n.sub_title {\n    font-size: 12px;\n    color: #1b1b1b;\n}\n\n.box-body h6 {\n    margin-top: 25px;\n    margin-left: 13px;\n}\n\n/* bullet chart */\n\n#container1 {\n    height: 115px;\n}\n\n.hc-cat-title {\n    font-size: 13px;\n    font-weight: bold;\n}\n\n.highcharts-figure,\n.highcharts-data-table table {\n    min-width: 320px;\n    max-width: 800px;\n    margin: 1em auto;\n}\n\n.highcharts-data-table table {\n    font-family: Verdana, sans-serif;\n    border-collapse: collapse;\n    border: 1px solid #EBEBEB;\n    margin: 10px auto;\n    text-align: center;\n    width: 100%;\n    max-width: 500px;\n}\n\n.highcharts-data-table caption {\n    padding: 1em 0;\n    font-size: 1.2em;\n    color: #555;\n}\n\n.highcharts-data-table th {\n    font-weight: 600;\n    padding: 0.5em;\n}\n\n.highcharts-data-table td,\n.highcharts-data-table th,\n.highcharts-data-table caption {\n    padding: 0.5em;\n}\n\n.highcharts-data-table thead tr,\n.highcharts-data-table tr:nth-child(even) {\n    background: #f8f8f8;\n}\n\n.highcharts-data-table tr:hover {\n    background: #f1f7ff;\n}\n\n.gadget_box {\n    padding: 28px 6px 28px 3px;\n}\n\n.right_38 {\n    right: 38px;\n}\n\n@media screen and (max-width:720px) {\n    .color_level_bullet {\n        position: relative;\n    }\n}\n\n/* bullet chart */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUdBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7OztJQUdJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFHQSxpQkFBaUIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXBsZV9yZXBvcnQge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDQ2JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwM0E5RjQ7XG4gICAgYm94LXNoYWRvdzogM3B4IDVweCAycHggLTFweCAjYjdiN2I3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7XG4gICAgcGFkZGluZzogMjVweCA2cHg7XG59XG5cbi5tdWx0aXBsZV9yZXBvcnQgLmZhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjk4MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDE1cHggMTRweDtcbn1cblxuLnJlcG9ydF90aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3ViX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMxYjFiMWI7XG59XG5cbi5ib3gtYm9keSBoNiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuXG4vKiBidWxsZXQgY2hhcnQgKi9cblxuI2NvbnRhaW5lcjEge1xuICAgIGhlaWdodDogMTE1cHg7XG59XG5cbi5oYy1jYXQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhpZ2hjaGFydHMtZmlndXJlLFxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0YWJsZSB7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG59XG5cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0VCRUJFQjtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSBjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxZW0gMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGNvbG9yOiAjNTU1O1xufVxuXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRoIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRkLFxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0aCxcbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgY2FwdGlvbiB7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbi5oaWdoY2hhcnRzLWRhdGEtdGFibGUgdGhlYWQgdHIsXG4uaGlnaGNoYXJ0cy1kYXRhLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cblxuLmhpZ2hjaGFydHMtZGF0YS10YWJsZSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YxZjdmZjtcbn1cblxuLmdhZGdldF9ib3gge1xuICAgIHBhZGRpbmc6IDI4cHggNnB4IDI4cHggM3B4O1xufVxuXG4ucmlnaHRfMzgge1xuICAgIHJpZ2h0OiAzOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcyMHB4KSB7XG4gICAgLmNvbG9yX2xldmVsX2J1bGxldCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG5cblxuLyogYnVsbGV0IGNoYXJ0ICovIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-service.service */ "./src/app/home/home-service.service.ts");
/* harmony import */ var _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata/building/building.service */ "./src/app/metadata/building/building.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/bullet */ "./node_modules/highcharts/modules/bullet.js");
/* harmony import */ var highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_1__);
var HomeComponent = /** @class */ (function () {
    function HomeComponent(homeserviceService, buildingservice, fb) {
        this.homeserviceService = homeserviceService;
        this.buildingservice = buildingservice;
        this.fb = fb;
        this.selectedView = 'month';
        this.years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
        this.selectedYear = "2020";
        this.monthList = [
            { 'monthname': 'Jan', 'monthnumber': 1 },
            { 'monthname': 'Feb', 'monthnumber': 2 },
            { 'monthname': 'Mar', 'monthnumber': 3 },
            { 'monthname': 'Apr', 'monthnumber': 4 },
            { 'monthname': 'May', 'monthnumber': 5 },
            { 'monthname': 'Jun', 'monthnumber': 6 },
            { 'monthname': 'Jul', 'monthnumber': 7 },
            { 'monthname': 'Aug', 'monthnumber': 8 },
            { 'monthname': 'Sep', 'monthnumber': 9 },
            { 'monthname': 'Oct', 'monthnumber': 11 },
            { 'monthname': 'Nov', 'monthnumber': 12 },
        ];
        this.selectedMonth = 1;
        this.selected_month = 1;
    }
    HomeComponent.prototype.getBuildingdata = function () {
        var _this = this;
        this.buildingservice.getBuildingDetails().subscribe(function (response) {
            _this.getBuildingList = response.building_details;
            _this.selectedOption = response.building_details[0]._id;
            setTimeout(function () {
                _this.get_block_building_report();
            }, 400);
        });
    };
    HomeComponent.prototype.get_rtu_id = function (selectedOption) {
        this.building_id = selectedOption;
    };
    ;
    HomeComponent.prototype.get_year = function (selectedYear) {
        this.selected_year = selectedYear;
    };
    ;
    HomeComponent.prototype.get_Month = function (selectedM) {
        this.selected_month = Number(selectedM);
    };
    HomeComponent.prototype.get_building_report_day = function () {
        var _this = this;
        this.loader1 = true;
        var json_obj = {
            'building_id': (!this.building_id ? this.selectedOption : this.building_id),
            'year': (!this.selected_year ? this.selectedYear : this.selected_year),
            'month': this.selected_month
        };
        this.homeserviceService.getBuildingconsumptionDayDetails(json_obj).subscribe(function (res) {
            _this.RTUreportResponse = res.response;
            _this.bulletChart(_this.RTUreportResponse);
        });
    };
    HomeComponent.prototype.get_building_report_monthly = function () {
        var _this = this;
        this.loader1 = true;
        var json_obj = {
            'building_id': (!this.building_id ? this.selectedOption : this.building_id),
            'year': Number(!this.selected_year ? this.selectedYear : this.selected_year),
            'month': this.selected_month
        };
        this.homeserviceService.getBuildingconsumptionMonthlyDetails(json_obj).subscribe(function (res) {
            _this.RTUreportResponse = res.response;
            _this.bulletChart(_this.RTUreportResponse);
        });
    };
    HomeComponent.prototype.get_building_report_year = function () {
        var _this = this;
        this.loader1 = true;
        var json_obj = {
            'building_id': (!this.building_id ? this.selectedOption : this.building_id)
        };
        this.homeserviceService.getBuildingconsumptionYearlyDetails(json_obj).subscribe(function (res) {
            _this.RTUreportResponse = res.response;
            _this.bulletChart(_this.RTUreportResponse);
        });
    };
    // call all month year and day api based on function
    HomeComponent.prototype.get_block_building_report = function () {
        if (this.selectedView == 'year') {
            this.get_building_report_monthly();
        }
        else if (this.selectedView == 'month') {
            this.get_building_report_monthly();
        }
        else if (this.selectedView == 'day') {
            this.get_building_report_monthly();
        }
    };
    ;
    HomeComponent.prototype.bulletChart = function (bulletData) {
        this.loader1 = false;
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                marginTop: 40,
                inverted: true,
                marginLeft: 60,
                type: 'bullet'
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'Current Consumption ' + (!this.selected_year ? '' : this.selected_year)
            },
            xAxis: {
                categories: ['Usage']
            },
            exporting: {
                enabled: false
            },
            yAxis: {
                gridLineWidth: 0,
                plotBands: [{
                        from: 0,
                        to: (!bulletData ? 30000 : (bulletData.target == 0) ? 30000 : (bulletData.target + 80000)),
                        color: '#91ddff'
                    }],
                title: null
            },
            plotOptions: {
                series: {
                    pointPadding: 0.25,
                    borderWidth: 0,
                    color: (!bulletData ? '#8BC34A' : (bulletData.percentage == 0) ? '#8BC34A' : (bulletData.percentage < 70) ? '#8BC34A' : ((bulletData.percentage > 70) && (bulletData.percentage < 90)) ? '#FF2AA0' : '#FF2A1F'),
                    targetOptions: {
                        width: '200%'
                    }
                }
            },
            series: [{
                    data: [{
                            y: (!bulletData ? 0 : (bulletData.value == 0) ? 100 : (bulletData.value)),
                            target: (!bulletData ? 25000 : (bulletData.target == 0) ? 25000 : bulletData.target)
                        }]
                }],
            tooltip: {
                pointFormat: '<b>{point.y}</b> (with target at {point.target})'
            }
        };
    };
    HomeComponent.prototype.ngOnInit = function () {
        //  this.getRTUConsumptionMonthly();
        this.getBuildingdata();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"] },
        { type: _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_home_service_service__WEBPACK_IMPORTED_MODULE_2__["HomeServiceService"], _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/left-sidebar/left-sidebar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/left-sidebar/left-sidebar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n    height: 100%;\n    width: 0;\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    background-color: #fff;\n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 10em;\n    box-shadow: -2px 6px 5px 1px grey;\n}\n\n.sidenav a {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 17px;\n    color: #005880;\n    display: block;\n    transition: 0.3s;\n}\n\n.sidenav a:hover {\n    color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n@media screen and (max-height: 450px) {\n    .sidenav {\n        padding-top: 15px;\n    }\n    .sidenav a {\n        font-size: 18px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixlQUFlO0lBQ2YsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGVmdC1zaWRlYmFyL2xlZnQtc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHBhZGRpbmctdG9wOiAxMGVtO1xuICAgIGJveC1zaGFkb3c6IC0ycHggNnB4IDVweCAxcHggZ3JleTtcbn1cblxuLnNpZGVuYXYgYSB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiAjMDA1ODgwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZjFmMWYxO1xufVxuXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuc2lkZW5hdiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/left-sidebar/left-sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/left-sidebar/left-sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: LeftSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSidebarComponent", function() { return LeftSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authorizepageaccess_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorizepageaccess.service */ "./src/app/authorizepageaccess.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftSidebarComponent = /** @class */ (function () {
    function LeftSidebarComponent(authAccessScreen) {
        this.authAccessScreen = authAccessScreen;
    }
    LeftSidebarComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    };
    LeftSidebarComponent.prototype.authAccessScreenLockFunction = function () {
        var _this = this;
        this.authAccessScreen.getAuthrizationListForpageLock().subscribe(function (res) {
            _this.accessPageList = res;
        });
    };
    LeftSidebarComponent.prototype.ngOnInit = function () {
        this.authAccessScreenLockFunction();
    };
    LeftSidebarComponent.ctorParameters = function () { return [
        { type: _authorizepageaccess_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizepageaccessService"] }
    ]; };
    LeftSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-sidebar',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./left-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/left-sidebar/left-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./left-sidebar.component.css */ "./src/app/left-sidebar/left-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_authorizepageaccess_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizepageaccessService"]])
    ], LeftSidebarComponent);
    return LeftSidebarComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_head {\n    text-align: center;\n    font-weight: 100;\n    font-size: 30px;\n    color: #7b7b7b;\n    text-transform: lowercase;\n}\n\ninput {\n    outline: none;\n    border: none;\n}\n\n.login-box h3 {\n    text-align: center;\n    font-weight: 900;\n    font-size: 34px;\n    color: #3bc2ff;\n}\n\ninput:focus {\n    border-color: transparent !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n    color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n    color: transparent;\n}\n\ninput:focus::-moz-placeholder {\n    color: transparent;\n}\n\ninput:focus:-ms-input-placeholder {\n    color: transparent;\n}\n\ninput::-webkit-input-placeholder {\n    color: #adadad;\n}\n\ninput:-moz-placeholder {\n    color: #adadad;\n}\n\ninput::-moz-placeholder {\n    color: #adadad;\n}\n\ninput:-ms-input-placeholder {\n    color: #adadad;\n}\n\ntextarea::-webkit-input-placeholder {\n    color: #adadad;\n}\n\ntextarea:-moz-placeholder {\n    color: #adadad;\n}\n\ntextarea::-moz-placeholder {\n    color: #adadad;\n}\n\n/*---------------------------------------------*/\n\nbutton {\n    outline: none !important;\n    border: none;\n    background: transparent;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\niframe {\n    border: none !important;\n}\n\n.container-login100 {\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    background: #ffffff;\n}\n\n.wrap-login100 {\n    background: #fff;\n    border-radius: 10px;\n    overflow: hidden;\n    padding: 23px 4px 19px 4px;\n}\n\n/*------------------------------------------------------------------\n[ Form ]*/\n\n.login100-form {\n    width: 100%;\n}\n\n.login100-form-title i {\n    font-size: 60px;\n}\n\n/*------------------------------------------------------------------\n[ Input ]*/\n\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    margin-bottom: 15px;\n    border: 1px solid #e2e8f0;\n    border-radius: 7px;\n}\n\n.input100 {\n    font-family: Poppins-Regular;\n    font-size: 15px;\n    color: #555555;\n    line-height: 1.2;\n    display: block;\n    width: 100%;\n    height: 45px;\n    background: transparent;\n    padding: 0 5px;\n}\n\n/*---------------------------------------------*/\n\n/*//////////////////////////////////////////////////////////////////\n[ RESTYLE TAG ]*/\n\n/*---------------------------------------------*/\n\n.focus-input100 {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n}\n\n.focus-input100::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: -2px;\n    left: 0;\n    width: 0;\n    height: 2px;\n    transition: all 0.4s;\n    background: #16b6ff;\n}\n\n.focus-input100::after {\n    font-family: Poppins-Regular;\n    font-size: 15px;\n    color: #999999;\n    line-height: 1.2;\n    content: attr(data-placeholder);\n    display: block;\n    width: 100%;\n    position: absolute;\n    top: 16px;\n    left: 0px;\n    padding-left: 5px;\n    transition: all 0.4s;\n}\n\n.input100:focus+.focus-input100::after {\n    top: -15px;\n}\n\n.input100:focus+.focus-input100::before {\n    width: 100%;\n}\n\n.has-val.input100+.focus-input100::after {\n    top: -15px;\n}\n\n.has-val.input100+.focus-input100::before {\n    width: 100%;\n}\n\n/* .login-box {\n    margin-top: 3em;\n    border: 1px solid #e2e2e2;\n    padding: 19px 14px 27px 14px;\n    background-color: white;\n} */\n\n.login_section {\n    padding: 0;\n}\n\n.login_section .btn {\n    background-color: #16b6ff;\n    color: white;\n    width: 100%;\n}\n\n.p-t-115 {\n    margin-top: 19px;\n    font-size: 14px;\n}\n\n.login_signup_form {\n    margin-top: 7em;\n    position: absolute;\n    right: 62px;\n}\n\n.login_btn_style {\n    line-height: 1.9;\n}\n\n.label_sign {\n    font-size: 13.6px;\n    font-weight: 600;\n    color: #616161;\n}\n\n.sign_in_up {\n    margin: 64px 0 0;\n    font-size: 30px;\n    font-weight: 900;\n    letter-spacing: -.022em;\n    line-height: 1.25;\n}\n\n.content-container {\n    background: #16b6ff;\n    color: #fff;\n    position: relative;\n    padding: 12px 164px 700px 128px;\n}\n\n.content-container .background path {\n    fill: #e5edff;\n}\n\n.content-container .background path {\n    opacity: .1;\n}\n\n.content-container .content {\n    margin-top: -7em;\n}\n\n.content-container .content .title {\n    font-size: 38px;\n    line-height: 54px;\n    font-weight: 900;\n}\n\n.content-container .content .description {\n    margin-top: 14px;\n}\n\n.learn-more-button {\n    margin-top: 61px;\n    color: white;\n    border: 1px solid white;\n    padding: 10px 23px 10px 23px;\n    border-radius: 6px;\n}\n\n@media screen and (max-width:720px) {\n    .right_login_section {\n        display: none;\n    }\n    .login_signup_form {\n        right: 1px;\n        margin-top: 5em;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLGdEQUFnRDs7QUFFaEQ7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBS2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUdBO1NBQ1M7O0FBRVQ7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO1VBQ1U7O0FBRVY7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixjQUFjO0FBQ2xCOztBQUdBLGdEQUFnRDs7QUFHaEQ7Z0JBQ2dCOztBQUdoQixnREFBZ0Q7O0FBRWhEO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1Asb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUlYLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0lBSWpCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9oZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICM3YjdiN2I7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuaW5wdXQge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubG9naW4tYm94IGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgY29sb3I6ICMzYmMyZmY7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0OmZvY3VzOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhZGFkYWQ7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cblxuaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuXG50ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cblxudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lci1sb2dpbjEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ud3JhcC1sb2dpbjEwMCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMjNweCA0cHggMTlweCA0cHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgRm9ybSBdKi9cblxuLmxvZ2luMTAwLWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4xMDAtZm9ybS10aXRsZSBpIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblsgSW5wdXQgXSovXG5cbi53cmFwLWlucHV0MTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmlucHV0MTAwIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzU1NTU1NTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwIDVweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblsgUkVTVFlMRSBUQUcgXSovXG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uZm9jdXMtaW5wdXQxMDAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0ycHg7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgYmFja2dyb3VuZDogIzE2YjZmZjtcbn1cblxuLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMtUmVndWxhcjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmlucHV0MTAwOmZvY3VzKy5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xuICAgIHRvcDogLTE1cHg7XG59XG5cbi5pbnB1dDEwMDpmb2N1cysuZm9jdXMtaW5wdXQxMDA6OmJlZm9yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYXMtdmFsLmlucHV0MTAwKy5mb2N1cy1pbnB1dDEwMDo6YWZ0ZXIge1xuICAgIHRvcDogLTE1cHg7XG59XG5cbi5oYXMtdmFsLmlucHV0MTAwKy5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4vKiAubG9naW4tYm94IHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBwYWRkaW5nOiAxOXB4IDE0cHggMjdweCAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSAqL1xuXG4ubG9naW5fc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmxvZ2luX3NlY3Rpb24gLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YjZmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLXQtMTE1IHtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxvZ2luX3NpZ251cF9mb3JtIHtcbiAgICBtYXJnaW4tdG9wOiA3ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA2MnB4O1xufVxuXG4ubG9naW5fYnRuX3N0eWxlIHtcbiAgICBsaW5lLWhlaWdodDogMS45O1xufVxuXG4ubGFiZWxfc2lnbiB7XG4gICAgZm9udC1zaXplOiAxMy42cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzYxNjE2MTtcbn1cblxuLnNpZ25faW5fdXAge1xuICAgIG1hcmdpbjogNjRweCAwIDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDIyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogIzE2YjZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTJweCAxNjRweCA3MDBweCAxMjhweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIC5iYWNrZ3JvdW5kIHBhdGgge1xuICAgIGZpbGw6ICNlNWVkZmY7XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciAuYmFja2dyb3VuZCBwYXRoIHtcbiAgICBvcGFjaXR5OiAuMTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAtN2VtO1xufVxuXG4uY29udGVudC1jb250YWluZXIgLmNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDM4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmxlYXJuLW1vcmUtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA2MXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMTBweCAyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MjBweCkge1xuICAgIC5yaWdodF9sb2dpbl9zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmxvZ2luX3NpZ251cF9mb3JtIHtcbiAgICAgICAgcmlnaHQ6IDFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNWVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginServ, router, globalSev) {
        this.fb = fb;
        this.loginServ = loginServ;
        this.router = router;
        this.globalSev = globalSev;
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loader = true;
        this.loginServ.logintoserver(this.loginForm.value.email, this.loginForm.value.password).subscribe(function (response) {
            _this.login_token = response;
            _this.token_no = response.token;
            _this.loader = false;
            if (_this.login_token.token != 'Error Token') {
                if (_this.login_token.token != 'Incorrect Password') {
                    _this.getTokenFunction();
                    _this.router.navigate(['/home']);
                }
                else {
                    _this.wrong_password = true;
                    setTimeout(function () {
                        _this.wrong_password = false;
                    }, 3000);
                }
            }
            else {
                _this.wrong_password = true;
                setTimeout(function () {
                    _this.wrong_password = false;
                }, 3000);
            }
        });
    };
    ;
    LoginComponent.prototype.getTokenFunction = function () {
        this.globalSev.getGlobalTokenFunction('Token' + ' ' + this.token_no);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _globaltoken__WEBPACK_IMPORTED_MODULE_4__["globalToken"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _globaltoken__WEBPACK_IMPORTED_MODULE_4__["globalToken"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.model.ts":
/*!**************************************!*\
  !*** ./src/app/login/login.model.ts ***!
  \**************************************/
/*! exports provided: LoginModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModel", function() { return LoginModel; });
var LoginModel = /** @class */ (function () {
    function LoginModel(email, password) {
        this.email = email;
        this.password = password;
    }
    LoginModel.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return LoginModel;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.model */ "./src/app/login/login.model.ts");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { URL } from '../shared/sharedconstants';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_3__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    }
    LoginService.prototype.logintoserver = function (email, password) {
        var login_model = new _login_model__WEBPACK_IMPORTED_MODULE_2__["LoginModel"](email, password);
        return this.http.post(this.urls.urlLink + '/get_token_from_email_and_password', login_model);
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/metadata-tabs/metadata-tabs.component.css":
/*!***********************************************************!*\
  !*** ./src/app/metadata-tabs/metadata-tabs.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhLXRhYnMvbWV0YWRhdGEtdGFicy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/metadata-tabs/metadata-tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/metadata-tabs/metadata-tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: MetadataTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataTabsComponent", function() { return MetadataTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetadataTabsComponent = /** @class */ (function () {
    function MetadataTabsComponent() {
    }
    MetadataTabsComponent.prototype.ngOnInit = function () {
    };
    MetadataTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metadata-tabs',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./metadata-tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata-tabs/metadata-tabs.component.html"),
            styles: [__webpack_require__(/*! ./metadata-tabs.component.css */ "./src/app/metadata-tabs/metadata-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MetadataTabsComponent);
    return MetadataTabsComponent;
}());



/***/ }),

/***/ "./src/app/metadata/basestation/basestation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/metadata/basestation/basestation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2Jhc2VzdGF0aW9uL2Jhc2VzdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/basestation/basestation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/metadata/basestation/basestation.component.ts ***!
  \***************************************************************/
/*! exports provided: BasestationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasestationComponent", function() { return BasestationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _basestation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basestation.service */ "./src/app/metadata/basestation/basestation.service.ts");
/* harmony import */ var _block_block_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block/block.service */ "./src/app/metadata/block/block.service.ts");
/* harmony import */ var _basestationtype_basestationtype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basestationtype/basestationtype.service */ "./src/app/metadata/basestationtype/basestationtype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SweetAlertService } from 'angular-sweetalert-service';



var BasestationComponent = /** @class */ (function () {
    function BasestationComponent(fb, basestationservice, blockservice, basestationtypeservice) {
        this.fb = fb;
        this.basestationservice = basestationservice;
        this.blockservice = blockservice;
        this.basestationtypeservice = basestationtypeservice;
        this.createBasestationForm = this.fb.group({
            base_station_id: [''],
            block_id: [''],
            mac_id: [''],
            ip_address: [''],
            base_station_type: ['']
        });
    }
    BasestationComponent.prototype.getBaseStation = function () {
        var _this = this;
        this.basestationservice.getBaseStationDetails().subscribe(function (response) {
            _this.getBasestationList = response.base_station_list;
        });
    };
    BasestationComponent.prototype.getBaseStationType = function () {
        var _this = this;
        this.basestationtypeservice.getBaseStationTypeDetails().subscribe(function (response) {
            _this.getBasestationTypeList = response.base_station_types;
        });
    };
    BasestationComponent.prototype.getBlockServiceDetailss = function () {
        var _this = this;
        this.blockservice.getBlockServiceDetails().subscribe(function (response) {
            _this.getBlockServiceDet = response.block_details;
        });
    };
    BasestationComponent.prototype.createBasestation = function () {
        var _this = this;
        this.basestationservice.createBaseStation(this.createBasestationForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                _this.getBaseStation();
            }
        });
    };
    BasestationComponent.prototype.deleteBasestation = function (baseStationObj) {
        var _this = this;
        this.delete_json = {
            '_id': baseStationObj
        };
        this.basestationservice.deleteBaseStation(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getBaseStation();
            }
        });
    };
    BasestationComponent.prototype.editEachBaesstationFunction = function (baseStationObj) {
        var _this = this;
        var json_obj = {
            'base_station_id': baseStationObj.base_station_id,
            'block_id': baseStationObj.block._id,
            'mac_id': baseStationObj.mac_id,
            'ip_address': baseStationObj.ip_address,
            'base_station_type': baseStationObj.base_station_type,
            '_id': baseStationObj._id
        };
        this.basestationservice.editEachBasestation(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getBaseStation();
            }
        });
    };
    BasestationComponent.prototype.ngOnInit = function () {
        this.getBaseStation();
        this.getBlockServiceDetailss();
        this.getBaseStationType();
    };
    BasestationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _basestation_service__WEBPACK_IMPORTED_MODULE_2__["BasestationService"] },
        { type: _block_block_service__WEBPACK_IMPORTED_MODULE_3__["BlockService"] },
        { type: _basestationtype_basestationtype_service__WEBPACK_IMPORTED_MODULE_4__["BasestationtypeService"] }
    ]; };
    BasestationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basestation',
            template: __webpack_require__(/*! raw-loader!./basestation.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/basestation/basestation.component.html"),
            styles: [__webpack_require__(/*! ./basestation.component.css */ "./src/app/metadata/basestation/basestation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _basestation_service__WEBPACK_IMPORTED_MODULE_2__["BasestationService"], _block_block_service__WEBPACK_IMPORTED_MODULE_3__["BlockService"], _basestationtype_basestationtype_service__WEBPACK_IMPORTED_MODULE_4__["BasestationtypeService"]])
    ], BasestationComponent);
    return BasestationComponent;
}());



/***/ }),

/***/ "./src/app/metadata/basestation/basestation.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/metadata/basestation/basestation.service.ts ***!
  \*************************************************************/
/*! exports provided: BasestationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasestationService", function() { return BasestationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasestationService = /** @class */ (function () {
    function BasestationService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    BasestationService.prototype.getBaseStationDetails = function () {
        return this.http.get(this.urls.urlLink + '/basestation/get_all_base_station', this.httpOptions);
    };
    BasestationService.prototype.createBaseStation = function (createBasestationForm) {
        return this.http.post(this.urls.urlLink + '/basestation/create_base_station', createBasestationForm, this.httpOptions);
    };
    BasestationService.prototype.deleteBaseStation = function (deleteBasestationForm) {
        return this.http.post(this.urls.urlLink + '/basestation/delete_base_station', deleteBasestationForm, this.httpOptions);
    };
    BasestationService.prototype.editEachBasestation = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/basestation/edit_base_station', editedObj, this.httpOptions);
    };
    BasestationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BasestationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BasestationService);
    return BasestationService;
}());



/***/ }),

/***/ "./src/app/metadata/basestationchannel/basestationchannel.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/metadata/basestationchannel/basestationchannel.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2Jhc2VzdGF0aW9uY2hhbm5lbC9iYXNlc3RhdGlvbmNoYW5uZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/metadata/basestationchannel/basestationchannel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/metadata/basestationchannel/basestationchannel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BasestationchannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasestationchannelComponent", function() { return BasestationchannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _basestation_basestation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basestation/basestation.service */ "./src/app/metadata/basestation/basestation.service.ts");
/* harmony import */ var _basestationchannel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basestationchannel.service */ "./src/app/metadata/basestationchannel/basestationchannel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasestationchannelComponent = /** @class */ (function () {
    function BasestationchannelComponent(basestationchannel, fb, basestationService) {
        this.basestationchannel = basestationchannel;
        this.fb = fb;
        this.basestationService = basestationService;
        this.createBasestationChannelForm = this.fb.group({
            base_station_channel_id: [''],
            base_station_id: ['']
        });
    }
    BasestationchannelComponent.prototype.getBaseStation = function () {
        var _this = this;
        this.basestationService.getBaseStationDetails().subscribe(function (response) {
            _this.getBasestationList = response.base_station_list;
        });
    };
    BasestationchannelComponent.prototype.getBaseStationChannel = function () {
        var _this = this;
        this.basestationchannel.getBaseStationChannelDetails().subscribe(function (response) {
            _this.getBasestationChannelList = response.base_station_channel_list;
        });
    };
    BasestationchannelComponent.prototype.createBasestationChannels = function () {
        var _this = this;
        console.log(this.createBasestationChannelForm.value);
        this.basestationchannel.createBaseStationChannel(this.createBasestationChannelForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added');
                _this.getBaseStationChannel();
            }
        });
    };
    ;
    BasestationchannelComponent.prototype.deleteBasestationChannel = function (getBasestationChannelObj) {
        var _this = this;
        this.delete_json = {
            '_id': getBasestationChannelObj._id
        };
        this.basestationchannel.deleteBaseStationChannel(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getBaseStationChannel();
            }
        });
    };
    BasestationchannelComponent.prototype.editEachBaesstationChannelFunction = function (getBasestationChannelObj) {
        var _this = this;
        var json_obj = {
            'base_station_channel_id': getBasestationChannelObj.base_station_channel_id,
            'base_station_id': getBasestationChannelObj.base_station_id,
            '_id': getBasestationChannelObj._id
        };
        this.basestationchannel.editBasestationChannel(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getBaseStationChannel();
            }
        });
    };
    BasestationchannelComponent.prototype.ngOnInit = function () {
        this.getBaseStation();
        this.getBaseStationChannel();
    };
    BasestationchannelComponent.ctorParameters = function () { return [
        { type: _basestationchannel_service__WEBPACK_IMPORTED_MODULE_3__["BasestationchannelService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _basestation_basestation_service__WEBPACK_IMPORTED_MODULE_2__["BasestationService"] }
    ]; };
    BasestationchannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basestationchannel',
            template: __webpack_require__(/*! raw-loader!./basestationchannel.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/basestationchannel/basestationchannel.component.html"),
            styles: [__webpack_require__(/*! ./basestationchannel.component.css */ "./src/app/metadata/basestationchannel/basestationchannel.component.css")]
        }),
        __metadata("design:paramtypes", [_basestationchannel_service__WEBPACK_IMPORTED_MODULE_3__["BasestationchannelService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _basestation_basestation_service__WEBPACK_IMPORTED_MODULE_2__["BasestationService"]])
    ], BasestationchannelComponent);
    return BasestationchannelComponent;
}());



/***/ }),

/***/ "./src/app/metadata/basestationchannel/basestationchannel.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/metadata/basestationchannel/basestationchannel.service.ts ***!
  \***************************************************************************/
/*! exports provided: BasestationchannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasestationchannelService", function() { return BasestationchannelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasestationchannelService = /** @class */ (function () {
    function BasestationchannelService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    BasestationchannelService.prototype.getBaseStationChannelDetails = function () {
        return this.http.get(this.urls.urlLink + '/basestationchannel/get_all_base_station_channel', this.httpOptions);
    };
    BasestationchannelService.prototype.createBaseStationChannel = function (createBasestationChannelForm) {
        return this.http.post(this.urls.urlLink + '/basestationchannel/create_base_station_channel', createBasestationChannelForm, this.httpOptions);
    };
    BasestationchannelService.prototype.deleteBaseStationChannel = function (delete_json) {
        return this.http.post(this.urls.urlLink + '/basestationchannel/delete_base_station_channel', delete_json, this.httpOptions);
    };
    BasestationchannelService.prototype.editBasestationChannel = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/basestationchannel/edit_base_station_channel', editedObj, this.httpOptions);
    };
    BasestationchannelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BasestationchannelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BasestationchannelService);
    return BasestationchannelService;
}());



/***/ }),

/***/ "./src/app/metadata/basestationtype/basestationtype.component.css":
/*!************************************************************************!*\
  !*** ./src/app/metadata/basestationtype/basestationtype.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2Jhc2VzdGF0aW9udHlwZS9iYXNlc3RhdGlvbnR5cGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/metadata/basestationtype/basestationtype.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/metadata/basestationtype/basestationtype.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasestationtypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasestationtypeComponent", function() { return BasestationtypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _basestationtype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basestationtype.service */ "./src/app/metadata/basestationtype/basestationtype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasestationtypeComponent = /** @class */ (function () {
    function BasestationtypeComponent(basestationtypeservice, fb) {
        this.basestationtypeservice = basestationtypeservice;
        this.fb = fb;
        this.createBasestationTypeForm = this.fb.group({
            base_station_type: ['']
        });
    }
    BasestationtypeComponent.prototype.getBaseStationType = function () {
        var _this = this;
        this.basestationtypeservice.getBaseStationTypeDetails().subscribe(function (response) {
            _this.getBasestationTypeList = response.base_station_types;
        });
    };
    BasestationtypeComponent.prototype.createBasestationTypes = function () {
        var _this = this;
        console.log(this.createBasestationTypeForm.value);
        this.basestationtypeservice.createBaseStationTypeService(this.createBasestationTypeForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Base Station');
                _this.getBaseStationType();
            }
        });
    };
    ;
    BasestationtypeComponent.prototype.deleteBasestationType = function (basestationTypeObj) {
        var _this = this;
        this.delete_json = {
            'base_station_type': basestationTypeObj
        };
        this.basestationtypeservice.deleteBaseStationtype(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getBaseStationType();
            }
        });
    };
    ;
    BasestationtypeComponent.prototype.editBasestationtypeFunction = function (basestationTypeObj) {
        var _this = this;
        var json_obj = {
            'base_station_channel_id': basestationTypeObj.base_station_channel_id,
            'base_station_id': basestationTypeObj.base_station_id,
            '_id': basestationTypeObj._id
        };
        this.basestationtypeservice.editBasestationtype(json_obj).subscribe(function (res) {
            _this.editResponse = res.response;
        });
    };
    BasestationtypeComponent.prototype.ngOnInit = function () {
        this.getBaseStationType();
    };
    BasestationtypeComponent.ctorParameters = function () { return [
        { type: _basestationtype_service__WEBPACK_IMPORTED_MODULE_2__["BasestationtypeService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    BasestationtypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basestationtype',
            template: __webpack_require__(/*! raw-loader!./basestationtype.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/basestationtype/basestationtype.component.html"),
            styles: [__webpack_require__(/*! ./basestationtype.component.css */ "./src/app/metadata/basestationtype/basestationtype.component.css")]
        }),
        __metadata("design:paramtypes", [_basestationtype_service__WEBPACK_IMPORTED_MODULE_2__["BasestationtypeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], BasestationtypeComponent);
    return BasestationtypeComponent;
}());



/***/ }),

/***/ "./src/app/metadata/basestationtype/basestationtype.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/metadata/basestationtype/basestationtype.service.ts ***!
  \*********************************************************************/
/*! exports provided: BasestationtypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasestationtypeService", function() { return BasestationtypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasestationtypeService = /** @class */ (function () {
    function BasestationtypeService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    BasestationtypeService.prototype.getBaseStationTypeDetails = function () {
        return this.http.get(this.urls.urlLink + '/metadata/GetAllBaseStationTypes', this.httpOptions);
    };
    BasestationtypeService.prototype.createBaseStationTypeService = function (createBasestationTypeForm) {
        return this.http.post(this.urls.urlLink + '/metadata/CreateBaseStationType', createBasestationTypeForm, this.httpOptions);
    };
    BasestationtypeService.prototype.deleteBaseStationtype = function (delete_json) {
        return this.http.post(this.urls.urlLink + '/metadata/delete_base_station_type', delete_json, this.httpOptions);
    };
    BasestationtypeService.prototype.editBasestationtype = function (editObj) {
        return this.http.post(this.urls.urlLink + '/metadata/edit_base_station_type', editObj, this.httpOptions);
    };
    BasestationtypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BasestationtypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BasestationtypeService);
    return BasestationtypeService;
}());



/***/ }),

/***/ "./src/app/metadata/block/block.component.css":
/*!****************************************************!*\
  !*** ./src/app/metadata/block/block.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2Jsb2NrL2Jsb2NrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/block/block.component.ts":
/*!***************************************************!*\
  !*** ./src/app/metadata/block/block.component.ts ***!
  \***************************************************/
/*! exports provided: BlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.service */ "./src/app/metadata/block/block.service.ts");
/* harmony import */ var _building_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../building/building.service */ "./src/app/metadata/building/building.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlockComponent = /** @class */ (function () {
    function BlockComponent(blockservice, fb, buildingService) {
        this.blockservice = blockservice;
        this.fb = fb;
        this.buildingService = buildingService;
        this.createBlockForm = this.fb.group({
            block_id: [''],
            building_id: [''],
            block_name: [''],
            num_of_flats: [''],
        });
    }
    BlockComponent.prototype.getBlockServiceDetailss = function () {
        var _this = this;
        this.blockservice.getBlockServiceDetails().subscribe(function (response) {
            _this.getBlockServiceDet = response.block_details;
        });
    };
    BlockComponent.prototype.getBuildingDetailss = function () {
        var _this = this;
        this.buildingService.getBuildingDetails().subscribe(function (response) {
            _this.getBuildingDet = response.building_details;
        });
    };
    BlockComponent.prototype.createBlocks = function () {
        var _this = this;
        console.log(this.createBlockForm.value);
        this.blockservice.createBlockService(this.createBlockForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added');
                _this.getBlockServiceDetailss();
            }
        });
    };
    ;
    BlockComponent.prototype.deleteBlocks = function (getBlockdetailObj) {
        var _this = this;
        this.delete_json = {
            '_id': getBlockdetailObj._id
        };
        this.blockservice.deleteBlock(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response == 'success') {
                _this.getBlockServiceDetailss();
            }
        });
    };
    BlockComponent.prototype.editBlockFunction = function (getBlockdetailObj) {
        var _this = this;
        var json_obj = {
            'block_id': getBlockdetailObj.block_id,
            'building_id': getBlockdetailObj.building_id,
            'block_name': getBlockdetailObj.block_name,
            'num_of_flats': getBlockdetailObj.num_of_flats,
            '_id': getBlockdetailObj._id
        };
        this.blockservice.editBlock(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getBlockServiceDetailss();
            }
        });
    };
    BlockComponent.prototype.ngOnInit = function () {
        this.getBlockServiceDetailss();
        this.getBuildingDetailss();
    };
    BlockComponent.ctorParameters = function () { return [
        { type: _block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"] }
    ]; };
    BlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-block',
            template: __webpack_require__(/*! raw-loader!./block.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/block/block.component.html"),
            styles: [__webpack_require__(/*! ./block.component.css */ "./src/app/metadata/block/block.component.css")]
        }),
        __metadata("design:paramtypes", [_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"]])
    ], BlockComponent);
    return BlockComponent;
}());



/***/ }),

/***/ "./src/app/metadata/block/block.service.ts":
/*!*************************************************!*\
  !*** ./src/app/metadata/block/block.service.ts ***!
  \*************************************************/
/*! exports provided: BlockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockService", function() { return BlockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockService = /** @class */ (function () {
    function BlockService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    BlockService.prototype.getBlockServiceDetails = function () {
        return this.http.get(this.urls.urlLink + '/block/get_all_block_detail', this.httpOptions);
    };
    BlockService.prototype.createBlockService = function (createBasestationForm) {
        return this.http.post(this.urls.urlLink + '/block/create_block', createBasestationForm, this.httpOptions);
    };
    BlockService.prototype.deleteBlock = function (deleteBasestationForm) {
        return this.http.post(this.urls.urlLink + '/block/delete_block', deleteBasestationForm, this.httpOptions);
    };
    BlockService.prototype.editBlock = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/block/edit_block', editedObj, this.httpOptions);
    };
    BlockService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BlockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlockService);
    return BlockService;
}());



/***/ }),

/***/ "./src/app/metadata/building/building.component.css":
/*!**********************************************************!*\
  !*** ./src/app/metadata/building/building.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2J1aWxkaW5nL2J1aWxkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/building/building.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/metadata/building/building.component.ts ***!
  \*********************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building.service */ "./src/app/metadata/building/building.service.ts");
/* harmony import */ var _buildingtype_buildingtype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buildingtype/buildingtype.service */ "./src/app/metadata/buildingtype/buildingtype.service.ts");
/* harmony import */ var _pipetype_pipetype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipetype/pipetype.service */ "./src/app/metadata/pipetype/pipetype.service.ts");
/* harmony import */ var _city_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../city/city.service */ "./src/app/metadata/city/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(fb, buildingService, buildingtypeService, pipetypeservice, cityService) {
        this.fb = fb;
        this.buildingService = buildingService;
        this.buildingtypeService = buildingtypeService;
        this.pipetypeservice = pipetypeservice;
        this.cityService = cityService;
        this.createBuildingsForms = this.fb.group({
            building_id: [''],
            building_name: [''],
            building_type: [''],
            logo: [''],
            pipe_type: [''],
            pipe_size_horizontal: [''],
            pipe_size_vertical: [''],
            max_floors: [''],
            num_of_blocks: [''],
            no_of_OHT: [''],
            no_of_ducts: [''],
            ip_address: [''],
            service_provider: [''],
            no_of_bhk: [''],
            no_of_other_types: [''],
            muncipal_water: [''],
            no_of_bores: [''],
            no_of_sumps: [''],
            consumption_without_metering: [''],
            monthly_water_expense: [''],
            STP_reuse: [''],
            website: [''],
            city_id: [''],
            address: ['']
        });
    }
    BuildingComponent.prototype.getBuildingDetailss = function () {
        var _this = this;
        this.buildingService.getBuildingDetails().subscribe(function (response) {
            _this.getBuildingDet = response.building_details;
        });
    };
    BuildingComponent.prototype.getCityLists = function () {
        var _this = this;
        this.cityService.getCityDetails().subscribe(function (response) {
            _this.getCityDetailList = response.city_list;
        });
    };
    BuildingComponent.prototype.getPipeDetailsList = function () {
        var _this = this;
        this.pipetypeservice.getPipeDetailss().subscribe(function (response) {
            _this.getPipeData = response.pipe_type_list;
        });
    };
    BuildingComponent.prototype.getBuildingTypeDet = function () {
        var _this = this;
        this.buildingtypeService.getBuildingTypeDetails().subscribe(function (response) {
            _this.getBuildingTypeList = response.building_types;
        });
    };
    BuildingComponent.prototype.createBuildings = function () {
        var _this = this;
        console.log(this.createBuildingsForms.value);
        this.buildingService.createBuilding(this.createBuildingsForms.value).subscribe(function (response) {
            _this.get_create_status = response;
            if (response.status == 200) {
                alert('Sucessfully Added Base Station');
                _this.getBuildingDetailss();
            }
        });
    };
    BuildingComponent.prototype.deleteBuildings = function (baseBuildingObj) {
        var _this = this;
        this.delete_json = {
            '_id': baseBuildingObj._id
        };
        this.buildingService.deleteBuilding(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getBuildingDetailss();
            }
        });
    };
    BuildingComponent.prototype.editEachBuildingFunction = function (buildingdetailObj) {
        var _this = this;
        var json_obj = {
            'building_id': buildingdetailObj.building_id,
            'building_name': buildingdetailObj.building_name,
            'building_type': buildingdetailObj.building_type,
            'pipe_type': buildingdetailObj.pipe_type,
            'pipe_size_horizontal': buildingdetailObj.pipe_size_horizontal,
            'pipe_size_vertical': buildingdetailObj.pipe_size_vertical,
            'max_floors': buildingdetailObj.max_floors,
            'num_of_blocks': buildingdetailObj.num_of_blocks,
            'no_of_OHT': buildingdetailObj.no_of_OHT,
            'no_of_ducts': buildingdetailObj.no_of_ducts,
            'ip_address': buildingdetailObj.ip_address,
            'service_provider': buildingdetailObj.service_provider,
            'no_of_bhk': buildingdetailObj.no_of_bhk,
            'no_of_other_types': buildingdetailObj.no_of_other_types,
            'muncipal_water': buildingdetailObj.muncipal_water,
            'no_of_bores': buildingdetailObj.no_of_bores,
            'no_of_sumps': buildingdetailObj.no_of_sumps,
            'consumption_without_metering': buildingdetailObj.consumption_without_metering,
            'monthly_water_expense': buildingdetailObj.monthly_water_expense,
            'STP_reuse': buildingdetailObj.STP_reuse,
            'website': buildingdetailObj.website,
            'city_id': buildingdetailObj.city._id,
            'address': buildingdetailObj.address,
            'latitude': buildingdetailObj.latitude,
            'longitude': buildingdetailObj.longitude,
            '_id': buildingdetailObj._id
        };
        this.buildingService.editBuilding(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getBuildingDetailss();
            }
        });
    };
    BuildingComponent.prototype.ngOnInit = function () {
        this.getBuildingDetailss();
        this.getBuildingTypeDet();
        this.getPipeDetailsList();
        this.getCityLists();
    };
    BuildingComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"] },
        { type: _buildingtype_buildingtype_service__WEBPACK_IMPORTED_MODULE_3__["BuildingtypeService"] },
        { type: _pipetype_pipetype_service__WEBPACK_IMPORTED_MODULE_4__["PipetypeService"] },
        { type: _city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"] }
    ]; };
    BuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-building',
            template: __webpack_require__(/*! raw-loader!./building.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/building/building.component.html"),
            styles: [__webpack_require__(/*! ./building.component.css */ "./src/app/metadata/building/building.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"], _buildingtype_buildingtype_service__WEBPACK_IMPORTED_MODULE_3__["BuildingtypeService"], _pipetype_pipetype_service__WEBPACK_IMPORTED_MODULE_4__["PipetypeService"],
            _city_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/metadata/building/building.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/metadata/building/building.service.ts ***!
  \*******************************************************/
/*! exports provided: BuildingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingService", function() { return BuildingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingService = /** @class */ (function () {
    function BuildingService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    BuildingService.prototype.getBuildingDetails = function () {
        return this.http.get(this.urls.urlLink + '/building/get_all_building_details', this.httpOptions);
    };
    BuildingService.prototype.createBuilding = function (createBuildingsForms) {
        return this.http.post(this.urls.urlLink + '/building/create_building', createBuildingsForms, this.httpOptions);
    };
    BuildingService.prototype.deleteBuilding = function (deleteBuilingForm) {
        return this.http.post(this.urls.urlLink + '/building/delete_building', deleteBuilingForm, this.httpOptions);
    };
    BuildingService.prototype.editBuilding = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/building/edit_building', editedObj, this.httpOptions);
    };
    BuildingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BuildingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuildingService);
    return BuildingService;
}());



/***/ }),

/***/ "./src/app/metadata/buildingtype/buildingtype.component.css":
/*!******************************************************************!*\
  !*** ./src/app/metadata/buildingtype/buildingtype.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2J1aWxkaW5ndHlwZS9idWlsZGluZ3R5cGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/metadata/buildingtype/buildingtype.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/metadata/buildingtype/buildingtype.component.ts ***!
  \*****************************************************************/
/*! exports provided: BuildingtypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingtypeComponent", function() { return BuildingtypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _buildingtype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildingtype.service */ "./src/app/metadata/buildingtype/buildingtype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingtypeComponent = /** @class */ (function () {
    function BuildingtypeComponent(fb, buildingtypeService) {
        this.fb = fb;
        this.buildingtypeService = buildingtypeService;
        this.createBuildingTypeForm = this.fb.group({
            building_type: ['']
        });
    }
    BuildingtypeComponent.prototype.getBuildingTypeDet = function () {
        var _this = this;
        this.buildingtypeService.getBuildingTypeDetails().subscribe(function (response) {
            _this.getBuildingTypeList = response.building_types;
        });
    };
    BuildingtypeComponent.prototype.createBuildingTypes = function () {
        var _this = this;
        console.log(this.createBuildingTypeForm.value);
        this.buildingtypeService.createBuildingTypeList(this.createBuildingTypeForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Base Station');
                _this.getBuildingTypeDet();
            }
        });
    };
    ;
    BuildingtypeComponent.prototype.deleteBuildingType = function (buildingTypeObj) {
        var _this = this;
        this.delete_json = {
            'building_type': buildingTypeObj
        };
        this.buildingtypeService.buildingTypes(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getBuildingTypeDet();
            }
        });
    };
    BuildingtypeComponent.prototype.ngOnInit = function () {
        this.getBuildingTypeDet();
    };
    BuildingtypeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _buildingtype_service__WEBPACK_IMPORTED_MODULE_2__["BuildingtypeService"] }
    ]; };
    BuildingtypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buildingtype',
            template: __webpack_require__(/*! raw-loader!./buildingtype.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/buildingtype/buildingtype.component.html"),
            styles: [__webpack_require__(/*! ./buildingtype.component.css */ "./src/app/metadata/buildingtype/buildingtype.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _buildingtype_service__WEBPACK_IMPORTED_MODULE_2__["BuildingtypeService"]])
    ], BuildingtypeComponent);
    return BuildingtypeComponent;
}());



/***/ }),

/***/ "./src/app/metadata/buildingtype/buildingtype.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/metadata/buildingtype/buildingtype.service.ts ***!
  \***************************************************************/
/*! exports provided: BuildingtypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingtypeService", function() { return BuildingtypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingtypeService = /** @class */ (function () {
    function BuildingtypeService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    BuildingtypeService.prototype.getBuildingTypeDetails = function () {
        return this.http.get(this.urls.urlLink + '/metadata/GetAllBuildingTypes', this.httpOptions);
    };
    BuildingtypeService.prototype.createBuildingTypeList = function (createBuildingTypeForm) {
        return this.http.post(this.urls.urlLink + '/metadata/CreateBuildingType', createBuildingTypeForm, this.httpOptions);
    };
    BuildingtypeService.prototype.buildingTypes = function (deleteBuilingTypeForm) {
        return this.http.post(this.urls.urlLink + '/metadata/delete_building_type', deleteBuilingTypeForm, this.httpOptions);
    };
    BuildingtypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BuildingtypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuildingtypeService);
    return BuildingtypeService;
}());



/***/ }),

/***/ "./src/app/metadata/city/city.component.css":
/*!**************************************************!*\
  !*** ./src/app/metadata/city/city.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2NpdHkvY2l0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/metadata/city/city.component.ts":
/*!*************************************************!*\
  !*** ./src/app/metadata/city/city.component.ts ***!
  \*************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./city.service */ "./src/app/metadata/city/city.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityComponent = /** @class */ (function () {
    function CityComponent(fb, cityService) {
        this.fb = fb;
        this.cityService = cityService;
        this.createCityForms = this.fb.group({
            city_name: ['']
        });
    }
    CityComponent.prototype.getCityLists = function () {
        var _this = this;
        this.cityService.getCityDetails().subscribe(function (response) {
            _this.getCityDetailList = response.city_list;
        });
    };
    CityComponent.prototype.createCities = function () {
        var _this = this;
        console.log(this.createCityForms.value);
        this.cityService.createCitiess(this.createCityForms.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Base Station');
                _this.getCityLists();
            }
        });
    };
    ;
    CityComponent.prototype.deleteCities = function (cityObj) {
        var _this = this;
        this.delete_json = {
            '_id': cityObj._id
        };
        this.cityService.deleteCity(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getCityLists();
            }
        });
    };
    CityComponent.prototype.editCityFunction = function (cityObj) {
        var _this = this;
        var json_obj = {
            'city_name': cityObj.city_name,
            '_id': cityObj._id
        };
        this.cityService.editCity(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getCityLists();
            }
        });
    };
    CityComponent.prototype.ngOnInit = function () {
        this.getCityLists();
    };
    CityComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"] }
    ]; };
    CityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.css */ "./src/app/metadata/city/city.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/metadata/city/city.service.ts":
/*!***********************************************!*\
  !*** ./src/app/metadata/city/city.service.ts ***!
  \***********************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    CityService.prototype.getCityDetails = function () {
        return this.http.get(this.urls.urlLink + '/metadata/GetAllCity', this.httpOptions);
    };
    CityService.prototype.createCitiess = function (createCityForms) {
        return this.http.post(this.urls.urlLink + '/metadata/CreateCity', createCityForms, this.httpOptions);
    };
    CityService.prototype.deleteCity = function (deleteCityObj) {
        return this.http.post(this.urls.urlLink + '/metadata/delete_city', deleteCityObj, this.httpOptions);
    };
    CityService.prototype.editCity = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/metadata/EditCity', editedObj, this.httpOptions);
    };
    CityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "./src/app/metadata/consumer/consumer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/metadata/consumer/consumer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2NvbnN1bWVyL2NvbnN1bWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/consumer/consumer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/metadata/consumer/consumer.component.ts ***!
  \*********************************************************/
/*! exports provided: ConsumerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerComponent", function() { return ConsumerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consumer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumer.service */ "./src/app/metadata/consumer/consumer.service.ts");
/* harmony import */ var _flat_flat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flat/flat.service */ "./src/app/metadata/flat/flat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsumerComponent = /** @class */ (function () {
    function ConsumerComponent(fb, consumerservice, flatservice) {
        this.fb = fb;
        this.consumerservice = consumerservice;
        this.flatservice = flatservice;
        this.createConsumerForm = this.fb.group({
            consumer_id: [''],
            first_name: [''],
            last_name: [''],
            email_id: [''],
            phone: [''],
            mobile: [''],
            flat_id: [''],
        });
    }
    ConsumerComponent.prototype.getConsumerDetails = function () {
        var _this = this;
        this.consumerservice.getConsumerDetaliss().subscribe(function (response) {
            _this.getConsumerData = response.consumer_details;
        });
    };
    ConsumerComponent.prototype.getallFlatData = function () {
        var _this = this;
        this.flatservice.getallFlatDetailss().subscribe(function (response) {
            _this.getallFlatdetails = response.flat_details;
        });
    };
    ConsumerComponent.prototype.createConsumers = function (customerData) {
        var _this = this;
        // console.log(this.createConsumerForm.value)
        this.consumerservice.createConsumers(customerData).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added');
                _this.getConsumerDetails();
            }
        });
    };
    ;
    ConsumerComponent.prototype.deleteConsumer = function (deleteConsumerObj) {
        var _this = this;
        this.delete_json = {
            '_id': deleteConsumerObj._id
        };
        this.consumerservice.deleteconumerServices(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getConsumerDetails();
            }
        });
    };
    ConsumerComponent.prototype.editConsumerFunction = function (consumerObj) {
        var _this = this;
        var json_obj = {
            'consumer_id': consumerObj.consumer_id,
            'first_name': consumerObj.first_name,
            'last_name': consumerObj.last_name,
            'email_id': consumerObj.email_id,
            'phone': consumerObj.phone,
            'mobile': consumerObj.mobile,
            'flat_id': consumerObj.flat_id,
            '_id': consumerObj._id
        };
        this.consumerservice.editConsumer(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getConsumerDetails();
            }
        });
    };
    ConsumerComponent.prototype.ngOnInit = function () {
        this.getConsumerDetails();
        this.getallFlatData();
    };
    ConsumerComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _consumer_service__WEBPACK_IMPORTED_MODULE_2__["ConsumerService"] },
        { type: _flat_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"] }
    ]; };
    ConsumerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumer',
            template: __webpack_require__(/*! raw-loader!./consumer.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/consumer/consumer.component.html"),
            styles: [__webpack_require__(/*! ./consumer.component.css */ "./src/app/metadata/consumer/consumer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _consumer_service__WEBPACK_IMPORTED_MODULE_2__["ConsumerService"], _flat_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"]])
    ], ConsumerComponent);
    return ConsumerComponent;
}());



/***/ }),

/***/ "./src/app/metadata/consumer/consumer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/metadata/consumer/consumer.service.ts ***!
  \*******************************************************/
/*! exports provided: ConsumerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerService", function() { return ConsumerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsumerService = /** @class */ (function () {
    function ConsumerService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    ConsumerService.prototype.getConsumerDetaliss = function () {
        return this.http.get(this.urls.urlLink + '/consumer/GetAllConsumerDetails', this.httpOptions);
    };
    ConsumerService.prototype.createConsumers = function (createBasestationForm) {
        return this.http.post(this.urls.urlLink + '/consumer/CreateConsumer', createBasestationForm, this.httpOptions);
    };
    ConsumerService.prototype.deleteconumerServices = function (deleteCosumer) {
        return this.http.post(this.urls.urlLink + '/consumer/delete_consumer', deleteCosumer, this.httpOptions);
    };
    ConsumerService.prototype.editConsumer = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/consumer/edit_consumer', editedObj, this.httpOptions);
    };
    ConsumerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConsumerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsumerService);
    return ConsumerService;
}());



/***/ }),

/***/ "./src/app/metadata/flat/flat.component.css":
/*!**************************************************!*\
  !*** ./src/app/metadata/flat/flat.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2ZsYXQvZmxhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/metadata/flat/flat.component.ts":
/*!*************************************************!*\
  !*** ./src/app/metadata/flat/flat.component.ts ***!
  \*************************************************/
/*! exports provided: FlatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatComponent", function() { return FlatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _flat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flat.service */ "./src/app/metadata/flat/flat.service.ts");
/* harmony import */ var _flattype_flattype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flattype/flattype.service */ "./src/app/metadata/flattype/flattype.service.ts");
/* harmony import */ var _block_block_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block/block.service */ "./src/app/metadata/block/block.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlatComponent = /** @class */ (function () {
    function FlatComponent(fb, flatservice, flattypeservice, blockservice) {
        this.fb = fb;
        this.flatservice = flatservice;
        this.flattypeservice = flattypeservice;
        this.blockservice = blockservice;
        this.createFlatForm = this.fb.group({
            block_id: [''],
            flat_name: [''],
            flat_type: ['']
        });
    }
    FlatComponent.prototype.getallFlatData = function () {
        var _this = this;
        this.flatservice.getallFlatDetailss().subscribe(function (response) {
            _this.getallFlatdetails = response.flat_details;
        });
    };
    FlatComponent.prototype.getBlockServiceDetailss = function () {
        var _this = this;
        this.blockservice.getBlockServiceDetails().subscribe(function (response) {
            _this.getBlockServiceDet = response.block_details;
        });
    };
    FlatComponent.prototype.getFlatType = function () {
        var _this = this;
        this.flattypeservice.getFlatTypeDetails().subscribe(function (response) {
            _this.getFlatTypeList = response.flat_types_list;
        });
    };
    FlatComponent.prototype.createFlats = function (created_flats) {
        var _this = this;
        this.flatservice.createFlatss(created_flats).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Flats');
                _this.getallFlatData();
            }
        });
    };
    ;
    FlatComponent.prototype.deleteFlats = function (flatObj) {
        var _this = this;
        this.delete_json = {
            '_id': flatObj._id
        };
        this.flatservice.deleteFlats(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getallFlatData();
            }
        });
    };
    FlatComponent.prototype.editFlatsFunction = function (flatDetailObj) {
        var _this = this;
        var json_obj = {
            'block_id': flatDetailObj.block_id,
            'flat_name': flatDetailObj.flat_name,
            'flat_type': flatDetailObj.flat_type,
            '_id': flatDetailObj._id
        };
        this.flatservice.editFlats(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getallFlatData();
            }
        });
    };
    FlatComponent.prototype.ngOnInit = function () {
        this.getallFlatData();
        this.getFlatType();
        this.getBlockServiceDetailss();
    };
    FlatComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"] },
        { type: _flattype_flattype_service__WEBPACK_IMPORTED_MODULE_3__["FlattypeService"] },
        { type: _block_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"] }
    ]; };
    FlatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flat',
            template: __webpack_require__(/*! raw-loader!./flat.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/flat/flat.component.html"),
            styles: [__webpack_require__(/*! ./flat.component.css */ "./src/app/metadata/flat/flat.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"], _flattype_flattype_service__WEBPACK_IMPORTED_MODULE_3__["FlattypeService"], _block_block_service__WEBPACK_IMPORTED_MODULE_4__["BlockService"]])
    ], FlatComponent);
    return FlatComponent;
}());



/***/ }),

/***/ "./src/app/metadata/flat/flat.service.ts":
/*!***********************************************!*\
  !*** ./src/app/metadata/flat/flat.service.ts ***!
  \***********************************************/
/*! exports provided: FlatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatService", function() { return FlatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlatService = /** @class */ (function () {
    function FlatService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    FlatService.prototype.getallFlatDetailss = function () {
        return this.http.get(this.urls.urlLink + '/flat/GetAllFlatDetails', this.httpOptions);
    };
    ;
    FlatService.prototype.createFlatss = function (created_flats) {
        return this.http.post(this.urls.urlLink + '/flat/CreateFlat', created_flats, this.httpOptions);
    };
    ;
    FlatService.prototype.deleteFlats = function (deleteFlatObj) {
        return this.http.post(this.urls.urlLink + '/flat/delete_flat', deleteFlatObj, this.httpOptions);
    };
    FlatService.prototype.editFlats = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/flat/edit_flat', editedObj, this.httpOptions);
    };
    FlatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FlatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlatService);
    return FlatService;
}());



/***/ }),

/***/ "./src/app/metadata/flattype/flattype.component.css":
/*!**********************************************************!*\
  !*** ./src/app/metadata/flattype/flattype.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2ZsYXR0eXBlL2ZsYXR0eXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/flattype/flattype.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/metadata/flattype/flattype.component.ts ***!
  \*********************************************************/
/*! exports provided: FlattypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattypeComponent", function() { return FlattypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _flattype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flattype.service */ "./src/app/metadata/flattype/flattype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlattypeComponent = /** @class */ (function () {
    function FlattypeComponent(fb, flattypeservice) {
        this.fb = fb;
        this.flattypeservice = flattypeservice;
        this.createFlattypeForm = this.fb.group({
            flat_type: ['']
        });
    }
    FlattypeComponent.prototype.getFlatType = function () {
        var _this = this;
        this.flattypeservice.getFlatTypeDetails().subscribe(function (response) {
            _this.getFlatTypeList = response.flat_types_list;
        });
    };
    FlattypeComponent.prototype.createFlatypes = function () {
        var _this = this;
        this.flattypeservice.createFlatTypess(this.createFlattypeForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Flat Type');
                _this.getFlatType();
            }
        });
    };
    ;
    FlattypeComponent.prototype.deleteFlatType = function (flattypeObj) {
        var _this = this;
        this.delete_json = {
            'flat_types_list': flattypeObj
        };
        this.flattypeservice.deleteFlatTypes(this.delete_json).subscribe(function (response) {
            _this.get_delete_status = response.response;
            if (response.status == 200) {
                _this.getFlatType();
            }
        });
    };
    ;
    FlattypeComponent.prototype.ngOnInit = function () {
        this.getFlatType();
    };
    FlattypeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _flattype_service__WEBPACK_IMPORTED_MODULE_2__["FlattypeService"] }
    ]; };
    FlattypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flattype',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./flattype.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/flattype/flattype.component.html"),
            styles: [__webpack_require__(/*! ./flattype.component.css */ "./src/app/metadata/flattype/flattype.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _flattype_service__WEBPACK_IMPORTED_MODULE_2__["FlattypeService"]])
    ], FlattypeComponent);
    return FlattypeComponent;
}());



/***/ }),

/***/ "./src/app/metadata/flattype/flattype.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/metadata/flattype/flattype.service.ts ***!
  \*******************************************************/
/*! exports provided: FlattypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattypeService", function() { return FlattypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlattypeService = /** @class */ (function () {
    function FlattypeService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    FlattypeService.prototype.getFlatTypeDetails = function () {
        return this.http.get(this.urls.urlLink + '/metadata/GetAllFlatTypes', this.httpOptions);
    };
    ;
    FlattypeService.prototype.createFlatTypess = function (createFlattypeForm) {
        return this.http.post(this.urls.urlLink + '/metadata/CreateFlatType', createFlattypeForm, this.httpOptions);
    };
    ;
    FlattypeService.prototype.deleteFlatTypes = function (deleteFlatTypeObj) {
        return this.http.post(this.urls.urlLink + '/metadata/delete_flat_type', deleteFlatTypeObj, this.httpOptions);
    };
    FlattypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FlattypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlattypeService);
    return FlattypeService;
}());



/***/ }),

/***/ "./src/app/metadata/inlet/inlet.component.css":
/*!****************************************************!*\
  !*** ./src/app/metadata/inlet/inlet.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2lubGV0L2lubGV0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/inlet/inlet.component.ts":
/*!***************************************************!*\
  !*** ./src/app/metadata/inlet/inlet.component.ts ***!
  \***************************************************/
/*! exports provided: InletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InletComponent", function() { return InletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inlet.service */ "./src/app/metadata/inlet/inlet.service.ts");
/* harmony import */ var _flat_flat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flat/flat.service */ "./src/app/metadata/flat/flat.service.ts");
/* harmony import */ var _inlettype_inlettype_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inlettype/inlettype.service */ "./src/app/metadata/inlettype/inlettype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InletComponent = /** @class */ (function () {
    function InletComponent(fb, inletservice, flatservice, inlettypeservice) {
        this.fb = fb;
        this.inletservice = inletservice;
        this.flatservice = flatservice;
        this.inlettypeservice = inlettypeservice;
        this.createInletform = this.fb.group({
            inlet_id: [''],
            flat_id: [''],
            inlet_name: [''],
            inlet_type: ['']
        });
    }
    InletComponent.prototype.getInletData = function () {
        var _this = this;
        this.inletservice.getInletDetails().subscribe(function (response) {
            _this.getInletList = response.inlet_details;
        });
    };
    InletComponent.prototype.getInletTypedata = function () {
        var _this = this;
        this.inlettypeservice.getInletTypess().subscribe(function (response) {
            _this.getInlettypedetails = response.inlet_type_list;
        });
    };
    InletComponent.prototype.getallFlatData = function () {
        var _this = this;
        this.flatservice.getallFlatDetailss().subscribe(function (response) {
            _this.getallFlatdetails = response.flat_details;
        });
    };
    InletComponent.prototype.createInlets = function () {
        var _this = this;
        console.log(this.createInletform.value);
        this.inletservice.createInletss(this.createInletform.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Inlet');
                _this.getInletData();
            }
        });
    };
    InletComponent.prototype.editInletFunction = function (getInletObj) {
        var _this = this;
        var json_obj = {
            'inlet_id': getInletObj.inlet_id,
            'flat_id': getInletObj.flat._id,
            'inlet_name': getInletObj.inlet_name,
            'inlet_type': getInletObj.inlet_type,
            '_id': getInletObj._id
        };
        this.inletservice.editInlet(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getInletData();
            }
        });
    };
    InletComponent.prototype.ngOnInit = function () {
        this.getInletData();
        this.getallFlatData();
        this.getInletTypedata();
    };
    InletComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _inlet_service__WEBPACK_IMPORTED_MODULE_2__["InletService"] },
        { type: _flat_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"] },
        { type: _inlettype_inlettype_service__WEBPACK_IMPORTED_MODULE_4__["InlettypeService"] }
    ]; };
    InletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inlet',
            template: __webpack_require__(/*! raw-loader!./inlet.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/inlet/inlet.component.html"),
            styles: [__webpack_require__(/*! ./inlet.component.css */ "./src/app/metadata/inlet/inlet.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _inlet_service__WEBPACK_IMPORTED_MODULE_2__["InletService"], _flat_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"], _inlettype_inlettype_service__WEBPACK_IMPORTED_MODULE_4__["InlettypeService"]])
    ], InletComponent);
    return InletComponent;
}());



/***/ }),

/***/ "./src/app/metadata/inlet/inlet.service.ts":
/*!*************************************************!*\
  !*** ./src/app/metadata/inlet/inlet.service.ts ***!
  \*************************************************/
/*! exports provided: InletService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InletService", function() { return InletService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InletService = /** @class */ (function () {
    function InletService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    InletService.prototype.getInletDetails = function () {
        return this.http.get(this.urls.urlLink + '/inlet/GetAllInletDetails', this.httpOptions);
    };
    InletService.prototype.createInletss = function (createInletform) {
        return this.http.post(this.urls.urlLink + '/inlet/CreateInlet', createInletform, this.httpOptions);
    };
    InletService.prototype.editInlet = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/inlet/edit_inlet', editedObj, this.httpOptions);
    };
    InletService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    InletService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InletService);
    return InletService;
}());



/***/ }),

/***/ "./src/app/metadata/inlettype/inlettype.component.css":
/*!************************************************************!*\
  !*** ./src/app/metadata/inlettype/inlettype.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL2lubGV0dHlwZS9pbmxldHR5cGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/metadata/inlettype/inlettype.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/metadata/inlettype/inlettype.component.ts ***!
  \***********************************************************/
/*! exports provided: InlettypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlettypeComponent", function() { return InlettypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _inlettype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inlettype.service */ "./src/app/metadata/inlettype/inlettype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InlettypeComponent = /** @class */ (function () {
    function InlettypeComponent(fb, inlettypeservice) {
        this.fb = fb;
        this.inlettypeservice = inlettypeservice;
        this.createInletTypeForm = this.fb.group({
            inlet_type: ['']
        });
    }
    InlettypeComponent.prototype.getInletTypedata = function () {
        var _this = this;
        this.inlettypeservice.getInletTypess().subscribe(function (response) {
            _this.getInlettypedetails = response.inlet_type_list;
        });
    };
    InlettypeComponent.prototype.createInletTypes = function () {
        var _this = this;
        this.inlettypeservice.createInletTypess(this.createInletTypeForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Inline Type');
                _this.getInletTypedata();
            }
        });
    };
    InlettypeComponent.prototype.ngOnInit = function () {
        this.getInletTypedata();
    };
    InlettypeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _inlettype_service__WEBPACK_IMPORTED_MODULE_2__["InlettypeService"] }
    ]; };
    InlettypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inlettype',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./inlettype.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/inlettype/inlettype.component.html"),
            styles: [__webpack_require__(/*! ./inlettype.component.css */ "./src/app/metadata/inlettype/inlettype.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _inlettype_service__WEBPACK_IMPORTED_MODULE_2__["InlettypeService"]])
    ], InlettypeComponent);
    return InlettypeComponent;
}());



/***/ }),

/***/ "./src/app/metadata/inlettype/inlettype.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/metadata/inlettype/inlettype.service.ts ***!
  \*********************************************************/
/*! exports provided: InlettypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlettypeService", function() { return InlettypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InlettypeService = /** @class */ (function () {
    function InlettypeService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    InlettypeService.prototype.getInletTypess = function () {
        return this.http.get(this.urls.urlLink + '/metadata/GetAllInletTypes', this.httpOptions);
    };
    InlettypeService.prototype.createInletTypess = function (inletType_obj) {
        return this.http.post(this.urls.urlLink + '/metadata/CreateInletType', inletType_obj, this.httpOptions);
    };
    InlettypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    InlettypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InlettypeService);
    return InlettypeService;
}());



/***/ }),

/***/ "./src/app/metadata/metadata.component.css":
/*!*************************************************!*\
  !*** ./src/app/metadata/metadata.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple_report {\n    width: 13.5%;\n    float: left;\n    margin-left: 10px;\n    margin-top: 12px;\n    border: 1px solid #d8d8d8;\n    box-shadow: 3px 4px 2px -1px #b7b7b7;\n    background-color: #ffffff;\n    padding: 14px 8px;\n    color: #232323;\n    border-radius: 4px;\n    font-size: 14px;\n    height: 99px;\n    cursor: pointer;\n    transition: 0.6s;\n}\n\n.multiple_report:hover {\n    background-color: #ececec;\n}\n\n.box-body h6 {\n    margin-top: 25px;\n    margin-left: 13px;\n}\n\n.master_icons {\n    font-size: 28px;\n    text-align: center;\n}\n\n.master_icon_names {\n    text-align: center;\n    line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWV0YWRhdGEvbWV0YWRhdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXBsZV9yZXBvcnQge1xuICAgIHdpZHRoOiAxMy41JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAycHggLTFweCAjYjdiN2I3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTRweCA4cHg7XG4gICAgY29sb3I6ICMyMzIzMjM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDk5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNnM7XG59XG5cbi5tdWx0aXBsZV9yZXBvcnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG59XG5cbi5ib3gtYm9keSBoNiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLm1hc3Rlcl9pY29ucyB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hc3Rlcl9pY29uX25hbWVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/metadata/metadata.component.ts":
/*!************************************************!*\
  !*** ./src/app/metadata/metadata.component.ts ***!
  \************************************************/
/*! exports provided: MetadataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetadataComponent", function() { return MetadataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetadataComponent = /** @class */ (function () {
    function MetadataComponent() {
    }
    MetadataComponent.prototype.ngOnInit = function () {
    };
    MetadataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metadata',
            template: __webpack_require__(/*! raw-loader!./metadata.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/metadata.component.html"),
            styles: [__webpack_require__(/*! ./metadata.component.css */ "./src/app/metadata/metadata.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MetadataComponent);
    return MetadataComponent;
}());



/***/ }),

/***/ "./src/app/metadata/pipetype/pipetype.component.css":
/*!**********************************************************!*\
  !*** ./src/app/metadata/pipetype/pipetype.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL3BpcGV0eXBlL3BpcGV0eXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/metadata/pipetype/pipetype.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/metadata/pipetype/pipetype.component.ts ***!
  \*********************************************************/
/*! exports provided: PipetypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipetypeComponent", function() { return PipetypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipetype_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipetype.service */ "./src/app/metadata/pipetype/pipetype.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PipetypeComponent = /** @class */ (function () {
    function PipetypeComponent(fb, pipetypeservice) {
        this.fb = fb;
        this.pipetypeservice = pipetypeservice;
        this.createPipetypeForm = this.fb.group({
            pipe_type: ['']
        });
    }
    PipetypeComponent.prototype.getPipeDetailsList = function () {
        var _this = this;
        this.pipetypeservice.getPipeDetailss().subscribe(function (response) {
            _this.getPipeData = response.pipe_type_list;
        });
    };
    PipetypeComponent.prototype.createPipetypes = function () {
        var _this = this;
        this.pipetypeservice.createPipeTypess(this.createPipetypeForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Pipes');
                _this.getPipeDetailsList();
            }
        });
    };
    PipetypeComponent.prototype.ngOnInit = function () {
        this.getPipeDetailsList();
    };
    PipetypeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _pipetype_service__WEBPACK_IMPORTED_MODULE_2__["PipetypeService"] }
    ]; };
    PipetypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipetype',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./pipetype.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/pipetype/pipetype.component.html"),
            styles: [__webpack_require__(/*! ./pipetype.component.css */ "./src/app/metadata/pipetype/pipetype.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _pipetype_service__WEBPACK_IMPORTED_MODULE_2__["PipetypeService"]])
    ], PipetypeComponent);
    return PipetypeComponent;
}());



/***/ }),

/***/ "./src/app/metadata/pipetype/pipetype.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/metadata/pipetype/pipetype.service.ts ***!
  \*******************************************************/
/*! exports provided: PipetypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipetypeService", function() { return PipetypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PipetypeService = /** @class */ (function () {
    function PipetypeService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    PipetypeService.prototype.getPipeDetailss = function () {
        return this.http.get(this.urls.urlLink + '/metadata/GetAllPipeTypes', this.httpOptions);
    };
    PipetypeService.prototype.createPipeTypess = function (createPipetypeForm) {
        return this.http.post(this.urls.urlLink + '/metadata/CreatePipeType', createPipetypeForm, this.httpOptions);
    };
    PipetypeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PipetypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PipetypeService);
    return PipetypeService;
}());



/***/ }),

/***/ "./src/app/metadata/rtu/rtu.component.css":
/*!************************************************!*\
  !*** ./src/app/metadata/rtu/rtu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ldGFkYXRhL3J0dS9ydHUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/metadata/rtu/rtu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/metadata/rtu/rtu.component.ts ***!
  \***********************************************/
/*! exports provided: RTUComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTUComponent", function() { return RTUComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rtu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rtu.service */ "./src/app/metadata/rtu/rtu.service.ts");
/* harmony import */ var _basestation_basestation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../basestation/basestation.service */ "./src/app/metadata/basestation/basestation.service.ts");
/* harmony import */ var _basestationchannel_basestationchannel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../basestationchannel/basestationchannel.service */ "./src/app/metadata/basestationchannel/basestationchannel.service.ts");
/* harmony import */ var _flat_flat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../flat/flat.service */ "./src/app/metadata/flat/flat.service.ts");
/* harmony import */ var _inlet_inlet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inlet/inlet.service */ "./src/app/metadata/inlet/inlet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RTUComponent = /** @class */ (function () {
    function RTUComponent(fb, rtuservice, basestationservice, basestationchannel, flatservice, inletservice) {
        this.fb = fb;
        this.rtuservice = rtuservice;
        this.basestationservice = basestationservice;
        this.basestationchannel = basestationchannel;
        this.flatservice = flatservice;
        this.inletservice = inletservice;
        this.createRtuForm = this.fb.group({
            rtu_id: [''],
            base_station_id: [''],
            base_station_channel_id: [''],
            tag_name: [''],
            flat_id: [''],
            inlet_id: ['']
        });
    }
    RTUComponent.prototype.getRTUdata = function () {
        var _this = this;
        this.rtuservice.getRtuDetails().subscribe(function (response) {
            _this.getRtuList = response.response;
        });
    };
    RTUComponent.prototype.getallFlatData = function () {
        var _this = this;
        this.flatservice.getallFlatDetailss().subscribe(function (response) {
            _this.getallFlatdetails = response.flat_details;
        });
    };
    RTUComponent.prototype.getInletData = function () {
        var _this = this;
        this.inletservice.getInletDetails().subscribe(function (response) {
            _this.getInletList = response.inlet_details;
        });
    };
    RTUComponent.prototype.getBaseStationChannel = function () {
        var _this = this;
        this.basestationchannel.getBaseStationChannelDetails().subscribe(function (response) {
            _this.getBasestationChannelList = response.base_station_channel_list;
        });
    };
    RTUComponent.prototype.getBaseStation = function () {
        var _this = this;
        this.basestationservice.getBaseStationDetails().subscribe(function (response) {
            _this.getBasestationList = response.base_station_list;
        });
    };
    RTUComponent.prototype.createRTU = function () {
        var _this = this;
        this.rtuservice.createRTUs(this.createRtuForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                alert('Sucessfully Added Pipes');
                _this.getRTUdata();
            }
        });
    };
    RTUComponent.prototype.editRTUFunction = function (getObj) {
        var _this = this;
        var json_obj = {
            'rtu_id': getObj.rtu_id,
            'base_station_id': getObj.base_station._id,
            'base_station_channel_id': getObj.base_station_channel._id,
            'tag_name': getObj.tag_name,
            'flat_id': getObj.flat._id,
            'inlet_id': getObj.inlet._id,
            '_id': getObj._id
        };
        this.rtuservice.rtuEdit(json_obj).subscribe(function (res) {
            _this.editResponse = res;
            if (res.response == 'success') {
                _this.getRTUdata();
            }
        });
    };
    RTUComponent.prototype.ngOnInit = function () {
        this.getRTUdata();
        this.getBaseStation();
        this.getBaseStationChannel();
        this.getallFlatData();
        this.getInletData();
    };
    RTUComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _rtu_service__WEBPACK_IMPORTED_MODULE_2__["RtuService"] },
        { type: _basestation_basestation_service__WEBPACK_IMPORTED_MODULE_3__["BasestationService"] },
        { type: _basestationchannel_basestationchannel_service__WEBPACK_IMPORTED_MODULE_4__["BasestationchannelService"] },
        { type: _flat_flat_service__WEBPACK_IMPORTED_MODULE_5__["FlatService"] },
        { type: _inlet_inlet_service__WEBPACK_IMPORTED_MODULE_6__["InletService"] }
    ]; };
    RTUComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rtu',
            template: __webpack_require__(/*! raw-loader!./rtu.component.html */ "./node_modules/raw-loader/index.js!./src/app/metadata/rtu/rtu.component.html"),
            styles: [__webpack_require__(/*! ./rtu.component.css */ "./src/app/metadata/rtu/rtu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _rtu_service__WEBPACK_IMPORTED_MODULE_2__["RtuService"], _basestation_basestation_service__WEBPACK_IMPORTED_MODULE_3__["BasestationService"], _basestationchannel_basestationchannel_service__WEBPACK_IMPORTED_MODULE_4__["BasestationchannelService"], _flat_flat_service__WEBPACK_IMPORTED_MODULE_5__["FlatService"], _inlet_inlet_service__WEBPACK_IMPORTED_MODULE_6__["InletService"]])
    ], RTUComponent);
    return RTUComponent;
}());



/***/ }),

/***/ "./src/app/metadata/rtu/rtu.service.ts":
/*!*********************************************!*\
  !*** ./src/app/metadata/rtu/rtu.service.ts ***!
  \*********************************************/
/*! exports provided: RtuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtuService", function() { return RtuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RtuService = /** @class */ (function () {
    function RtuService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    RtuService.prototype.getRtuDetails = function () {
        return this.http.get(this.urls.urlLink + '/rtu/GetAllRTU', this.httpOptions);
    };
    RtuService.prototype.createRTUs = function (createRtuForm) {
        return this.http.post(this.urls.urlLink + '/rtu/CreateRTUDetails', createRtuForm, this.httpOptions);
    };
    RtuService.prototype.rtuEdit = function (editedObj) {
        return this.http.post(this.urls.urlLink + '/rtu/EditRTUDetails', editedObj, this.httpOptions);
    };
    RtuService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RtuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RtuService);
    return RtuService;
}());



/***/ }),

/***/ "./src/app/reports/blockreport/block-report.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/reports/blockreport/block-report.service.ts ***!
  \*************************************************************/
/*! exports provided: BlockReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockReportService", function() { return BlockReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlockReportService = /** @class */ (function () {
    function BlockReportService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    //  block report table apis
    BlockReportService.prototype.getBlockReportForCurrentMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_block_table_details_for_current_month', sendSelectedParam, this.httpOptions);
    };
    BlockReportService.prototype.getBlockReportForCurrentDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_block_table_details_for_current_day', sendSelectedParam, this.httpOptions);
    };
    BlockReportService.prototype.getBlockReportForCurrentYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_block_table_details_for_current_year', sendSelectedParam, this.httpOptions);
    };
    BlockReportService.prototype.getBlockReportForSearchDate = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_block_table_details_for_search_date', sendSelectedParam, this.httpOptions);
    };
    // block report table apis
    // block report chart apis
    BlockReportService.prototype.getBlockCosumptionChartForDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/GetBlockConsumptionBYDay', sendSelectedParam, this.httpOptions);
    };
    BlockReportService.prototype.getBlockCosumptionChartForMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/GetBlockConsumptionBYMonthly', sendSelectedParam, this.httpOptions);
    };
    BlockReportService.prototype.getBlockCosumptionChartForYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/GetBlockConsumptionBYYearly', sendSelectedParam, this.httpOptions);
    };
    BlockReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BlockReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlockReportService);
    return BlockReportService;
}());



/***/ }),

/***/ "./src/app/reports/blockreport/blockreport.component.css":
/*!***************************************************************!*\
  !*** ./src/app/reports/blockreport/blockreport.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYmxvY2tyZXBvcnQvYmxvY2tyZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/reports/blockreport/blockreport.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/reports/blockreport/blockreport.component.ts ***!
  \**************************************************************/
/*! exports provided: BlockreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockreportComponent", function() { return BlockreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _block_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-report.service */ "./src/app/reports/blockreport/block-report.service.ts");
/* harmony import */ var _metadata_block_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata/block/block.service */ "./src/app/metadata/block/block.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {NgForm} from '@angular/forms';
var BlockreportComponent = /** @class */ (function () {
    function BlockreportComponent(blockReportService, blockService, fb) {
        this.blockReportService = blockReportService;
        this.blockService = blockService;
        this.fb = fb;
        this.hideshow_selectmonth = false;
        this.years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
        this.monthList = [
            { 'monthname': 'Jan', 'monthnumber': 1 },
            { 'monthname': 'Feb', 'monthnumber': 2 },
            { 'monthname': 'Mar', 'monthnumber': 3 },
            { 'monthname': 'Apr', 'monthnumber': 4 },
            { 'monthname': 'May', 'monthnumber': 5 },
            { 'monthname': 'Jun', 'monthnumber': 6 },
            { 'monthname': 'Jul', 'monthnumber': 7 },
            { 'monthname': 'Aug', 'monthnumber': 8 },
            { 'monthname': 'Sep', 'monthnumber': 9 },
            { 'monthname': 'Oct', 'monthnumber': 11 },
            { 'monthname': 'Nov', 'monthnumber': 12 },
        ];
        this.selectedYear = '2020';
        this.selectedView = "month";
    }
    BlockreportComponent.prototype.getBlockServiceDetails = function () {
        var _this = this;
        this.blockService.getBlockServiceDetails().subscribe(function (response) {
            _this.get_block_list = response.block_details;
            _this.selectedOption = response.block_details[0]._id;
            if (response.status == '200') {
                _this.get_blockreport_for_current_month();
            }
        });
    };
    ;
    BlockreportComponent.prototype.get_blockReport = function (selectedOption) {
        this.block_ids = selectedOption;
    };
    ;
    BlockreportComponent.prototype.get_blockreport_for_current_month = function () {
        var _this = this;
        this.hideshow_selectmonth = false;
        var sendParam = {
            'block_id': (!this.block_ids ? this.selectedOption : this.block_ids),
            'year': (!this.selected_year ? this.selectedYear : Number(this.selected_year))
        };
        //  month view table report
        this.blockReportService.getBlockReportForCurrentMonth(sendParam).subscribe(function (response) {
            _this.get_block_table_report = response.response;
        });
        //  month view chart report
        this.blockReportService.getBlockCosumptionChartForMonth(sendParam).subscribe(function (response) {
            _this.get_block_chart_report = response.response;
            if (_this.get_block_chart_report) {
                _this.linechart();
            }
        });
    };
    ;
    BlockreportComponent.prototype.get_blockreport_for_current_day = function () {
        var _this = this;
        this.hideshow_selectmonth = true;
        var sendParam = {
            'block_id': (!this.block_ids ? this.selectedOption : this.block_ids),
            'month': (!this.selected_month ? 1 : Number(this.selected_month)),
            'year': (!this.selected_year ? this.selectedYear : Number(this.selected_year))
        };
        //  day view table
        this.blockReportService.getBlockReportForCurrentDay(sendParam).subscribe(function (response) {
            _this.get_block_table_report = response.response;
        });
        //  day view chart
        this.blockReportService.getBlockCosumptionChartForDay(sendParam).subscribe(function (response) {
            _this.get_block_chart_report = response.response;
            if (_this.get_block_chart_report) {
                _this.linechart();
            }
        });
    };
    ;
    BlockreportComponent.prototype.get_blockreport_for_current_year = function () {
        var _this = this;
        this.hideshow_selectmonth = false;
        var sendParam = {
            'block_id': (!this.block_ids ? this.selectedOption : this.block_ids)
        };
        //  year view table
        this.blockReportService.getBlockReportForCurrentYear(sendParam).subscribe(function (response) {
            _this.get_block_table_report = response.response;
        });
        //  year view chart
        this.blockReportService.getBlockCosumptionChartForYear(sendParam).subscribe(function (response) {
            _this.get_block_chart_report = response.response;
            if (_this.get_block_chart_report) {
                _this.linechart();
            }
        });
    };
    ;
    BlockreportComponent.prototype.get_blockreport_for_search_date = function () {
        var _this = this;
        var sendParam = {
            'block_id': (!this.block_ids ? this.selectedOption : this.block_ids)
        };
        this.blockReportService.getBlockReportForSearchDate(sendParam).subscribe(function (response) {
            _this.get_block_table_report = response.response;
            if (_this.get_block_chart_report) {
                _this.linechart();
            }
        });
    };
    ;
    BlockreportComponent.prototype.get_year = function (selectedYear) {
        this.selected_year = selectedYear;
    };
    BlockreportComponent.prototype.get_month = function (selectedMonth) {
        this.selected_month = selectedMonth;
    };
    BlockreportComponent.prototype.get_block_report = function () {
        var param = this.selectedView;
        switch (param) {
            case 'year':
                this.get_blockreport_for_current_year();
                break;
            case 'month':
                this.get_blockreport_for_current_month();
                break;
            case 'day':
                this.get_blockreport_for_current_day();
                break;
        }
    };
    BlockreportComponent.prototype.linechart = function () {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        this.chartOptions = {
            chart: {
                type: 'areaspline'
            },
            title: {
                text: "Monthly Average Usage"
            },
            subtitle: {
                text: "Detail Report"
            },
            xAxis: {
                categories: this.get_block_chart_report.header_list
            },
            yAxis: {
                title: {
                    text: "Monthly Report"
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_3__["defaultOptions"].legend.backgroundColor || '#FFFFFF'
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            plotOptions: {
                areaspline: {
                    dataLabels: {
                        enabled: true
                    },
                    fillOpacity: 0.5
                }
            },
            series: [
                {
                    name: 'Water Usage',
                    data: this.get_block_chart_report.value_list
                }
            ]
        };
    };
    BlockreportComponent.prototype.ngOnInit = function () {
        this.getBlockServiceDetails();
    };
    BlockreportComponent.ctorParameters = function () { return [
        { type: _block_report_service__WEBPACK_IMPORTED_MODULE_1__["BlockReportService"] },
        { type: _metadata_block_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    BlockreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blockreport',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./blockreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/blockreport/blockreport.component.html"),
            styles: [__webpack_require__(/*! ./blockreport.component.css */ "./src/app/reports/blockreport/blockreport.component.css")]
        }),
        __metadata("design:paramtypes", [_block_report_service__WEBPACK_IMPORTED_MODULE_1__["BlockReportService"], _metadata_block_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], BlockreportComponent);
    return BlockreportComponent;
}());



/***/ }),

/***/ "./src/app/reports/buildingreport/building-report.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/reports/buildingreport/building-report.service.ts ***!
  \*******************************************************************/
/*! exports provided: BuildingReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingReportService", function() { return BuildingReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuildingReportService = /** @class */ (function () {
    function BuildingReportService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    //  block report table apis
    BuildingReportService.prototype.getBuildingReportForCurrentMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/get_building_table_details_for_search_date', sendSelectedParam, this.httpOptions);
    };
    BuildingReportService.prototype.getBuildingReportForCurrentDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/get_building_table_details_for_current_day', sendSelectedParam, this.httpOptions);
    };
    BuildingReportService.prototype.getBuildingReportForCurrentYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/get_building_table_details_for_current_year', sendSelectedParam, this.httpOptions);
    };
    BuildingReportService.prototype.getBuildingReportForSearchDate = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/get_building_table_details_for_search_date', sendSelectedParam, this.httpOptions);
    };
    // block report table apis
    // block report chart apis
    BuildingReportService.prototype.getBuildingCosumptionChartForDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/GetBuildingConsumptionBYDay', sendSelectedParam, this.httpOptions);
    };
    BuildingReportService.prototype.getBuildingCosumptionChartForMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/GetBuildingConsumptionBYMonthly', sendSelectedParam, this.httpOptions);
    };
    BuildingReportService.prototype.getBuildingCosumptionChartForYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/building/GetBuildingConsumptionBYYearly', sendSelectedParam, this.httpOptions);
    };
    BuildingReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BuildingReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BuildingReportService);
    return BuildingReportService;
}());



/***/ }),

/***/ "./src/app/reports/buildingreport/buildingreport.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/reports/buildingreport/buildingreport.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYnVpbGRpbmdyZXBvcnQvYnVpbGRpbmdyZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/reports/buildingreport/buildingreport.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/reports/buildingreport/buildingreport.component.ts ***!
  \********************************************************************/
/*! exports provided: BuildingreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingreportComponent", function() { return BuildingreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _building_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building-report.service */ "./src/app/reports/buildingreport/building-report.service.ts");
/* harmony import */ var _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metadata/building/building.service */ "./src/app/metadata/building/building.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuildingreportComponent = /** @class */ (function () {
    function BuildingreportComponent(buildingService, buildingReportService) {
        this.buildingService = buildingService;
        this.buildingReportService = buildingReportService;
        this.years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
        this.selectedYear = "2020";
        this.monthList = [
            { 'monthname': 'Jan', 'monthnumber': 1 },
            { 'monthname': 'Feb', 'monthnumber': 2 },
            { 'monthname': 'Mar', 'monthnumber': 3 },
            { 'monthname': 'Apr', 'monthnumber': 4 },
            { 'monthname': 'May', 'monthnumber': 5 },
            { 'monthname': 'Jun', 'monthnumber': 6 },
            { 'monthname': 'Jul', 'monthnumber': 7 },
            { 'monthname': 'Aug', 'monthnumber': 8 },
            { 'monthname': 'Sep', 'monthnumber': 9 },
            { 'monthname': 'Oct', 'monthnumber': 11 },
            { 'monthname': 'Nov', 'monthnumber': 12 },
        ];
        this.selectedMonth = '1';
        this.selectedView = 'month';
    }
    BuildingreportComponent.prototype.getBuildingServiceDetails = function () {
        var _this = this;
        this.buildingService.getBuildingDetails().subscribe(function (response) {
            _this.get_building_list = response.building_details;
            _this.selectedOption = response.building_details[0]._id;
            if (response.status == '200') {
                _this.get_buildingreport_for_current_month();
            }
        });
    };
    ;
    BuildingreportComponent.prototype.get_buildingReport = function (selectedOption) {
        this.building_ids = selectedOption;
    };
    ;
    BuildingreportComponent.prototype.get_buildingreport_for_current_month = function () {
        var _this = this;
        var sendParam = {
            'building_id': (!this.building_ids ? this.selectedOption : this.building_ids),
            'year': (!this.selected_year ? this.selectedYear : Number(this.selected_year))
        };
        //  month view table report
        this.buildingReportService.getBuildingReportForCurrentMonth(sendParam).subscribe(function (response) {
            _this.get_building_table_report = response.response;
        });
        //  month view chart report
        this.buildingReportService.getBuildingCosumptionChartForMonth(sendParam).subscribe(function (response) {
            _this.get_building_chart_report = response.response;
            if (response.response) {
                _this.linechart();
            }
        });
    };
    ;
    BuildingreportComponent.prototype.get_buildingreport_for_current_day = function () {
        var _this = this;
        var sendParam = {
            'building_id': (!this.building_ids ? this.selectedOption : this.building_ids),
            'month': (!this.selected_month ? this.selectedMonth : Number(this.selected_month)),
            'year': (!this.selected_year ? this.selectedYear : Number(this.selected_year))
        };
        //  day view table
        this.buildingReportService.getBuildingReportForCurrentDay(sendParam).subscribe(function (response) {
            _this.get_building_table_report = response.response;
        });
        //  day view chart
        this.buildingReportService.getBuildingCosumptionChartForDay(sendParam).subscribe(function (response) {
            _this.get_building_chart_report = response.response;
            if (response.response) {
                _this.linechart();
            }
        });
    };
    ;
    BuildingreportComponent.prototype.get_buildingreport_for_current_year = function () {
        var _this = this;
        var sendParam = {
            'building_id': (!this.building_ids ? this.selectedOption : this.building_ids)
        };
        //  year view table
        this.buildingReportService.getBuildingReportForCurrentYear(sendParam).subscribe(function (response) {
            _this.get_building_table_report = response.response;
        });
        //  year view chart
        this.buildingReportService.getBuildingCosumptionChartForYear(sendParam).subscribe(function (response) {
            _this.get_building_chart_report = response.response;
            if (response.response) {
                _this.linechart();
            }
        });
    };
    ;
    BuildingreportComponent.prototype.get_buildingreport_for_search_date = function () {
        var _this = this;
        var sendParam = {
            'building_id': (!this.building_ids ? this.selectedOption : this.building_ids)
        };
        this.buildingReportService.getBuildingReportForSearchDate(sendParam).subscribe(function (response) {
            _this.get_building_table_report = response.response;
        });
    };
    ;
    BuildingreportComponent.prototype.get_year = function (selectedYear) {
        this.selected_year = selectedYear;
    };
    BuildingreportComponent.prototype.get_month = function (selectedMonth) {
        this.selected_month = selectedMonth;
    };
    BuildingreportComponent.prototype.get_building_report = function () {
        var param = this.selectedView;
        switch (param) {
            case 'year':
                this.get_buildingreport_for_current_year();
                break;
            case 'month':
                this.get_buildingreport_for_current_month();
                break;
            case 'day':
                this.get_buildingreport_for_current_day();
                break;
        }
    };
    BuildingreportComponent.prototype.linechart = function () {
        this.highchartss = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                type: "spline"
            },
            title: {
                text: "Monthly Average Usage"
            },
            subtitle: {
                text: "Detail Report"
            },
            xAxis: {
                categories: this.get_building_chart_report.header_list
            },
            yAxis: {
                title: {
                    text: "Monthly Report"
                }
            },
            tooltip: {
                valueSuffix: " °C"
            },
            plotOptions: {
                spline: {
                    dataLabels: {
                        enabled: true
                    },
                    fillOpacity: 0.5
                }
            },
            series: [
                {
                    name: 'Water Usage',
                    data: this.get_building_chart_report.value_list
                }
            ]
        };
    };
    BuildingreportComponent.prototype.ngOnInit = function () {
        this.getBuildingServiceDetails();
    };
    BuildingreportComponent.ctorParameters = function () { return [
        { type: _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"] },
        { type: _building_report_service__WEBPACK_IMPORTED_MODULE_2__["BuildingReportService"] }
    ]; };
    BuildingreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buildingreport',
            // moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./buildingreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/buildingreport/buildingreport.component.html"),
            styles: [__webpack_require__(/*! ./buildingreport.component.css */ "./src/app/reports/buildingreport/buildingreport.component.css")]
        }),
        __metadata("design:paramtypes", [_metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"], _building_report_service__WEBPACK_IMPORTED_MODULE_2__["BuildingReportService"]])
    ], BuildingreportComponent);
    return BuildingreportComponent;
}());



/***/ }),

/***/ "./src/app/reports/consumer-report/consumer-report.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/reports/consumer-report/consumer-report.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right_38 {\n    right: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9jb25zdW1lci1yZXBvcnQvY29uc3VtZXItcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnRzL2NvbnN1bWVyLXJlcG9ydC9jb25zdW1lci1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodF8zOCB7XG4gICAgcmlnaHQ6IDM4cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/reports/consumer-report/consumer-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reports/consumer-report/consumer-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConsumerReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerReportComponent", function() { return ConsumerReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metadata_consumer_consumer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata/consumer/consumer.service */ "./src/app/metadata/consumer/consumer.service.ts");
/* harmony import */ var _consumer_report_consumer_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consumer-report/consumer-report.service */ "./src/app/reports/consumer-report/consumer-report.service.ts");
/* harmony import */ var _flatreport_flat_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flatreport/flat-report.service */ "./src/app/reports/flatreport/flat-report.service.ts");
/* harmony import */ var _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../metadata/flat/flat.service */ "./src/app/metadata/flat/flat.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/modules/bullet */ "./node_modules/highcharts/modules/bullet.js");
/* harmony import */ var highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_6___default()(highcharts__WEBPACK_IMPORTED_MODULE_5__);
var ConsumerReportComponent = /** @class */ (function () {
    function ConsumerReportComponent(consumerService, consumerreportService, flatReportService, flatService) {
        this.consumerService = consumerService;
        this.consumerreportService = consumerreportService;
        this.flatReportService = flatReportService;
        this.flatService = flatService;
        this.loader1 = true;
        this.selectedView = 'month';
        this.years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
        this.selectedYear = "2020";
        this.monthList = [
            { 'monthname': 'Jan', 'monthnumber': 1 },
            { 'monthname': 'Feb', 'monthnumber': 2 },
            { 'monthname': 'Mar', 'monthnumber': 3 },
            { 'monthname': 'Apr', 'monthnumber': 4 },
            { 'monthname': 'May', 'monthnumber': 5 },
            { 'monthname': 'Jun', 'monthnumber': 6 },
            { 'monthname': 'Jul', 'monthnumber': 7 },
            { 'monthname': 'Aug', 'monthnumber': 8 },
            { 'monthname': 'Sep', 'monthnumber': 9 },
            { 'monthname': 'Oct', 'monthnumber': 11 },
            { 'monthname': 'Nov', 'monthnumber': 12 },
        ];
    }
    ConsumerReportComponent.prototype.getConsumerlists = function () {
        var _this = this;
        this.consumerService.getConsumerDetaliss().subscribe(function (response) {
            _this.get_consumer_list = response.consumer_details;
        });
    };
    ;
    ConsumerReportComponent.prototype.getFlatServiceDetails = function () {
        var _this = this;
        this.flatService.getallFlatDetailss().subscribe(function (response) {
            _this.get_flat_list = response.flat_details;
            if (response.status == '200') {
                _this.loader1 = false;
                _this.selectedOption = response.flat_details[0]._id;
                _this.flat_id = response.flat_details[0]._id;
                _this.get_consumer_report_go();
            }
        });
    };
    ConsumerReportComponent.prototype.get_ConsumerReport = function (consumerDet) {
        this.flat_id = consumerDet;
        this.loader1 = true;
        this.get_consumer_report_for_current_year();
    };
    // per month
    ConsumerReportComponent.prototype.get_consumer_report_for_current_month = function () {
        var _this = this;
        this.selected_day = false;
        var sendParam = {
            'flat_id': this.flat_id,
            'year': (!this.selected_year ? this.selectedYear : Number(this.selected_year))
        };
        this.consumerreportService.getCosumptionChartForMonth(sendParam).subscribe(function (response) {
            _this.get_consumer_chart_report = response.response;
            _this.bullet_chart_data = response.status;
            _this.loader1 = false;
            if (response.response) {
                _this.bulletCharts(_this.get_consumer_chart_report);
                _this.loader1 = false;
            }
        });
        //  month view chart report
        this.flatReportService.getFlatCosumptionChartForMonth(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            _this.flatRportStatus = response.status;
            if (response.response) {
                _this.linechart();
            }
        });
    };
    ;
    // per month
    // per year
    ConsumerReportComponent.prototype.get_consumer_report_for_current_year = function () {
        var _this = this;
        this.selected_day = false;
        var sendParam = {
            'flat_id': this.flat_id
        };
        this.consumerreportService.getCosumptionChartForYear(sendParam).subscribe(function (response) {
            _this.get_consumer_chart_report = response.response;
            _this.bullet_chart_data = response.status;
            _this.loader1 = false;
            if (response.response) {
                _this.bulletCharts(_this.get_consumer_chart_report);
            }
        });
        //  year view chart report
        this.flatReportService.getFlatCosumptionChartForYear(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            _this.flatRportStatus = response.status;
            if (response.response) {
                _this.linechart();
            }
        });
    };
    ;
    ConsumerReportComponent.prototype.get_consumer_report_for_current_day = function () {
        var _this = this;
        this.selected_day = true;
        var sendParam = {
            'flat_id': this.flat_id,
            'month': (!this.selected_month ? 1 : Number(this.selected_month)),
            'year': (!this.selected_year ? this.selectedYear : Number(this.selected_year))
        };
        //  day view chart
        this.consumerreportService.getCosumptionChartForDay(sendParam).subscribe(function (response) {
            _this.get_consumer_chart_report = response.response;
            _this.bullet_chart_data = response.status;
            _this.loader1 = false;
            if (response.response) {
                _this.bulletCharts(_this.get_consumer_chart_report);
            }
        });
        //  day view chart
        this.flatReportService.getFlatCosumptionChartForDay(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            _this.flatRportStatus = response.status;
            if (response.response) {
                _this.linechart();
            }
        });
    };
    ;
    ConsumerReportComponent.prototype.get_year = function (selectedYear) {
        this.selected_year = selectedYear;
        this.get_consumer_report_for_current_year();
    };
    ConsumerReportComponent.prototype.get_month = function (selectedMonth) {
        this.selected_month = selectedMonth;
        this.get_consumer_report_for_current_day();
    };
    ConsumerReportComponent.prototype.get_consumer_report_go = function () {
        this.loader1 = true;
        if (this.selectedView == 'year') {
            this.get_consumer_report_for_current_year();
        }
        else if (this.selectedView == 'month') {
            this.get_consumer_report_for_current_month();
        }
        else if (this.selectedView == 'day') {
            this.get_consumer_report_for_current_day();
        }
    };
    ;
    ConsumerReportComponent.prototype.bulletCharts = function (bulletData) {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_5__;
        this.chartOptions = {
            chart: {
                marginTop: 60,
                inverted: true,
                marginLeft: 60,
                type: 'bullet'
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'Current Consumption ' + (!this.selected_year ? '' : this.selected_year)
            },
            xAxis: {
                categories: ['Usage']
            },
            exporting: {
                enabled: false
            },
            yAxis: {
                gridLineWidth: 0,
                plotBands: [{
                        from: 0,
                        to: (!bulletData ? 30000 : (bulletData.target == 0) ? 30000 : (bulletData.target + 80000)),
                        color: '#91ddff'
                    }],
                title: null
            },
            plotOptions: {
                series: {
                    pointPadding: 0.25,
                    borderWidth: 0,
                    color: (!bulletData ? '#8BC34A' : (bulletData.percentage == 0) ? '#8BC34A' : (bulletData.percentage < 70) ? '#8BC34A' : ((bulletData.percentage > 70) && (bulletData.percentage < 90)) ? '#FF2AA0' : '#FF2A1F'),
                    targetOptions: {
                        width: '200%'
                    }
                }
            },
            series: [{
                    data: [{
                            y: (!bulletData ? 0 : (bulletData.value == 0) ? 100 : (bulletData.value)),
                            target: (!bulletData ? 25000 : (bulletData.target == 0) ? 25000 : bulletData.target)
                        }]
                }],
            tooltip: {
                pointFormat: '<b>{point.y}</b> (with target at {point.target})'
            }
        };
    };
    ConsumerReportComponent.prototype.linechart = function () {
        this.highcharts1 = highcharts__WEBPACK_IMPORTED_MODULE_5__;
        this.chartOptions1 = {
            chart: {
                type: 'areaspline'
            },
            title: {
                text: "Monthly Average Usage"
            },
            subtitle: {
                text: "Detail Report"
            },
            xAxis: {
                categories: this.get_flat_chart_report.header_list
            },
            yAxis: {
                title: {
                    text: "Monthly Report"
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_5__["defaultOptions"].legend.backgroundColor || '#FFFFFF'
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            plotOptions: {
                areaspline: {
                    dataLabels: {
                        enabled: true
                    },
                    fillOpacity: 0.5
                }
            },
            series: [
                {
                    name: 'Water Usage',
                    data: this.get_flat_chart_report.value_list
                }
            ]
        };
    };
    ConsumerReportComponent.prototype.ngOnInit = function () {
        this.getConsumerlists();
        this.getFlatServiceDetails();
    };
    ConsumerReportComponent.ctorParameters = function () { return [
        { type: _metadata_consumer_consumer_service__WEBPACK_IMPORTED_MODULE_1__["ConsumerService"] },
        { type: _consumer_report_consumer_report_service__WEBPACK_IMPORTED_MODULE_2__["ConsumerReportService"] },
        { type: _flatreport_flat_report_service__WEBPACK_IMPORTED_MODULE_3__["FlatReportService"] },
        { type: _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_4__["FlatService"] }
    ]; };
    ConsumerReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumer-report',
            template: __webpack_require__(/*! raw-loader!./consumer-report.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/consumer-report/consumer-report.component.html"),
            styles: [__webpack_require__(/*! ./consumer-report.component.css */ "./src/app/reports/consumer-report/consumer-report.component.css")]
        }),
        __metadata("design:paramtypes", [_metadata_consumer_consumer_service__WEBPACK_IMPORTED_MODULE_1__["ConsumerService"], _consumer_report_consumer_report_service__WEBPACK_IMPORTED_MODULE_2__["ConsumerReportService"], _flatreport_flat_report_service__WEBPACK_IMPORTED_MODULE_3__["FlatReportService"], _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_4__["FlatService"]])
    ], ConsumerReportComponent);
    return ConsumerReportComponent;
}());



/***/ }),

/***/ "./src/app/reports/consumer-report/consumer-report.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/reports/consumer-report/consumer-report.service.ts ***!
  \********************************************************************/
/*! exports provided: ConsumerReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumerReportService", function() { return ConsumerReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsumerReportService = /** @class */ (function () {
    function ConsumerReportService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    // consumer report chart apis
    ConsumerReportService.prototype.getCosumptionChartForDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/consumer/GetConsumerAverageConsumptionByDay', sendSelectedParam, this.httpOptions);
    };
    ConsumerReportService.prototype.getCosumptionChartForMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/consumer/GetConsumerAverageConsumptionSearchMonth', sendSelectedParam, this.httpOptions);
    };
    ConsumerReportService.prototype.getCosumptionChartForYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/consumer/GetConsumerAverageConsumptionByYear', sendSelectedParam, this.httpOptions);
    };
    ConsumerReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ConsumerReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConsumerReportService);
    return ConsumerReportService;
}());



/***/ }),

/***/ "./src/app/reports/flatreport/flat-report.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/reports/flatreport/flat-report.service.ts ***!
  \***********************************************************/
/*! exports provided: FlatReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatReportService", function() { return FlatReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlatReportService = /** @class */ (function () {
    function FlatReportService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    // flat report chart apis
    FlatReportService.prototype.getFlatCosumptionChartForDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/flat/GetFlatConsumptionBYDay', sendSelectedParam, this.httpOptions);
    };
    FlatReportService.prototype.getFlatCosumptionChartForMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/flat/GetFlatConsumptionBYMonthly', sendSelectedParam, this.httpOptions);
    };
    FlatReportService.prototype.getFlatCosumptionChartForYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/flat/GetFlatConsumptionBYYearly', sendSelectedParam, this.httpOptions);
    };
    // flat report chart apis
    // flat report table apis
    FlatReportService.prototype.getFlatConsumptionTableApi = function (parameters) {
        return this.http.post(this.urls.urlLink + '/flat/flat_details_table', parameters, this.httpOptions);
    };
    FlatReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    FlatReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FlatReportService);
    return FlatReportService;
}());



/***/ }),

/***/ "./src/app/reports/flatreport/flatreport.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reports/flatreport/flatreport.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvZmxhdHJlcG9ydC9mbGF0cmVwb3J0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/reports/flatreport/flatreport.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reports/flatreport/flatreport.component.ts ***!
  \************************************************************/
/*! exports provided: FlatreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatreportComponent", function() { return FlatreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flat_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flat-report.service */ "./src/app/reports/flatreport/flat-report.service.ts");
/* harmony import */ var _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metadata/flat/flat.service */ "./src/app/metadata/flat/flat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlatreportComponent = /** @class */ (function () {
    function FlatreportComponent(flatService, flatReportService) {
        this.flatService = flatService;
        this.flatReportService = flatReportService;
        this.selectedView = 'month';
        this.monthList = [
            { 'monthname': 'Jan', 'monthnumber': 1 },
            { 'monthname': 'Feb', 'monthnumber': 2 },
            { 'monthname': 'Mar', 'monthnumber': 3 },
            { 'monthname': 'Apr', 'monthnumber': 4 },
            { 'monthname': 'May', 'monthnumber': 5 },
            { 'monthname': 'Jun', 'monthnumber': 6 },
            { 'monthname': 'Jul', 'monthnumber': 7 },
            { 'monthname': 'Aug', 'monthnumber': 8 },
            { 'monthname': 'Sep', 'monthnumber': 9 },
            { 'monthname': 'Oct', 'monthnumber': 11 },
            { 'monthname': 'Nov', 'monthnumber': 12 },
        ];
        this.selectedYear = '2020';
    }
    FlatreportComponent.prototype.getFlatServiceDetails = function () {
        var _this = this;
        this.flatService.getallFlatDetailss().subscribe(function (response) {
            _this.get_flat_list = response.flat_details;
            if (response.status == '200') {
                _this.selectedOption = response.flat_details[0]._id;
                _this.get_flatreport_for_current_month();
            }
        });
    };
    FlatreportComponent.prototype.get_year = function (selectedYear) {
        this.selected_year = selectedYear;
    };
    FlatreportComponent.prototype.get_month = function (selectedMonth) {
        this.selected_month = selectedMonth;
    };
    FlatreportComponent.prototype.get_flatReport = function (selectedOption) {
        this.flat_ids = selectedOption;
    };
    FlatreportComponent.prototype.get_flatreport_for_current_month = function () {
        var _this = this;
        var sendParam = {
            'flat_id': (!this.flat_ids ? this.selectedOption : this.flat_ids),
            'year': Number(!this.selected_year ? this.selectedYear : this.selected_year)
        };
        //  month view chart report
        this.flatReportService.getFlatCosumptionChartForMonth(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            if (response.response) {
                _this.linechart();
            }
        });
        // table
        this.flatReportService.getFlatConsumptionTableApi(sendParam).subscribe(function (response) {
            _this.get_flat_table_report = response;
        });
    };
    FlatreportComponent.prototype.get_flatreport_for_current_day = function () {
        var _this = this;
        var sendParam = {
            'flat_id': (!this.flat_ids ? this.selectedOption : this.flat_ids),
            'month': Number(!this.selected_month ? 1 : this.selected_month),
            'year': (!this.selected_year ? 2019 : Number(this.selected_year))
        };
        this.selectedMonth = sendParam.month;
        //  day view chart
        this.flatReportService.getFlatCosumptionChartForDay(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            if (response.response) {
                _this.linechart();
            }
        });
        // table
        this.flatReportService.getFlatConsumptionTableApi(sendParam).subscribe(function (response) {
            _this.get_flat_table_report = response;
        });
    };
    FlatreportComponent.prototype.get_flatreport_for_current_year = function () {
        var _this = this;
        var sendParam = {
            'flat_id': (!this.flat_ids ? this.selectedOption : this.flat_ids)
        };
        //  year view chart
        this.flatReportService.getFlatCosumptionChartForYear(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            if (response.response) {
                _this.linechart();
            }
        });
        // table
        this.flatReportService.getFlatConsumptionTableApi(sendParam).subscribe(function (response) {
            _this.get_flat_table_report = response;
        });
    };
    FlatreportComponent.prototype.get_flat_report = function () {
        var param = this.selectedView;
        switch (param) {
            case 'year':
                this.get_flatreport_for_current_year();
                break;
            case 'month':
                this.get_flatreport_for_current_month();
                break;
            case 'day':
                this.get_flatreport_for_current_day();
                break;
        }
    };
    FlatreportComponent.prototype.linechart = function () {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_1__;
        this.chartOptions = {
            chart: {
                type: 'areaspline'
            },
            title: {
                text: "Monthly Average Usage"
            },
            subtitle: {
                text: "Detail Report"
            },
            xAxis: {
                categories: this.get_flat_chart_report.header_list
            },
            yAxis: {
                title: {
                    text: "Monthly Report"
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_1__["defaultOptions"].legend.backgroundColor || '#FFFFFF'
            },
            tooltip: {
                shared: true,
                valueSuffix: ' units'
            },
            plotOptions: {
                areaspline: {
                    dataLabels: {
                        enabled: true
                    },
                    fillOpacity: 0.5
                }
            },
            series: [
                {
                    name: 'Water Usage',
                    data: this.get_flat_chart_report.value_list
                }
            ]
        };
    };
    FlatreportComponent.prototype.ngOnInit = function () {
        this.getFlatServiceDetails();
    };
    FlatreportComponent.ctorParameters = function () { return [
        { type: _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"] },
        { type: _flat_report_service__WEBPACK_IMPORTED_MODULE_2__["FlatReportService"] }
    ]; };
    FlatreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flatreport',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./flatreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/flatreport/flatreport.component.html"),
            styles: [__webpack_require__(/*! ./flatreport.component.css */ "./src/app/reports/flatreport/flatreport.component.css")]
        }),
        __metadata("design:paramtypes", [_metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_3__["FlatService"], _flat_report_service__WEBPACK_IMPORTED_MODULE_2__["FlatReportService"]])
    ], FlatreportComponent);
    return FlatreportComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple_report {\n    height: 100px;\n    margin-left: 10px;\n    margin-top: 12px;\n    border: 1px solid #d2d2d2;\n    box-shadow: 3px 5px 2px -1px #b7b7b7;\n    background-color: #ffffff;\n    padding: 15px 18px;\n}\n\n.multiple_report .fa {\n    font-size: 24px;\n    color: #ffffff;\n    background-color: #03A9F4;\n    border-radius: 50%;\n    padding: 20px 20px;\n    border: 1px solid #757575;\n}\n\n.report_title {\n    color: #565656;\n    font-weight: 900;\n}\n\n.sub_title {\n    font-size: 13px;\n    color: #888888;\n    position: absolute;\n    right: 18px;\n    top: 53px;\n}\n\n.box-body h6 {\n    margin-top: 25px;\n    margin-left: 13px;\n}\n\n.padding-right-28 {\n    padding-right: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11bHRpcGxlX3JlcG9ydCB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG4gICAgYm94LXNoYWRvdzogM3B4IDVweCAycHggLTFweCAjYjdiN2I3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTVweCAxOHB4O1xufVxuXG4ubXVsdGlwbGVfcmVwb3J0IC5mYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwM0E5RjQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzU3NTc1O1xufVxuXG4ucmVwb3J0X3RpdGxlIHtcbiAgICBjb2xvcjogIzU2NTY1NjtcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uc3ViX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxOHB4O1xuICAgIHRvcDogNTNweDtcbn1cblxuLmJveC1ib2R5IGg2IHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuXG4ucGFkZGluZy1yaWdodC0yOCB7XG4gICAgcGFkZGluZy1yaWdodDogMjhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/reports/rtoreport/rto-report.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/reports/rtoreport/rto-report.service.ts ***!
  \*********************************************************/
/*! exports provided: RtoReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtoReportService", function() { return RtoReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RtoReportService = /** @class */ (function () {
    function RtoReportService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    // flat report chart apis
    RtoReportService.prototype.getRTUCosumptionChartForDay = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/rtu/get_average_consumption_of_rtus_by_current_day', sendSelectedParam, this.httpOptions);
    };
    RtoReportService.prototype.getRTUCosumptionChartForMonth = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/rtu/get_average_consumption_of_rtus_by_current_month', sendSelectedParam, this.httpOptions);
    };
    RtoReportService.prototype.getRTUCosumptionChartForYear = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/rtu/get_average_consumption_of_rtus_by_current_year', sendSelectedParam, this.httpOptions);
    };
    RtoReportService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RtoReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RtoReportService);
    return RtoReportService;
}());



/***/ }),

/***/ "./src/app/reports/rtoreport/rtoreport.component.css":
/*!***********************************************************!*\
  !*** ./src/app/reports/rtoreport/rtoreport.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcnRvcmVwb3J0L3J0b3JlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reports/rtoreport/rtoreport.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reports/rtoreport/rtoreport.component.ts ***!
  \**********************************************************/
/*! exports provided: RtoreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtoreportComponent", function() { return RtoreportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _metadata_rtu_rtu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../metadata/rtu/rtu.service */ "./src/app/metadata/rtu/rtu.service.ts");
/* harmony import */ var _rto_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rto-report.service */ "./src/app/reports/rtoreport/rto-report.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/bullet */ "./node_modules/highcharts/modules/bullet.js");
/* harmony import */ var highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





highcharts_modules_bullet__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_3__);
var RtoreportComponent = /** @class */ (function () {
    function RtoreportComponent(rtuService, rtoReportService) {
        this.rtuService = rtuService;
        this.rtoReportService = rtoReportService;
        this.years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"];
        this.selectedYear = "2020";
        this.monthList = [
            { 'monthname': 'Jan', 'monthnumber': 1 },
            { 'monthname': 'Feb', 'monthnumber': 2 },
            { 'monthname': 'Mar', 'monthnumber': 3 },
            { 'monthname': 'Apr', 'monthnumber': 4 },
            { 'monthname': 'May', 'monthnumber': 5 },
            { 'monthname': 'Jun', 'monthnumber': 6 },
            { 'monthname': 'Jul', 'monthnumber': 7 },
            { 'monthname': 'Aug', 'monthnumber': 8 },
            { 'monthname': 'Sep', 'monthnumber': 9 },
            { 'monthname': 'Oct', 'monthnumber': 11 },
            { 'monthname': 'Nov', 'monthnumber': 12 },
        ];
    }
    RtoreportComponent.prototype.getRTUdata = function () {
        var _this = this;
        this.rtuService.getRtuDetails().subscribe(function (response) {
            _this.getRtuList = response.response;
        });
    };
    RtoreportComponent.prototype.get_rtuReport = function (selectedOption) {
        this.flat_ids = selectedOption;
    };
    RtoreportComponent.prototype.get_rtureport_for_current_month = function () {
        var _this = this;
        var sendParam = {
            'rtu_id': this.flat_ids
        };
        //  month view chart report
        this.rtoReportService.getRTUCosumptionChartForMonth(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            _this.bulletCharts(_this.get_flat_chart_report);
        });
    };
    RtoreportComponent.prototype.get_rtureport_for_current_day = function () {
        var _this = this;
        var sendParam = {
            'rtu_id': this.flat_ids
        };
        //  day view chart
        this.rtoReportService.getRTUCosumptionChartForDay(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            _this.bulletCharts(_this.get_flat_chart_report);
        });
    };
    RtoreportComponent.prototype.get_rtureport_for_current_year = function () {
        var _this = this;
        var sendParam = {
            'rtu_id': this.flat_ids
        };
        //  year view chart
        this.rtoReportService.getRTUCosumptionChartForYear(sendParam).subscribe(function (response) {
            _this.get_flat_chart_report = response.response;
            _this.bulletCharts(_this.get_flat_chart_report);
        });
    };
    RtoreportComponent.prototype.get_rtu_report = function () {
        var param = this.selectedView;
        switch (param) {
            case 'year':
                this.get_rtureport_for_current_year();
                break;
            case 'month':
                this.get_rtureport_for_current_month();
                break;
            case 'day':
                this.get_rtureport_for_current_day();
                break;
        }
    };
    RtoreportComponent.prototype.bulletCharts = function (bulletdata) {
        this.highcharts = highcharts__WEBPACK_IMPORTED_MODULE_3__;
        this.chartOptions = {
            chart: {
                marginTop: 60,
                inverted: true,
                marginLeft: 60,
                type: 'bullet'
            },
            legend: {
                enabled: false
            },
            title: {
                text: '2020 January'
            },
            xAxis: {
                categories: ['Usage']
            },
            exporting: {
                enabled: false
            },
            yAxis: {
                gridLineWidth: 0,
                plotBands: [{
                        from: 0,
                        to: 150,
                        color: '#91ddff'
                    }, {
                        from: 150,
                        to: 225,
                        color: '#91ddff'
                    }, {
                        from: 225,
                        to: 9e9,
                        color: '#91ddff'
                    }],
                title: null
            },
            plotOptions: {
                series: {
                    pointPadding: 0.25,
                    borderWidth: 0,
                    color: '#00344c',
                    targetOptions: {
                        width: '200%'
                    }
                }
            },
            series: [{
                    data: [{
                            y: bulletdata.value,
                            target: 210
                        }]
                }],
            tooltip: {
                pointFormat: '<b>{point.y}</b> (with target at {point.target})'
            }
        };
    };
    RtoreportComponent.prototype.ngOnInit = function () {
        this.getRTUdata();
    };
    RtoreportComponent.ctorParameters = function () { return [
        { type: _metadata_rtu_rtu_service__WEBPACK_IMPORTED_MODULE_1__["RtuService"] },
        { type: _rto_report_service__WEBPACK_IMPORTED_MODULE_2__["RtoReportService"] }
    ]; };
    RtoreportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rtoreport',
            //moduleId: module.id,
            template: __webpack_require__(/*! raw-loader!./rtoreport.component.html */ "./node_modules/raw-loader/index.js!./src/app/reports/rtoreport/rtoreport.component.html"),
            styles: [__webpack_require__(/*! ./rtoreport.component.css */ "./src/app/reports/rtoreport/rtoreport.component.css")]
        }),
        __metadata("design:paramtypes", [_metadata_rtu_rtu_service__WEBPACK_IMPORTED_MODULE_1__["RtuService"], _rto_report_service__WEBPACK_IMPORTED_MODULE_2__["RtoReportService"]])
    ], RtoreportComponent);
    return RtoreportComponent;
}());



/***/ }),

/***/ "./src/app/rolematrix/rolematrix.component.css":
/*!*****************************************************!*\
  !*** ./src/app/rolematrix/rolematrix.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple_report {\n    width: 46%;\n    float: left;\n    margin-left: 10px;\n    margin-top: 12px;\n    border: 1px solid #91d7f7;\n    box-shadow: 3px 5px 2px -1px #b7b7b7;\n    background-color: #ffffff;\n    padding: 14px 8px;\n    color: #004a6b;\n    border-radius: 21px;\n    font-size: 15px;\n}\n\n.box-body h6 {\n    margin-top: 25px;\n    margin-left: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZW1hdHJpeC9yb2xlbWF0cml4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yb2xlbWF0cml4L3JvbGVtYXRyaXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXBsZV9yZXBvcnQge1xuICAgIHdpZHRoOiA0NiU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTFkN2Y3O1xuICAgIGJveC1zaGFkb3c6IDNweCA1cHggMnB4IC0xcHggI2I3YjdiNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggOHB4O1xuICAgIGNvbG9yOiAjMDA0YTZiO1xuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYm94LWJvZHkgaDYge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/rolematrix/rolematrix.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rolematrix/rolematrix.component.ts ***!
  \****************************************************/
/*! exports provided: RolematrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolematrixComponent", function() { return RolematrixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rolematrix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolematrix.service */ "./src/app/rolematrix/rolematrix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RolematrixComponent = /** @class */ (function () {
    function RolematrixComponent(rolematrix) {
        this.rolematrix = rolematrix;
    }
    RolematrixComponent.prototype.getRoleList = function () {
        var _this = this;
        this.rolematrix.getUserRoleList().subscribe(function (res) {
            _this.getRoleLists = res.roles_list;
        });
    };
    RolematrixComponent.prototype.ngOnInit = function () {
        this.getRoleList();
    };
    RolematrixComponent.ctorParameters = function () { return [
        { type: _rolematrix_service__WEBPACK_IMPORTED_MODULE_1__["rolematrixService"] }
    ]; };
    RolematrixComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rolematrix',
            template: __webpack_require__(/*! raw-loader!./rolematrix.component.html */ "./node_modules/raw-loader/index.js!./src/app/rolematrix/rolematrix.component.html"),
            styles: [__webpack_require__(/*! ./rolematrix.component.css */ "./src/app/rolematrix/rolematrix.component.css")]
        }),
        __metadata("design:paramtypes", [_rolematrix_service__WEBPACK_IMPORTED_MODULE_1__["rolematrixService"]])
    ], RolematrixComponent);
    return RolematrixComponent;
}());



/***/ }),

/***/ "./src/app/rolematrix/rolematrix.service.ts":
/*!**************************************************!*\
  !*** ./src/app/rolematrix/rolematrix.service.ts ***!
  \**************************************************/
/*! exports provided: rolematrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rolematrixService", function() { return rolematrixService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var rolematrixService = /** @class */ (function () {
    function rolematrixService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    rolematrixService.prototype.getUserRoleList = function () {
        return this.http.get(this.urls.urlLink + '/get_all_roles', this.httpOptions);
    };
    rolematrixService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    rolematrixService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], rolematrixService);
    return rolematrixService;
}());



/***/ }),

/***/ "./src/app/rolesettings/rolebyusers/rolebyusers.component.css":
/*!********************************************************************!*\
  !*** ./src/app/rolesettings/rolebyusers/rolebyusers.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzZXR0aW5ncy9yb2xlYnl1c2Vycy9yb2xlYnl1c2Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rolesettings/rolebyusers/rolebyusers.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/rolesettings/rolebyusers/rolebyusers.component.ts ***!
  \*******************************************************************/
/*! exports provided: RolebyusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolebyusersComponent", function() { return RolebyusersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rolebyusers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rolebyusers.service */ "./src/app/rolesettings/rolebyusers/rolebyusers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../metadata/building/building.service */ "./src/app/metadata/building/building.service.ts");
/* harmony import */ var _rolematrix_rolematrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rolematrix/rolematrix.service */ "./src/app/rolematrix/rolematrix.service.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users.service */ "./src/app/rolesettings/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RolebyusersComponent = /** @class */ (function () {
    function RolebyusersComponent(fb, rolebyuserServi, buildingServi, rolematrixServi, UsersServi) {
        this.fb = fb;
        this.rolebyuserServi = rolebyuserServi;
        this.buildingServi = buildingServi;
        this.rolematrixServi = rolematrixServi;
        this.UsersServi = UsersServi;
        this.assignRoletoUserForm = this.fb.group({
            user_id: [''],
            role: [''],
            building_id: ['']
        });
    }
    RolebyusersComponent.prototype.getRolebyUsersListFunction = function () {
        var _this = this;
        this.rolebyuserServi.getRoleUsersList().subscribe(function (response) {
            _this.rolebyuserList = response.users_list;
        });
    };
    ;
    RolebyusersComponent.prototype.getBuildingListFunction = function () {
        var _this = this;
        this.buildingServi.getBuildingDetails().subscribe(function (res) {
            _this.buildingList = res.building_details;
        });
    };
    ;
    RolebyusersComponent.prototype.getRoleListFunction = function () {
        var _this = this;
        this.rolematrixServi.getUserRoleList().subscribe(function (res) {
            _this.roleList = res.roles_list;
        });
    };
    ;
    RolebyusersComponent.prototype.getUserListFunction = function () {
        var _this = this;
        this.UsersServi.getUsersList().subscribe(function (res) {
            _this.userList = res.users_list;
        });
    };
    RolebyusersComponent.prototype.assignRoleToUser = function () {
        var _this = this;
        this.rolebyuserServi.assignRoletoUsersListApi(this.assignRoletoUserForm.value).subscribe(function (response) {
            _this.get_create_status = response.response;
            if (response.status == 200) {
                _this.getRolebyUsersListFunction();
            }
        });
    };
    RolebyusersComponent.prototype.ngOnInit = function () {
        this.getRolebyUsersListFunction();
        this.getBuildingListFunction();
        this.getRoleListFunction();
        this.getUserListFunction();
    };
    RolebyusersComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _rolebyusers_service__WEBPACK_IMPORTED_MODULE_1__["RolebyusersService"] },
        { type: _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"] },
        { type: _rolematrix_rolematrix_service__WEBPACK_IMPORTED_MODULE_4__["rolematrixService"] },
        { type: _users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }
    ]; };
    RolebyusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rolebyusers',
            template: __webpack_require__(/*! raw-loader!./rolebyusers.component.html */ "./node_modules/raw-loader/index.js!./src/app/rolesettings/rolebyusers/rolebyusers.component.html"),
            styles: [__webpack_require__(/*! ./rolebyusers.component.css */ "./src/app/rolesettings/rolebyusers/rolebyusers.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _rolebyusers_service__WEBPACK_IMPORTED_MODULE_1__["RolebyusersService"], _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"], _rolematrix_rolematrix_service__WEBPACK_IMPORTED_MODULE_4__["rolematrixService"], _users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]])
    ], RolebyusersComponent);
    return RolebyusersComponent;
}());



/***/ }),

/***/ "./src/app/rolesettings/rolebyusers/rolebyusers.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/rolesettings/rolebyusers/rolebyusers.service.ts ***!
  \*****************************************************************/
/*! exports provided: RolebyusersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolebyusersService", function() { return RolebyusersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolebyusersService = /** @class */ (function () {
    function RolebyusersService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    RolebyusersService.prototype.getRoleUsersList = function () {
        return this.http.get(this.urls.urlLink + '/get_role_by_user', this.httpOptions);
    };
    RolebyusersService.prototype.assignRoletoUsersListApi = function (assignedRole) {
        return this.http.post(this.urls.urlLink + '/assign_role', assignedRole, this.httpOptions);
    };
    RolebyusersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    RolebyusersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RolebyusersService);
    return RolebyusersService;
}());



/***/ }),

/***/ "./src/app/rolesettings/rolesetting.module.ts":
/*!****************************************************!*\
  !*** ./src/app/rolesettings/rolesetting.module.ts ***!
  \****************************************************/
/*! exports provided: RolesettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesettingModule", function() { return RolesettingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RolesettingModule = /** @class */ (function () {
    function RolesettingModule() {
    }
    RolesettingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], RolesettingModule);
    return RolesettingModule;
}());



/***/ }),

/***/ "./src/app/rolesettings/rolesettings.component.css":
/*!*********************************************************!*\
  !*** ./src/app/rolesettings/rolesettings.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple_report {\n    width: 13.5%;\n    float: left;\n    margin-left: 10px;\n    margin-top: 12px;\n    border: 1px solid #d8d8d8;\n    box-shadow: 3px 4px 2px -1px #b7b7b7;\n    background-color: #ffffff;\n    padding: 14px 8px;\n    color: #232323;\n    border-radius: 4px;\n    font-size: 14px;\n    height: 99px;\n    cursor: pointer;\n    transition: 0.6s;\n}\n\n.multiple_report:hover {\n    background-color: #ececec;\n}\n\n.box-body h6 {\n    margin-top: 25px;\n    margin-left: 13px;\n}\n\n.master_icons {\n    font-size: 28px;\n    text-align: center;\n}\n\n.master_icon_names {\n    text-align: center;\n    line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZXNldHRpbmdzL3JvbGVzZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yb2xlc2V0dGluZ3Mvcm9sZXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXVsdGlwbGVfcmVwb3J0IHtcbiAgICB3aWR0aDogMTMuNSU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIGJveC1zaGFkb3c6IDNweCA0cHggMnB4IC0xcHggI2I3YjdiNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE0cHggOHB4O1xuICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiA5OXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4ubXVsdGlwbGVfcmVwb3J0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xufVxuXG4uYm94LWJvZHkgaDYge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG59XG5cbi5tYXN0ZXJfaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXN0ZXJfaWNvbl9uYW1lcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/rolesettings/rolesettings.component.ts":
/*!********************************************************!*\
  !*** ./src/app/rolesettings/rolesettings.component.ts ***!
  \********************************************************/
/*! exports provided: RolesettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesettingsComponent", function() { return RolesettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RolesettingsComponent = /** @class */ (function () {
    function RolesettingsComponent() {
    }
    RolesettingsComponent.prototype.ngOnInit = function () {
    };
    RolesettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rolesettings',
            template: __webpack_require__(/*! raw-loader!./rolesettings.component.html */ "./node_modules/raw-loader/index.js!./src/app/rolesettings/rolesettings.component.html"),
            styles: [__webpack_require__(/*! ./rolesettings.component.css */ "./src/app/rolesettings/rolesettings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RolesettingsComponent);
    return RolesettingsComponent;
}());



/***/ }),

/***/ "./src/app/rolesettings/users/users.component.css":
/*!********************************************************!*\
  !*** ./src/app/rolesettings/users/users.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvbGVzZXR0aW5ncy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rolesettings/users/users.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/rolesettings/users/users.component.ts ***!
  \*******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/rolesettings/users/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent(userServi) {
        this.userServi = userServi;
    }
    UsersComponent.prototype.getUsersListFunction = function () {
        var _this = this;
        this.userServi.getUsersList().subscribe(function (response) {
            _this.userList = response.users_list;
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsersListFunction();
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"] }
    ]; };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/rolesettings/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/rolesettings/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/rolesettings/users/users.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/rolesettings/users/users.service.ts ***!
  \*****************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    UsersService.prototype.getUsersList = function () {
        return this.http.get(this.urls.urlLink + '/get_all_users', this.httpOptions);
    };
    UsersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_head {\n    text-align: center;\n    font-weight: 100;\n    font-size: 30px;\n    color: #7b7b7b;\n    text-transform: lowercase;\n}\n\ninput {\n    outline: none;\n    border: none;\n}\n\n.login-box h3 {\n    text-align: center;\n    font-weight: 900;\n    font-size: 34px;\n    color: #3bc2ff;\n}\n\ninput:focus {\n    border-color: transparent !important;\n}\n\ninput:focus::-webkit-input-placeholder {\n    color: transparent;\n}\n\ninput:focus:-moz-placeholder {\n    color: transparent;\n}\n\ninput:focus::-moz-placeholder {\n    color: transparent;\n}\n\ninput:focus:-ms-input-placeholder {\n    color: transparent;\n}\n\ninput::-webkit-input-placeholder {\n    color: #adadad;\n}\n\ninput:-moz-placeholder {\n    color: #adadad;\n}\n\ninput::-moz-placeholder {\n    color: #adadad;\n}\n\ninput:-ms-input-placeholder {\n    color: #adadad;\n}\n\ntextarea::-webkit-input-placeholder {\n    color: #adadad;\n}\n\ntextarea:-moz-placeholder {\n    color: #adadad;\n}\n\ntextarea::-moz-placeholder {\n    color: #adadad;\n}\n\n/*---------------------------------------------*/\n\nbutton {\n    outline: none !important;\n    border: none;\n    background: transparent;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\niframe {\n    border: none !important;\n}\n\n.container-login100 {\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 15px;\n    background: #ffffff;\n}\n\n.wrap-login100 {\n    background: #fff;\n    border-radius: 10px;\n    overflow: hidden;\n    padding: 23px 4px 19px 4px;\n}\n\n/*------------------------------------------------------------------\n[ Form ]*/\n\n.login100-form {\n    width: 100%;\n}\n\n.login100-form-title i {\n    font-size: 60px;\n}\n\n/*------------------------------------------------------------------\n[ Input ]*/\n\n.wrap-input100 {\n    width: 100%;\n    position: relative;\n    border-bottom: 2px solid #d2d2d2;\n    margin-bottom: 37px;\n}\n\n.input100 {\n    font-family: Poppins-Regular;\n    font-size: 15px;\n    color: #555555;\n    line-height: 1.2;\n    display: block;\n    width: 100%;\n    height: 45px;\n    background: transparent;\n    padding: 0 5px;\n}\n\n/*---------------------------------------------*/\n\n/*//////////////////////////////////////////////////////////////////\n[ RESTYLE TAG ]*/\n\n/*---------------------------------------------*/\n\n.focus-input100 {\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n}\n\n.focus-input100::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: -2px;\n    left: 0;\n    width: 0;\n    height: 2px;\n    transition: all 0.4s;\n    background: #6a7dfe;\n}\n\n.focus-input100::after {\n    font-family: Poppins-Regular;\n    font-size: 15px;\n    color: #999999;\n    line-height: 1.2;\n    content: attr(data-placeholder);\n    display: block;\n    width: 100%;\n    position: absolute;\n    top: 16px;\n    left: 0px;\n    padding-left: 5px;\n    transition: all 0.4s;\n}\n\n.input100:focus+.focus-input100::after {\n    top: -15px;\n}\n\n.input100:focus+.focus-input100::before {\n    width: 100%;\n}\n\n.has-val.input100+.focus-input100::after {\n    top: -15px;\n}\n\n.has-val.input100+.focus-input100::before {\n    width: 100%;\n}\n\n.login-box {\n    margin-top: 3em;\n    border: 1px solid #e2e2e2;\n    padding: 19px 14px 27px 14px;\n    background-color: white;\n}\n\n.login_section {\n    padding: 0;\n}\n\n.login_section .btn {\n    background-color: #16b6ff;\n    color: white;\n    width: 100%;\n}\n\n.p-t-115 {\n    margin-top: 19px;\n    font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBR0EsZ0RBQWdEOztBQUVoRDtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFLakIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBR0E7U0FDUzs7QUFFVDtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7VUFDVTs7QUFFVjtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFHQSxnREFBZ0Q7O0FBR2hEO2dCQUNnQjs7QUFHaEIsZ0RBQWdEOztBQUVoRDtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFJWCxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULGlCQUFpQjtJQUlqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX2hlYWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogIzdiN2I3YjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG5pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5sb2dpbi1ib3ggaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBjb2xvcjogIzNiYzJmZjtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuXG50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhZGFkYWQ7XG59XG5cbnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjYWRhZGFkO1xufVxuXG50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNhZGFkYWQ7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pZnJhbWUge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyLWxvZ2luMTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi53cmFwLWxvZ2luMTAwIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAyM3B4IDRweCAxOXB4IDRweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBGb3JtIF0qL1xuXG4ubG9naW4xMDAtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbjEwMC1mb3JtLXRpdGxlIGkge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuWyBJbnB1dCBdKi9cblxuLndyYXAtaW5wdXQxMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyZDJkMjtcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xufVxuXG4uaW5wdXQxMDAge1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLVJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuWyBSRVNUWUxFIFRBRyBdKi9cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5mb2N1cy1pbnB1dDEwMCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTJweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMnB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICBiYWNrZ3JvdW5kOiAjNmE3ZGZlO1xufVxuXG4uZm9jdXMtaW5wdXQxMDA6OmFmdGVyIHtcbiAgICBmb250LWZhbWlseTogUG9wcGlucy1SZWd1bGFyO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzk5OTk5OTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1wbGFjZWhvbGRlcik7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTZweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuXG4uaW5wdXQxMDA6Zm9jdXMrLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gICAgdG9wOiAtMTVweDtcbn1cblxuLmlucHV0MTAwOmZvY3VzKy5mb2N1cy1pbnB1dDEwMDo6YmVmb3JlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDArLmZvY3VzLWlucHV0MTAwOjphZnRlciB7XG4gICAgdG9wOiAtMTVweDtcbn1cblxuLmhhcy12YWwuaW5wdXQxMDArLmZvY3VzLWlucHV0MTAwOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tYm94IHtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBwYWRkaW5nOiAxOXB4IDE0cHggMjdweCAxNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW5fc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmxvZ2luX3NlY3Rpb24gLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2YjZmZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wLXQtMTE1IHtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup/signup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupServi, fb, router) {
        this.signupServi = signupServi;
        this.fb = fb;
        this.router = router;
        this.signupForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.loader = true;
        this.signupServi.signupintoserver(this.signupForm.value).subscribe(function (response) {
            _this.signup_token = response;
            _this.loader = false;
            if (_this.signup_token.token != 'Error Token') {
                if (_this.signup_token.token != 'Incorrect Password') {
                    _this.router.navigate(['']);
                }
                else {
                    _this.wrong_password = true;
                    setTimeout(function () {
                        _this.wrong_password = false;
                    }, 3000);
                }
            }
            else {
                _this.wrong_password = true;
                setTimeout(function () {
                    _this.wrong_password = false;
                }, 3000);
            }
        });
    };
    ;
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.service.ts":
/*!******************************************!*\
  !*** ./src/app/signup/signup.service.ts ***!
  \******************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    }
    SignupService.prototype.signupintoserver = function (createObj) {
        var json_list = {
            'email': createObj.email,
            'password': createObj.password
        };
        return this.http.post(this.urls.urlLink + '/create_user', json_list);
    };
    SignupService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/target-setting/target-by-building/target-by-building.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/target-setting/target-by-building/target-by-building.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmdldC1zZXR0aW5nL3RhcmdldC1ieS1idWlsZGluZy90YXJnZXQtYnktYnVpbGRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/target-setting/target-by-building/target-by-building.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/target-setting/target-by-building/target-by-building.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TargetByBuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetByBuildingComponent", function() { return TargetByBuildingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _target_by_building_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-by-building.service */ "./src/app/target-setting/target-by-building/target-by-building.service.ts");
/* harmony import */ var _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata/building/building.service */ "./src/app/metadata/building/building.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TargetByBuildingComponent = /** @class */ (function () {
    function TargetByBuildingComponent(targetbyBuildingServi, buildingServi, fb) {
        this.targetbyBuildingServi = targetbyBuildingServi;
        this.buildingServi = buildingServi;
        this.fb = fb;
        this.createTargetForm = this.fb.group({
            building_id: [''],
            target_value: ['']
        });
    }
    TargetByBuildingComponent.prototype.getBuildingListFunction = function () {
        var _this = this;
        this.buildingServi.getBuildingDetails().subscribe(function (res) {
            _this.getBuildingList = res.building_details;
        });
    };
    TargetByBuildingComponent.prototype.getlistofBuildingTargetedFunction = function () {
        var _this = this;
        this.targetbyBuildingServi.getlistofallBuildingTargetService().subscribe(function (res) {
            _this.getlistofBuildingtarget = res.target_list;
        });
    };
    TargetByBuildingComponent.prototype.setTargetByBuilding = function () {
        var _this = this;
        var json_obj = {
            'building_id': this.createTargetForm.value.building_id,
            'target_value': this.createTargetForm.value.target_value
        };
        this.targetbyBuildingServi.setTargetByBuildingService(json_obj).subscribe(function (res) {
            _this.setTargetResponse = res;
            _this.addedResponseMsg = true;
            if (res.response == 'success') {
                _this.getlistofBuildingTargetedFunction();
            }
            setTimeout(function () {
                _this.addedResponseMsg = false;
            }, 3000);
        });
    };
    TargetByBuildingComponent.prototype.getTargetbuBuildingIdFunction = function (buildingId) {
        var _this = this;
        var jsonLst = {
            'building_id': buildingId
        };
        this.loopTable = true;
        if (buildingId) {
            this.targetbyBuildingServi.getTargetByBuildingidService(jsonLst).subscribe(function (res) {
                _this.eachlistofBuildingtarget = res.response;
            });
        }
        else {
            this.getlistofBuildingTargetedFunction();
        }
    };
    TargetByBuildingComponent.prototype.editTargetbyBuildingFunction = function (targetObj, flag) {
        var _this = this;
        var jsonObj = {
            'building_id': targetObj.building_id,
            'target_value': targetObj.target_value
        };
        this.targetbyBuildingServi.setTargetByBuildingService(jsonObj).subscribe(function (res) {
            _this.eachlistofBuildingtarget = res.response;
            if (res.response == 'success') {
                if (flag) {
                    _this.getlistofBuildingTargetedFunction();
                }
                else {
                    _this.getTargetbuBuildingIdFunction(_this.selectBuilding);
                }
            }
        });
    };
    TargetByBuildingComponent.prototype.ngOnInit = function () {
        this.getBuildingListFunction();
        this.getlistofBuildingTargetedFunction();
    };
    TargetByBuildingComponent.ctorParameters = function () { return [
        { type: _target_by_building_service__WEBPACK_IMPORTED_MODULE_1__["TargetByBuildingService"] },
        { type: _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    TargetByBuildingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-target-by-building',
            template: __webpack_require__(/*! raw-loader!./target-by-building.component.html */ "./node_modules/raw-loader/index.js!./src/app/target-setting/target-by-building/target-by-building.component.html"),
            styles: [__webpack_require__(/*! ./target-by-building.component.css */ "./src/app/target-setting/target-by-building/target-by-building.component.css")]
        }),
        __metadata("design:paramtypes", [_target_by_building_service__WEBPACK_IMPORTED_MODULE_1__["TargetByBuildingService"], _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_2__["BuildingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TargetByBuildingComponent);
    return TargetByBuildingComponent;
}());



/***/ }),

/***/ "./src/app/target-setting/target-by-building/target-by-building.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/target-setting/target-by-building/target-by-building.service.ts ***!
  \*********************************************************************************/
/*! exports provided: TargetByBuildingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetByBuildingService", function() { return TargetByBuildingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TargetByBuildingService = /** @class */ (function () {
    function TargetByBuildingService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    TargetByBuildingService.prototype.getTargetByBuildingidService = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_target_by_building_id', sendSelectedParam, this.httpOptions);
        // year  rtu_id
    };
    TargetByBuildingService.prototype.setTargetByBuildingService = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/set_target_by_building_id', sendSelectedParam, this.httpOptions);
    };
    TargetByBuildingService.prototype.getlistofallBuildingTargetService = function () {
        return this.http.get(this.urls.urlLink + '/block/get_list_of_building_target', this.httpOptions);
    };
    TargetByBuildingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TargetByBuildingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TargetByBuildingService);
    return TargetByBuildingService;
}());



/***/ }),

/***/ "./src/app/target-setting/target-by-flat/target-by-flat.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/target-setting/target-by-flat/target-by-flat.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmdldC1zZXR0aW5nL3RhcmdldC1ieS1mbGF0L3RhcmdldC1ieS1mbGF0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/target-setting/target-by-flat/target-by-flat.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/target-setting/target-by-flat/target-by-flat.component.ts ***!
  \***************************************************************************/
/*! exports provided: TargetByFlatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetByFlatComponent", function() { return TargetByFlatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _target_by_flat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-by-flat.service */ "./src/app/target-setting/target-by-flat/target-by-flat.service.ts");
/* harmony import */ var _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../metadata/flat/flat.service */ "./src/app/metadata/flat/flat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TargetByFlatComponent = /** @class */ (function () {
    function TargetByFlatComponent(targetbyFlatServi, flatServi, fb) {
        this.targetbyFlatServi = targetbyFlatServi;
        this.flatServi = flatServi;
        this.fb = fb;
        this.createTargetForm = this.fb.group({
            flat_id: [''],
            target_value: ['']
        });
    }
    TargetByFlatComponent.prototype.getFlatListFunction = function () {
        var _this = this;
        this.flatServi.getallFlatDetailss().subscribe(function (res) {
            _this.getFlatList = res.flat_details;
        });
    };
    TargetByFlatComponent.prototype.getlistofFlatTargetedFunction = function () {
        var _this = this;
        this.targetbyFlatServi.getlistofallFlatTargetService().subscribe(function (res) {
            _this.getlistofFlattarget = res.target_list;
        });
    };
    TargetByFlatComponent.prototype.setTargetByFlat = function () {
        var _this = this;
        var json_obj = {
            'flat_id': this.createTargetForm.value.flat_id,
            'target_value': this.createTargetForm.value.target_value
        };
        this.targetbyFlatServi.setTargetByFlatService(json_obj).subscribe(function (res) {
            _this.setTargetResponse = res;
            _this.addedResponseMsg = true;
            if (res.response == 'success') {
                _this.getlistofFlatTargetedFunction();
            }
            setTimeout(function () {
                _this.addedResponseMsg = false;
            }, 3000);
        });
    };
    TargetByFlatComponent.prototype.getTargetbuFlatIdFunction = function (FlatId) {
        var _this = this;
        var jsonLst = {
            'flat_id': FlatId
        };
        this.loopTable = true;
        if (FlatId) {
            this.targetbyFlatServi.getTargetByFlatidService(jsonLst).subscribe(function (res) {
                _this.eachlistofBuildingtarget = res.response;
            });
        }
        else {
            this.getlistofFlatTargetedFunction();
        }
    };
    TargetByFlatComponent.prototype.editTargetbyBuildingFunction = function (targetObj, flag) {
        var _this = this;
        var jsonObj = {
            'flat_id': targetObj.flat_id,
            'target_value': targetObj.target_value
        };
        this.targetbyFlatServi.setTargetByFlatService(jsonObj).subscribe(function (res) {
            _this.eachlistofBuildingtarget = res.response;
            if (res.response == 'success') {
                if (flag) {
                    _this.getlistofFlatTargetedFunction();
                }
                else {
                    _this.getTargetbuFlatIdFunction(_this.selectBuilding);
                }
            }
        });
    };
    TargetByFlatComponent.prototype.ngOnInit = function () {
        this.getFlatListFunction();
        this.getlistofFlatTargetedFunction();
    };
    TargetByFlatComponent.ctorParameters = function () { return [
        { type: _target_by_flat_service__WEBPACK_IMPORTED_MODULE_1__["TargetByFlatService"] },
        { type: _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    TargetByFlatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-target-by-flat',
            template: __webpack_require__(/*! raw-loader!./target-by-flat.component.html */ "./node_modules/raw-loader/index.js!./src/app/target-setting/target-by-flat/target-by-flat.component.html"),
            styles: [__webpack_require__(/*! ./target-by-flat.component.css */ "./src/app/target-setting/target-by-flat/target-by-flat.component.css")]
        }),
        __metadata("design:paramtypes", [_target_by_flat_service__WEBPACK_IMPORTED_MODULE_1__["TargetByFlatService"], _metadata_flat_flat_service__WEBPACK_IMPORTED_MODULE_2__["FlatService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TargetByFlatComponent);
    return TargetByFlatComponent;
}());



/***/ }),

/***/ "./src/app/target-setting/target-by-flat/target-by-flat.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/target-setting/target-by-flat/target-by-flat.service.ts ***!
  \*************************************************************************/
/*! exports provided: TargetByFlatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetByFlatService", function() { return TargetByFlatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TargetByFlatService = /** @class */ (function () {
    function TargetByFlatService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    TargetByFlatService.prototype.getTargetByFlatidService = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_target_by_flat', sendSelectedParam, this.httpOptions);
        // year  rtu_id
    };
    TargetByFlatService.prototype.setTargetByFlatService = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/set_target_by_flat', sendSelectedParam, this.httpOptions);
    };
    TargetByFlatService.prototype.getlistofallFlatTargetService = function () {
        return this.http.get(this.urls.urlLink + '/block/get_list_of_flat_target', this.httpOptions);
    };
    TargetByFlatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TargetByFlatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TargetByFlatService);
    return TargetByFlatService;
}());



/***/ }),

/***/ "./src/app/target-setting/target-setting.component.css":
/*!*************************************************************!*\
  !*** ./src/app/target-setting/target-setting.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".multiple_report {\n    width: 13.5%;\n    float: left;\n    margin-left: 10px;\n    margin-top: 12px;\n    border: 1px solid #d8d8d8;\n    box-shadow: 3px 4px 2px -1px #b7b7b7;\n    background-color: #ffffff;\n    padding: 14px 8px;\n    color: #232323;\n    border-radius: 4px;\n    font-size: 14px;\n    height: 99px;\n    cursor: pointer;\n    transition: 0.6s;\n}\n\n.multiple_report:hover {\n    background-color: #ececec;\n}\n\n.box-body h6 {\n    margin-top: 25px;\n    margin-left: 13px;\n}\n\n.master_icons {\n    font-size: 28px;\n    text-align: center;\n}\n\n.master_icon_names {\n    text-align: center;\n    line-height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZ2V0LXNldHRpbmcvdGFyZ2V0LXNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGFyZ2V0LXNldHRpbmcvdGFyZ2V0LXNldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXBsZV9yZXBvcnQge1xuICAgIHdpZHRoOiAxMy41JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAycHggLTFweCAjYjdiN2I3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTRweCA4cHg7XG4gICAgY29sb3I6ICMyMzIzMjM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDk5cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNnM7XG59XG5cbi5tdWx0aXBsZV9yZXBvcnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG59XG5cbi5ib3gtYm9keSBoNiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcbn1cblxuLm1hc3Rlcl9pY29ucyB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hc3Rlcl9pY29uX25hbWVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/target-setting/target-setting.component.ts":
/*!************************************************************!*\
  !*** ./src/app/target-setting/target-setting.component.ts ***!
  \************************************************************/
/*! exports provided: TargetSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSettingComponent", function() { return TargetSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TargetSettingComponent = /** @class */ (function () {
    function TargetSettingComponent() {
    }
    TargetSettingComponent.prototype.ngOnInit = function () {
    };
    TargetSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-target-setting',
            template: __webpack_require__(/*! raw-loader!./target-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/target-setting/target-setting.component.html"),
            styles: [__webpack_require__(/*! ./target-setting.component.css */ "./src/app/target-setting/target-setting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TargetSettingComponent);
    return TargetSettingComponent;
}());



/***/ }),

/***/ "./src/app/target/target.component.css":
/*!*********************************************!*\
  !*** ./src/app/target/target.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhcmdldC90YXJnZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/target/target.component.ts":
/*!********************************************!*\
  !*** ./src/app/target/target.component.ts ***!
  \********************************************/
/*! exports provided: TargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetComponent", function() { return TargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _target_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target.service */ "./src/app/target/target.service.ts");
/* harmony import */ var _metadata_block_block_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../metadata/block/block.service */ "./src/app/metadata/block/block.service.ts");
/* harmony import */ var _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../metadata/building/building.service */ "./src/app/metadata/building/building.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TargetComponent = /** @class */ (function () {
    function TargetComponent(targetService, blockService, fb, buildingService) {
        this.targetService = targetService;
        this.blockService = blockService;
        this.fb = fb;
        this.buildingService = buildingService;
        this.loader1 = true;
        this.createTargetForm = this.fb.group({
            block_id: [''],
            target: ['']
        });
    }
    TargetComponent.prototype.getBuildingList = function () {
        var _this = this;
        this.buildingService.getBuildingDetails().subscribe(function (res) {
            _this.building_list = res.building_details;
            _this.selectBuilding = res.building_details[0]._id;
            _this.selected_building_id = res.building_details[0]._id;
            _this.getlistByBuildingid();
            _this.loader1 = false;
        });
    };
    ;
    TargetComponent.prototype.select_building = function (building_id) {
        this.selected_building_id = building_id;
        this.getlistByBuildingid();
    };
    ;
    TargetComponent.prototype.getBlockList = function () {
        var _this = this;
        this.blockService.getBlockServiceDetails().subscribe(function (res) {
            _this.blockList = res.block_details;
        });
    };
    ;
    TargetComponent.prototype.select_block = function (selected_block_id) {
        this.block_id = selected_block_id;
        this.getTargetListByBlockID();
    };
    ;
    TargetComponent.prototype.setTargetByBLOCKID = function () {
        var _this = this;
        var json_obj = {
            'block_id': this.createTargetForm.value.block_id,
            'target_value': this.createTargetForm.value.target
        };
        this.targetService.setTargetByBlockId(json_obj).subscribe(function (res) {
            _this.setTargetResponse = res;
        });
    };
    ;
    TargetComponent.prototype.getTargetListByBlockID = function () {
        var _this = this;
        var json_obj = {
            'block_id': this.block_id
        };
        this.targetService.getTargetByBlock_id(json_obj).subscribe(function (res) {
            _this.get_targetlist_for_table = res.response;
        });
    };
    ;
    TargetComponent.prototype.getlistByBuildingid = function () {
        var _this = this;
        var json_obj = {
            'building_id': this.selected_building_id
        };
        this.targetService.getlistTargetByBuildingId(json_obj).subscribe(function (res) {
            _this.get_targetlist_for_table = res.target_list;
        });
    };
    TargetComponent.prototype.ngOnInit = function () {
        this.getBlockList();
        this.getBuildingList();
    };
    TargetComponent.ctorParameters = function () { return [
        { type: _target_service__WEBPACK_IMPORTED_MODULE_1__["TargetService"] },
        { type: _metadata_block_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"] }
    ]; };
    TargetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-target',
            template: __webpack_require__(/*! raw-loader!./target.component.html */ "./node_modules/raw-loader/index.js!./src/app/target/target.component.html"),
            styles: [__webpack_require__(/*! ./target.component.css */ "./src/app/target/target.component.css")]
        }),
        __metadata("design:paramtypes", [_target_service__WEBPACK_IMPORTED_MODULE_1__["TargetService"], _metadata_block_block_service__WEBPACK_IMPORTED_MODULE_2__["BlockService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _metadata_building_building_service__WEBPACK_IMPORTED_MODULE_3__["BuildingService"]])
    ], TargetComponent);
    return TargetComponent;
}());



/***/ }),

/***/ "./src/app/target/target.service.ts":
/*!******************************************!*\
  !*** ./src/app/target/target.service.ts ***!
  \******************************************/
/*! exports provided: TargetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetService", function() { return TargetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globaltoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globaltoken */ "./src/app/globaltoken.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TargetService = /** @class */ (function () {
    function TargetService(http) {
        this.http = http;
        this.urls = new _globaltoken__WEBPACK_IMPORTED_MODULE_2__["globalToken"]().globalUrl;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.urls.token
            })
        };
    }
    TargetService.prototype.getTargetByBlock_id = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_target_by_block', sendSelectedParam, this.httpOptions);
        // year  rtu_id
    };
    TargetService.prototype.setTargetByBlockId = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/set_target_by_block', sendSelectedParam, this.httpOptions);
    };
    TargetService.prototype.getlistTargetByBuildingId = function (sendSelectedParam) {
        return this.http.post(this.urls.urlLink + '/block/get_list_of_target_by_blockwise_from_building', sendSelectedParam, this.httpOptions);
    };
    TargetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    TargetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TargetService);
    return TargetService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://122.166.156.230:4200/'
    // baseUrl:'http://122.166.156.230:30002/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/environments/environment */ "./src/environments/environment.ts");




if (_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/amit/angular4,5,6/angularproject/watermeter_team/CloudUI/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map