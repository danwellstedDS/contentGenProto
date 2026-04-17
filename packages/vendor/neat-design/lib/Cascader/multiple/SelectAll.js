"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _Checkbox = _interopRequireDefault(require("../../Checkbox"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useSelectAll.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks

// Components

// Types

var SelectAll = function SelectAll(_ref) {
  var disabled = _ref.disabled,
    checked = _ref.checked,
    indeterminate = _ref.indeterminate,
    onSelectAll = _ref.onSelectAll,
    onDeselectAll = _ref.onDeselectAll;
  /**
   * Handle select all checkbox changed
   */
  var handleSelectAllChanged = (0, _react.useCallback)(function (e) {
    var checked = e.target.checked;
    if (checked) {
      onSelectAll === null || onSelectAll === void 0 || onSelectAll();
    } else {
      onDeselectAll === null || onDeselectAll === void 0 || onDeselectAll();
    }
  }, [onSelectAll, onDeselectAll]);
  return (0, _jsxRuntime.jsx)(_Checkbox.default, {
    disabled: disabled,
    checked: checked,
    indeterminate: indeterminate,
    onChange: handleSelectAllChanged,
    children: "Select All"
  });
};
var _default = exports.default = SelectAll;