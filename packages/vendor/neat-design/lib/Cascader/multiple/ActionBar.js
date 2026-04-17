"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _Action = _interopRequireDefault(require("../../Action"));
var _SelectAll = _interopRequireDefault(require("./SelectAll"));
var _classnames = _interopRequireDefault(require("classnames"));
var _CascaderDropdownActionBar = _interopRequireDefault(require("../style/CascaderDropdownActionBar"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file ActionBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks

// Components

// Vendors

// Styles

// Types

var ActionBar = function ActionBar(_ref) {
  var loading = _ref.loading,
    select = _ref.select,
    changeOnSelect = _ref.changeOnSelect,
    onSelectAll = _ref.onSelectAll,
    onDeselectAll = _ref.onDeselectAll,
    onOk = _ref.onOk,
    onCancel = _ref.onCancel;
  var prefixCls = (0, _hooks.usePrefixCls)();
  var _useStyle = (0, _CascaderDropdownActionBar.default)(),
    styles = _useStyle.styles;
  return (0, _jsxRuntime.jsx)(_Action.default, {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-cascader-dropdown-action-bar")),
    info: select !== null && select !== void 0 && select.showSelectAll ? (0, _jsxRuntime.jsx)(_SelectAll.default, {
      disabled: loading || (select === null || select === void 0 ? void 0 : select.disabled),
      checked: select === null || select === void 0 ? void 0 : select.selectAll,
      indeterminate: select === null || select === void 0 ? void 0 : select.indeterminate,
      onSelectAll: onSelectAll,
      onDeselectAll: onDeselectAll
    }) : (0, _jsxRuntime.jsx)("span", {}),
    okButton: !changeOnSelect,
    okText: "OK",
    okType: "primary",
    cancelButton: !changeOnSelect,
    cancelText: "Cancel",
    cancelType: "tertiary",
    okButtonProps: {
      size: 'small',
      disabled: loading
    },
    cancelButtonProps: {
      size: 'small',
      disabled: loading
    },
    onOk: onOk,
    onCancel: onCancel
  });
};
var _default = exports.default = ActionBar;