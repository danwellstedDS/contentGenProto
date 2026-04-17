var _templateObject;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file count.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Statics
import ColorMapping from "../static/ColorMapping";

// Types

export default (function (_ref) {
  var css = _ref.css,
    prefixCls = _ref.prefixCls,
    componentsToken = _ref.componentsToken;
  var badgeToken = componentsToken.Badge;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        .", "-badge-count {\n            box-shadow: none;\n        }\n\n        &.", "-badge-color-default, &.", "-badge-color-inverse {\n            .", "-badge-count {\n                color: ", ";\n            }\n        }\n\n        ", "\n    "])), prefixCls, prefixCls, prefixCls, prefixCls, badgeToken['badge-color-text'], Object.entries(ColorMapping).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      color = _ref3[0],
      tokenKey = _ref3[1];
    return "\n            &.".concat(prefixCls, "-badge-color-").concat(color, " .").concat(prefixCls, "-badge-count {\n                background: ").concat(badgeToken[tokenKey], ";\n            }\n        ");
  }));
});