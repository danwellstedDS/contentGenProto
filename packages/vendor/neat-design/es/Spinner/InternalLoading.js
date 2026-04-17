var _templateObject;
var _excluded = ["as"];
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file useLoadingStyles.hook.ts
 * @author pipi(pter.rao@derbysoft.net)
 */
import React from "react";

// Hooks
import useCreateStyles from "../hooks/useCreateStyles";
import useLoadingCss from "./hooks/useLoadingCss.hook";
var InternalLoading = function InternalLoading(props) {
  var _props$as = props.as,
    as = _props$as === void 0 ? 'div' : _props$as,
    restProps = _objectWithoutProperties(props, _excluded);
  var style = useLoadingCss(restProps);
  var createStyles = useCreateStyles();
  var _createStyles = createStyles(function (_ref) {
      var css = _ref.css;
      return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n    "])), style);
    }),
    styles = _createStyles.styles;
  return /*#__PURE__*/React.createElement(as, {
    className: styles
  });
};
export default InternalLoading;