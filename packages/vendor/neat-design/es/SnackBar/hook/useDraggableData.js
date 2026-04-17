function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * @file useDraggableData.ts
 * @author minglong.zhao(minglong.zhao@derbysoft.com)
 */

// Hooks
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Statics
import { DEFAULT_POSITION } from "../statics";

// Vendors
import isEqual from 'lodash/isEqual';
import { formatBoundsGap, getBounds, getValidPosition, transferOriginPlacement } from "../util/position";

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
  var _useState = useState(DEFAULT_POSITION),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPosition = _useState2[1];
  var positionRef = useRef(position);
  positionRef.current = position;

  // Draggable bounds
  var bounds = useMemo(function () {
    return getBounds(boundSize, barSize, boundsGap);
  }, [boundsGap, boundSize, barSize]);

  // Set up drag listening events
  // If want to change position,please use this func.
  var handleChangePosition = useCallback(function (position) {
    var validPosition = getValidPosition(position, bounds);
    setPosition(function (oldPosition) {
      return isEqual(validPosition, oldPosition) ? oldPosition : validPosition;
    });
    return validPosition;
  }, [bounds]);

  // Listen for whether the dom is initialized
  var domInitialized = useMemo(function () {
    var boundsGapArr = formatBoundsGap(boundsGap);
    return boundSize.offsetWidth - boundsGapArr[1] - boundsGapArr[3] >= 0 && barSize.offsetWidth > 0 && barSize.offsetHeight > 0;
  }, [barSize.offsetHeight, barSize.offsetWidth, boundSize.offsetWidth, boundsGap]);

  // Whether you use placement to initialize position
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    haveUsePlacement = _useState4[0],
    setHaveUsePlacement = _useState4[1];

  // Bar is initialized & placement is used
  var init = useMemo(function () {
    return domInitialized && haveUsePlacement;
  }, [domInitialized, haveUsePlacement]);

  // use placement to set position after dom initialized
  useEffect(function () {
    if (domInitialized && !init) {
      setPosition(transferOriginPlacement(placement, bounds));
      setHaveUsePlacement(true);
    }
  }, [bounds, domInitialized, init, placement]);

  //  Whether the user has dragged the bar, when placemact is change, set false to dragged
  var dragged = useRef(false);

  // The last used placement
  var lastPlacement = useRef(placement);

  // When placement is changed, set position
  // When bounds is changed, Check if position is valid
  useEffect(function () {
    if (init) {
      // If placement is changed , change position and set dragged to false and memorize placement
      if (lastPlacement.current !== placement) {
        setPosition(transferOriginPlacement(placement, bounds));
        lastPlacement.current = placement;
        dragged.current = false;
      } else {
        // If the boundary has changed and the bar has been dragged.
        if (dragged.current) {
          handleChangePosition(positionRef.current);
        } else {
          setPosition(transferOriginPlacement(placement, bounds));
        }
      }
    }
  }, [init, bounds, handleChangePosition, placement]);
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    dragging = _useState6[0],
    setDragging = _useState6[1];
  var handleListenDragStart = useCallback(function (_e, data) {
    dragged.current = true;
    setDragging(true);
    var validPosition = handleChangePosition(data);
    onDragStart === null || onDragStart === void 0 || onDragStart(validPosition);
  }, [handleChangePosition, onDragStart]);
  var handleListenDragging = useCallback(function (_e, data) {
    setDragging(true);
    var validPosition = handleChangePosition(data);
    onDragging === null || onDragging === void 0 || onDragging(validPosition);
  }, [handleChangePosition, onDragging]);
  var handleListenDragStop = useCallback(function (_e, data) {
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
export default useDraggableData;