"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file bar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Types
var _default = exports.default = function _default(_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var progressToken = componentsToken.Progress;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-progress-bar {\n            height: ", "px;\n            line-height: ", ";\n\n            .", "-progress-outer {\n                display: flex;\n                height: ", "px;\n            }\n\n            .", "-progress-text {\n                margin-left: ", "px;\n                line-height: ", ";\n                font-size: ", "px;\n            }\n\n            &.", "-progress-success, &.", "-progress-fail {\n                .", "-progress-text {\n                    font-size: ", "px;\n                }\n            }\n\n            &.", "-progress-small {\n                height: ", "px;\n                line-height: ", ";\n\n                .", "-progress-outer {\n                    height: ", "px;\n                }\n\n                .", "-progress-text {\n                    margin-left: ", "px;\n                    line-height: ", ";\n                    font-size: ", "px;\n                }\n\n                &.", "-progress-success, &.", "-progress-fail {\n                    .", "-progress-text {\n                        font-size: ", "px;\n                    }\n                }\n            }\n\n            &.", "-progress-large {\n                height: ", "px;\n                line-height: ", ";\n\n                .", "-progress-outer {\n                    height: ", "px;\n                }\n\n                .", "-progress-text {\n                    margin-left: ", "px;\n                    line-height: ", ";\n                    font-size: ", "px;\n                }\n\n                &.", "-progress-success, &.", "-progress-fail {\n                    .", "-progress-text {\n                        font-size: ", "px;\n                    }\n                }\n            }\n        }\n    "])), prefixCls, progressToken['progress-size-bar-v-medium'], progressToken['progress-line-height-medium'], prefixCls, progressToken['progress-size-bar-v-medium'], prefixCls, progressToken['progress-gap-bar-medium'], progressToken['progress-line-height-medium'], progressToken['progress-font-size-medium'], prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-medium'], prefixCls, progressToken['progress-size-bar-v-small'], progressToken['progress-line-height-small'], prefixCls, progressToken['progress-size-bar-v-small'], prefixCls, progressToken['progress-gap-bar-small'], progressToken['progress-line-height-small'], progressToken['progress-font-size-small'], prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-small'], prefixCls, progressToken['progress-size-bar-v-large'], progressToken['progress-line-height-large'], prefixCls, progressToken['progress-size-bar-v-large'], prefixCls, progressToken['progress-gap-bar-large'], progressToken['progress-line-height-large'], progressToken['progress-font-size-large'], prefixCls, prefixCls, prefixCls, progressToken['progress-size-icon-large']);
};