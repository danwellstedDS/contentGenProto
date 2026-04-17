"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file FormTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['spacing-slightly-tight', 'spacing-extra-loose', 'spacing-super-loose', 'spacing-static-48', 'spacing-base-tight', 'spacing-static-14', 'spacing-base', 'spacing-base-loose', 'spacing-loose', 'spacing-tight', 'spacing-static-10'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};