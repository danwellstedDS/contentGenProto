"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject;
/**
 * @file CascaderDropdownActionBar.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-action.", "-cascader-dropdown-action-bar {\n                height: 49px;\n                padding: 0 8px;\n\n                .", "-action-btns {\n                    .", "-action-ok-btn,\n                        .", "-action-cancel-btn {\n                        min-width: auto;\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;