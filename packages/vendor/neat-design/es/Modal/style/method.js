var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file method.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";
var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (_ref) {
    var css = _ref.css,
      prefixCls = _ref.prefixCls,
      token = _ref.token,
      componentsToken = _ref.componentsToken;
    var modalToken = componentsToken.Modal;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-modal {\n                color: ", ";\n\n                .", "-modal-content {\n                    padding: 0;\n                }\n            }\n\n            &.", "-modal-confirm {\n                .", "-modal-confirm-body {\n                    gap: ", "px;\n                    padding: ", "px;\n                }\n\n                .", "-modal-confirm-icon {\n                    margin: 2px;\n                    font-size: ", "px;\n                }\n\n                .", "-modal-confirm-paragraph {\n                    gap: ", "px;\n                }\n\n                .", "-modal-confirm-title {\n                    font-weight: ", ";\n                    font-size: ", "px;\n                    line-height: ", ";\n                }\n\n                .", "-modal-confirm-content {\n                    font-size: ", "px;\n                    line-height: ", ";\n                }\n\n                .", "-modal-confirm-skeleton {\n                    .", "-skeleton-paragraph {\n                        margin: 0;\n\n                        & > li {\n                            height: 16px;\n                            background: #f1f5f8;\n\n                            & + li {\n                                margin-block-start: 16px;\n                            }\n                        }\n                    }\n                }\n\n                .", "-modal-confirm-btns {\n                    padding: ", "px;\n                    margin-top: 0;\n\n                    & > .", "-btn {\n                        min-width: 136px;\n\n                        & + .ds-btn {\n                            margin-inline-start: ", "px;\n                        }\n                    }\n                }\n            }\n\n            &.", "-modal-confirm-info {\n                .", "-modal-confirm-icon {\n                    color: ", ";\n                }\n            }\n\n            &.", "-modal-confirm-success {\n                .", "-modal-confirm-icon {\n                    color: ", ";\n                }\n            }\n\n            &.", "-modal-confirm-warning {\n                .", "-modal-confirm-icon {\n                    color: ", ";\n                }\n            }\n\n            &.", "-modal-confirm-error {\n                .", "-modal-confirm-icon {\n                    color: ", ";\n                }\n            }\n        "])), prefixCls, modalToken['modal-color-text'], prefixCls, prefixCls, prefixCls, modalToken['modal-gap'], modalToken['modal-padding'], prefixCls, modalToken['modal-size-icon'], prefixCls, modalToken['modal-gap'], prefixCls, token['font-weight-semibold'], token['font-size-header-5'], token['line-height-static-28'], prefixCls, token['modal-font-size'], token['line-height-static-20'], prefixCls, prefixCls, prefixCls, modalToken['modal-padding'], prefixCls, modalToken['modal-gap'], prefixCls, prefixCls, modalToken['modal-color-icon-info'], prefixCls, prefixCls, modalToken['modal-color-icon-success'], prefixCls, prefixCls, modalToken['modal-color-icon-warning'], prefixCls, prefixCls, modalToken['modal-color-icon-error']);
  });
};
export default useStyle;