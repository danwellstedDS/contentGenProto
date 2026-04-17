"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useSubComponetsToken2 = _interopRequireDefault(require("../../hooks/useSubComponetsToken"));
var _react = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file closable.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Vendors

var useStyle = function useStyle(prefixCls) {
  var _useSubComponetsToken = (0, _useSubComponetsToken2.default)(),
    closeButtonToken = _useSubComponetsToken.CloseButton;
  return /*#__PURE__*/(0, _react.css)("&.", prefixCls, "-message-notice-closable{.", prefixCls, "-message-notice-content{padding-right:52px;}.", prefixCls, "-message-notice-close{position:relative;left:-36px;top:-3px;pointer-events:all;.", prefixCls, "-message-close-x{font-size:16px;color:", closeButtonToken['close-btn-color'], ";}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNjIiwiZmlsZSI6ImNsb3NhYmxlLnRzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZSBjbG9zYWJsZS50c1xuICogQGF1dGhvciBsaWFuZ3hpYW9qdW4obGlhbmd4aWFvanVuQGRlcmJ5c29mdC5uZXQpXG4gKi9cblxuLy8gSG9va3NcbmltcG9ydCB1c2VTdWJDb21wb25ldHNUb2tlbiBmcm9tICcuLi8uLi9ob29rcy91c2VTdWJDb21wb25ldHNUb2tlbic7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU3R5bGUgPSAocHJlZml4Q2xzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IENsb3NlQnV0dG9uOiBjbG9zZUJ1dHRvblRva2VuIH0gPSB1c2VTdWJDb21wb25ldHNUb2tlbigpO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJi4ke3ByZWZpeENsc30tbWVzc2FnZS1ub3RpY2UtY2xvc2FibGUge1xuICAgICAgICAgICAgLiR7cHJlZml4Q2xzfS1tZXNzYWdlLW5vdGljZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2Utbm90aWNlLWNsb3NlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTM2cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG5cbiAgICAgICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2UtY2xvc2UteCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y2xvc2VCdXR0b25Ub2tlblsnY2xvc2UtYnRuLWNvbG9yJ119O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTtcbiJdfQ== */"));
};
var _default = exports.default = useStyle;