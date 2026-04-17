"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ArrowRightOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined"));
var _ArrowLeftOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/ArrowLeftOutlined"));
var _CalendarOutlined2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/CalendarOutlined"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file useIcons.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Icons

// Types

var useIcons = function useIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
    prevIcon = _ref.prevIcon,
    nextIcon = _ref.nextIcon,
    superPrevIcon = _ref.superPrevIcon,
    superNextIcon = _ref.superNextIcon;
  return {
    suffixIcon: suffixIcon || (0, _jsxRuntime.jsx)(_CalendarOutlined2.default, {}),
    prevIcon: prevIcon || (0, _jsxRuntime.jsx)(_ArrowLeftOutlined2.default, {}),
    nextIcon: nextIcon || (0, _jsxRuntime.jsx)(_ArrowRightOutlined2.default, {}),
    superPrevIcon: superPrevIcon || (0, _jsxRuntime.jsx)(_ArrowLeftOutlined2.default, {}),
    superNextIcon: superNextIcon || (0, _jsxRuntime.jsx)(_ArrowRightOutlined2.default, {})
  };
};
var _default = exports.default = useIcons;