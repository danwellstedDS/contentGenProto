"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file ExpandIcon.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-table-expend-icon {\n            width: 16px;\n            height: 16px;\n            margin-right: 8px;\n            font-size: 16px;\n            visibility: hidden;\n            user-select: none;\n            cursor: pointer;\n\n            & > span {\n                transition: all 0.3s ease-out;\n            }\n\n            &.expandable {\n                visibility: unset;\n            }\n\n            &[aria-expanded='true'] > span {\n                transform: rotate(90deg);\n            }\n        }\n    "])), prefixCls);
};