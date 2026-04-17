"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _antd = require("antd");
/**
 * @file useStatus.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Components

function useStatus(_ref) {
  var onStatusChange = _ref.onStatusChange;
  var status = _antd.Form.Item.useStatus();
  (0, _react.useEffect)(function () {
    onStatusChange === null || onStatusChange === void 0 || onStatusChange(status);
  }, [status, onStatusChange]);
}
var _default = exports.default = useStatus;