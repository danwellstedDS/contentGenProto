"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _checkbox = _interopRequireDefault(require("../../Checkbox/style/checkbox"));
var _checked = _interopRequireDefault(require("../../Checkbox/style/checked"));
var _disabled = _interopRequireDefault(require("../../Checkbox/style/disabled"));
var _indeterminate = _interopRequireDefault(require("../../Checkbox/style/indeterminate"));
var _templateObject;
/**
 * @file popup.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var getCheckedSvg = function getCheckedSvg(fill) {
  return "\n    <svg width=\"8\" height=\"6\" viewBox=\"0 0 8 6\" fill=\"".concat(fill, "\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M2.7097 5.90683C2.62458 5.87019 2.54485 5.81785 2.47512 5.74981L0.22671 3.5562C-0.0755707 3.26128 -0.0755697 2.78313 0.226711 2.48822C0.528992 2.19331 1.01909 2.19331 1.32137 2.48822L3.03869 4.16369L6.65073 0.24987C6.93678 -0.0600742 7.4262 -0.0850981 7.74389 0.193977C8.06157 0.473053 8.08722 0.950548 7.80118 1.26049L3.65771 5.75013C3.41242 6.01592 3.01756 6.07219 2.7097 5.90683Z\"/>\n    </svg>\n");
};
var getIndeterminateSvg = function getIndeterminateSvg(fill) {
  return "\n    <svg width=\"8\" height=\"2\" viewBox=\"0 0 8 2\" fill=\"".concat(fill, "\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect width=\"8\" height=\"2\" rx=\"1\"/>\n    </svg>\n");
};

// Styles

var useStyle = function useStyle() {
  var createStyles = (0, _hooks.useCreateStyles)();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var CheckboxToken = componentsToken.Checkbox,
      dropdownToken = componentsToken.Dropdown;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-cascader-dropdown {\n                .", "-cascader-menus {\n                    .", "-cascader-menu {\n                        padding: 8px;\n\n                        .", "-cascader-menu-item {\n                            height: 40px;\n\n                            ", "\n                            ", "\n                            ", "\n                            ", "\n                            .", "-cascader-checkbox {\n                                height: ", ";\n                                line-height: ", ";\n\n                                .", "-cascader-checkbox-inner {\n                                    width: ", "px;\n                                    height: ", "px;\n                                }\n\n                                &.", "-cascader-checkbox-checked {\n                                    .", "-cascader-checkbox-inner {\n                                        &::after {\n                                            background-image: url('data:image/svg+xml;utf8,", "');\n                                            width: 8px;\n                                            height: 6px;\n                                            line-height: 6px;\n                                        }\n                                    }\n\n                                    &.", "-cascader-checkbox-disabled {\n                                        .", "-cascader-checkbox-inner {\n                                            &::after {\n                                                background-image: url('data:image/svg+xml;utf8,", "');\n                                            }\n                                        }\n                                    }\n                                }\n\n                                &.", "-cascader-checkbox-indeterminate {\n                                    .", "-cascader-checkbox-inner {\n                                        &::after {\n                                            background-image: url('data:image/svg+xml;utf8,", "');\n                                            width: 8px;\n                                            height: 2px;\n                                            line-height: 2px;\n                                        }\n                                    }\n\n                                    &.", "-cascader-checkbox-disabled {\n                                        .", "-cascader-checkbox-inner {\n                                            &::after {\n                                                background-image: url('data:image/svg+xml;utf8,", "');\n                                            }\n                                        }\n                                    }\n                                }\n\n                                &.", "-cascader-checkbox-state-error {\n                                    .", "-cascader-checkbox:not(.", "-cascader-checkbox-disabled) {\n                                        &.", "-cascader-checkbox-checked {\n                                            .", "-cascader-checkbox-inner {\n                                                &::after {\n                                                    background-image: url('data:image/svg+xml;utf8,", "');\n                                                }\n                                            }\n                                        }\n\n                                        &.", "-cascader-checkbox-indeterminate {\n                                            .", "-cascader-checkbox-inner {\n                                                &::after {\n                                                    background-image: url('data:image/svg+xml;utf8,", "');\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n\n                            .", "-cascader-menu-item-expand-icon {\n                                height: 16px;\n                                line-height: 16px;\n                            }\n\n                            &.", "-cascader-menu-item-active {\n                                .", "-cascader-menu-item-content {\n                                    font-weight: 400;\n                                }\n                            }\n\n                            &:hover {\n                                background: ", ";\n                            }\n                        }\n                    }\n                    &.", "-cascader-menu-empty {\n                        .", "-cascader-menu {\n                            .", "-cascader-menu-item {\n                                height: auto;\n                            }\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, prefixCls, (0, _checkbox.default)(_objectSpread(_objectSpread({}, utils), {}, {
      prefixCls: "".concat(prefixCls, "-cascader")
    })), (0, _checked.default)(_objectSpread(_objectSpread({}, utils), {}, {
      prefixCls: "".concat(prefixCls, "-cascader")
    })), (0, _disabled.default)(_objectSpread(_objectSpread({}, utils), {}, {
      prefixCls: "".concat(prefixCls, "-cascader")
    })), (0, _indeterminate.default)(_objectSpread(_objectSpread({}, utils), {}, {
      prefixCls: "".concat(prefixCls, "-cascader")
    })), prefixCls, CheckboxToken['checkbox-line-height-medium'], CheckboxToken['checkbox-line-height-medium'], prefixCls, CheckboxToken['checkbox-size-medium'], CheckboxToken['checkbox-size-medium'], prefixCls, prefixCls, encodeURIComponent(getCheckedSvg('#fff')), prefixCls, prefixCls, encodeURIComponent(getCheckedSvg(CheckboxToken['checkbox-color-icon-selected-disabled'])), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg('#fff')), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg(CheckboxToken['checkbox-color-icon-selected-disabled'])), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, encodeURIComponent(getCheckedSvg(CheckboxToken['checkbox-color-icon-selected-danger'])), prefixCls, prefixCls, encodeURIComponent(getIndeterminateSvg(CheckboxToken['checkbox-color-icon-selected-danger'])), prefixCls, prefixCls, prefixCls, dropdownToken['dropdown-color-bg-hover'], prefixCls, prefixCls, prefixCls);
  });
};
var _default = exports.default = useStyle;