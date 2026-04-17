"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _react = require("@emotion/react");
var _closable = _interopRequireDefault(require("./closable"));
var _error = _interopRequireDefault(require("./error"));
var _info = _interopRequireDefault(require("./info"));
var _success = _interopRequireDefault(require("./success"));
var _warning = _interopRequireDefault(require("./warning"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Vendors

// Styles

var useStyle = function useStyle() {
  var prefixCls = (0, _hooks.usePrefixCls)();
  var _useComponetsToken = (0, _hooks.useComponetsToken)(),
    ToastToken = _useComponetsToken.Toast;
  var infoStyle = (0, _info.default)(prefixCls);
  var successStyle = (0, _success.default)(prefixCls);
  var warningStyle = (0, _warning.default)(prefixCls);
  var errorStyle = (0, _error.default)(prefixCls);
  var closableStyle = (0, _closable.default)(prefixCls);
  return /*#__PURE__*/(0, _react.css)(".", prefixCls, "-message{.", prefixCls, "-message-notice{", infoStyle, " ", successStyle, " ", warningStyle, " ", errorStyle, " ", closableStyle, ";.", prefixCls, "-message-notice-content{border-radius:", ToastToken['toast-border-radius'], "px;.", prefixCls, "-message-custom-content{display:flex;align-items:center;gap:8px;line-height:", ToastToken['toast-line-height'], ";font-size:", ToastToken['toast-font-size'], "px;}}}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCYyIsImZpbGUiOiJpbmRleC50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgaW5kZXgudHNcbiAqIEBhdXRob3IgbGlhbmd4aWFvanVuKGxpYW5neGlhb2p1bkBkZXJieXNvZnQubmV0KVxuICovXG5cbi8vIEhvb2tzXG5pbXBvcnQgeyB1c2VDb21wb25ldHNUb2tlbiwgdXNlUHJlZml4Q2xzIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vLyBWZW5kb3JzXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbi8vIFN0eWxlc1xuaW1wb3J0IHVzZUNsb3NhYmxlU3R5bGUgZnJvbSAnLi9jbG9zYWJsZSc7XG5pbXBvcnQgdXNlRXJyb3JTdHlsZSBmcm9tICcuL2Vycm9yJztcbmltcG9ydCB1c2VJbmZvU3R5bGUgZnJvbSAnLi9pbmZvJztcbmltcG9ydCB1c2VTdWNjZXNzU3R5bGUgZnJvbSAnLi9zdWNjZXNzJztcbmltcG9ydCB1c2VXYXJuaW5nU3R5bGUgZnJvbSAnLi93YXJuaW5nJztcblxuY29uc3QgdXNlU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gdXNlUHJlZml4Q2xzKCk7XG4gICAgY29uc3QgeyBUb2FzdDogVG9hc3RUb2tlbiB9ID0gdXNlQ29tcG9uZXRzVG9rZW4oKTtcblxuICAgIGNvbnN0IGluZm9TdHlsZSA9IHVzZUluZm9TdHlsZShwcmVmaXhDbHMpO1xuICAgIGNvbnN0IHN1Y2Nlc3NTdHlsZSA9IHVzZVN1Y2Nlc3NTdHlsZShwcmVmaXhDbHMpO1xuICAgIGNvbnN0IHdhcm5pbmdTdHlsZSA9IHVzZVdhcm5pbmdTdHlsZShwcmVmaXhDbHMpO1xuICAgIGNvbnN0IGVycm9yU3R5bGUgPSB1c2VFcnJvclN0eWxlKHByZWZpeENscyk7XG4gICAgY29uc3QgY2xvc2FibGVTdHlsZSA9IHVzZUNsb3NhYmxlU3R5bGUocHJlZml4Q2xzKTtcblxuICAgIHJldHVybiBjc3NgXG4gICAgICAgIC4ke3ByZWZpeENsc30tbWVzc2FnZSB7XG4gICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2Utbm90aWNlIHtcbiAgICAgICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2Utbm90aWNlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAke1RvYXN0VG9rZW5bJ3RvYXN0LWJvcmRlci1yYWRpdXMnXX1weDtcblxuICAgICAgICAgICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2UtY3VzdG9tLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAke1RvYXN0VG9rZW5bJ3RvYXN0LWxpbmUtaGVpZ2h0J119O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke1RvYXN0VG9rZW5bJ3RvYXN0LWZvbnQtc2l6ZSddfXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHtpbmZvU3R5bGV9XG4gICAgICAgICAgICAgICAgJHtzdWNjZXNzU3R5bGV9XG4gICAgICAgICAgICAgICAgJHt3YXJuaW5nU3R5bGV9XG4gICAgICAgICAgICAgICAgJHtlcnJvclN0eWxlfVxuICAgICAgICAgICAgICAgICR7Y2xvc2FibGVTdHlsZX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTtcbiJdfQ== */"));
};
var _default = exports.default = useStyle;