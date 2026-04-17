"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file ModalTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-text-primary', 'color-bg', 'color-border-divider', 'font-size-header-4', 'font-size-body-medium', 'size-75x', 'size-50x', 'size-120x', 'size-7x', 'size-3x', 'spacing-base', 'spacing-loose', 'spacing-tight', 'border-radius-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};