"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _WarningCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/WarningCircleFilled"));
var _SuccessCircleFilled2 = _interopRequireDefault(require("@derbysoft/neat-design-icons/lib/icons-react/SuccessCircleFilled"));
var _react = require("react");
var _useConvertSize = require("../hooks/useConvertSize");
var _FormContext = _interopRequireDefault(require("./FormContext"));
var _antd = require("antd");
var _Spinner = _interopRequireDefault(require("../Spinner"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("@emotion/react/jsx-runtime");
var _excluded = ["className", "layout", "form", "size", "feedbackIcons"];
/**
 * @file Form.tsx
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */
// Hooks
// Contexts
// Components
// Icons
// Vendors
// Styles
// Types
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var AntFormComponent = _antd.Form;
var Form = function Form(props, forwardedRef) {
  var _omit = (0, _omit2.default)(props, ['labelAlign', 'labelCol', 'labelWrap']),
    className = _omit.className,
    _omit$layout = _omit.layout,
    layout = _omit$layout === void 0 ? 'vertical' : _omit$layout,
    form = _omit.form,
    size = _omit.size,
    feedbackIcons = _omit.feedbackIcons,
    restProps = _objectWithoutProperties(_omit, _excluded);
  var _useStyle = (0, _style.default)(),
    styles = _useStyle.styles,
    prefixCls = _useStyle.prefixCls;
  var _AntForm$useForm = _antd.Form.useForm(form),
    _AntForm$useForm2 = _slicedToArray(_AntForm$useForm, 1),
    wrapForm = _AntForm$useForm2[0];
  (0, _react.useImperativeHandle)(forwardedRef, function () {
    return wrapForm;
  });

  /**
   * Record all form items' label to determine whether hide the label placement
   */
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    formItemsLabel = _useState2[0],
    setFormItemsLabel = _useState2[1];

  /**
   * Handle form size
   */
  var mergedSize = (0, _useConvertSize.useConvertSizeMediumAsMiddle)(size);

  /**
   * Handle form layout
   */
  var mergedLayout = (0, _react.useMemo)(function () {
    switch (layout) {
      case 'horizontal':
        return 'inline';
      default:
        return 'vertical';
    }
  }, [layout]);

  /**
   * Handle form feedback icons
   */
  var mergedFeedbackIcons = (0, _react.useMemo)(function () {
    if (feedbackIcons) {
      return feedbackIcons;
    }
    return function () {
      return {
        success: (0, _jsxRuntime.jsx)(_SuccessCircleFilled2.default, {}),
        warning: (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {}),
        error: (0, _jsxRuntime.jsx)(_WarningCircleFilled2.default, {}),
        validating: (0, _jsxRuntime.jsx)(_Spinner.default, {
          size: "small"
        })
      };
    };
  }, [feedbackIcons]);

  /**
   * Handle form item label change from each form item and record them.
   */
  var handleFormItemLabelChange = (0, _react.useCallback)(function (_ref) {
    var name = _ref.name,
      label = _ref.label;
    if (!label) {
      return;
    }
    setFormItemsLabel(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name || Object.keys(prev).length, label));
    });
  }, []);

  /**
   * Determine whether all form items have no label.
   */
  var hasNotAnyLabel = (0, _react.useMemo)(function () {
    return Object.values(formItemsLabel).every(function (label) {
      return !label;
    });
  }, [formItemsLabel]);
  return (0, _jsxRuntime.jsx)(_FormContext.default.Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      layout: layout,
      validateTrigger: restProps === null || restProps === void 0 ? void 0 : restProps.validateTrigger,
      onFormItemLabelChange: handleFormItemLabelChange
    }),
    children: (0, _jsxRuntime.jsx)(AntFormComponent, _objectSpread(_objectSpread({}, restProps), {}, {
      className: (0, _classnames2.default)("".concat(prefixCls, "-form-layout-").concat(layout), _defineProperty({}, "".concat(prefixCls, "-form-no-item-label"), hasNotAnyLabel), styles, className),
      layout: mergedLayout,
      form: wrapForm,
      size: mergedSize,
      feedbackIcons: mergedFeedbackIcons
    }))
  });
};
var ForwardRefForm = /*#__PURE__*/(0, _react.forwardRef)(Form);
var _default = exports.default = ForwardRefForm;