"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _background = require("./background");
var _templateObject, _templateObject2;
/**
 * @file bar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Styles
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types

var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var skeletonToken = componentsToken.Skeleton;
    var _getBackgroundStyles = (0, _background.getBackgroundStyles)(utils),
      normalBg = _getBackgroundStyles.normalBg,
      activeBg = _getBackgroundStyles.activeBg;
    var getSizeStyle = function getSizeStyle() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            height: ", "px;\n            line-height: ", "px;\n        "])), skeletonToken["skeleton-size-block-".concat(size)], skeletonToken["skeleton-size-block-".concat(size)]);
    };
    return {
      element: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                &.", "-skeleton-bar {\n                    display: inline-block;\n                    vertical-align: top;\n                    width: 400px;\n                    ", "\n                    ", "\n                    border-radius: ", "px;\n\n                    &.", "-skeleton-bar-sm {\n                        ", "\n                    }\n\n                    &.", "-skeleton-bar-lg {\n                        ", "\n                    }\n\n                    &.", "-skeleton-bar-active {\n                        ", "\n                    }\n                }\n            "])), prefixCls, getSizeStyle(), normalBg, skeletonToken['skeleton-border-radius'], prefixCls, getSizeStyle('small'), prefixCls, getSizeStyle('large'), prefixCls, activeBg)
    };
  });
};
var _default = exports.default = useStyle;