var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import horizontal from "./horizontal";
import hoverStyle from "./hover";
import inline from "./inline";
import inlineCollapsed from "./inlineCollapsed";
import selected from "./selected";

// Types

var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-menu {\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), utils.prefixCls, horizontal(utils), hoverStyle(utils), inline(utils), inlineCollapsed(utils), selected(utils));
  });
};
export default useStyle;