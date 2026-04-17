import _WarningCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled";
import _SuccessCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled";
import _InfoCircleFilled from "@derbysoft/neat-design-icons/lib/icons-react/InfoCircleFilled";
/**
 * @file static.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Icons
// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/**
 * Modal size
 */
export var ModalSizeEnum = /*#__PURE__*/function (ModalSizeEnum) {
  ModalSizeEnum[ModalSizeEnum["small"] = 400] = "small";
  ModalSizeEnum[ModalSizeEnum["medium"] = 600] = "medium";
  ModalSizeEnum[ModalSizeEnum["large"] = 960] = "large";
  return ModalSizeEnum;
}({});

/**
 * Modal icon map
 */
export var IconMap = {
  info: _jsx(_InfoCircleFilled, {}),
  success: _jsx(_SuccessCircleFilled, {}),
  warning: _jsx(_WarningCircleFilled, {}),
  error: _jsx(_WarningCircleFilled, {})
};