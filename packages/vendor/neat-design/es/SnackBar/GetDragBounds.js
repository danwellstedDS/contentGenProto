/**
 * @file GetDragBounds.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks
import useGetDomSize from "./hook/useGetDomSize";
import useGetWindowSize from "./hook/useGetWindowSize";

// Components
import ResizeObserver from 'rc-resize-observer';

// Types
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var GetDomSize = function GetDomSize(props) {
  useGetDomSize(props);
  return _jsx(_Fragment, {});
};
var GetWindowSize = function GetWindowSize(props) {
  useGetWindowSize(props);
  return _jsx(_Fragment, {});
};
var GetDragBounds = function GetDragBounds(_ref) {
  var draggableBoundSource = _ref.draggableBoundSource,
    onResize = _ref.onResize,
    getContainer = _ref.getContainer,
    children = _ref.children;
  if (draggableBoundSource === 'window') return _jsxs(_Fragment, {
    children: [_jsx(GetWindowSize, {
      onResize: onResize
    }), children]
  });
  if (draggableBoundSource === 'container') return _jsxs(_Fragment, {
    children: [_jsx(GetDomSize, {
      getContainer: getContainer,
      onResize: onResize
    }), children]
  });
  if (draggableBoundSource === 'children') return _jsx(ResizeObserver, {
    onResize: onResize,
    children: children
  });
  return _jsx(_Fragment, {});
};
export default GetDragBounds;