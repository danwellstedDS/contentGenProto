"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _statics = require("../statics");
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _position = require("../util/position");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /**
 * @file useDraggableData.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */ // Hooks
// Statics
// Vendors
// Types

var useDraggableData = function useDraggableData(_ref) {
  var boundSize = _ref.boundSize,
    barSize = _ref.barSize,
    placement = _ref.placement,
    boundsGap = _ref.boundsGap,
    onDragStart = _ref.onDragStart,
    onDragging = _ref.onDragging,
    onDragStop = _ref.onDragStop;
  // bar position
  var _useState = (0, _react.useState)(_statics.DEFAULT_POSITION),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var positionRef = (0, _react.useRef)(position);
  positionRef.current = position;

  // Draggable bounds
  var bounds = (0, _react.useMemo)(function () {
    return (0, _position.getBounds)(boundSize, barSize, boundsGap);
  }, [boundsGap, boundSize, barSize]);

  // Set up drag listening events
  // If want to change position,please use this func.
  var handleChangePosition = (0, _react.useCallback)(function (position) {
    var validPosition = (0, _position.getValidPosition)(position, bounds);
    setPosition(function (oldPosition) {
      return (0, _isEqual.default)(validPosition, oldPosition) ? oldPosition : validPosition;
    });
    return validPosition;
  }, [bounds]);

  // Listen for whether the dom is initialized
  var domInitialized = (0, _react.useMemo)(function () {
    var boundsGapArr = (0, _position.formatBoundsGap)(boundsGap);
    return boundSize.offsetWidth - boundsGapArr[1] - boundsGapArr[3] >= 0 && barSize.offsetWidth > 0 && barSize.offsetHeight > 0;
  }, [barSize.offsetHeight, barSize.offsetWidth, boundSize.offsetWidth, boundsGap]);

  // Whether you use placement to initialize position
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    haveUsePlacement = _useState4[0],
    setHaveUsePlacement = _useState4[1];

  // Bar is initialized & placement is used
  var init = (0, _react.useMemo)(function () {
    return domInitialized && haveUsePlacement;
  }, [domInitialized, haveUsePlacement]);

  // use placement to set position after dom initialized
  (0, _react.useEffect)(function () {
    if (domInitialized && !init) {
      setPosition((0, _position.transferOriginPlacement)(placement, bounds));
      setHaveUsePlacement(true);
    }
  }, [bounds, domInitialized, init, placement]);

  //  Whether the user has dragged the bar, when placemact is change, set false to dragged
  var dragged = (0, _react.useRef)(false);

  // The last used placement
  var lastPlacement = (0, _react.useRef)(placement);

  // When placement is changed, set position
  // When bounds is changed, Check if position is valid
  (0, _react.useEffect)(function () {
    if (init) {
      // If placement is changed , change position and set dragged to false and memorize placement
      if (lastPlacement.current !== placement) {
        setPosition((0, _position.transferOriginPlacement)(placement, bounds));
        lastPlacement.current = placement;
        dragged.current = false;
      } else {
        // If the boundary has changed and the bar has been dragged.
        if (dragged.current) {
          handleChangePosition(positionRef.current);
        } else {
          setPosition((0, _position.transferOriginPlacement)(placement, bounds));
        }
      }
    }
  }, [init, bounds, handleChangePosition, placement]);
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    dragging = _useState6[0],
    setDragging = _useState6[1];
  var handleListenDragStart = (0, _react.useCallback)(function (_e, data) {
    dragged.current = true;
    setDragging(true);
    var validPosition = handleChangePosition(data);
    onDragStart === null || onDragStart === void 0 || onDragStart(validPosition);
  }, [handleChangePosition, onDragStart]);
  var handleListenDragging = (0, _react.useCallback)(function (_e, data) {
    setDragging(true);
    var validPosition = handleChangePosition(data);
    onDragging === null || onDragging === void 0 || onDragging(validPosition);
  }, [handleChangePosition, onDragging]);
  var handleListenDragStop = (0, _react.useCallback)(function (_e, data) {
    setDragging(false);
    var validPosition = handleChangePosition(data);
    onDragStop === null || onDragStop === void 0 || onDragStop(validPosition);
  }, [handleChangePosition, onDragStop]);
  return {
    init: init,
    bounds: bounds,
    position: position,
    dragging: dragging,
    handleListenDragStart: handleListenDragStart,
    handleListenDragging: handleListenDragging,
    handleListenDragStop: handleListenDragStop
  };
};
var _default = exports.default = useDraggableData;