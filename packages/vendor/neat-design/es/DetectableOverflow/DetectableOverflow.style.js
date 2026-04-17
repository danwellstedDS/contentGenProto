var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file DetectableOverflow.style.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../hooks";
var useStyles = function useStyles() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n        "])));
  });
};
export default useStyles;