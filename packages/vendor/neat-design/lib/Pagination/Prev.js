"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowLeftOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowLeftOutlined"));
var _usePrefixCls = _interopRequireDefault(require("../hooks/usePrefixCls"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file Prev.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Icons

var Prev = function Prev() {
  var prefixCls = (0, _usePrefixCls.default)();
  return (0, _jsxRuntime.jsx)("button", {
    className: "".concat(prefixCls, "-pagination-item-link"),
    children: (0, _jsxRuntime.jsx)("span", {
      className: "anticon anticon-left",
      role: "img",
      "aria-label": "left",
      children: (0, _jsxRuntime.jsx)(_ArrowLeftOutlined2.default, {})
    })
  });
};
var _default = exports.default = Prev;