"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file ToastTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-link', 'color-text-link-hover', 'color-text-link-press', 'color-text-link-disabled', 'color-accent', 'color-positive', 'color-notice', 'color-negative', 'color-accent-sunken', 'color-positive-sunken', 'color-notice-sunken', 'color-negative-sunken', 'font-size-body-medium', 'font-size-body-small', 'line-height-static-20', 'size-static-20', 'spacing-base-tight', 'spacing-base', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};