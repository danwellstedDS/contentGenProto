var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file content.ts
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
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-skeleton-content {\n                padding: ", "px;\n\n                .", "-skeleton-paragraph {\n                    height: ", "px;\n\n                    & + .", "-skeleton-paragraph {\n                        margin-top: ", "px;\n                    }\n\n                    &:last-child {\n                        width: calc(200% / 3);\n                    }\n                }\n            }\n        "])), prefixCls, skeletonToken['skeleton-padding-container'], prefixCls, skeletonToken['skeleton-size-v-content'], prefixCls, skeletonToken['skeleton-gap-h-content']);
  });
};
export default useStyle;