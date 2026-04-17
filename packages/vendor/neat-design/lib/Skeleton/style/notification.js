"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file notification.ts
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
    var getHorizontalGap = function getHorizontalGap() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'medium';
      return skeletonToken["skeleton-gap-h-notifications-".concat(size)];
    };
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-skeleton-notification {\n                display: flex;\n                gap: ", "px;\n                width: 100%;\n\n                .", "-skeleton-notification-content {\n                    flex: 1;\n                    display: flex;\n                    flex-direction: column;\n                    gap: 8px;\n                }\n\n                &.", "-skeleton-notification-small {\n                    gap: ", "px;\n                }\n\n                &.", "-skeleton-notification-large {\n                    gap: ", "px;\n                }\n            }\n        "])), prefixCls, getHorizontalGap(), prefixCls, prefixCls, getHorizontalGap('small'), prefixCls, getHorizontalGap('large'));
  });
};
var _default = exports.default = useStyle;