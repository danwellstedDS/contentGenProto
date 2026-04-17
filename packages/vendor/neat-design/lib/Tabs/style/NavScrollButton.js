"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file NavScrollButton.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-tabs-nav-scroll-btn {\n                border: none;\n                border-radius: 0;\n                box-shadow: none;\n\n                .", "-wave {\n                    display: none;\n                }\n\n                &.hidden {\n                    opacity: 0;\n                    pointer-events: none;\n                }\n            }\n        "])), prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;