"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file DatePickerTokenDoc.ts
 * @author sunday(sunday.wei@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-secondary', 'color-text-inverse', 'color-text-disabled', 'color-bg', 'color-bg-hover', 'color-bg-press', 'amber-1', 'amber-2', 'green-1', 'green-2', 'color-primary', 'color-primary-hover', 'color-notice', 'color-notice-hover', 'color-positive', 'color-positive-hover', 'color-bg-disabled', 'color-bg-raised', 'color-primary-enhance', 'color-notice-enhance', 'color-positive-enhance', 'color-border-disabled', 'color-border', 'color-icon', 'color-border-divider', 'font-size-body-medium', 'size-4x', 'size-6x', 'size-8x', 'spacing-tight', 'spacing-base-tight', 'border-radius-small', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};