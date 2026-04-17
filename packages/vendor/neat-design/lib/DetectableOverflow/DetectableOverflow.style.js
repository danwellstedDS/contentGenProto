"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../hooks");
var _templateObject;
/**
 * @file DetectableOverflow.style.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var useStyles = function useStyles() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (_ref) {
    var css = _ref.css;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        "])));
  });
};
var _default = exports.default = useStyles;