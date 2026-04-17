var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import count from "./count";
import dot from "./dot";
import size from "./size";
import status from "./status";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    return utils.css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-badge {\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), utils.prefixCls, count(utils), dot(utils), size(utils), status(utils));
  });
};
export default useStyle;