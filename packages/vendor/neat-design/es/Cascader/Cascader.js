function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import _ArrowRightOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowRightOutlined";
import _ArrowDownOutlined from "@derbysoft/neat-design-icons/lib/icons-react/ArrowDownOutlined";
var _excluded = ["className", "classNames", "placeholder", "allowClear", "suffixIcon", "removeIcon", "expandIcon", "multiple", "showCheckedStrategy", "size"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * @file Cascader.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author minglong.zhao(minglong.zhao@derbysoft.net)
 */

// Hooks
import { useMemo } from 'react';
import { useConvertSizeMediumAsMiddle } from "../hooks/useConvertSize";

// Components
import { Cascader as AntCascader } from 'antd';
import CloseButton from "../CloseButton";
import MultipleCascader from "./multiple/MultipleCascader";

// Icons

// Vendors
import classnames from 'classnames';

// Styles
import useStyle from "./style";
import usePopupStyle from "./style/popup";

// Types
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var Cascader = function Cascader(_ref) {
  var _classNames$popup;
  var className = _ref.className,
    classNames = _ref.classNames,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? 'Please select' : _ref$placeholder,
    _ref$allowClear = _ref.allowClear,
    allowClear = _ref$allowClear === void 0 ? false : _ref$allowClear,
    _ref$suffixIcon = _ref.suffixIcon,
    suffixIcon = _ref$suffixIcon === void 0 ? _jsx(_ArrowDownOutlined, {}) : _ref$suffixIcon,
    removeIcon = _ref.removeIcon,
    _ref$expandIcon = _ref.expandIcon,
    expandIcon = _ref$expandIcon === void 0 ? _jsx(_ArrowRightOutlined, {}) : _ref$expandIcon,
    multiple = _ref.multiple,
    _ref$showCheckedStrat = _ref.showCheckedStrategy,
    showCheckedStrategy = _ref$showCheckedStrat === void 0 ? AntCascader.SHOW_PARENT : _ref$showCheckedStrat,
    size = _ref.size,
    restProps = _objectWithoutProperties(_ref, _excluded);
  /**
   * Trigger styles
   */
  var _useStyle = useStyle(),
    styles = _useStyle.styles;

  /**
   * Popup styles
   */
  var _usePopupStyle = usePopupStyle(),
    popupStyles = _usePopupStyle.styles;

  /**
   * Handle size
   */
  var mergedSize = useConvertSizeMediumAsMiddle(size);
  var mergedRemoveIcon = useMemo(function () {
    if (removeIcon) {
      return removeIcon;
    }
    return _jsx(CloseButton, {
      type: "circle",
      size: size
    });
  }, [removeIcon, size]);

  /**
   * Props for single and multiple selection Cascader
   */
  var commonProps = _objectSpread({
    className: classnames(styles, className),
    classNames: _objectSpread(_objectSpread({}, classNames), {}, {
      popup: _objectSpread(_objectSpread({}, classNames === null || classNames === void 0 ? void 0 : classNames.popup), {}, {
        root: classnames(popupStyles, classNames === null || classNames === void 0 || (_classNames$popup = classNames.popup) === null || _classNames$popup === void 0 ? void 0 : _classNames$popup.root)
      })
    }),
    placeholder: placeholder,
    allowClear: allowClear,
    suffixIcon: suffixIcon,
    expandIcon: expandIcon,
    showCheckedStrategy: showCheckedStrategy,
    size: mergedSize,
    removeIcon: mergedRemoveIcon
  }, restProps);

  /**
   * Multiple Selection Cascader
   */
  if (multiple) {
    var _props = _objectSpread(_objectSpread({}, commonProps), {}, {
      multiple: true
    });
    return _jsx(MultipleCascader, _objectSpread({}, _props));
  }

  /**
   * Single Selection Cascader
   */
  var props = _objectSpread(_objectSpread({}, commonProps), {}, {
    multiple: false
  });
  return _jsx(AntCascader, _objectSpread({}, props));
};
export default Cascader;