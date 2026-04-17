"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _hooks = require("../../hooks");
var _react = require("@emotion/react");
/**
 * @file index.ts
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 * @author rzh(peter.rao@derbysoft.net)
 */

// Hooks

// Vendors

var useStyle = function useStyle() {
  var prefixCls = (0, _hooks.usePrefixCls)();
  var _useComponetsToken = (0, _hooks.useComponetsToken)(),
    tooltipToken = _useComponetsToken.Tooltip;
  return /*#__PURE__*/(0, _react.css)("&.", prefixCls, "-tooltip{.", prefixCls, "-tooltip-inner{min-height:36px;font-size:", tooltipToken['tooltip-font-size-medium'], "px;line-height:", tooltipToken['tooltip-line-height-medium'], ";padding-inline:", tooltipToken['tooltip-padding-h'], "px;padding-block:", tooltipToken['tooltip-padding-v'], "px;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCYyIsImZpbGUiOiJpbmRleC50cyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGUgaW5kZXgudHNcbiAqIEBhdXRob3IgbGlhbmd4aWFvanVuKGxpYW5neGlhb2p1bkBkZXJieXNvZnQubmV0KVxuICogQGF1dGhvciByemgocGV0ZXIucmFvQGRlcmJ5c29mdC5uZXQpXG4gKi9cblxuLy8gSG9va3NcbmltcG9ydCB7IHVzZUNvbXBvbmV0c1Rva2VuLCB1c2VQcmVmaXhDbHMgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8vIFZlbmRvcnNcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgdXNlU3R5bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gdXNlUHJlZml4Q2xzKCk7XG4gICAgY29uc3QgeyBUb29sdGlwOiB0b29sdGlwVG9rZW4gfSA9IHVzZUNvbXBvbmV0c1Rva2VuKCk7XG5cbiAgICByZXR1cm4gY3NzYFxuICAgICAgICAmLiR7cHJlZml4Q2xzfS10b29sdGlwIHtcbiAgICAgICAgICAgIC4ke3ByZWZpeENsc30tdG9vbHRpcC1pbm5lciB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7dG9vbHRpcFRva2VuWyd0b29sdGlwLWZvbnQtc2l6ZS1tZWRpdW0nXX1weDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogJHt0b29sdGlwVG9rZW5bJ3Rvb2x0aXAtbGluZS1oZWlnaHQtbWVkaXVtJ119O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctaW5saW5lOiAke3Rvb2x0aXBUb2tlblsndG9vbHRpcC1wYWRkaW5nLWgnXX1weDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJsb2NrOiAke3Rvb2x0aXBUb2tlblsndG9vbHRpcC1wYWRkaW5nLXYnXX1weDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZTtcbiJdfQ== */"));
};
var _default = exports.default = useStyle;