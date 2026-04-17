"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file color.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var segmentedToken = componentsToken.Segmented;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        /* \u80CC\u666F\u989C\u8272 antd\u8BBE\u7F6E\u4E86 trackBg itemHoverBg itemActiveBg itemSelectedBg */\n        /* \u5269\u4F59 disabled \u672A\u8BBE\u7F6E */\n        &.", "-segmented-disabled {\n            background-color: ", ";\n        }\n\n        .", "-segmented-item {\n            &:active:not(.", "-segmented-item-selected):not(\n                    .", "-segmented-item-disabled\n                ) {\n                /* \u6B64\u5904\u8BBE\u7F6E\u7684\u989C\u8272\u662Flabel\u5185\u5BB9 antd\u8BBE\u7F6E\u4E86 itemColor itemHoverColor itemSelectedColor colorTextDisabled  */\n                /* \u5269\u4F59 press \u672A\u8BBE\u7F6E */\n                /* \u6587\u5B57\u989C\u8272\u3001icon\u989C\u8272 \u4FDD\u6301\u4E00\u81F4*/\n                color: ", ";\n            }\n        }\n    "])), prefixCls, segmentedToken['segmented-color-bg-disabled'], prefixCls, prefixCls, prefixCls, segmentedToken['segmented-color-text-press']);
};