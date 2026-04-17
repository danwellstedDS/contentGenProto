"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _templateObject, _templateObject2, _templateObject3; // Vendors
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Types

var useStyle = function useStyle(props) {
  var _ref = props || {},
    _ref$father = _ref.father,
    father = _ref$father === void 0 ? '&' : _ref$father;
  var createStyles = (0, _hooks.useCreateStyles)(_hooks.CIJ_HIGH_PRIORITY_CONFIG);
  return createStyles(function (_ref2) {
    var css = _ref2.css,
      prefixCls = _ref2.prefixCls,
      componentsToken = _ref2.componentsToken;
    var avatarToken = componentsToken.Avatar;
    var avatarColorStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";\n        "])), avatarToken['avatar-color-bg'], avatarToken['avatar-color-text']);
    var avatarStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n            ", ".", "-avatar {\n                ", "\n                font-size: ", "px;\n                font-weight: 500;\n            }\n            ", ".", "-avatar-lg {\n                font-size: ", "px;\n            }\n            ", ".", "-avatar-sm {\n                font-size: ", "px;\n            }\n        "])), father, prefixCls, avatarColorStyle, avatarToken['avatar-font-size-medium'], father, prefixCls, avatarToken['avatar-font-size-large'], father, prefixCls, avatarToken['avatar-font-size-small']);
    var groupStyle = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            &.", "-avatar-group {\n                ", "\n            }\n        "])), prefixCls, avatarStyle);
    return {
      avatarStyle: avatarStyle,
      groupStyle: groupStyle
    };
  }).styles;
};
var _default = exports.default = useStyle;