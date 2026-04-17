var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file baseDot.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Styles
import baseDotError from "./baseDotError";
import baseDotFinish from "./baseDotFinish";
import baseDotProcess from "./baseDotProcess";
import baseDotSkip from "./baseDotSkip";
import baseDotWait from "./baseDotWait";

// Types

export default (function (utils) {
  var css = utils.css,
    prefixCls = utils.prefixCls;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        &.", "-steps-progress-dot {\n            ", "\n            ", "\n            ", "\n            ", "\n            ", "\n            \n            .", "-steps-item-tail {\n                padding-inline: 16px;\n            }\n\n            .", "-steps-icon-dot {\n                width: 32px;\n                height: 32px;\n                padding: 12px;\n\n                &::after {\n                    content: '';\n                    display: block;\n                    width: 8px;\n                    height: 8px;\n                    border-radius: 50%;\n                }\n            }\n\n            &.", "-steps-small {\n                .", "-steps-item-tail {\n                    padding-inline: 12px;\n                }\n\n                .", "-steps-icon-dot {\n                    width: 24px;\n                    height: 24px;\n                    padding: 8px;\n                }\n            }\n        }\n    "])), prefixCls, baseDotError(utils), baseDotFinish(utils), baseDotProcess(utils), baseDotSkip(utils), baseDotWait(utils), prefixCls, prefixCls, prefixCls, prefixCls, prefixCls);
});