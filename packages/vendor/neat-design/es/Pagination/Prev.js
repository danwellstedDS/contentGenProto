import _ArrowLeftOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowLeftOutlined";
/**
 * @file Prev.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import usePrefixCls from "../hooks/usePrefixCls";

// Icons
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Prev = function Prev() {
  var prefixCls = usePrefixCls();
  return _jsx("button", {
    className: "".concat(prefixCls, "-pagination-item-link"),
    children: _jsx("span", {
      className: "anticon anticon-left",
      role: "img",
      "aria-label": "left",
      children: _jsx(_ArrowLeftOutlined, {})
    })
  });
};
export default Prev;