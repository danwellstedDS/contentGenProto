var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import borderless from "./borderless";
import color from "./color";
import expandIcon from "./expandIcon";
import ghost from "./ghost";
import size from "./size";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-collapse {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                overflow: hidden;\n\n                > .", "-collapse-item {\n                    &:first-child,\n                    &:last-child {\n                        > .", "-collapse-header {\n                            border-radius: 0;\n                        }\n                    }\n                }\n            }\n        "])), prefixCls, color(utils), borderless(utils), ghost(utils), size(utils), expandIcon(utils), prefixCls, prefixCls);
  });
};
export default useStyle;