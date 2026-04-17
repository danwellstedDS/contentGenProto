"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file CheckboxTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-bg', 'color-bg-disabled', 'color-primary', 'color-primary-hover', 'color-primary-press', 'color-border-enhance', 'color-border-disabled', 'color-negative', 'color-icon-inverse', 'color-icon-disabled', 'color-text-primary', 'color-text-disabled', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-static-14', 'size-2x', 'size-static-20', 'size-4x', 'size-5x', 'size-6x', 'spacing-tight', 'spacing-super-loose', 'spacing-base', 'spacing-base-loose', 'spacing-loose', 'spacing-static-10', 'spacing-base-tight'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};