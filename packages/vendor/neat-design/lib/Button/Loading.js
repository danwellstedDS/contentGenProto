"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Spinner = require("../Spinner");
var _hooks = require("../hooks");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
/**
 * @file Button.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Vendors

// Components

// Hooks

// Types

var Loading = function Loading(_ref) {
  var type = _ref.type,
    disabled = _ref.disabled;
  var token = (0, _hooks.useToken)();
  return (0, _jsxRuntime.jsx)(_Spinner.InternalLoading, {
    size: "1em",
    as: "div",
    color: type === 'primary' ? disabled ? token['color-icon'] : token['color-icon-inverse'] : token['color-icon'],
    circleThickness: 2
  });
};
var _default = exports.default = Loading;