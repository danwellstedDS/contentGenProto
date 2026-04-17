"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowRightOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined"));
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file Next.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Icons

var Next = function Next() {
  var prefixCls = (0, _usePrefixCls.default)();
  return (0, _jsxRuntime.jsx)("button", {
    className: "".concat(prefixCls, "-pagination-item-link"),
    children: (0, _jsxRuntime.jsx)("span", {
      className: "anticon anticon-right",
      role: "img",
      "aria-label": "right",
      children: (0, _jsxRuntime.jsx)(_ArrowRightOutlined2.default, {})
    })
  });
};
var _default = exports.default = Next;