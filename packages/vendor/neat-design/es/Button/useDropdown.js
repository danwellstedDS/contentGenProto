import _ArrowDownOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowDownOutlined";
/**
 * @file useDropdown.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import { usePrefixCls } from "../hooks";

// Icons
// Types
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var useDropdown = function useDropdown(props) {
  var originChildren = props.children,
    dropdown = props.dropdown;
  var prefixCls = usePrefixCls();
  return useMemo(function () {
    if (!originChildren) return undefined;
    if (!dropdown) {
      return originChildren;
    }
    return _jsxs("span", {
      className: "".concat(prefixCls, "-btn-icon-dropdown-wrapper"),
      children: [_jsx("span", {
        children: originChildren
      }), ' ', _jsx("span", {
        className: "".concat(prefixCls, "-btn-icon ").concat(prefixCls, "-btn-icon-dropdown"),
        children: _jsx(_ArrowDownOutlined, {})
      })]
    });
  }, [originChildren, dropdown, prefixCls]);
};
export default useDropdown;