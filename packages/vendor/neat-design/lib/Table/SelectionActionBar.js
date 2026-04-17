"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _hooks = require("../hooks");
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _ = require("../");
var _classnames = _interopRequireDefault(require("classnames"));
var _isNil = _interopRequireDefault(require("lodash/isNil"));
var _SelectionActionBar = _interopRequireDefault(require("./style/SelectionActionBar"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file SelectionActionBar.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks

// Components

// Vendors

// Styles

// Types

var SelectionActionBar = function SelectionActionBar(_ref) {
  var _configContext$locale5, _configContext$locale6;
  var selectedRowKeys = _ref.selectedRowKeys,
    totalNum = _ref.totalNum,
    loading = _ref.loading,
    action = _ref.action,
    selectedTotalNumberTip = _ref.selectedTotalNumberTip,
    onClearAll = _ref.onClearAll,
    _ref$selectAllAcrossP = _ref.selectAllAcrossPagesOptions,
    canSelectAllAcrossPages = _ref$selectAllAcrossP.canSelectAllAcrossPages,
    needSelectedTotalNumber = _ref$selectAllAcrossP.needSelectedTotalNumber,
    selectAllAcrossPages = _ref$selectAllAcrossP.selectAllAcrossPages,
    onChangeSelectAllAcrossPages = _ref$selectAllAcrossP.onChangeSelectAllAcrossPages,
    showSelectAll = _ref$selectAllAcrossP.showSelectAll;
  var prefixCls = (0, _usePrefixCls.default)();
  var _useStyle = (0, _SelectionActionBar.default)(),
    styles = _useStyle.styles;

  /**
   * Get neat config context
   */
  var configContext = (0, _hooks.useConfigContext)();
  var dataTotalNum = (0, _react.useMemo)(function () {
    var _ref2;
    return (_ref2 = needSelectedTotalNumber !== null && needSelectedTotalNumber !== void 0 ? needSelectedTotalNumber : totalNum) !== null && _ref2 !== void 0 ? _ref2 : 0;
  }, [needSelectedTotalNumber, totalNum]);
  var tip = (0, _react.useMemo)(function () {
    if (!(0, _isNil.default)(selectedTotalNumberTip)) return selectedTotalNumberTip;
    if (canSelectAllAcrossPages && selectAllAcrossPages) {
      var _configContext$locale, _configContext$locale2;
      return (_configContext$locale = (_configContext$locale2 = configContext.locale.Table).selectPopupAcrossTotalNumber) === null || _configContext$locale === void 0 ? void 0 : _configContext$locale.call(_configContext$locale2, dataTotalNum);
    } else {
      var _configContext$locale3, _configContext$locale4;
      return (_configContext$locale3 = (_configContext$locale4 = configContext.locale.Table).selectPopupTotalNumber) === null || _configContext$locale3 === void 0 ? void 0 : _configContext$locale3.call(_configContext$locale4, (selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length) || 0);
    }
  }, [canSelectAllAcrossPages, configContext.locale.Table, dataTotalNum, selectAllAcrossPages, selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.length, selectedTotalNumberTip]);
  return (0, _jsxRuntime.jsxs)("div", {
    className: (0, _classnames.default)(styles, "".concat(prefixCls, "-table-selection-action-bar")),
    children: [(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(prefixCls, "-table-selection-action-bar-content"),
      children: [(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-table-selection-action-bar-text"),
        children: tip
      }), (0, _jsxRuntime.jsxs)(_.Space, {
        split: (0, _jsxRuntime.jsx)(_.Divider, {
          alignment: "vertical",
          style: {
            borderColor: '#74848F'
          }
        }),
        size: 0,
        children: [canSelectAllAcrossPages && showSelectAll && (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
          children: selectAllAcrossPages ? (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {}) : (0, _jsxRuntime.jsx)(_.Button, {
            type: "link",
            size: "small",
            disabled: loading,
            onClick: function onClick() {
              return onChangeSelectAllAcrossPages(true);
            },
            children: (_configContext$locale5 = (_configContext$locale6 = configContext.locale.Table).selectPopupSelectAll) === null || _configContext$locale5 === void 0 ? void 0 : _configContext$locale5.call(_configContext$locale6, dataTotalNum)
          })
        }), (0, _jsxRuntime.jsx)(_.Button, {
          type: "link",
          size: "small",
          disabled: loading,
          onClick: onClearAll,
          children: configContext.locale.Table.selectPopupClearAll
        })]
      })]
    }), (0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-table-selection-action-bar-actions"),
      children: action
    })]
  });
};
var _default = exports.default = SelectionActionBar;