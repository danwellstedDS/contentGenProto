"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file SelectionAction.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-popover.", "-table-selection-action-pop {\n                max-width: unset;\n                z-index: 9;\n\n                .", "-popover-arrow {\n                    left: 18px;\n                }\n\n                .", "-popover-inner {\n                    box-sizing: border-box;\n                    height: 48px;\n                    padding: 8px 16px;\n\n                    .", "-popover-inner-content {\n                        line-height: 32px;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;