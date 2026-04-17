var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import checkbox from "./checkbox";
import checked from "./checked";
import disabled from "./disabled";
import error from "./error";
import indeterminate from "./indeterminate";
import largeSize from "./largeSize";
import mediumSize from "./mediumSize";
import smallSize from "./smallSize";

// Types

export var getStyle = function getStyle(utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &[class^='", "-checkbox'] {\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n            ", ";\n\n            &.", "-checkbox-size-large {\n                ", ";\n            }\n\n            &.", "-checkbox-size-medium {\n                ", ";\n            }\n\n            &.", "-checkbox-size-small {\n                ", ";\n            }\n        }\n    "])), prefixCls, checkbox(utils), checked(utils), disabled(utils), error(utils), indeterminate(utils), prefixCls, largeSize(utils), prefixCls, mediumSize(utils), prefixCls, smallSize(utils));
};
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    return getStyle(utils);
  });
};
export default useStyle;