var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */

//Hooks
import { useCreateStyles } from "../../hooks";
import { rigorousNeatSize } from "../../hooks/useConvertSize";

// Types

var useStyle = function useStyle(_ref) {
  var size = _ref.size;
  var cSize = rigorousNeatSize(size);
  var createStyles = useCreateStyles();
  return createStyles(function (_ref2) {
    var css = _ref2.css,
      componentsToken = _ref2.componentsToken,
      prefixCls = _ref2.prefixCls;
    var rateToken = componentsToken.Rate;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-rate {\n                font-size: ", "px;\n            }\n        "])), prefixCls, rateToken["rate-size-".concat(cSize)]);
  }).styles;
};
export default useStyle;