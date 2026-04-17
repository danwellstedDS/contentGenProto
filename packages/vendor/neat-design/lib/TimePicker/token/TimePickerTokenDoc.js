"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file TimePickerTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-primary', 'color-text-secondary', 'color-text-inverse', 'color-text-disabled', 'color-bg', 'color-bg-hover', 'color-bg-press', 'color-bg-disabled', 'color-border-divider', 'font-size-body-medium', 'size-4x', 'size-8x', 'spacing-tight', 'spacing-base-tight', 'spacing-base', 'border-radius-small'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};