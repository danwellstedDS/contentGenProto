"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject, _templateObject2;
/**
 * @file title-box.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types

var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var skeletonToken = componentsToken.Skeleton;
    var getSizeStyle = function getSizeStyle() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            height: ", "px;\n        "])), skeletonToken["skeleton-size-v-title-box-".concat(size)]);
    };
    return {
      element: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                &.", "-skeleton-title-box {\n                    display: inline-flex;\n                    align-items: center;\n                    gap: ", "px;\n                    width: 100%;\n                    ", "\n\n                    .", "-skeleton-bar {\n                        width: calc(300% / 7);\n                    }\n\n                    &.", "-skeleton-title-box-small {\n                        ", "\n                    }\n\n                    &.", "-skeleton-title-box-large {\n                        ", "\n                    }\n                }\n            "])), prefixCls, skeletonToken['skeleton-gap-v-menu'], getSizeStyle(), prefixCls, prefixCls, getSizeStyle('small'), prefixCls, getSizeStyle('large'))
    };
  });
};
var _default = exports.default = useStyle;