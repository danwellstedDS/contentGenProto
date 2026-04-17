"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file size.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref, onlyIcon) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var segmentedToken = componentsToken.Segmented;

  // size 不设置，antd 通过 controlHeight 设置
  // line height不设置，antd 需要靠line height 居中。
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-segmented-group {\n            gap: ", "px;\n        }\n\n        .", "-segmented-item-label {\n            padding: 0\n                ", "px;\n            font-size: ", "px;\n\n            .", "-segmented-item-icon {\n                font-size: ", "px;\n            }\n        }\n\n        &.", "-segmented-sm {\n            .", "-segmented-group {\n                gap: ", "px;\n            }\n\n            .", "-segmented-item-label {\n                padding: 0\n                    ", "px;\n                font-size: ", "px;\n\n                .", "-segmented-item-icon {\n                    font-size: ", "px;\n                }\n            }\n        }\n\n        &.", "-segmented-lg {\n            .", "-segmented-group {\n                gap: ", "px;\n            }\n\n            .", "-segmented-item-label {\n                padding: 0\n                    ", "px;\n                font-size: ", "px;\n\n                .", "-segmented-item-icon {\n                    font-size: ", "px;\n                }\n            }\n        }\n    "])), prefixCls, segmentedToken['segmented-gap-item-medium'], prefixCls, segmentedToken[onlyIcon ? 'segmented-padding-icon-medium' : 'segmented-padding-medium'], segmentedToken['segmented-font-size-medium'], prefixCls, segmentedToken['segmented-size-icon-medium'], prefixCls, prefixCls, segmentedToken['segmented-gap-item-small'], prefixCls, segmentedToken[onlyIcon ? 'segmented-padding-icon-small' : 'segmented-padding-small'], segmentedToken['segmented-font-size-small'], prefixCls, segmentedToken['segmented-size-icon-small'], prefixCls, prefixCls, segmentedToken['segmented-gap-item-large'], prefixCls, segmentedToken[onlyIcon ? 'segmented-padding-icon-large' : 'segmented-padding-large'], segmentedToken['segmented-font-size-large'], prefixCls, segmentedToken['segmented-size-icon-large']);
};