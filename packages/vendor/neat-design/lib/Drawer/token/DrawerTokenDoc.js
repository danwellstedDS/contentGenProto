"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file DrawerTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-border-divider', 'color-text-primary', 'color-bg', 'font-size-header-5', 'font-size-body-medium', 'size-40x', 'size-75x', 'size-120x', 'size-7x', 'spacing-loose', 'spacing-base'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};