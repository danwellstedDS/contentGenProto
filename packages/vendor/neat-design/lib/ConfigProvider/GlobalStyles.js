"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../hooks");
var _react = require("@emotion/react");
var _style = _interopRequireDefault(require("../Notification/style"));
var _style2 = _interopRequireDefault(require("../Toast/style"));
var _style3 = _interopRequireDefault(require("../Tooltip/style"));
var _scrollBar = _interopRequireDefault(require("./style/scrollBar"));
var _virtualScrollBar = _interopRequireDefault(require("./style/virtualScrollBar"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file GlobalStyles.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Components

// Styles

// Types

var GlobalStyles = function GlobalStyles() {
  var _useScrollBar = (0, _hooks.useScrollBar)(),
    hasPlaceholderScrollBar = _useScrollBar.hasPlaceholderScrollBar;
  var scrollBarStyle = (0, _scrollBar.default)();
  var virtualScrollBarStyle = (0, _virtualScrollBar.default)();
  var toastStyle = (0, _style2.default)();
  var noticeStyle = (0, _style.default)();
  var tooltipStyle = (0, _style3.default)();
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [hasPlaceholderScrollBar() && (0, _jsxRuntime.jsx)(_react.Global, {
      styles: scrollBarStyle
    }), (0, _jsxRuntime.jsx)(_react.Global, {
      styles: virtualScrollBarStyle
    }), (0, _jsxRuntime.jsx)(_react.Global, {
      styles: toastStyle
    }), (0, _jsxRuntime.jsx)(_react.Global, {
      styles: noticeStyle
    }), (0, _jsxRuntime.jsx)(_react.Global, {
      styles: tooltipStyle
    })]
  });
};
var _default = exports.default = GlobalStyles;