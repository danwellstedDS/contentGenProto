"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppConfigContext = void 0;
var _react = require("react");
/**
 * @file context.ts
 * @author peter(peter.rao@derbysoft.net)
 */

// Vendors

// Types

var AppConfigContext = exports.AppConfigContext = /*#__PURE__*/(0, _react.createContext)({});
var AppContext = /*#__PURE__*/(0, _react.createContext)({
  /**
   * @deprecated please use "toast" instead
   */
  message: {},
  toast: {},
  notification: {},
  modal: {}
});
var _default = exports.default = AppContext;