"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file ButtonTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-primary', 'color-primary-hover', 'color-primary-press', 'color-bg-disabled', 'color-negative', 'color-negative-hover', 'color-negative-press', 'red-7', 'color-bg', 'neutral-1', 'neutral-2', 'color-negative-sunken', 'red-1', 'color-border-disabled', 'color-icon-disabled', 'color-icon-inverse', 'blue-6', 'blue-8', 'color-text-disabled', 'color-text-inverse', 'blue-7', 'color-info', 'color-info-hover', 'color-info-focus', 'color-info-press', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-20', 'line-height-static-24', 'size-4x', 'size-5x', 'size-6x', 'size-3x', 'size-2x', 'size-static-18', 'size-static-20', 'size-static-14', 'size-static-12', 'border-radius-small', 'border-radius-base', 'spacing-base', 'spacing-base-loose', 'spacing-tight'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};