"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowDownOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowDownOutlined"));
var _react = require("react");
var _hooks = require("../hooks");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useDropdown.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks

// Icons

// Types

var useDropdown = function useDropdown(props) {
  var originChildren = props.children,
    dropdown = props.dropdown;
  var prefixCls = (0, _hooks.usePrefixCls)();
  return (0, _react.useMemo)(function () {
    if (!originChildren) return undefined;
    if (!dropdown) {
      return originChildren;
    }
    return (0, _jsxRuntime.jsxs)("span", {
      className: "".concat(prefixCls, "-btn-icon-dropdown-wrapper"),
      children: [(0, _jsxRuntime.jsx)("span", {
        children: originChildren
      }), ' ', (0, _jsxRuntime.jsx)("span", {
        className: "".concat(prefixCls, "-btn-icon ").concat(prefixCls, "-btn-icon-dropdown"),
        children: (0, _jsxRuntime.jsx)(_ArrowDownOutlined2.default, {})
      })]
    });
  }, [originChildren, dropdown, prefixCls]);
};
var _default = exports.default = useDropdown;