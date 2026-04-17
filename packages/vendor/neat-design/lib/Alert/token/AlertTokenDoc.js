"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file AlertTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-link', 'color-text-link-hover', 'color-text-link-disabled', 'color-info', 'color-positive', 'color-notice', 'color-negative', 'color-info-sunken', 'color-positive-sunken', 'color-notice-sunken', 'color-negative-sunken', 'color-info-enhance', 'color-positive-enhance', 'color-notice-enhance', 'color-negative-enhance', 'font-size-body-large', 'font-size-body-medium', 'font-size-body-small', 'line-height-static-20', 'size-static-20', 'spacing-base', 'spacing-extra-tight', 'spacing-loose', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};