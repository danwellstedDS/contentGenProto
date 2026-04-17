"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowRightOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined"));
var _classnames = _interopRequireDefault(require("classnames"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file getExpandIcon.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Icons

// Vendors

// Types

var getExpandIcon = function getExpandIcon() {
  return function (_ref) {
    var isActive = _ref.isActive;
    return (0, _jsxRuntime.jsx)("i", {
      className: (0, _classnames.default)({
        activated: isActive
      }),
      "aria-expanded": isActive,
      children: (0, _jsxRuntime.jsx)(_ArrowRightOutlined2.default, {})
    });
  };
};
var _default = exports.default = getExpandIcon;