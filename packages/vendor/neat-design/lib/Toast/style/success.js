"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _useComponetsToken2 = _interopRequireDefault(require("../../hooks/useComponetsToken"));
var _react = require("@emotion/react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @file success.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Hooks

// Vendors

var useStyle = function useStyle(prefixCls) {
  var _useComponetsToken = (0, _useComponetsToken2.default)(),
    ToastToken = _useComponetsToken.Toast;
  return /*#__PURE__*/(0, _react.css)("&.", prefixCls, "-message-notice-success{.", prefixCls, "-message-notice-content{background:", ToastToken['toast-color-bg-success'], ";}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2MiLCJmaWxlIjoic3VjY2Vzcy50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgc3VjY2Vzcy50c1xuICogQGF1dGhvciBsaWFuZ3hpYW9qdW4obGlhbmd4aWFvanVuQGRlcmJ5c29mdC5uZXQpXG4gKi9cblxuLy8gSG9va3NcbmltcG9ydCB1c2VDb21wb25ldHNUb2tlbiBmcm9tICcuLi8uLi9ob29rcy91c2VDb21wb25ldHNUb2tlbic7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU3R5bGUgPSAocHJlZml4Q2xzOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB7IFRvYXN0OiBUb2FzdFRva2VuIH0gPSB1c2VDb21wb25ldHNUb2tlbigpO1xuXG4gICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJi4ke3ByZWZpeENsc30tbWVzc2FnZS1ub3RpY2Utc3VjY2VzcyB7XG4gICAgICAgICAgICAuJHtwcmVmaXhDbHN9LW1lc3NhZ2Utbm90aWNlLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7VG9hc3RUb2tlblsndG9hc3QtY29sb3ItYmctc3VjY2VzcyddfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTtcbiJdfQ== */"));
};
var _default = exports.default = useStyle;