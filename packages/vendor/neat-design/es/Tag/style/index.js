var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
/**
 * @file index.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import { useCreateStyles } from "../../hooks";

// Styles
import amber from "./amber";
import amberInverse from "./amberInverse";
import blue from "./blue";
import blueInverse from "./blueInverse";
import cyan from "./cyan";
import cyanInverse from "./cyanInverse";
import green from "./green";
import greenInverse from "./greenInverse";
import neutral from "./neutral";
import neutralInverse from "./neutralInverse";
import orange from "./orange";
import orangeInverse from "./orangeInverse";
import pink from "./pink";
import pinkInverse from "./pinkInverse";
import purple from "./purple";
import purpleInverse from "./purpleInverse";
import red from "./red";
import redInverse from "./redInverse";
import size from "./size";

// Types

var useStyle = function useStyle() {
  var createStyles = useCreateStyles();
  return createStyles(function (utils) {
    var css = utils.css,
      prefixCls = utils.prefixCls,
      token = utils.token;
    return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            &.", "-tag {\n                display: inline-flex;\n                align-items: center;\n                border: none;\n                font-weight: ", ";\n\n                .", "-tag-icon {\n                    color: inherit;\n                }\n\n                .", "-tag-close-icon {\n                    margin: 0;\n                }\n\n                &:active {\n                    .", "-tag-close-icon {\n                        color: inherit;\n                    }\n                }\n\n                &:focus-visible {\n                    outline: none;\n                    box-shadow: ", ";\n                }\n\n                &.disabled {\n                    .", "-tag-close-icon {\n                        display: none;\n                    }\n                }\n\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n                ", "\n            }\n        "])), prefixCls, token['font-weight-regular'], prefixCls, prefixCls, prefixCls, token['shadow-focus'], prefixCls, size(utils), blue(utils), blueInverse(utils), green(utils), greenInverse(utils), orange(utils), orangeInverse(utils), amber(utils), amberInverse(utils), red(utils), redInverse(utils), pink(utils), pinkInverse(utils), purple(utils), purpleInverse(utils), cyan(utils), cyanInverse(utils), neutral(utils), neutralInverse(utils));
  });
};
export default useStyle;