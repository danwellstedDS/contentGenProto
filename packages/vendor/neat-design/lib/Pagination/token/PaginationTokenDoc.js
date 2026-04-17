"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file PaginationTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-secondary', 'color-primary', 'color-primary-press', 'color-text-disabled', 'color-icon', 'color-icon-disabled', 'color-bg-flat', 'color-bg-disabled', 'font-size-body-small', 'font-size-body-medium', 'line-height-static-16', 'line-height-static-20', 'size-3x', 'size-4x', 'size-static-12', 'size-2x', 'spacing-tight', 'spacing-slightly-tight', 'border-radius-small', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};