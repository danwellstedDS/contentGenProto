"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ahooks = require("ahooks");
var _react = require("react");
var _useDraggableData2 = _interopRequireDefault(require("./hook/useDraggableData"));
var _useSize3 = _interopRequireDefault(require("./hook/useSize"));
var _reactDraggable = _interopRequireDefault(require("react-draggable"));
var _Bar = _interopRequireDefault(require("./Bar"));
var _statics = require("./statics");
var _reactDom = require("react-dom");
var _size = require("./util/size");
var _jsxRuntime = require("@emotion/react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /**
 * @file DraggableComponent.tsx
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */ // Hooks
// Components
// Statics
// Vendors
// Types
var InsertBeforeContainer = function InsertBeforeContainer(_ref) {
  var getContainer = _ref.getContainer,
    children = _ref.children;
  var anchor = (0, _react.useRef)(document.createElement('div'));
  (0, _react.useEffect)(function () {
    var dom = getContainer === null || getContainer === void 0 ? void 0 : getContainer();
    var parentDom = dom.parentNode;
    var anchorDom = anchor.current;
    parentDom.insertBefore(anchorDom, dom);
    return function () {
      parentDom === null || parentDom === void 0 || parentDom.removeChild(anchorDom);
    };
  }, [getContainer]);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _reactDom.createPortal)(children, anchor.current)
  });
};
var InsertInBody = function InsertInBody(_ref2) {
  var children = _ref2.children;
  var anchor = (0, _react.useRef)(document.createElement('div'));
  (0, _react.useEffect)(function () {
    var parentDom = document.getElementsByTagName('body')[0];
    var anchorDom = anchor.current;
    parentDom.appendChild(anchorDom);
    return function () {
      parentDom.removeChild(anchorDom);
    };
  }, []);
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _reactDom.createPortal)(children, anchor.current)
  });
};
var DraggableComponent = function DraggableComponent(props) {
  var _props$zIndex = props.zIndex,
    zIndex = _props$zIndex === void 0 ? 1 : _props$zIndex,
    className = props.className,
    width = props.width,
    _props$boundsGap = props.boundsGap,
    boundsGap = _props$boundsGap === void 0 ? _statics.DEFAULT_BOUNDS_GAP : _props$boundsGap,
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
  var _useControllableValue = (0, _ahooks.useControllableValue)(props, {
      valuePropName: 'open',
      trigger: 'onOpenChange'
    }),
    _useControllableValue2 = _slicedToArray(_useControllableValue, 2),
    open = _useControllableValue2[0],
    _onOpenChange = _useControllableValue2[1];

  /** darg dom */
  var dragRef = (0, _react.useRef)(null);
  var _useSize = (0, _useSize3.default)(),
    _useSize2 = _slicedToArray(_useSize, 2),
    barSize = _useSize2[0],
    intarnelOnBarSizeChange = _useSize2[1];
  (0, _react.useEffect)(function () {
    onBarSizeChange === null || onBarSizeChange === void 0 || onBarSizeChange(barSize);
  }, [barSize, onBarSizeChange]);

  /** Bar size needs to be smaller than container */
  var barMaxWidth = (0, _react.useMemo)(function () {
    return (0, _size.getBarMaxWidth)(boundSize, boundsGap);
  }, [boundsGap, boundSize]);
  var _useDraggableData = (0, _useDraggableData2.default)({
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
  var draggableComponent = (0, _react.useMemo)(function () {
    if (!draggableBoundSource) return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
    return (0, _jsxRuntime.jsx)(_reactDraggable.default, {
      bounds: bounds,
      nodeRef: dragRef,
      position: position,
      positionOffset: positionOffset,
      disabled: !isDraggable,
      onStart: handleListenDragStart,
      onDrag: handleListenDragging,
      onStop: handleListenDragStop,
      children: (0, _jsxRuntime.jsx)(_Bar.default, {
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
  if (draggableBoundSource === 'window') return (0, _jsxRuntime.jsx)(InsertInBody, {
    children: draggableComponent
  });
  if (draggableBoundSource === 'container' && getContainer !== null && getContainer !== void 0 && getContainer()) {
    return (0, _jsxRuntime.jsx)(InsertBeforeContainer, {
      getContainer: getContainer,
      children: draggableComponent
    });
  }
  if (draggableBoundSource === 'children') {
    return draggableComponent;
  }
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
};
var _default = exports.default = DraggableComponent;