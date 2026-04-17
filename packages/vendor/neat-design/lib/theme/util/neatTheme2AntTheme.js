"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = neatTheme2AntTheme;
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
var _token15 = require("../../Layout/token");
var _token16 = require("../../Menu/token");
var _token17 = require("../../Modal/token");
var _token18 = require("../../Notification/token");
var _token19 = require("../../Pagination/token");
var _token20 = require("../../Popover/token");
var _token21 = require("../../Progress/token");
var _token22 = require("../../Radio/token");
var _token23 = require("../../Rate/token");
var _token24 = require("../../Segmented/token");
var _token25 = require("../../Select/token");
var _token26 = require("../../Skeleton/token");
var _token27 = require("../../Spinner/token");
var _token28 = require("../../Steps/token");
var _token29 = require("../../Switch/token");
var _token30 = require("../../Table/token");
var _token31 = require("../../Tabs/token");
var _token32 = require("../../Tag/token");
var _token33 = require("../../Toast/token");
var _token34 = require("../../Tooltip/token");
var _token35 = require("../../Tree/token");
var _neatToken2AntToken = _interopRequireDefault(require("./neatToken2AntToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file neatTheme2AntTheme.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Vendors

// Types

function neatTheme2AntTheme(theme) {
  return {
    token: (0, _neatToken2AntToken.default)(theme.token),
    components: {
      Alert: (0, _token.neatToken2AntToken)(theme),
      Avatar: (0, _token2.neatToken2AntToken)(theme),
      Badge: (0, _token3.neatToken2AntToken)(theme),
      Breadcrumb: (0, _token4.neatToken2AntToken)(theme),
      Button: (0, _token5.neatToken2AntToken)(theme),
      Checkbox: (0, _token6.neatToken2AntToken)(),
      Collapse: (0, _token7.neatToken2AntToken)(theme),
      DatePicker: (0, _token8.neatToken2AntToken)(theme),
      Divider: (0, _token9.neatToken2AntToken)(),
      Drawer: (0, _token10.neatToken2AntToken)(),
      Dropdown: (0, _token11.neatToken2AntToken)(theme),
      Form: (0, _token12.neatToken2AntToken)(theme),
      Input: (0, _token13.neatToken2AntToken)(theme),
      InputNumber: (0, _token14.neatToken2AntToken)(theme),
      Menu: (0, _token16.neatToken2AntToken)(theme),
      Modal: (0, _token17.neatToken2AntToken)(theme),
      Layout: (0, _token15.neatToken2AntToken)(theme),
      Message: (0, _token33.neatToken2AntToken)(theme),
      Notification: (0, _token18.neatToken2AntToken)(),
      Pagination: (0, _token19.neatToken2AntToken)(theme),
      Popover: (0, _token20.neatToken2AntToken)(theme),
      Progress: (0, _token21.neatToken2AntToken)(theme),
      Radio: (0, _token22.neatToken2AntToken)(theme),
      Rate: (0, _token23.neatToken2AntToken)(theme),
      Segmented: (0, _token24.neatToken2AntToken)(theme),
      Select: (0, _token25.neatToken2AntToken)(theme),
      Skeleton: (0, _token26.neatToken2AntToken)(),
      Spin: (0, _token27.neatToken2AntToken)(theme),
      Steps: (0, _token28.neatToken2AntToken)(theme),
      Switch: (0, _token29.neatToken2AntToken)(theme),
      Table: (0, _token30.neatToken2AntToken)(theme),
      Tabs: (0, _token31.neatToken2AntToken)(theme),
      Tag: (0, _token32.neatToken2AntToken)(theme),
      Tooltip: (0, _token34.neatToken2AntToken)(theme),
      Tree: (0, _token35.neatToken2AntToken)(theme)
    }
  };
}