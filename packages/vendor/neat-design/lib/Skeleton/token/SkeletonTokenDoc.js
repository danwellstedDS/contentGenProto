"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _neatDesignToken = require("@derbysoft/neat-design-token");
var _genToken = _interopRequireDefault(require("./genToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file SkeletonTokenDoc.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Statics
// Vendors
var _default = exports.default = {
  global: ['color-bg-enhance', 'neutral-5', 'spacing-base', 'spacing-base-tight', 'spacing-base-loose', 'spacing-tight', 'spacing-slightly-tight', 'spacing-extra-loose', 'border-radius-small', 'size-static-20', 'size-2x', 'size-3x', 'size-5x', 'size-4x', 'size-8x', 'size-17x', 'size-22x', 'size-6x', 'size-static-14', 'size-static-12', 'size-static-28', 'size-static-36'],
  component: (0, _genToken.default)(_neatDesignToken.defaultToken)
};