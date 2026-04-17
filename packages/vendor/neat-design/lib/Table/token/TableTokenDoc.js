"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file TableTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-secondary', 'color-text-disabled', 'color-text-link', 'color-text-link-hover', 'color-text-link-press', 'color-text-link-disabled', 'color-icon', 'color-primary', 'color-icon-disabled', 'color-primary-enhance', 'color-bg', 'color-bg-hover', 'color-bg-enhance', 'color-bg-disabled', 'color-bg-sunken', 'color-border-divider', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'font-size-body-extra-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-static-36', 'size-6x', 'size-8x', 'size-2x', 'size-static-20', 'size-3x', 'size-4x', 'size-5x', 'spacing-tight', 'spacing-base', 'spacing-slightly-tight', 'spacing-base-tight'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};