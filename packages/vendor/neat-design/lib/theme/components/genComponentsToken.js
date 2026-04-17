"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genComponentsToken = genComponentsToken;
var _token = require("../../Alert/token");
var _token2 = require("../../Avatar/token");
var _token3 = require("../../Badge/token");
var _token4 = require("../../Breadcrumb/token");
var _token5 = require("../../Button/token");
var _token6 = require("../../Checkbox/token");
var _token7 = require("../../Collapse/token");
var _token8 = require("../../DatePicker/token");
var _token9 = require("../../Divider/token");
var _token10 = require("../../Drawer/token");
var _token11 = require("../../Dropdown/token");
var _token12 = require("../../Form/token");
var _token13 = require("../../Input/token");
var _token14 = require("../../InputNumber/token");
var _token15 = require("../../Menu/token");
var _token16 = require("../../Modal/token");
var _token17 = require("../../Notification/token");
var _token18 = require("../../Pagination/token");
var _token19 = require("../../Popover/token");
var _token20 = require("../../Progress/token");
var _token21 = require("../../Radio/token");
var _token22 = require("../../Rate/token");
var _token23 = require("../../Segmented/token");
var _token24 = require("../../Select/token");
var _token25 = require("../../Skeleton/token");
var _token26 = require("../../Spinner/token");
var _token27 = require("../../Steps/token");
var _token28 = require("../../Switch/token");
var _token29 = require("../../Table/token");
var _token30 = require("../../Tabs/token");
var _token31 = require("../../Tag/token");
var _token32 = require("../../TimePicker/token");
var _token33 = require("../../Toast/token");
var _token34 = require("../../Tooltip/token");
var _token35 = require("../../Tree/token");
/**
 * @file genComponentsToken.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors

// Types

function genComponentsToken(token) {
  return {
    Alert: (0, _token.genToken)(token),
    Avatar: (0, _token2.genToken)(token),
    Badge: (0, _token3.genToken)(token),
    Breadcrumb: (0, _token4.genToken)(token),
    Button: (0, _token5.genToken)(token),
    Checkbox: (0, _token6.genToken)(token),
    Collapse: (0, _token7.genToken)(token),
    DatePicker: (0, _token8.genToken)(token),
    Divider: (0, _token9.genToken)(token),
    Drawer: (0, _token10.genToken)(token),
    Dropdown: (0, _token11.genToken)(token),
    Form: (0, _token12.genToken)(token),
    Input: (0, _token13.genToken)(token),
    InputNumber: (0, _token14.genToken)(token),
    Menu: (0, _token15.genToken)(token),
    Modal: (0, _token16.genToken)(token),
    Notification: (0, _token17.genToken)(token),
    Pagination: (0, _token18.genToken)(token),
    Popover: (0, _token19.genToken)(token),
    Progress: (0, _token20.genToken)(token),
    Radio: (0, _token21.genToken)(token),
    Rate: (0, _token22.genToken)(token),
    Segmented: (0, _token23.genToken)(token),
    Select: (0, _token24.genToken)(token),
    Skeleton: (0, _token25.genToken)(token),
    Spinner: (0, _token26.genToken)(token),
    Steps: (0, _token27.genToken)(token),
    Switch: (0, _token28.genToken)(token),
    Table: (0, _token29.genToken)(token),
    Tabs: (0, _token30.genToken)(token),
    Tag: (0, _token31.genToken)(token),
    TimePicker: (0, _token32.genToken)(token),
    Toast: (0, _token33.genToken)(token),
    Tooltip: (0, _token34.genToken)(token),
    Tree: (0, _token35.genToken)(token)
  };
}