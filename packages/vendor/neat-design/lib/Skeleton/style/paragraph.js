"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _background = require("./background");
var _templateObject, _templateObject2;
/**
 * @file paragraph.ts
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
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            height: ", "px;\n            line-height: ", "px;\n        "])), skeletonToken["skeleton-size-v-text-".concat(size)], skeletonToken["skeleton-size-v-text-".concat(size)]);
    };
    var getGap = function getGap() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
      return skeletonToken["skeleton-size-v-paragraph-".concat(size)] - skeletonToken["skeleton-size-v-text-".concat(size)];
    };
    return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            &.", "-skeleton-paragraph-container {\n                padding-block: ", "px;\n\n                .", "-skeleton-paragraph {\n                    display: block;\n                    width: 100%;\n                    ", "\n                    ", "\n                    border-radius: ", "px;\n\n                    & + .", "-skeleton-paragraph {\n                        margin-top: ", "px;\n                    }\n\n                    &:last-child {\n                        width: 60%;\n                    }\n\n                    &.", "-skeleton-paragraph-active {\n                        ", "\n                    }\n                }\n\n                &.", "-skeleton-paragraph-container-small {\n                    padding-block: ", "px;\n\n                    .", "-skeleton-paragraph {\n                        ", "\n\n                        & + .", "-skeleton-paragraph {\n                            margin-top: ", "px;\n                        }\n                    }\n                }\n\n                &.", "-skeleton-paragraph-container-large {\n                    padding-block: ", "px;\n\n                    .", "-skeleton-paragraph {\n                        ", "\n\n                        & + .", "-skeleton-paragraph {\n                            margin-top: ", "px;\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, getGap() / 2, prefixCls, getSizeStyle(), normalBg, skeletonToken['skeleton-border-radius'], prefixCls, getGap(), prefixCls, activeBg, prefixCls, getGap('small') / 2, prefixCls, getSizeStyle('small'), prefixCls, getGap('small'), prefixCls, getGap('large') / 2, prefixCls, getSizeStyle('large'), prefixCls, getGap('large'));
  });
};
var _default = exports.default = useStyle;