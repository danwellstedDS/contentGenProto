"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file StepsTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-border-hover', 'color-primary', 'color-primary-hover', 'color-negative', 'color-positive', 'color-icon-secondary-disabled', 'color-icon-inverse', 'color-text-primary', 'color-text-secondary', 'color-text-disabled', 'color-text-inverse', 'color-primary-sunken', 'color-primary-enhance', 'color-bg-enhance', 'color-bg-raised', 'color-positive-sunken', 'color-positive-enhance', 'color-negative-sunken', 'color-negative-enhance', 'color-border-disabled', 'font-size-body-large', 'font-size-body-medium', 'font-size-body-small', 'size-base', 'size-8x', 'size-6x', 'size-4x', 'size-3x', 'spacing-tight', 'spacing-base', 'spacing-loose'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};