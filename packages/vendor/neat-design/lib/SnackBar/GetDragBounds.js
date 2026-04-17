"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useGetDomSize = _interopRequireDefault(require("./hook/useGetDomSize"));
var _useGetWindowSize = _interopRequireDefault(require("./hook/useGetWindowSize"));
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file GetDragBounds.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks

// Components

// Types

var GetDomSize = function GetDomSize(props) {
  (0, _useGetDomSize.default)(props);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
};
var GetWindowSize = function GetWindowSize(props) {
  (0, _useGetWindowSize.default)(props);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
};
var GetDragBounds = function GetDragBounds(_ref) {
  var draggableBoundSource = _ref.draggableBoundSource,
    onResize = _ref.onResize,
    getContainer = _ref.getContainer,
    children = _ref.children;
  if (draggableBoundSource === 'window') return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(GetWindowSize, {
      onResize: onResize
    }), children]
  });
  if (draggableBoundSource === 'container') return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(GetDomSize, {
      getContainer: getContainer,
      onResize: onResize
    }), children]
  });
  if (draggableBoundSource === 'children') return (0, _jsxRuntime.jsx)(_rcResizeObserver.default, {
    onResize: onResize,
    children: children
  });
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
};
var _default = exports.default = GetDragBounds;