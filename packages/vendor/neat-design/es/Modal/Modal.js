function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _CloseOutlined from "@derbysoft/neat-design-icons/lib/icons-react/CloseOutlined";
var _excluded = ["rootClassName", "centered", "fullScreen", "okButtonProps", "okType", "cancelButtonProps", "closeIcon", "size", "width", "responsive"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Modal.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useCallback, useEffect, useMemo, useState } from 'react';
import useConfig from "../ConfigProvider/useConfig";

// Components
import { Modal as AntModal } from 'antd';

// Icons

// Static
import { ModalSizeEnum } from "./static";

// Vendors
import classNames from 'classnames';
import { neatButtonProps2AntButtonProps, neatButtonType2AntButtonType } from "../Button";

// Styles
import useButtonStyle from "../Button/style";
import useStyle from "./style";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Modal = function Modal(_ref) {
  var rootClassName = _ref.rootClassName,
    _ref$centered = _ref.centered,
    centered = _ref$centered === void 0 ? true : _ref$centered,
    fullScreen = _ref.fullScreen,
    okButtonProps = _ref.okButtonProps,
    _ref$okType = _ref.okType,
    okType = _ref$okType === void 0 ? 'primary' : _ref$okType,
    cancelButtonProps = _ref.cancelButtonProps,
    _ref$closeIcon = _ref.closeIcon,
    closeIcon = _ref$closeIcon === void 0 ? _jsx(_CloseOutlined, {}) : _ref$closeIcon,
    size = _ref.size,
    width = _ref.width,
    _ref$responsive = _ref.responsive,
    responsive = _ref$responsive === void 0 ? true : _ref$responsive,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useConfig = useConfig(),
    componentSize = _useConfig.componentSize;
  var _useStyle = useStyle({
      responsive: responsive
    }),
    prefixCls = _useStyle.prefixCls,
    styles = _useStyle.styles;
  var _useButtonStyle = useButtonStyle(),
    buttonStyles = _useButtonStyle.styles;

  /**
   * Compute the final size for Modal
   */
  var modalSize = useMemo(function () {
    return size || componentSize || 'medium';
  }, [componentSize, size]);

  /**
   * Calculate the modal width
   */
  var getModalWidth = useCallback(function () {
    if (responsive && window.innerWidth < 768) {
      return '100vw';
    }
    if (width !== undefined) {
      return width;
    }
    if (fullScreen) {
      return 'calc(100vw - 48px)';
    }
    return ModalSizeEnum[modalSize] || ModalSizeEnum.medium;
  }, [fullScreen, modalSize, responsive, width]);

  /**
   * State for current modal width
   */
  var _useState = useState(getModalWidth()),
    _useState2 = _slicedToArray(_useState, 2),
    modalWidth = _useState2[0],
    setModalWidth = _useState2[1];

  /**
   * Refresh modal width.
   */
  var refreshModalWidth = useCallback(function () {
    setModalWidth(getModalWidth());
  }, [getModalWidth]);

  /**
   * Refresh modal width when "fullScreen", "modalSize", "width" changed.
   */
  useEffect(function () {
    refreshModalWidth();
  }, [refreshModalWidth]);

  /**
   * Bind event for modal width when window resized.
   */
  useEffect(function () {
    window.addEventListener('resize', refreshModalWidth);
    return function () {
      return window.removeEventListener('resize', refreshModalWidth);
    };
  }, [refreshModalWidth]);

  /**
   * Format "cancelButtonProps" from NeatButtonProps to AntButtonProps
   */
  var mergedCancelButtonProps = useMemo(function () {
    return neatButtonProps2AntButtonProps(_objectSpread(_objectSpread({
      type: 'tertiary'
    }, cancelButtonProps), {}, {
      className: classNames(buttonStyles, cancelButtonProps === null || cancelButtonProps === void 0 ? void 0 : cancelButtonProps.className)
    }));
  }, [buttonStyles, cancelButtonProps]);

  /**
   * Format "okType" from NeatButtonType to AntButtonType
   */
  var mergedOKType = useMemo(function () {
    return neatButtonType2AntButtonType(okType);
  }, [okType]);

  /**
   * Format "okButtonProps" from NeatButtonProps to AntButtonProps
   */
  var mergedOKButtonProps = useMemo(function () {
    return neatButtonProps2AntButtonProps(_objectSpread(_objectSpread({
      type: 'primary'
    }, okButtonProps), {}, {
      className: classNames(buttonStyles, okButtonProps === null || okButtonProps === void 0 ? void 0 : okButtonProps.className)
    }));
  }, [buttonStyles, okButtonProps]);
  return _jsx(AntModal, _objectSpread(_objectSpread({}, restProps), {}, {
    rootClassName: classNames(styles, _defineProperty({}, "".concat(prefixCls, "-modal-full-screen"), fullScreen), rootClassName),
    centered: centered,
    okButtonProps: mergedOKButtonProps,
    okType: mergedOKType,
    cancelButtonProps: mergedCancelButtonProps,
    width: modalWidth,
    closeIcon: closeIcon
  }));
};
export default Modal;