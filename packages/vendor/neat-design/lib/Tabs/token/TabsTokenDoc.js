"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file TabsTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['neutral-23', 'color-primary', 'color-primary-press', 'color-text-disabled', 'color-icon', 'color-icon-disabled', 'color-bg', 'color-bg-raised', 'color-bg-hover', 'color-bg-press', 'color-bg-disabled', 'color-border-divider', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-4x', 'size-5x', 'size-6x', 'size-static-12', 'size-2x', 'size-static-20', 'spacing-base', 'spacing-tight', 'spacing-loose', 'spacing-extra-loose', 'border-radius-small', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};