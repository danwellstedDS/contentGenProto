"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalSizeEnum = exports.IconMap = void 0;
var _WarningCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled"));
var _SuccessCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled"));
var _InfoCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/InfoCircleFilled"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file static.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Icons
// Types
/**
 * Modal size
 */
var ModalSizeEnum = exports.ModalSizeEnum = /*#__PURE__*/function (ModalSizeEnum) {
  ModalSizeEnum[ModalSizeEnum["small"] = 400] = "small";
  ModalSizeEnum[ModalSizeEnum["medium"] = 600] = "medium";
  ModalSizeEnum[ModalSizeEnum["large"] = 960] = "large";
  return ModalSizeEnum;
}({});
/**
 * Modal icon map
 */
var IconMap = exports.IconMap = {
  info: (0, _jsxRuntime.jsx)(_InfoCircleFilled2.default, {}),
  success: (0, _jsxRuntime.jsx)(_SuccessCircleFilled2.default, {}),
  warning: (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {}),
  error: (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {})
};