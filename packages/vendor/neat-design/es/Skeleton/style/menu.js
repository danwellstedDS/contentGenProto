var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file menu.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      componentsToken = utils.componentsToken;
    var skeletonToken = componentsToken.Skeleton;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-skeleton-menu {\n                box-sizing: border-box;\n                display: flex;\n                flex-direction: column;\n                gap: ", "px;\n                width: 232px;\n\n                .", "-skeleton-title-box {\n                    width: unset;\n                    height: ", "px;\n                    padding-inline: ", "px;\n\n                    .", "-skeleton-bar {\n                        flex: 1;\n                        width: initial;\n                    }\n                }\n            }\n        "])), prefixCls, skeletonToken['skeleton-gap-v-menu'], prefixCls, skeletonToken['skeleton-size-v-menu'], skeletonToken['skeleton-padding-h-menu'], prefixCls);
  });
};
export default useStyle;