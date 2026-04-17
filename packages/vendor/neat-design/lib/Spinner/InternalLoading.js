"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useCreateStyles = _interopRequireDefault(require("../hooks/useCreateStyles"));
var _useLoadingCss = _interopRequireDefault(require("./hooks/useLoadingCss.hook"));
var _templateObject;
var _excluded = ["as"];
/**
 * @file useLoadingStyles.hook.ts
 * @author pipi(pter.rao@derbysoft.net)
 */
// Hooks
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InternalLoading = function InternalLoading(props) {
  var _props$as = props.as,
    as = _props$as === void 0 ? 'div' : _props$as,
    restProps = _objectWithoutProperties(props, _excluded);
  var style = (0, _useLoadingCss.default)(restProps);
  var createStyles = (0, _useCreateStyles.default)();
  var _createStyles = createStyles(function (_ref) {
      var css = _ref.css;
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n    "])), style);
    }),
    styles = _createStyles.styles;
  return /*#__PURE__*/_react.default.createElement(as, {
    className: styles
  });
};
var _default = exports.default = InternalLoading;