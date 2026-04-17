"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file CollapseTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-secondary', 'color-text-disabled', 'color-icon', 'color-icon-disabled', 'color-bg', 'color-bg-hover', 'aqua-1', 'color-bg-disabled', 'color-bg-sunken', 'color-border-divider', 'font-size-body-small', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-16', 'line-height-static-20', 'line-height-static-24', 'size-2x', 'size-static-20', 'size-3x', 'spacing-tight', 'spacing-base-tight', 'spacing-base', 'spacing-static-10', 'spacing-static-14', 'spacing-base-loose', 'spacing-loose', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};