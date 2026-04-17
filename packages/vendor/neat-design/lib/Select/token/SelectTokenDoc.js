"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file SelectTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-text-secondary', 'color-text-placeholder', 'color-text-disabled', 'color-icon', 'color-primary', 'color-icon-disabled', 'color-bg', 'color-bg-disabled', 'color-border', 'color-border-disabled', 'color-negative', 'font-size-body-medium', 'font-size-body-large', 'line-height-static-20', 'line-height-static-24', 'size-4x', 'size-5x', 'size-6x', 'size-2x', 'size-static-20', 'size-3x', 'size-static-18', 'spacing-tight', 'spacing-base-tight', 'spacing-extra-tight', 'spacing-slightly-tight', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};