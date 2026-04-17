var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// Hooks
import { CIJ_HIGH_PRIORITY_CONFIG, useCreateStyles } from "../../hooks";

// Types

var placement2FelxDirection = {
  'below': 'column',
  'above': 'column-reverse',
  'left': 'row-reverse',
  'right': 'row'
};
var useStyle = function useStyle() {
  var tipPlacement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'below';
  var creaeStyles = useCreateStyles(CIJ_HIGH_PRIORITY_CONFIG);
  var styles = creaeStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      componentsToken = _ref.componentsToken;
    var spinnerToken = componentsToken.Spinner;
    var gap = spinnerToken['spinner-gap-medium'];
    var gapLG = spinnerToken['spinner-gap-large'];
    var gapSM = spinnerToken['spinner-gap-small'];
    var showTextStyle = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      &.", "-spin-spinning.", "-spin {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: ", "px;\n        flex-direction: ", ";\n        &.", "-spin.", "-spin-show-text .", "-spin-dot {\n          position: relative;\n          margin-top: 0;\n          margin: 0;\n          top: unset;\n          inset-inline-start: unset;\n        }\n        .", "-spin-text {\n          position: relative;\n          padding-top: 0;\n          top: unset;\n          width: unset;\n          text-shadow: unset;\n        }\n      }\n\n      &.", "-spin-spinning.", "-spin-sm.", "-spin-show-text {\n        gap: ", "px;\n      }\n\n      &.", "-spin-spinning.", "-spin-lg.", "-spin-show-text {\n        gap: ", "px;\n      }\n    "])), prefixCls, prefixCls, gap, placement2FelxDirection[tipPlacement || 'below'], prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, prefixCls, gapSM, prefixCls, prefixCls, prefixCls, gapLG);
    var commonStyle = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      \n      & .", "-spin-text {\n        color: ", ";\n        font-size: ", "px;\n      }\n      \n      & .", "-spin-dot {\n        font-size: ", "px;\n      }\n      \n      &.", "-spin-spinning.", "-spin-sm { \n        .", "-spin-dot {\n            font-size: ", "px;   \n        }\n        .", "-spin-text {\n            font-size: ", "px;\n        }\n      }\n\n      &.", "-spin-spinning.", "-spin-lg {\n        .", "-spin-dot {\n            font-size: ", "px;\n        }\n        .", "-spin-text {\n            font-size: ", "px;\n        }\n      }\n    \n    "])), prefixCls, spinnerToken['spinner-color-text'], spinnerToken['spinner-font-size-medium'], prefixCls, spinnerToken['spinner-size-medium'], prefixCls, prefixCls, prefixCls, spinnerToken['spinner-size-small'], prefixCls, spinnerToken['spinner-font-size-small'], prefixCls, prefixCls, prefixCls, spinnerToken['spinner-size-large'], prefixCls, spinnerToken['spinner-font-size-large']);
    return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", "  \n      ", "\n    "])), commonStyle, showTextStyle);
  }).styles;
  return styles;
};
export default useStyle;