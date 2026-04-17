import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
/**
 * @file Next.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks
import usePrefixCls from "../hooks/usePrefixCls";

// Icons
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Next = function Next() {
  var prefixCls = usePrefixCls();
  return _jsx("button", {
    className: "".concat(prefixCls, "-pagination-item-link"),
    children: _jsx("span", {
      className: "anticon anticon-right",
      role: "img",
      "aria-label": "right",
      children: _jsx(_ArrowRightOutlined, {})
    })
  });
};
export default Next;