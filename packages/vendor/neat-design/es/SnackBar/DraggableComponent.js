function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @file DraggableComponent.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks
import { useControllableValue } from 'ahooks';
import { useEffect, useMemo, useRef } from 'react';
import useDraggableData from "./hook/useDraggableData";
import useSize from "./hook/useSize";

// Components
import Draggable from 'react-draggable';
import Bar from "./Bar";

// Statics
import { DEFAULT_BOUNDS_GAP } from "./statics";

// Vendors
import { createPortal } from 'react-dom';
import { getBarMaxWidth } from "./util/size";

// Types
import { Fragment as _Fragment, jsx as _jsx } from "@emotion/react/jsx-runtime";
var InsertBeforeContainer = function InsertBeforeContainer(_ref) {
  var getContainer = _ref.getContainer,
    children = _ref.children;
  var anchor = useRef(document.createElement('div'));
  useEffect(function () {
    var dom = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
    var parentDom = dom.parentNode;
    var anchorDom = anchor.current;
    parentDom.insertBefore(anchorDom, dom);
    return function () {
      parentDom === null || parentDom === void 0 || parentDom.removeChild(anchorDom);
    };
  }, [getContainer]);
  return _jsx(_Fragment, {
    children: /*#__PURE__*/createPortal(children, anchor.current)
  });
};
var InsertInBody = function InsertInBody(_ref2) {
  var children = _ref2.children;
  var anchor = useRef(document.createElement('div'));
  useEffect(function () {
    var parentDom = document.getElementsByTagName('body')[0];
    var anchorDom = anchor.current;
    parentDom.appendChild(anchorDom);
    return function () {
      parentDom.removeChild(anchorDom);
    };
  }, []);
  return _jsx(_Fragment, {
    children: /*#__PURE__*/createPortal(children, anchor.current)
  });
};
var DraggableComponent = function DraggableComponent(props) {
  var _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 1 : _props$zIndex,
    className = props.className,
    width = props.width,
    _props$boundsGap = props.boundsGap,
    boundsGap = _props$boundsGap === void 0 ? DEFAULT_BOUNDS_GAP : _props$boundsGap,
    positionOffset = props.positionOffset,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    content = props.content,
    _props$isDraggable = props.isDraggable,
    isDraggable = _props$isDraggable === void 0 ? true : _props$isDraggable,
    onDragStart = props.onDragStart,
    onDragging = props.onDragging,
    onDragStop = props.onDragStop,
    onBarSizeChange = props.onBarSizeChange,
    getContainer = props.getContainer,
    boundSize = props.boundSize,
    draggableBoundSource = props.draggableBoundSource;

  /**  maybe user want to control open  */
  var _useControllableValue = useControllableValue(props, {
      valuePropName: 'open',
      trigger: 'onOpenChange'
    }),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    open = _useControllableValue2[0],
    _onOpenChange = _useControllableValue2[1];

  /** darg dom */
  var dragRef = useRef(null);
  var _useSize = useSize(),
    _useSize2 = _slicedToArray(_useSize, 2),
    barSize = _useSize2[0],
    intarnelOnBarSizeChange = _useSize2[1];
  useEffect(function () {
    onBarSizeChange === null || onBarSizeChange === void 0 || onBarSizeChange(barSize);
  }, [barSize, onBarSizeChange]);

  /** Bar size needs to be smaller than container */
  var barMaxWidth = useMemo(function () {
    return getBarMaxWidth(boundSize, boundsGap);
  }, [boundsGap, boundSize]);
  var _useDraggableData = useDraggableData({
      boundSize: boundSize,
      barSize: barSize,
      placement: placement,
      boundsGap: boundsGap,
      onDragStart: onDragStart,
      onDragging: onDragging,
      onDragStop: onDragStop
    }),
    init = _useDraggableData.init,
    bounds = _useDraggableData.bounds,
    position = _useDraggableData.position,
    dragging = _useDraggableData.dragging,
    handleListenDragStart = _useDraggableData.handleListenDragStart,
    handleListenDragging = _useDraggableData.handleListenDragging,
    handleListenDragStop = _useDraggableData.handleListenDragStop;
  var draggableComponent = useMemo(function () {
    if (!draggableBoundSource) return _jsx(_Fragment, {});
    return _jsx(Draggable, {
      bounds: bounds,
      nodeRef: dragRef,
      position: position,
      positionOffset: positionOffset,
      disabled: !isDraggable,
      onStart: handleListenDragStart,
      onDrag: handleListenDragging,
      onStop: handleListenDragStop,
      children: _jsx(Bar, {
        init: init,
        open: open,
        zIndex: zIndex,
        className: className,
        isDraggable: isDraggable,
        dragging: dragging,
        width: width,
        barMaxWidth: barMaxWidth,
        content: content,
        draggableBoundSource: draggableBoundSource,
        updateBarSize: intarnelOnBarSizeChange,
        ref: dragRef
      })
    });
  }, [draggableBoundSource, bounds, position, positionOffset, isDraggable, handleListenDragStart, handleListenDragging, handleListenDragStop, init, open, zIndex, className, dragging, width, barMaxWidth, content, intarnelOnBarSizeChange]);
  if (draggableBoundSource === 'window') return _jsx(InsertInBody, {
    children: draggableComponent
  });
  if (draggableBoundSource === 'container' && getContainer !== null && getContainer !== void 0 && getContainer()) {
    return _jsx(InsertBeforeContainer, {
      getContainer: getContainer,
      children: draggableComponent
    });
  }
  if (draggableBoundSource === 'children') {
    return draggableComponent;
  }
  return _jsx(_Fragment, {});
};
export default DraggableComponent;