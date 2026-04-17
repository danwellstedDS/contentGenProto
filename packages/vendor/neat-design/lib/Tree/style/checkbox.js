"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _checkbox = _interopRequireDefault(require("../../Checkbox/style/checkbox"));
var _checked = _interopRequireDefault(require("../../Checkbox/style/checked"));
var _disabled = _interopRequireDefault(require("../../Checkbox/style/disabled"));
var _error = _interopRequireDefault(require("../../Checkbox/style/error"));
var _indeterminate = _interopRequireDefault(require("../../Checkbox/style/indeterminate"));
var _largeSize = _interopRequireDefault(require("../../Checkbox/style/largeSize"));
var _mediumSize = _interopRequireDefault(require("../../Checkbox/style/mediumSize"));
var _smallSize = _interopRequireDefault(require("../../Checkbox/style/smallSize"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @file checkbox.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */ // Styles
// Types
var _default = exports.default = function _default(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls,
    componentsToken = utils.componentsToken;
  var treeToken = componentsToken.Tree;
  var checkboxUtils = _objectSpread(_objectSpread({}, utils), {}, {
    prefixCls: "".concat(prefixCls, "-tree")
  });
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-tree-treenode {\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n\n            .", "-tree-checkbox {\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                width: ", "px;\n                height: ", "px;\n                line-height: ", "px;\n            }\n        }\n\n        &.", "-tree-small {\n            .", "-tree-treenode {\n                ", ";\n\n                .", "-tree-checkbox {\n                    width: ", "px;\n                    height: ", "px;\n                    line-height: ", "px;\n                }\n            }\n        }\n\n        &.", "-tree-large {\n            .", "-tree-treenode {\n                ", ";\n\n                .", "-tree-checkbox {\n                    width: ", "px;\n                    height: ", "px;\n                    line-height: ", "px;\n                }\n            }\n        }\n    "])), prefixCls, (0, _checkbox.default)(checkboxUtils), (0, _checked.default)(checkboxUtils), (0, _disabled.default)(checkboxUtils), (0, _error.default)(checkboxUtils), (0, _indeterminate.default)(checkboxUtils), (0, _mediumSize.default)(checkboxUtils), prefixCls, treeToken['tree-size-fill-medium'], treeToken['tree-size-medium'], treeToken['tree-size-medium'], prefixCls, prefixCls, (0, _smallSize.default)(checkboxUtils), prefixCls, treeToken['tree-size-fill-small'], treeToken['tree-size-small'], treeToken['tree-size-small'], prefixCls, prefixCls, (0, _largeSize.default)(checkboxUtils), prefixCls, treeToken['tree-size-fill-large'], treeToken['tree-size-large'], treeToken['tree-size-large']);
};