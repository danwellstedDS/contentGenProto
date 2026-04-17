var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import largeSize from "./largeSize";
import mediumSize from "./mediumSize";
import smallSize from "./smallSize";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var selectToken = componentsToken.Select;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-picker {\n                .", "-picker-suffix {\n                    font-size: 20px;\n                }\n\n                .", "-picker-range-separator {\n                    color: ", ";\n                }\n\n                ", "\n\n                &.", "-picker-small {\n                    ", "\n                }\n\n                &.", "-picker-large {\n                    ", "\n                }\n            }\n        "])), prefixCls, prefixCls, prefixCls, selectToken['select-color-text-placeholder'], mediumSize(utils), prefixCls, smallSize(utils), prefixCls, largeSize(utils));
  });
};
export default useStyle;